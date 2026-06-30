// FBLA Networking Infrastructures Procedural Question Generator
// Exposes window.FBLA_PROCEDURAL containing functions for dynamic question generation.

window.FBLA_PROCEDURAL = (function() {
  
  // Port registry from study guide
  const PORTS = [
    { num: 20, name: "FTP Data", proto: "TCP", desc: "File Transfer Protocol (Data Transfer)" },
    { num: 21, name: "FTP Control", proto: "TCP", desc: "File Transfer Protocol (Control Connection)" },
    { num: 22, name: "SSH / SFTP", proto: "TCP", desc: "Secure Shell / SSH File Transfer Protocol (Secure Login/File Transfer)" },
    { num: 23, name: "Telnet", proto: "TCP", desc: "Insecure Remote Terminal Access" },
    { num: 25, name: "SMTP (Plaintext)", proto: "TCP", desc: "Simple Mail Transfer Protocol (Sending Emails in Plaintext)" },
    { num: 53, name: "DNS", proto: "UDP/TCP", desc: "Domain Name System (Hostname to IP Resolution)" },
    { num: 67, name: "DHCP Server", proto: "UDP", desc: "Dynamic Host Configuration Protocol (Server Port)" },
    { num: 68, name: "DHCP Client", proto: "UDP", desc: "Dynamic Host Configuration Protocol (Client Port)" },
    { num: 80, name: "HTTP", proto: "TCP", desc: "Hypertext Transfer Protocol (Unencrypted Web Traffic)" },
    { num: 110, name: "POP3", proto: "TCP", desc: "Post Office Protocol v3 (Retrieving Emails, Local Storage)" },
    { num: 123, name: "NTP", proto: "UDP", desc: "Network Time Protocol (Clock Synchronization)" },
    { num: 143, name: "IMAP4", proto: "TCP", desc: "Internet Message Access Protocol v4 (Managing Emails on Remote Server)" },
    { num: 161, name: "SNMP", proto: "UDP", desc: "Simple Network Management Protocol (Querying Agent Statistics)" },
    { num: 162, name: "SNMP Trap", proto: "UDP", desc: "Simple Network Management Protocol (Agent Alerts to Manager)" },
    { num: 389, name: "LDAP", proto: "TCP/UDP", desc: "Lightweight Directory Access Protocol (Querying Directory Services)" },
    { num: 443, name: "HTTPS", proto: "TCP", desc: "Hypertext Transfer Protocol Secure (TLS/SSL Encrypted Web Traffic)" },
    { num: 445, name: "SMB", proto: "TCP", desc: "Server Message Block (Windows File/Printer Sharing)" },
    { num: 465, name: "SMTP (TLS/SSL)", proto: "TCP", desc: "Simple Mail Transfer Protocol (Secure Encrypted Email Transmission)" },
    { num: 514, name: "Syslog", proto: "UDP", desc: "System Logging Protocol (Sending Event Logs to SIEM/Server)" },
    { num: 853, name: "DNS over TLS (DoT)", proto: "TCP", desc: "DNS queries encrypted via Transport Layer Security" },
    { num: 990, name: "Implicit FTPS", proto: "TCP", desc: "File Transfer Protocol Secure (Implicit TLS Encryption)" },
    { num: 3389, name: "RDP", proto: "TCP", desc: "Remote Desktop Protocol (Windows Remote Screen Management)" },
    { num: 5060, name: "SIP (Plaintext)", proto: "TCP/UDP", desc: "Session Initiation Protocol (VoIP Session Setup - Unencrypted)" },
    { num: 5061, name: "SIP (TLS)", proto: "TCP", desc: "Session Initiation Protocol (VoIP Session Setup - Encrypted)" }
  ];

  // OSI Layer definitions
  const OSI_LAYERS = [
    { level: 1, name: "Physical Layer", items: ["Cables", "Hubs", "Repeaters", "Fiber Optics", "Electrical Pulses", "CPE", "TDR", "Coaxial Cables", "RJ45 Connectors"] },
    { level: 2, name: "Data Link Layer", items: ["Switches", "MAC Addresses", "ARP", "Frames", "Bridges", "LLDP", "CDP", "Logical Link Control (LLC)", "Token Passing"] },
    { level: 3, name: "Network Layer", items: ["Routers", "IP Addresses", "ICMP", "Packets", "TTL (Time to Live)", "NAT / PAT", "OSPF", "RIP", "BGP", "Subnetting"] },
    { level: 4, name: "Transport Layer", items: ["TCP", "UDP", "Port Numbers", "Segments / Datagrams", "Flow Control", "Checksums", "Three-Way Handshake", "Window Size", "Urgent Pointer"] },
    { level: 5, name: "Session Layer", items: ["NetBIOS", "RPC (Remote Procedure Call)", "Checkpointing", "Session Controls (Start/Stop/Restart)"] },
    { level: 6, name: "Presentation Layer", items: ["Encryption (SSL/TLS)", "Compression", "Data Formatting (JPEG/ASCII)", "STARTTLS"] },
    { level: 7, name: "Application Layer", items: ["HTTP / HTTPS Protocols", "FTP / SFTP Client Protocols", "SMTP / IMAP Email Protocols", "DNS Name Resolution", "DHCP Addressing Service", "MDM Controls"] }
  ];

  // AppleTalk Protocol definitions
  const APPLETALK_PROTOS = [
    { name: "LLAP (LocalTalk Link Access Protocol)", layer: "Data Link Layer (Layer 2)", desc: "Handles medium-speed data transmission over Apple's original serial cabling." },
    { name: "EtherTalk / TokenTalk / FDDITalk", layer: "Data Link Layer (Layer 2)", desc: "Adapts AppleTalk to run over standard Ethernet, Token Ring, or FDDI cabling." },
    { name: "AARP (AppleTalk Address Resolution Protocol)", layer: "Network Layer (Layer 3)", desc: "Translates logical AppleTalk node addresses into hardware MAC addresses." },
    { name: "DDP (Datagram Delivery Protocol)", layer: "Network Layer (Layer 3)", desc: "Provides foundational socket-to-socket, best-effort datagram delivery." },
    { name: "RTMP (Routing Table Maintenance Protocol)", layer: "Transport Layer (Layer 4)", desc: "Establishes and maintains routing tables based on periodic distance-vector broadcasts." },
    { name: "AURP (AppleTalk Update-Based Routing Protocol)", layer: "Transport Layer (Layer 4)", desc: "Optimizes routing table exchanges by transmitting updates only when changes occur." },
    { name: "NBP (Name Binding Protocol)", layer: "Transport Layer (Layer 4)", desc: "Maps human-readable device names (e.g. printer names) to numeric AppleTalk addresses." },
    { name: "ATP (AppleTalk Transaction Protocol)", layer: "Transport Layer (Layer 4)", desc: "Enforces a reliable request-response mechanism to ensure transactions execute without loss." },
    { name: "AEP (AppleTalk Echo Protocol)", layer: "Transport Layer (Layer 4)", desc: "Tests host reachability and measures round-trip times by requesting echo replies (similar to Ping)." },
    { name: "ZIP (Zone Information Protocol)", layer: "Session & Presentation Layers (Layers 5/6)", desc: "Associates network numbers with logical zone names to allow device group browsing." },
    { name: "ASP (AppleTalk Session Protocol)", layer: "Session & Presentation Layers (Layers 5/6)", desc: "Sets up, maintains, and tears down logical session channels between clients and servers." },
    { name: "ADSP (AppleTalk Data Stream Protocol)", layer: "Session & Presentation Layers (Layers 5/6)", desc: "Provides reliable, full-duplex, connection-oriented data streaming services." },
    { name: "PAP (Printer Access Protocol)", layer: "Session & Presentation Layers (Layers 5/6)", desc: "Establishes print sessions, coordinates spooling, and manages printer queues." },
    { name: "AFP (Apple Filing Protocol)", layer: "Application Layer (Layer 7)", desc: "Coordinates remote file system operations, allowing users to mount volumes and share files." }
  ];

  // Helper: Shuffle array
  function shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // Helper: Get random integer
  function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Helper: Format IP address
  function intToIp(val) {
    return [
      (val >>> 24) & 255,
      (val >>> 16) & 255,
      (val >>> 8) & 255,
      val & 255
    ].join('.');
  }

  // Helper: Parse IP to int
  function ipToInt(ip) {
    return ip.split('.').reduce((acc, octet) => (acc << 8) + parseInt(octet, 10), 0) >>> 0;
  }

  // Dynamic Subnet Generator
  function generateSubnetQuestion() {
    // We will generate an IP and mask
    const cidr = randInt(24, 30); // focus on /24 to /30 for manageable mental math
    const octet1 = [10, 172, 192, 100, 198, 203][randInt(0, 5)];
    const octet2 = octet1 === 172 ? randInt(16, 31) : octet1 === 192 ? 168 : randInt(1, 254);
    const octet3 = randInt(1, 254);
    
    // Choose block boundaries based on CIDR
    const blockSize = 1 << (32 - cidr);
    const blockNum = randInt(0, (256 / blockSize) - 1);
    const hostOffset = randInt(1, blockSize - 2); // default usable host offset
    const octet4 = (blockNum * blockSize) + hostOffset;
    
    const ipStr = `${octet1}.${octet2}.${octet3}.${octet4}`;
    const ipInt = ipToInt(ipStr);
    
    // Mask calculations
    const maskInt = (~(blockSize - 1)) >>> 0;
    const maskStr = intToIp(maskInt);
    
    const networkInt = (ipInt & maskInt) >>> 0;
    const networkStr = intToIp(networkInt);
    
    const broadcastInt = (networkInt | (blockSize - 1)) >>> 0;
    const broadcastStr = intToIp(broadcastInt);
    
    const firstUsableStr = intToIp(networkInt + 1);
    const lastUsableStr = intToIp(broadcastInt - 1);
    const usableHosts = blockSize - 2;

    const questionTypes = [
      {
        type: "net_id",
        q: `What is the Network ID (network address) for the host IP address <strong>${ipStr}/${cidr}</strong>?`,
        correct: networkStr,
        wrongGen: () => {
          return [
            intToIp(networkInt + blockSize),
            intToIp(networkInt - (blockSize > networkInt ? 0 : blockSize)),
            intToIp(networkInt + 1),
            intToIp(broadcastInt)
          ];
        }
      },
      {
        type: "broad_id",
        q: `What is the Broadcast ID (broadcast address) for the host IP address <strong>${ipStr}/${cidr}</strong>?`,
        correct: broadcastStr,
        wrongGen: () => {
          return [
            intToIp(networkInt),
            intToIp(broadcastInt + blockSize),
            intToIp(broadcastInt - 1),
            intToIp(networkInt + blockSize)
          ];
        }
      },
      {
        type: "hosts",
        q: `How many usable host IP addresses are available in a <strong>/${cidr}</strong> subnet?`,
        correct: `${usableHosts}`,
        wrongGen: () => {
          return [
            `${blockSize}`,
            `${usableHosts + 2}`,
            `${usableHosts * 2}`,
            `${usableHosts - 2}`
          ];
        }
      },
      {
        type: "mask",
        q: `What is the decimal subnet mask for the CIDR notation <strong>/${cidr}</strong>?`,
        correct: maskStr,
        wrongGen: () => {
          return [
            intToIp((~( (1 << (32 - (cidr - 1))) - 1 )) >>> 0),
            intToIp((~( (1 << (32 - (cidr + 1))) - 1 )) >>> 0),
            "255.255.255.0",
            "255.255.0.0"
          ];
        }
      },
      {
        type: "first_usable",
        q: `What is the first usable host IP address in the subnet of <strong>${ipStr}/${cidr}</strong>?`,
        correct: firstUsableStr,
        wrongGen: () => {
          return [
            networkStr,
            intToIp(networkInt + 2),
            broadcastStr,
            lastUsableStr
          ];
        }
      },
      {
        type: "last_usable",
        q: `What is the last usable host IP address in the subnet of <strong>${ipStr}/${cidr}</strong>?`,
        correct: lastUsableStr,
        wrongGen: () => {
          return [
            broadcastStr,
            firstUsableStr,
            networkStr,
            intToIp(broadcastInt - 2)
          ];
        }
      }
    ];

    const qTemplate = questionTypes[randInt(0, questionTypes.length - 1)];
    const correctVal = qTemplate.correct;
    
    // Build options
    let rawWrongs = qTemplate.wrongGen();
    // Filter duplicates and correct answer
    let wrongs = [...new Set(rawWrongs.filter(w => w !== correctVal))];
    while (wrongs.length < 3) {
      wrongs.push(intToIp(ipInt + randInt(1, 100)));
      wrongs = [...new Set(wrongs)];
    }
    wrongs = wrongs.slice(0, 3);

    const choices = shuffle([correctVal, ...wrongs]);
    const correctIndex = choices.indexOf(correctVal);

    return {
      category: "Subnetting (Dynamic)",
      question: qTemplate.q,
      choices: choices,
      correctIndex: correctIndex,
      explanation: `For /${cidr}:<br>` +
                   `- Block size = 2^(32 - ${cidr}) = ${blockSize} IPs.<br>` +
                   `- Subnet Mask = ${maskStr}.<br>` +
                   `- Network address is the start of the block: ${networkStr}.<br>` +
                   `- Broadcast address is the end of the block: ${broadcastStr}.<br>` +
                   `- Usable IPs range from ${firstUsableStr} to ${lastUsableStr} (${usableHosts} usable hosts).`
    };
  }

  // Dynamic Port Matcher
  function generatePortQuestion() {
    const qType = randInt(0, 1);
    const target = PORTS[randInt(0, PORTS.length - 1)];

    if (qType === 0) {
      // Ask for Port Number
      const correctVal = `Port ${target.num}`;
      let wrongs = PORTS.filter(p => p.num !== target.num).map(p => `Port ${p.num}`);
      wrongs = shuffle([...new Set(wrongs)]).slice(0, 3);
      const choices = shuffle([correctVal, ...wrongs]);
      const correctIndex = choices.indexOf(correctVal);

      return {
        category: "Network Protocols and Standards",
        question: `Which port number is standard for <strong>${target.name}</strong> (${target.desc})?`,
        choices: choices,
        correctIndex: correctIndex,
        explanation: `${target.name} runs on ${correctVal} over ${target.proto}. Details: ${target.desc}.`
      };
    } else {
      // Ask for Protocol
      const correctVal = target.name;
      let wrongs = PORTS.filter(p => p.name !== target.name).map(p => p.name);
      wrongs = shuffle([...new Set(wrongs)]).slice(0, 3);
      const choices = shuffle([correctVal, ...wrongs]);
      const correctIndex = choices.indexOf(correctVal);

      return {
        category: "Network Protocols and Standards",
        question: `What protocol standard is associated with <strong>Port ${target.num}</strong> (${target.proto})?`,
        choices: choices,
        correctIndex: correctIndex,
        explanation: `Port ${target.num} is reserved for ${correctVal} (${target.desc}).`
      };
    }
  }

  // Dynamic OSI Matcher
  function generateOSIQuestion() {
    const qType = randInt(0, 1);
    const targetLayer = OSI_LAYERS[randInt(0, OSI_LAYERS.length - 1)];
    const targetItem = targetLayer.items[randInt(0, targetLayer.items.length - 1)];

    if (qType === 0) {
      // Item to Layer
      const correctVal = targetLayer.name;
      let wrongs = OSI_LAYERS.filter(l => l.level !== targetLayer.level).map(l => l.name);
      wrongs = shuffle(wrongs).slice(0, 3);
      const choices = shuffle([correctVal, ...wrongs]);
      const correctIndex = choices.indexOf(correctVal);

      return {
        category: "Networking Basics",
        question: `At which layer of the OSI model does <strong>${targetItem}</strong> reside/operate?`,
        choices: choices,
        correctIndex: correctIndex,
        explanation: `${targetItem} is managed at the ${correctVal} (Layer ${targetLayer.level}) of the OSI model.`
      };
    } else {
      // Layer to Item
      const correctVal = targetItem;
      // Get items from other layers
      let wrongs = [];
      OSI_LAYERS.filter(l => l.level !== targetLayer.level).forEach(l => {
        wrongs.push(...l.items);
      });
      wrongs = shuffle([...new Set(wrongs)]).slice(0, 3);
      const choices = shuffle([correctVal, ...wrongs]);
      const correctIndex = choices.indexOf(correctVal);

      return {
        category: "Networking Basics",
        question: `Which of the following is associated with the <strong>${targetLayer.name}</strong> (Layer ${targetLayer.level}) of the OSI model?`,
        choices: choices,
        correctIndex: correctIndex,
        explanation: `${correctVal} operates at the ${targetLayer.name}.`
      };
    }
  }

  // Dynamic AppleTalk Matcher
  function generateAppleTalkQuestion() {
    const qType = randInt(0, 1);
    const target = APPLETALK_PROTOS[randInt(0, APPLETALK_PROTOS.length - 1)];

    if (qType === 0) {
      // Protocol to Description
      const correctVal = target.desc;
      let wrongs = APPLETALK_PROTOS.filter(p => p.name !== target.name).map(p => p.desc);
      wrongs = shuffle([...new Set(wrongs)]).slice(0, 3);
      const choices = shuffle([correctVal, ...wrongs]);
      const correctIndex = choices.indexOf(correctVal);

      return {
        category: "AppleTalk",
        question: `What is the primary function of the AppleTalk protocol <strong>${target.name}</strong>?`,
        choices: choices,
        correctIndex: correctIndex,
        explanation: `${target.name} runs at the ${target.layer} and ${target.desc}`
      };
    } else {
      // Protocol to Layer
      const correctVal = target.layer;
      let wrongs = ["Data Link Layer (Layer 2)", "Network Layer (Layer 3)", "Transport Layer (Layer 4)", "Session & Presentation Layers (Layers 5/6)", "Application Layer (Layer 7)"];
      wrongs = wrongs.filter(l => l !== target.layer);
      const choices = shuffle([correctVal, ...wrongs.slice(0, 3)]);
      const correctIndex = choices.indexOf(correctVal);

      return {
        category: "AppleTalk",
        question: `At which layer of the OSI/AppleTalk architecture does <strong>${target.name}</strong> operate?`,
        choices: choices,
        correctIndex: correctIndex,
        explanation: `${target.name} operates at the ${correctVal}. Function: ${target.desc}`
      };
    }
  }

  // Main dispenser function
  function getProceduralQuestion(type) {
    // type can be 'subnet', 'port', 'osi', 'appletalk', or 'random'
    if (!type || type === 'random') {
      const types = ['subnet', 'port', 'osi', 'appletalk'];
      type = types[randInt(0, types.length - 1)];
    }

    switch(type) {
      case 'subnet':
        return generateSubnetQuestion();
      case 'port':
        return generatePortQuestion();
      case 'osi':
        return generateOSIQuestion();
      case 'appletalk':
        return generateAppleTalkQuestion();
      default:
        return generateSubnetQuestion();
    }
  }

  return {
    getQuestion: getProceduralQuestion,
    PORTS: PORTS,
    OSI_LAYERS: OSI_LAYERS,
    APPLETALK_PROTOS: APPLETALK_PROTOS
  };

})();

console.log("Procedural Question Generator loaded.");
