// FBLA Quiz App Controller Logic

document.addEventListener("DOMContentLoaded", () => {
  // --- THEME TOGGLER ---
  const themeToggle = document.getElementById("theme-toggle");
  const savedTheme = localStorage.getItem("fbla_quiz_theme") || "dark";
  
  if (savedTheme === "light") {
    document.body.classList.add("light-theme");
  }
  
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("light-theme");
      const currentTheme = document.body.classList.contains("light-theme") ? "light" : "dark";
      localStorage.setItem("fbla_quiz_theme", currentTheme);
    });
  }

  // --- APP STATE ---
  let state = {
    // Nav & Screens
    currentScreen: "dashboard",
    
    // Stats & Gamification (loaded from localStorage)
    xp: 0,
    level: 1,
    examsTaken: 0,
    bestExamScore: 0,
    practiceQuestionsAnswered: 0,
    
    // Current Quiz Session
    activeQuizMode: "", // "exam", "practice", "generator"
    generatorType: "",  // "subnet", "port", "osi", "appletalk", "random"
    selectedCategory: "", // for practice mode
    
    questions: [],      // Array of active question objects
    currentIndex: 0,
    userAnswers: [],    // Array of selected indices or values
    flagged: {},        // Map of indices to boolean flag
    graded: [],         // Array of booleans (true if graded/submitted - for practice/generator modes)
    
    // Timer
    timerId: null,
    secondsRemaining: 3000, // 50 minutes default
    secondsElapsed: 0
  };

  // --- ELEMENT REFERENCES ---
  const screens = {
    dashboard: document.getElementById("screen-dashboard"),
    quiz: document.getElementById("screen-quiz"),
    results: document.getElementById("screen-results"),
    study: document.getElementById("screen-study")
  };

  const navItems = document.querySelectorAll(".nav-item");
  const modalGenerator = document.getElementById("modal-generator");
  const modalPractice = document.getElementById("modal-practice");

  // Load stats from local storage
  function loadStats() {
    state.xp = parseInt(localStorage.getItem("fbla_quiz_xp") || "0", 10);
    state.examsTaken = parseInt(localStorage.getItem("fbla_quiz_exams") || "0", 10);
    state.bestExamScore = parseInt(localStorage.getItem("fbla_quiz_best_score") || "0", 10);
    state.practiceQuestionsAnswered = parseInt(localStorage.getItem("fbla_quiz_practice_ans") || "0", 10);
    calculateLevel();
    updateDashboardStats();
  }

  function saveStats() {
    localStorage.setItem("fbla_quiz_xp", state.xp);
    localStorage.setItem("fbla_quiz_exams", state.examsTaken);
    localStorage.setItem("fbla_quiz_best_score", state.bestExamScore);
    localStorage.setItem("fbla_quiz_practice_ans", state.practiceQuestionsAnswered);
  }

  function calculateLevel() {
    // XP level curve: Level = floor(sqrt(XP / 100)) + 1
    state.level = Math.floor(Math.sqrt(state.xp / 100)) + 1;
  }

  function addXP(amount) {
    const prevLevel = state.level;
    state.xp += amount;
    calculateLevel();
    if (state.level > prevLevel) {
      showNotification(`Level Up! You are now Level ${state.level}!`, "success");
    }
    saveStats();
    updateDashboardStats();
  }

  // --- DASHBOARD UI UPDATES ---
  function updateDashboardStats() {
    document.getElementById("stat-level").textContent = state.level;
    document.getElementById("stat-xp").textContent = `${state.xp} XP`;
    document.getElementById("stat-exams").textContent = state.examsTaken;
    document.getElementById("stat-best").textContent = `${state.bestExamScore}%`;
    document.getElementById("stat-practice").textContent = state.practiceQuestionsAnswered;
    
    // Sidebar indicators
    const sidebarBadge = document.querySelector(".sidebar-footer .badge");
    if (sidebarBadge) {
      sidebarBadge.textContent = `Lvl ${state.level}`;
    }
    const sidebarXP = document.querySelector(".sidebar-footer p");
    if (sidebarXP) {
      sidebarXP.innerHTML = `Study Account<br><strong>${state.xp} XP</strong>`;
    }
  }

  // Notification Banner Helper
  function showNotification(text, type = "success") {
    const notifyDiv = document.createElement("div");
    notifyDiv.style.position = "fixed";
    notifyDiv.style.bottom = "20px";
    notifyDiv.style.right = "20px";
    notifyDiv.style.padding = "1rem 2rem";
    notifyDiv.style.borderRadius = "12px";
    notifyDiv.style.background = type === "success" ? "var(--success)" : "var(--error)";
    notifyDiv.style.color = "#040814";
    notifyDiv.style.fontWeight = "700";
    notifyDiv.style.zIndex = "9999";
    notifyDiv.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.5)";
    notifyDiv.style.transform = "translateY(100px)";
    notifyDiv.style.opacity = "0";
    notifyDiv.style.transition = "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)";
    notifyDiv.innerText = text;

    document.body.appendChild(notifyDiv);
    setTimeout(() => {
      notifyDiv.style.transform = "translateY(0)";
      notifyDiv.style.opacity = "1";
    }, 10);

    setTimeout(() => {
      notifyDiv.style.transform = "translateY(100px)";
      notifyDiv.style.opacity = "0";
      setTimeout(() => notifyDiv.remove(), 300);
    }, 4000);
  }

  // --- ROUTING ENGINE ---
  function navigateTo(screenId) {
    state.currentScreen = screenId;
    
    // Deactivate all screens
    Object.keys(screens).forEach(key => {
      screens[key].classList.remove("active");
    });
    
    // Activate current
    screens[screenId].classList.add("active");
    
    // Update navigation sidebar styling
    navItems.forEach(item => {
      if (item.getAttribute("data-screen") === screenId) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });

    if (screenId === "dashboard") {
      updateDashboardStats();
    }
  }

  navItems.forEach(item => {
    item.addEventListener("click", () => {
      const screenId = item.getAttribute("data-screen");
      if (screenId) {
        // If leaving an active exam, prompt first
        if (state.currentScreen === "quiz" && state.activeQuizMode === "exam") {
          if (confirm("Are you sure you want to exit the exam? Your progress will be lost.")) {
            clearInterval(state.timerId);
            navigateTo(screenId);
          }
        } else {
          navigateTo(screenId);
        }
      }
    });
  });

  // --- MOCK EXAM BUILDER ---
  function shuffleArray(arr) {
    const array = [...arr];
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function initMockExam() {
    const allQuestions = window.FBLA_QUESTIONS;
    
    // Filter questions by categories
    const categories = {
      basics: allQuestions.filter(q => q.category === "Networking Basics" || q.category === "AppleTalk"),
      topologies: allQuestions.filter(q => q.category === "Network Topologies and Architecture"),
      security: allQuestions.filter(q => q.category === "Network Security"),
      protocols: allQuestions.filter(q => q.category === "Network Protocols and Standards"),
      hardware: allQuestions.filter(q => q.category === "Network Hardware and Connectivity"),
      guidelines: allQuestions.filter(q => q.category === "Event Guidelines")
    };
    
    // Select specific counts to total exactly 100 questions following FBLA guidelines:
    // Basics + AppleTalk: 20
    // Topologies: 20
    // Security: 25
    // Protocols: 20
    // Hardware: 15
    // Let's add 5 Guidelines into the mix to represent complete event awareness
    let examSet = [];
    
    examSet.push(...shuffleArray(categories.basics).slice(0, 20));
    examSet.push(...shuffleArray(categories.topologies).slice(0, 20));
    examSet.push(...shuffleArray(categories.security).slice(0, 25));
    examSet.push(...shuffleArray(categories.protocols).slice(0, 20));
    examSet.push(...shuffleArray(categories.hardware).slice(0, 11));
    examSet.push(...shuffleArray(categories.guidelines).slice(0, 4)); // guidelines questions
    
    // If not enough questions, pad with rest
    if (examSet.length < 100) {
      const selectedIds = new Set(examSet.map(q => q.id));
      const remaining = allQuestions.filter(q => !selectedIds.has(q.id));
      examSet.push(...shuffleArray(remaining).slice(0, 100 - examSet.length));
    }
    
    state.questions = shuffleArray(examSet).slice(0, 100);
    state.activeQuizMode = "exam";
    state.currentIndex = 0;
    state.userAnswers = new Array(100).fill(-1);
    state.flagged = {};
    state.graded = new Array(100).fill(false);
    
    // Setup timer
    state.secondsRemaining = 3000; // 50 minutes
    state.secondsElapsed = 0;
    
    startTimer();
    renderQuestion();
    renderQuizSidebar();
    navigateTo("quiz");
  }

  function startTimer() {
    if (state.timerId) clearInterval(state.timerId);
    
    const timerDisplay = document.getElementById("timer-display");
    timerDisplay.classList.remove("urgent");
    
    state.timerId = setInterval(() => {
      state.secondsRemaining--;
      state.secondsElapsed++;
      
      if (state.secondsRemaining <= 0) {
        clearInterval(state.timerId);
        showNotification("Time has expired! Submitting your exam.", "error");
        submitExam();
        return;
      }
      
      // Update display
      const mins = Math.floor(state.secondsRemaining / 60);
      const secs = state.secondsRemaining % 60;
      timerDisplay.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
      
      // Turn red if less than 5 minutes
      if (state.secondsRemaining < 300) {
        timerDisplay.classList.add("urgent");
      }
    }, 1000);
  }

  // --- PRACTICE MODE BUILDER ---
  function initPracticeMode(category) {
    const allQuestions = window.FBLA_QUESTIONS;
    let practiceSet = [];
    
    if (category === "all") {
      practiceSet = shuffleArray(allQuestions);
    } else {
      practiceSet = shuffleArray(allQuestions.filter(q => q.category === category));
    }
    
    if (practiceSet.length === 0) {
      showNotification("No questions available for this category.", "error");
      return;
    }
    
    // Limit practice to 20 questions per session for focused learning
    state.questions = practiceSet.slice(0, 20);
    state.activeQuizMode = "practice";
    state.selectedCategory = category;
    state.currentIndex = 0;
    state.userAnswers = new Array(state.questions.length).fill(-1);
    state.flagged = {};
    state.graded = new Array(state.questions.length).fill(false);
    
    // No timer for practice, hide it
    document.getElementById("timer-display").textContent = "PRACTICE";
    
    renderQuestion();
    renderQuizSidebar();
    navigateTo("quiz");
  }

  // --- PROCEDURAL GENERATOR BUILDER ---
  function initGeneratorMode(type) {
    state.activeQuizMode = "generator";
    state.generatorType = type;
    
    // We will initialize 20 procedurally generated questions
    state.questions = [];
    for (let i = 0; i < 20; i++) {
      state.questions.push(window.FBLA_PROCEDURAL.getQuestion(type));
    }
    
    state.currentIndex = 0;
    state.userAnswers = new Array(20).fill(-1);
    state.flagged = {};
    state.graded = new Array(20).fill(false);
    
    document.getElementById("timer-display").textContent = "INFINITE";
    
    renderQuestion();
    renderQuizSidebar();
    navigateTo("quiz");
  }

  // --- QUIZ VIEW RENDERERS ---
  function renderQuestion() {
    const q = state.questions[state.currentIndex];
    if (!q) return;

    // Header Meta
    const metaEl = document.getElementById("question-meta");
    metaEl.textContent = `${q.category} • Question ${state.currentIndex + 1} of ${state.questions.length}`;

    // Flag button styling
    const flagBtn = document.getElementById("btn-flag");
    if (state.flagged[state.currentIndex]) {
      flagBtn.classList.add("flagged");
      flagBtn.innerHTML = `<svg style="fill: currentColor;" viewBox="0 0 24 24"><path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6h-5.6z"/></svg> Flagged`;
    } else {
      flagBtn.classList.remove("flagged");
      flagBtn.innerHTML = `<svg viewBox="0 0 24 24"><path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6h-5.6z"/></svg> Flag`;
    }

    // Question Text
    const textEl = document.getElementById("question-text");
    textEl.innerHTML = q.question;

    // Choices rendering
    const choicesContainer = document.getElementById("choices-container");
    choicesContainer.innerHTML = "";

    const alphabet = ["A", "B", "C", "D"];
    q.choices.forEach((choice, idx) => {
      const choiceBtn = document.createElement("div");
      choiceBtn.className = "choice-option";
      if (state.userAnswers[state.currentIndex] === idx) {
        choiceBtn.classList.add("selected");
      }
      
      // If graded, show correct/incorrect answers instantly (Practice & Generator modes)
      if (state.graded[state.currentIndex]) {
        if (idx === q.correctIndex) {
          choiceBtn.classList.add("correct");
        } else if (state.userAnswers[state.currentIndex] === idx) {
          choiceBtn.classList.add("incorrect");
        }
      }

      choiceBtn.innerHTML = `
        <div class="choice-letter">${alphabet[idx]}</div>
        <div class="choice-text">${choice}</div>
      `;

      choiceBtn.addEventListener("click", () => selectChoice(idx));
      choicesContainer.appendChild(choiceBtn);
    });

    // Explanation panel rendering
    const expCard = document.getElementById("explanation-card");
    if (state.graded[state.currentIndex]) {
      expCard.querySelector(".explanation-text").innerHTML = q.explanation;
      expCard.classList.add("active");
    } else {
      expCard.classList.remove("active");
    }

    // Update navigation button states
    const prevBtn = document.getElementById("btn-prev");
    const nextBtn = document.getElementById("btn-next");

    prevBtn.disabled = state.currentIndex === 0;
    prevBtn.style.opacity = state.currentIndex === 0 ? "0.5" : "1";

    if (state.currentIndex === state.questions.length - 1) {
      nextBtn.innerHTML = `Finish <svg viewBox="0 0 24 24" style="width:20px;height:20px;stroke:currentColor;fill:none;stroke-width:2;"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`;
    } else {
      nextBtn.innerHTML = `Next <svg viewBox="0 0 24 24" style="width:20px;height:20px;stroke:currentColor;fill:none;stroke-width:2;"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`;
    }
  }

  function renderQuizSidebar() {
    // Progress fill
    const answeredCount = state.userAnswers.filter(a => a !== -1).length;
    const perc = Math.round((answeredCount / state.questions.length) * 100);
    document.getElementById("progress-count").textContent = `${answeredCount}/${state.questions.length} Completed`;
    document.getElementById("progress-fill").style.width = `${perc}%`;

    // Grid of nodes
    const gridContainer = document.getElementById("questions-grid");
    gridContainer.innerHTML = "";

    state.questions.forEach((_, idx) => {
      const node = document.createElement("div");
      node.className = "grid-node";
      node.textContent = idx + 1;
      
      if (idx === state.currentIndex) node.classList.add("active");
      else if (state.flagged[idx]) node.classList.add("flagged");
      else if (state.userAnswers[idx] !== -1) node.classList.add("answered");

      node.addEventListener("click", () => {
        state.currentIndex = idx;
        renderQuestion();
        renderQuizSidebar();
      });

      gridContainer.appendChild(node);
    });

    // Submit button text context
    const submitBtn = document.getElementById("btn-submit-exam");
    if (state.activeQuizMode === "exam") {
      submitBtn.style.display = "block";
      submitBtn.textContent = "Submit FBLA Exam";
    } else {
      submitBtn.style.display = "block";
      submitBtn.textContent = "Finish Practice Session";
    }
  }

  function selectChoice(choiceIndex) {
    // If already graded in practice mode, block changes
    if (state.graded[state.currentIndex]) return;

    state.userAnswers[state.currentIndex] = choiceIndex;

    // In Practice or Generator mode, grade the question immediately upon click
    if (state.activeQuizMode !== "exam") {
      state.graded[state.currentIndex] = true;
      state.practiceQuestionsAnswered++;
      
      const q = state.questions[state.currentIndex];
      if (choiceIndex === q.correctIndex) {
        addXP(10); // Reward 10 XP for correct practice answers
      } else {
        addXP(2);  // Reward 2 XP for attempting questions
      }
    }

    renderQuestion();
    renderQuizSidebar();
  }

  // Navigation commands
  document.getElementById("btn-prev").addEventListener("click", () => {
    if (state.currentIndex > 0) {
      state.currentIndex--;
      renderQuestion();
      renderQuizSidebar();
    }
  });

  document.getElementById("btn-next").addEventListener("click", () => {
    if (state.currentIndex < state.questions.length - 1) {
      state.currentIndex++;
      renderQuestion();
      renderQuizSidebar();
    } else {
      // If last question, finish the quiz
      if (state.activeQuizMode === "exam") {
        if (confirm("Are you sure you want to submit your exam for grading?")) {
          submitExam();
        }
      } else {
        submitExam();
      }
    }
  });

  document.getElementById("btn-flag").addEventListener("click", () => {
    state.flagged[state.currentIndex] = !state.flagged[state.currentIndex];
    renderQuestion();
    renderQuizSidebar();
  });

  document.getElementById("btn-submit-exam").addEventListener("click", () => {
    if (state.activeQuizMode === "exam") {
      if (confirm("Are you sure you want to submit your exam for grading?")) {
        submitExam();
      }
    } else {
      submitExam();
    }
  });

  // --- GRADED EXAM RESOLVER ---
  function submitExam() {
    clearInterval(state.timerId);
    
    let correctCount = 0;
    state.questions.forEach((q, idx) => {
      if (state.userAnswers[idx] === q.correctIndex) {
        correctCount++;
      }
    });

    const scorePercentage = Math.round((correctCount / state.questions.length) * 100);

    // Save exam stats if in Exam Mode
    if (state.activeQuizMode === "exam") {
      state.examsTaken++;
      if (scorePercentage > state.bestExamScore) {
        state.bestExamScore = scorePercentage;
      }
      
      // XP Calculations: 15 XP per correct answer on Mock Exam + 100 XP completion bonus!
      const xpEarned = (correctCount * 15) + 100;
      addXP(xpEarned);
      showNotification(`Exam Completed! Earned ${xpEarned} XP!`, "success");
    } else {
      // Practice mode XP already added question-by-question, save stats
      saveStats();
    }

    renderResults(correctCount, scorePercentage);
    navigateTo("results");
  }

  function renderResults(correctCount, scorePercentage) {
    // Circle indicator dash offset
    const radialFill = document.getElementById("radial-fill");
    const scoreText = document.getElementById("radial-score");
    scoreText.textContent = `${scorePercentage}%`;

    // Formula: Dash offset = 502 * (1 - score/100)
    const offset = 502 * (1 - scorePercentage / 100);
    radialFill.style.strokeDashoffset = offset;

    // Set message header
    const titleEl = document.getElementById("results-title");
    const descEl = document.getElementById("results-desc");
    
    if (scorePercentage >= 95) {
      titleEl.textContent = "National Champion Standard!";
      descEl.textContent = `Incredible performance. With a score of ${scorePercentage}%, you are well on track to place 1st place Nationally!`;
    } else if (scorePercentage >= 85) {
      titleEl.textContent = "Excellent Placement Score!";
      descEl.textContent = `A strong score of ${scorePercentage}%. Keep practicing and study your weaker areas to secure first place.`;
    } else if (scorePercentage >= 70) {
      titleEl.textContent = "Passing Standard Achieved";
      descEl.textContent = `A solid score of ${scorePercentage}%, but to dominate at nationals, you should aim for 90%+.`;
    } else {
      titleEl.textContent = "Study Required";
      descEl.textContent = `You scored ${scorePercentage}%. Go through the study sheet notes and try again!`;
    }

    // Set stats cards
    document.getElementById("res-stat-correct").textContent = `${correctCount}/${state.questions.length}`;
    
    const timeTakenSecs = state.activeQuizMode === "exam" ? state.secondsElapsed : 0;
    if (timeTakenSecs > 0) {
      const mins = Math.floor(timeTakenSecs / 60);
      const secs = timeTakenSecs % 60;
      document.getElementById("res-stat-time").textContent = `${mins}m ${secs}s`;
    } else {
      document.getElementById("res-stat-time").textContent = "N/A";
    }

    document.getElementById("res-stat-xp").textContent = `+${state.activeQuizMode === "exam" ? (correctCount * 15) + 100 : state.questions.length * 10} XP`;

    // Render Category Breakdown
    const breakdownContainer = document.getElementById("results-breakdown");
    breakdownContainer.innerHTML = `
      <div class="category-row header">
        <div>Category Area</div>
        <div>Ratio Correct</div>
        <div style="text-align:right">Percentage</div>
      </div>
    `;

    // Group performance by category
    const catPerf = {};
    state.questions.forEach((q, idx) => {
      let cat = q.category;
      if (cat === "AppleTalk") cat = "Networking Basics"; // Group AppleTalk in Basics for breakdown
      if (cat === "Subnetting (Dynamic)") cat = "Network Protocols and Standards"; // Group subnetting in Protocols
      
      if (!catPerf[cat]) {
        catPerf[cat] = { correct: 0, total: 0 };
      }
      
      catPerf[cat].total++;
      if (state.userAnswers[idx] === q.correctIndex) {
        catPerf[cat].correct++;
      }
    });

    Object.keys(catPerf).forEach(catName => {
      const perf = catPerf[catName];
      const percent = Math.round((perf.correct / perf.total) * 100);
      
      let ratingClass = "low";
      if (percent >= 85) ratingClass = "high";
      else if (percent >= 70) ratingClass = "mid";

      const row = document.createElement("div");
      row.className = "category-row";
      row.innerHTML = `
        <div class="category-name">${catName}</div>
        <div class="category-ratio">${perf.correct}/${perf.total}</div>
        <div class="category-perc ${ratingClass}">${percent}%</div>
      `;
      breakdownContainer.appendChild(row);
    });

    // Render Detailed Question Review list
    const reviewList = document.getElementById("results-review-list");
    reviewList.innerHTML = "";
    
    state.questions.forEach((q, idx) => {
      const isCorrect = state.userAnswers[idx] === q.correctIndex;
      const reviewItem = document.createElement("div");
      reviewItem.className = "question-card";
      reviewItem.style.marginBottom = "1.5rem";
      reviewItem.style.borderLeft = `5px solid ${isCorrect ? "var(--success)" : "var(--error)"}`;
      
      const userAnsText = state.userAnswers[idx] !== -1 ? q.choices[state.userAnswers[idx]] : "No answer selected";
      const correctAnsText = q.choices[q.correctIndex];

      reviewItem.innerHTML = `
        <div class="question-card-header" style="margin-bottom: 0.75rem;">
          <div class="question-meta" style="color: ${isCorrect ? "var(--success)" : "var(--error)"}">
            Question ${idx + 1} • ${isCorrect ? "Correct" : "Incorrect"} (${q.category})
          </div>
        </div>
        <div class="question-text" style="font-size:1.1rem; margin-bottom:1rem;">${q.question}</div>
        <div style="font-size:0.95rem; margin-bottom:0.5rem;">
          Your Answer: <strong style="color: ${isCorrect ? "var(--success)" : "var(--error)"}">${userAnsText}</strong>
        </div>
        ${!isCorrect ? `<div style="font-size:0.95rem; margin-bottom:1rem;">Correct Answer: <strong style="color: var(--success)">${correctAnsText}</strong></div>` : ""}
        <div class="explanation-card active" style="margin-top:0.75rem; background:rgba(255,255,255,0.01)">
          <div class="explanation-title">Explanation</div>
          <div class="explanation-text" style="font-size:0.9rem; color:var(--text-secondary);">${q.explanation}</div>
        </div>
      `;
      reviewList.appendChild(reviewItem);
    });
  }

  document.getElementById("btn-review-questions").addEventListener("click", () => {
    const reviewSection = document.getElementById("results-review-section");
    if (reviewSection.style.display === "block") {
      reviewSection.style.display = "none";
      document.getElementById("btn-review-questions").textContent = "Review All Questions";
    } else {
      reviewSection.style.display = "block";
      document.getElementById("btn-review-questions").textContent = "Hide Question Review";
      reviewSection.scrollIntoView({ behavior: "smooth" });
    }
  });

  document.getElementById("btn-results-dash").addEventListener("click", () => {
    navigateTo("dashboard");
  });

  // --- BUTTON CLICKS ON DASHBOARD ---
  document.getElementById("btn-start-exam").addEventListener("click", () => {
    initMockExam();
  });

  document.getElementById("btn-open-practice").addEventListener("click", () => {
    modalPractice.classList.add("active");
  });

  document.getElementById("btn-open-generator").addEventListener("click", () => {
    modalGenerator.classList.add("active");
  });

  // Close modals
  document.querySelectorAll(".modal-close-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      modalGenerator.classList.remove("active");
      modalPractice.classList.remove("active");
    });
  });

  // Close modal when clicking background
  window.addEventListener("click", (e) => {
    if (e.target === modalGenerator) modalGenerator.classList.remove("active");
    if (e.target === modalPractice) modalPractice.classList.remove("active");
  });

  // Category selection inside practice modal
  document.querySelectorAll(".practice-option-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const cat = btn.getAttribute("data-category");
      modalPractice.classList.remove("active");
      initPracticeMode(cat);
    });
  });

  // Generator selection inside generator modal
  document.querySelectorAll(".gen-option-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const type = btn.getAttribute("data-type");
      modalGenerator.classList.remove("active");
      initGeneratorMode(type);
    });
  });

  // --- STUDY SHEET SHEET NAVIGATION ---
  const studyNavButtons = document.querySelectorAll(".study-nav-btn");
  const studySections = document.querySelectorAll(".study-content-section");

  studyNavButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const sectionId = btn.getAttribute("data-section");
      
      // Deactivate all nav buttons
      studyNavButtons.forEach(b => b.classList.remove("active"));
      // Activate clicked
      btn.classList.add("active");

      // Deactivate all sections
      studySections.forEach(sec => sec.classList.remove("active"));
      // Activate target
      document.getElementById(`study-sec-${sectionId}`).classList.add("active");
      
      // If clicking flashcards section, reset/initialize
      if (sectionId === "flashcards") {
        initFlashcards();
      }
    });
  });

  // --- FLASHCARDS LOGIC ---
  let flashcardState = {
    cards: [],
    currentIndex: 0
  };

  const fcCard = document.getElementById("fc-card");
  const fcCardCat = document.getElementById("fc-card-cat");
  const fcCardTerm = document.getElementById("fc-card-term");
  const fcCardDef = document.getElementById("fc-card-def");
  const fcProgressText = document.getElementById("fc-progress-text");
  const fcProgressBar = document.getElementById("fc-progress-bar");
  
  const fcSelect = document.getElementById("fc-category-select");
  const fcBtnPrev = document.getElementById("fc-btn-prev");
  const fcBtnNext = document.getElementById("fc-btn-next");
  const fcBtnShuffle = document.getElementById("fc-btn-shuffle");

  function initFlashcards() {
    const rawCards = window.FBLA_FLASHCARDS || [];
    const cat = fcSelect ? fcSelect.value : "all";
    
    if (cat === "all") {
      flashcardState.cards = [...rawCards];
    } else if (cat === "Hardware & AppleTalk") {
      flashcardState.cards = rawCards.filter(c => c.cat === "Hardware & AppleTalk" || c.cat === "AppleTalk");
    } else {
      flashcardState.cards = rawCards.filter(c => c.cat === cat);
    }
    
    flashcardState.currentIndex = 0;
    shuffleFlashcards();
    renderFlashcard();
  }

  function shuffleFlashcards() {
    for (let i = flashcardState.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [flashcardState.cards[i], flashcardState.cards[j]] = [flashcardState.cards[j], flashcardState.cards[i]];
    }
  }

  function renderFlashcard() {
    if (!flashcardState.cards.length) return;
    
    if (fcCard) {
      fcCard.classList.remove("flipped");
    }
    
    const card = flashcardState.cards[flashcardState.currentIndex];
    
    // Smooth transition: swap content while flip is face down
    setTimeout(() => {
      if (fcCardCat) fcCardCat.textContent = card.cat;
      if (fcCardTerm) fcCardTerm.textContent = card.term;
      if (fcCardDef) fcCardDef.textContent = card.def;
    }, 150);

    // Update progress numbers and progress bar
    if (fcProgressText) {
      fcProgressText.textContent = `Card ${flashcardState.currentIndex + 1} of ${flashcardState.cards.length}`;
    }
    if (fcProgressBar) {
      const percentage = ((flashcardState.currentIndex + 1) / flashcardState.cards.length) * 100;
      fcProgressBar.style.width = `${percentage}%`;
    }
  }

  if (fcCard) {
    fcCard.addEventListener("click", () => {
      fcCard.classList.toggle("flipped");
    });
  }

  if (fcBtnPrev) {
    fcBtnPrev.addEventListener("click", (e) => {
      e.stopPropagation();
      if (flashcardState.cards.length === 0) return;
      flashcardState.currentIndex = (flashcardState.currentIndex - 1 + flashcardState.cards.length) % flashcardState.cards.length;
      renderFlashcard();
    });
  }

  if (fcBtnNext) {
    fcBtnNext.addEventListener("click", (e) => {
      e.stopPropagation();
      if (flashcardState.cards.length === 0) return;
      flashcardState.currentIndex = (flashcardState.currentIndex + 1) % flashcardState.cards.length;
      renderFlashcard();
    });
  }

  if (fcBtnShuffle) {
    fcBtnShuffle.addEventListener("click", (e) => {
      e.stopPropagation();
      if (flashcardState.cards.length === 0) return;
      shuffleFlashcards();
      flashcardState.currentIndex = 0;
      renderFlashcard();
      showNotification("Flashcards Shuffled!", "success");
    });
  }

  if (fcSelect) {
    fcSelect.addEventListener("change", () => {
      initFlashcards();
    });
  }

  // Initialize page on load
  loadStats();
  initFlashcards();
});
