// FBLA Networking Infrastructures Static Question Bank
// Loaded globally via window.FBLA_QUESTIONS to prevent local CORS issues when run via file://

window.FBLA_QUESTIONS = [
  {
    "id": "guide-1",
    "category": "Event Guidelines",
    "question": "According to the FBLA guidelines, what is the duration of the Networking Infrastructures objective test?",
    "choices": [
      "45 minutes",
      "50 minutes",
      "60 minutes",
      "90 minutes"
    ],
    "correctIndex": 1,
    "explanation": "The FBLA Networking Infrastructures event consists of a 50-minute objective test with 100 multiple-choice questions."
  },
  {
    "id": "guide-2",
    "category": "Event Guidelines",
    "question": "Under FBLA rules, what is the national membership dues payment deadline to be eligible for NLC competition?",
    "choices": [
      "March 1 by 11:59 p.m. Eastern Time",
      "March 1 by 11:59 p.m. Local Time",
      "April 15 by 5:00 p.m. Eastern Time",
      "February 15 by 11:59 p.m. Pacific Time"
    ],
    "correctIndex": 0,
    "explanation": "FBLA national membership dues must be paid by 11:59 p.m. Eastern Time on March 1 of the current school year to be eligible for NLC."
  },
  {
    "id": "guide-3",
    "category": "Event Guidelines",
    "question": "How many penalty points are assessed for late arrivals to FBLA competitive events?",
    "choices": [
      "2 penalty points",
      "5 penalty points",
      "10 penalty points",
      "Disqualification only"
    ],
    "correctIndex": 1,
    "explanation": "Five (5) penalty points are assessed for late arrivals to any FBLA competitive event."
  },
  {
    "id": "guide-4",
    "category": "Event Guidelines",
    "question": "What is the penalty if a competitor fails to follow the official FBLA Dress Code at the testing site?",
    "choices": [
      "Immediate disqualification",
      "2 penalty points",
      "5 penalty points",
      "10 penalty points"
    ],
    "correctIndex": 2,
    "explanation": "Five (5) points are deducted if competitors do not follow the FBLA Dress Code or are late to the testing site."
  },
  {
    "id": "guide-5",
    "category": "Event Guidelines",
    "question": "If a competitor places in the top 10 of an event at the National Leadership Conference (NLC), which statement is true regarding future competitions?",
    "choices": [
      "They are eligible to compete in that event again only after one school year.",
      "They are no longer eligible to compete in that event at future NLCs (unless it is modified beyond a name change).",
      "They can compete in that event as many times as they want, provided they pay dues.",
      "They are banned from all future FBLA objective test events."
    ],
    "correctIndex": 1,
    "explanation": "Members may only compete in an event at the NLC more than once if they have not previously placed in the top 10. If they place in the top 10, they are no longer eligible unless the event is modified beyond a name change."
  },
  {
    "id": "guide-6",
    "category": "Event Guidelines",
    "question": "What are the first, second, and third tiebreakers in the FBLA objective test scoring procedure?",
    "choices": [
      "(1) Test completion time, (2) 10 pre-selected questions, (3) 20 pre-selected questions",
      "(1) 10 pre-selected tiebreaker questions, (2) 20 pre-selected tiebreaker questions, (3) shortest test completion time",
      "(1) Number of blank answers, (2) 10 pre-selected questions, (3) GPA of the student",
      "(1) 20 pre-selected questions, (2) 10 pre-selected questions, (3) shortest test completion time"
    ],
    "correctIndex": 1,
    "explanation": "Tiebreakers are determined as follows: (1) correct responses to 10 pre-selected tiebreaker questions, (2) correct responses to 20 pre-selected tiebreaker questions, and (3) shortest amount of time to complete the test."
  },
  {
    "id": "basics-1",
    "category": "Networking Basics",
    "question": "Which Cisco recommendation outlines the optimal density of client devices per wireless Access Point (AP) in a wireless campus layout?",
    "choices": [
      "10 data devices per AP",
      "20 data devices per AP",
      "50 data devices per AP",
      "100 data devices per AP"
    ],
    "correctIndex": 1,
    "explanation": "Cisco recommends 20 data devices per access point in wireless campus considerations to maintain stable RF coverage and performance."
  },
  {
    "id": "basics-2",
    "category": "Networking Basics",
    "question": "What type of AP architecture features a 'dummy' AP that relies entirely on a centralized Wireless LAN Controller (WLC) for configuration and management?",
    "choices": [
      "Autonomous AP",
      "Standalone AP",
      "Lightweight AP (LWAP)",
      "Ad-hoc AP"
    ],
    "correctIndex": 2,
    "explanation": "Lightweight APs (LWAPs) act as 'dummy' APs that require connection to a central WLC to function in enterprise networks, in contrast to SOHO standalone APs."
  },
  {
    "id": "basics-3",
    "category": "Networking Basics",
    "question": "Which IEEE standard defines VLAN tagging in Ethernet frames at Layer 2?",
    "choices": [
      "IEEE 802.1X",
      "IEEE 802.1Q",
      "IEEE 802.3ad",
      "IEEE 802.11ac"
    ],
    "correctIndex": 1,
    "explanation": "IEEE 802.1Q is the networking standard that supports VLAN tagging on Ethernet frames at Layer 2."
  },
  {
    "id": "basics-4",
    "category": "Networking Basics",
    "question": "What is the size of the network identifier (VXLAN ID) in a VXLAN header, and how many logical networks does it support?",
    "choices": [
      "12-bit ID, supporting 4,096 networks",
      "16-bit ID, supporting 65,536 networks",
      "24-bit ID, supporting over 16 million networks",
      "32-bit ID, supporting 4.3 billion networks"
    ],
    "correctIndex": 2,
    "explanation": "VXLANs use a 24-bit VXLAN Network Identifier (VNI), which supports over 16 million logical networks (compared to VLAN's 12-bit ID supporting 4,096 networks)."
  },
  {
    "id": "basics-5",
    "category": "Networking Basics",
    "question": "In VXLAN architecture, what is the abbreviation for the entity located at the endpoint that handles encapsulation and decapsulation (MAC-in-IP)?",
    "choices": [
      "SVI",
      "VTEP",
      "ONT",
      "WLC"
    ],
    "correctIndex": 1,
    "explanation": "A VTEP (VXLAN Tunnel Endpoint) resides at the ends of the tunnel to encapsulate MAC frames into IP packets and vice versa."
  },
  {
    "id": "basics-6",
    "category": "Networking Basics",
    "question": "Which VLAN hopping attack exploits a switch port configured for auto-trunking negotiation by simulating a new trunking switch?",
    "choices": [
      "Double Tagging",
      "Switch Spoofing",
      "CAM Flooding",
      "ARP Poisoning"
    ],
    "correctIndex": 1,
    "explanation": "Switch Spoofing is a VLAN hopping method where a rogue device pretends to be a switch negotiating a trunk connection using Dynamic Trunking Protocol (DTP)."
  },
  {
    "id": "basics-7",
    "category": "Networking Basics",
    "question": "Which VLAN hopping attack relies on a rogue host sending frames with two 802.1Q tags to bypass access restrictions?",
    "choices": [
      "Switch Spoofing",
      "Double Tagging",
      "MAC Flooding",
      "SVI Poisoning"
    ],
    "correctIndex": 1,
    "explanation": "Double Tagging involves prepending two VLAN tags to an Ethernet frame. The first switch strips the outer tag, and the frame is then forwarded to the target VLAN specified in the inner tag without being checked."
  },
  {
    "id": "basics-8",
    "category": "Networking Basics",
    "question": "In Datacenter LAN design, what hierarchical architecture provides high-speed, low-latency, and highly redundant connections between server racks and backbone switches?",
    "choices": [
      "Star-Bus Hybrid",
      "Spine-Leaf Architecture",
      "Token Passing Ring",
      "Mainframe-Terminal Star"
    ],
    "correctIndex": 1,
    "explanation": "Spine-Leaf is a two-tier datacenter network topology where leaf switches aggregate rack traffic and connect directly to every spine switch in the backbone."
  },
  {
    "id": "basics-9",
    "category": "Networking Basics",
    "question": "Which type of client hardware is highly cost-effective, has very weak processing power locally, and runs all applications on a Virtual Machine (VM) in the cloud?",
    "choices": [
      "Mainframe",
      "Thin Client",
      "Fat Client",
      "SOHO Workstation"
    ],
    "correctIndex": 1,
    "explanation": "A Thin Client is a lightweight computer that relies on a remote server or virtualized cloud environment to perform processing and host its OS/apps."
  },
  {
    "id": "basics-10",
    "category": "Networking Basics",
    "question": "What is the purpose of an Edge Server in a Content Delivery Network (CDN)?",
    "choices": [
      "To route packets between different autonomous systems using BGP",
      "To store files via caching locally so they can be delivered to nearby users with low latency",
      "To act as a central certificate authority for SSL handshakes",
      "To perform deep packet inspection for intrusion prevention"
    ],
    "correctIndex": 1,
    "explanation": "Edge servers in CDNs store files (caching data) near the perimeter of networks to deliver content to users faster and reduce latency."
  },
  {
    "id": "basics-11",
    "category": "Networking Basics",
    "question": "Which layer of the OSI model is responsible for node-to-node frame delivery, hardware addressing, and physical media access controls?",
    "choices": [
      "Physical Layer (Layer 1)",
      "Data Link Layer (Layer 2)",
      "Network Layer (Layer 3)",
      "Transport Layer (Layer 4)"
    ],
    "correctIndex": 1,
    "explanation": "The Data Link Layer (Layer 2) is responsible for 'node-to-node' communication, MAC addresses, framing, and ARP."
  },
  {
    "id": "basics-12",
    "category": "Networking Basics",
    "question": "What are the two sublayers of the OSI Data Link Layer (Layer 2)?",
    "choices": [
      "MAC (Media Access Control) and LLC (Logical Link Control)",
      "IP (Internet Protocol) and TCP (Transmission Control)",
      "Physical Interface and Frame Control",
      "CDP (Cisco Discovery) and LLDP (Link Layer Discovery)"
    ],
    "correctIndex": 0,
    "explanation": "Layer 2 is divided into the Logical Link Control (LLC) sublayer (converts pulses to bits, manages protocols) and the Media Access Control (MAC) sublayer (hardware addressing)."
  },
  {
    "id": "basics-13",
    "category": "Networking Basics",
    "question": "Which standard layer discovery protocol is vendor-neutral, uses Type-Length-Value (TLV) packets to share system details, and operates at Layer 2?",
    "choices": [
      "CDP (Cisco Discovery Protocol)",
      "LLDP (Link Layer Discovery Protocol)",
      "ARP (Address Resolution Protocol)",
      "NetBIOS"
    ],
    "correctIndex": 1,
    "explanation": "Link Layer Discovery Protocol (LLDP) is the IEEE vendor-neutral discovery protocol at Layer 2, while CDP is Cisco-proprietary."
  },
  {
    "id": "basics-14",
    "category": "Networking Basics",
    "question": "In ICMP diagnostic messaging, what type code is returned by a router when a packet's TTL expires?",
    "choices": [
      "Type 0",
      "Type 3",
      "Type 5",
      "Type 11"
    ],
    "correctIndex": 3,
    "explanation": "ICMP Type 11 represents 'Time Exceeded', which is returned when a packet's Time to Live (TTL) drops to zero."
  },
  {
    "id": "basics-15",
    "category": "Networking Basics",
    "question": "Which NAT method allows thousands of internal hosts on a private network to share a single public IP address using randomized source ports?",
    "choices": [
      "Static NAT",
      "Dynamic NAT",
      "Port Address Translation (PAT) / NAT Overload",
      "Destination NAT (DNAT)"
    ],
    "correctIndex": 2,
    "explanation": "PAT (Port Address Translation) or NAT Overload maps multiple private IPs to a single public IP by tracking unique port numbers."
  },
  {
    "id": "basics-16",
    "category": "Networking Basics",
    "question": "What Layer 4 TCP field is utilized to verify segment integrity by performing an error-checking calculation?",
    "choices": [
      "Sequence Number",
      "Window Size",
      "Checksum",
      "Urgent Pointer"
    ],
    "correctIndex": 2,
    "explanation": "The TCP Checksum field verifies the integrity of the segment payload and headers, discarding corrupted segments."
  },
  {
    "id": "basics-17",
    "category": "Networking Basics",
    "question": "To prevent SYN flood attacks, what cryptographic fallback mechanism does a TCP host use to validate connection requests without allocating memory buffers?",
    "choices": [
      "Three-Way Handshake",
      "SYN Cookies",
      "HSTS (HTTP Strict Transport Security)",
      "Keep-Alives"
    ],
    "correctIndex": 1,
    "explanation": "SYN Cookies allow a TCP server to respond to SYN packets with a cryptographically generated sequence number (cookie) rather than immediately allocating memory for a half-open state."
  },
  {
    "id": "basics-18",
    "category": "Networking Basics",
    "question": "What is the difference between standard network segmentation and micro-segmentation?",
    "choices": [
      "Segmentation is physical; micro-segmentation is virtual.",
      "Segmentation handles east-west traffic; micro-segmentation handles north-south traffic.",
      "Segmentation divides networks using firewalls/routers (north-south traffic control); micro-segmentation isolates down to individual workloads/processes (east-west control, often via SDN).",
      "There is no difference; they are synonymous."
    ],
    "correctIndex": 2,
    "explanation": "Standard segmentation operates broadly (north-south) using subnets/firewalls. Micro-segmentation separates workloads individually (east-west), securing traffic between servers or virtual environments."
  },
  {
    "id": "basics-19",
    "category": "Networking Basics",
    "question": "Which layer of the OSI model handles data compression, formatting, and cryptographic encryption/decryption (such as TLS/SSL)?",
    "choices": [
      "Session Layer (Layer 5)",
      "Presentation Layer (Layer 6)",
      "Application Layer (Layer 7)",
      "Transport Layer (Layer 4)"
    ],
    "correctIndex": 1,
    "explanation": "The Presentation Layer (Layer 6) formats, compresses, and encrypts/decrypts data, ensuring compatibility between host processes."
  },
  {
    "id": "basics-20",
    "category": "Networking Basics",
    "question": "What command is used to upgrade an insecure, plaintext connection to a secure TLS/SSL encrypted connection over the same port?",
    "choices": [
      "HSTS",
      "STARTTLS",
      "SSHUPGRADE",
      "QUIC"
    ],
    "correctIndex": 1,
    "explanation": "STARTTLS is an email and file transfer command that instructs an active plaintext connection to upgrade to secure TLS/SSL encryption."
  },
  {
    "id": "basics-21",
    "category": "Networking Basics",
    "question": "What physical-layer device regenerates weak incoming electrical signals but does not partition collision domains or inspect packets?",
    "choices": [
      "Hub",
      "Repeater",
      "Switch",
      "Bridge"
    ],
    "correctIndex": 1,
    "explanation": "A repeater regenerates weak signals (electrical pulses) over distances at Layer 1. It does not look at MAC or IP addresses."
  },
  {
    "id": "basics-22",
    "category": "Networking Basics",
    "question": "In a local network segment, switches break up ________ domains, whereas routers break up ________ domains.",
    "choices": [
      "Broadcast, collision",
      "Collision, broadcast",
      "Logical, physical",
      "Unicast, multicast"
    ],
    "correctIndex": 1,
    "explanation": "Switches create separate collision domains per port. Routers do not forward broadcasts, thereby separating broadcast domains."
  },
  {
    "id": "basics-23",
    "category": "Networking Basics",
    "question": "What physical tool uses electromagnetic pulses to locate faults, short circuits, or length limitations in copper cabling?",
    "choices": [
      "Tone Generator",
      "Time Domain Reflectometer (TDR)",
      "Loopback Plug",
      "Wire Crimper"
    ],
    "correctIndex": 1,
    "explanation": "A Time Domain Reflectometer (TDR) measures copper cables by sending a pulse and analyzing reflections to find faults or estimate cable length."
  },
  {
    "id": "basics-24",
    "category": "Networking Basics",
    "question": "What is a major difference between Symmetric DSL (SDSL) and Asymmetric DSL (ADSL)?",
    "choices": [
      "ADSL uses fiber optic cables; SDSL uses phone lines.",
      "ADSL provides identical download and upload speeds; SDSL favors download speeds.",
      "ADSL favors download speeds over upload speeds; SDSL provides identical upload and download speeds.",
      "SDSL requires a coaxial TV line; ADSL uses telephone copper."
    ],
    "correctIndex": 2,
    "explanation": "Asymmetric DSL (ADSL) provides higher download speeds than upload speeds (common for residential), while Symmetric DSL (SDSL) offers matching speeds both ways (ideal for business)."
  },
  {
    "id": "basics-25",
    "category": "Networking Basics",
    "question": "What legacy ISDN standard operates over digital telephone lines and offers a data rate of 128 Kbps while allowing voice and data simultaneously?",
    "choices": [
      "Dial-Up 56K",
      "ISDN BRI (Basic Rate Interface)",
      "DOCSIS Coaxial",
      "T1 Carrier Line"
    ],
    "correctIndex": 1,
    "explanation": "ISDN (BRI) is a fully digital standard offering 128 Kbps (two 64 Kbps channels) over phone lines, supporting concurrent voice/data."
  },
  {
    "id": "basics-26",
    "category": "Networking Basics",
    "question": "What address is designated as the default gateway (gateway of last resort) in a router's routing table?",
    "choices": [
      "127.0.0.1",
      "0.0.0.0/0",
      "255.255.255.255",
      "169.254.0.1"
    ],
    "correctIndex": 1,
    "explanation": "The default route (gateway of last resort) is represented as 0.0.0.0/0, routing all traffic that doesn't match a specific subnet path."
  },
  {
    "id": "basics-27",
    "category": "Networking Basics",
    "question": "Which firewall type keeps track of active connections in a state table, checking incoming packets against open sessions, but is vulnerable to flooding (DDoS) attacks?",
    "choices": [
      "Packet Filtering Firewall",
      "Stateful Inspection Firewall",
      "Proxy Firewall",
      "Next-Generation Firewall (NGFW)"
    ],
    "correctIndex": 1,
    "explanation": "Stateful firewalls monitor the state of connections (SYN/ACK tracking) but can have their connection tables overwhelmed by floods of dummy connection requests (DDoS)."
  },
  {
    "id": "basics-28",
    "category": "Networking Basics",
    "question": "What load balancing algorithm distributes requests sequentially and evenly across a group of servers, without evaluating server load or health?",
    "choices": [
      "Least Connections",
      "Least Response Time",
      "Round Robin",
      "IP Hash"
    ],
    "correctIndex": 2,
    "explanation": "Round Robin rotates requests sequentially through the list of servers, treating them equally."
  },
  {
    "id": "basics-29",
    "category": "Networking Basics",
    "question": "What is a main difference between a Passive Optical Network (PON) and an Active Optical Network (AON)?",
    "choices": [
      "PON uses powered switches; AON uses unpowered splitters.",
      "PON uses unpowered fiber splitters (up to 20km, shared bandwidth); AON uses powered active switches (up to 120km, dedicated bandwidth).",
      "AON is standard for residential; PON is exclusive to large enterprises.",
      "PON is electrical; AON is completely optical."
    ],
    "correctIndex": 1,
    "explanation": "PON relies on unpowered splitters (cheaper, residential, shared up to 128 users, max 20km). AON uses electrically powered switches (more expensive, enterprise, longer distance up to 120km, stable performance)."
  },
  {
    "id": "basics-30",
    "category": "Networking Basics",
    "question": "Under RFC 1918, what is the private IPv4 address range for Class B networks?",
    "choices": [
      "10.0.0.0 – 10.255.255.255",
      "172.16.0.0 – 172.31.255.255",
      "192.168.0.0 – 192.168.255.255",
      "169.254.0.0 – 169.254.255.255"
    ],
    "correctIndex": 1,
    "explanation": "The Class B RFC 1918 private range is 172.16.0.0/12 (172.16.0.0 to 172.31.255.255)."
  },
  {
    "id": "basics-31",
    "category": "Networking Basics",
    "question": "What IP address range is reserved globally for Carrier-Grade NAT (CGNAT) configurations?",
    "choices": [
      "192.0.2.0/24",
      "100.64.0.0/10",
      "169.254.0.0/16",
      "224.0.0.0/4"
    ],
    "correctIndex": 1,
    "explanation": "Carrier-Grade NAT (CGNAT) uses the reserved range 100.64.0.0/10 (100.64.0.0 to 100.127.255.255) to share public IPs among ISP subscribers."
  },
  {
    "id": "basics-32",
    "category": "Networking Basics",
    "question": "What are the three reserved documentation/example IPv4 ranges (TEST-NET-1, TEST-NET-2, and TEST-NET-3)?",
    "choices": [
      "192.0.2.0/24, 198.51.100.0/24, 203.0.113.0/24",
      "10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16",
      "127.0.0.0/8, FE80::/10, fd00::/8",
      "169.254.0.0/16, 100.64.0.0/10, 224.0.0.0/4"
    ],
    "correctIndex": 0,
    "explanation": "The documentation ranges are 192.0.2.0/24 (TEST-NET-1), 198.51.100.0/24 (TEST-NET-2), and 203.0.113.0/24 (TEST-NET-3)."
  },
  {
    "id": "basics-33",
    "category": "Networking Basics",
    "question": "In IPv6, what address block designates Unique Local Addresses (ULA)?",
    "choices": [
      "2000::/3",
      "fe80::/10",
      "fd00::/8",
      "ff00::/8"
    ],
    "correctIndex": 2,
    "explanation": "Unique Local Addresses (ULA) in IPv6 begin with the prefix fd00::/8, similar to private IPv4 addresses."
  },
  {
    "id": "basics-34",
    "category": "Networking Basics",
    "question": "What does the first byte's least significant bit (LSB) determine in a unicast/multicast MAC address?",
    "choices": [
      "If the LSB is 0, the address is multicast; if 1, it is unicast.",
      "If the LSB is 0, the address is unicast; if 1, it is multicast.",
      "It determines the vendor registry identifier (OUI).",
      "It marks the local administration override status."
    ],
    "correctIndex": 1,
    "explanation": "For MAC addresses, if the least significant bit of the first byte is 0, it represents a unicast frame; if it is 1, it represents multicast."
  },
  {
    "id": "basics-35",
    "category": "Networking Basics",
    "question": "What IPv6 mechanism allows a client device to automatically construct its own unique IP address using local router advertisements without a stateful DHCP server?",
    "choices": [
      "NDP (Neighbor Discovery Protocol)",
      "SLAAC (Stateless Address Autoconfiguration)",
      "DAD (Duplicate Address Detection)",
      "APIPA"
    ],
    "correctIndex": 1,
    "explanation": "SLAAC (Stateless Address Autoconfiguration) lets hosts auto-configure their own IPv6 addresses using prefixes from router advertisements."
  },
  {
    "id": "basics-36",
    "category": "Networking Basics",
    "question": "In IPv6 Neighbor Discovery Protocol (NDP), what message type acts as a replacement for ARP requests to discover a neighbor's MAC address?",
    "choices": [
      "Router Solicitation (RS)",
      "Router Advertisement (RA)",
      "Neighbor Solicitation (NS)",
      "Neighbor Advertisement (NA)"
    ],
    "correctIndex": 2,
    "explanation": "Neighbor Solicitation (NS) messages are sent by a host to request the link-layer address of a neighbor, acting as a multicast-based alternative to ARP."
  },
  {
    "id": "basics-37",
    "category": "Networking Basics",
    "question": "What is the fixed header size of an IPv6 packet?",
    "choices": [
      "20 bytes",
      "40 bytes",
      "64 bytes",
      "1500 bytes"
    ],
    "correctIndex": 1,
    "explanation": "Unlike IPv4's variable header size, IPv6 uses a streamlined, fixed header size of 40 bytes to speed up processing."
  },
  {
    "id": "basics-38",
    "category": "Networking Basics",
    "question": "Which IPv6 migration technique wraps IPv6 packets inside IPv4 headers to transmit them across IPv4-only intermediate routers?",
    "choices": [
      "Dual Stack",
      "NAT64 / DNS64",
      "Tunneling (e.g., 6to4)",
      "Translation"
    ],
    "correctIndex": 2,
    "explanation": "Tunneling encapsulates IPv6 packets inside IPv4 packets to traverse networks that do not support native IPv6 routing."
  },
  {
    "id": "basics-39",
    "category": "Networking Basics",
    "question": "Which IPv4 address class is reserved for experimental research and testing, and what is its range?",
    "choices": [
      "Class D, 224.0.0.0 – 239.255.255.255",
      "Class E, 240.0.0.0 – 255.255.255.255",
      "Class C, 192.0.0.0 – 223.255.255.255",
      "Class A, 1.0.0.0 – 126.0.0.0"
    ],
    "correctIndex": 1,
    "explanation": "Class E (240.0.0.0 to 255.255.255.255) is reserved for experimental and research purposes."
  },
  {
    "id": "basics-40",
    "category": "Networking Basics",
    "question": "What protocol operates at Layer 5 to allow applications on different computers in a local network to communicate (often running over TCP/IP today)?",
    "choices": [
      "SLAAC",
      "NetBIOS",
      "RADIUS",
      "GTP"
    ],
    "correctIndex": 1,
    "explanation": "NetBIOS (Network Basic Input/Output System) provides services at Layer 5 (Session) for LAN applications, now encapsulated in NetBIOS over TCP/IP."
  },
  {
    "id": "topo-1",
    "category": "Network Topologies and Architecture",
    "question": "In Software-Defined Networking (SDN), what plane makes all forwarding decisions and instructs hardware switches on packet handling?",
    "choices": [
      "Infrastructure Plane (Data Plane)",
      "Control Plane",
      "Management Plane",
      "Application Plane"
    ],
    "correctIndex": 1,
    "explanation": "The Control Plane determines routing policies and forwarding choices, then programmatically configures the Data Plane."
  },
  {
    "id": "topo-2",
    "category": "Network Topologies and Architecture",
    "question": "Which API interface type communicates between the SDN control plane and the management plane?",
    "choices": [
      "Northbound API",
      "Southbound API",
      "Eastbound API",
      "Westbound API"
    ],
    "correctIndex": 0,
    "explanation": "Northbound APIs allow application/management systems to configure policies on the controller. Southbound APIs connect the controller to infrastructure devices."
  },
  {
    "id": "topo-3",
    "category": "Network Topologies and Architecture",
    "question": "What WAN technology operates by appending short identifier tags to data packets, routing them based on these labels rather than IP addresses?",
    "choices": [
      "SONET",
      "MPLS (Multiprotocol Label Switching)",
      "SD-WAN",
      "WiMax"
    ],
    "correctIndex": 1,
    "explanation": "MPLS directs data from one network node to another based on short path labels rather than long network addresses, increasing speed."
  },
  {
    "id": "topo-4",
    "category": "Network Topologies and Architecture",
    "question": "What dual-ring fiber optic protocol is standard for sending data over long-range WAN backbones, utilizing synchronous transfer rates?",
    "choices": [
      "FDDI",
      "SONET",
      "WiMax",
      "Leaf-Spine"
    ],
    "correctIndex": 1,
    "explanation": "SONET (Synchronous Optical Network) uses dual rings of fiber optic cables to route long-distance WAN traffic with high redundancy."
  },
  {
    "id": "topo-5",
    "category": "Network Topologies and Architecture",
    "question": "Which network topology connects all nodes to a central backbone cable, requires termination at both ends, and uses CSMA/CD to manage collisions?",
    "choices": [
      "Star",
      "Bus",
      "Mesh",
      "Tree"
    ],
    "correctIndex": 1,
    "explanation": "A Bus topology connects all devices to a single trunk cable. If the trunk breaks or lacks terminators, reflections cause network failure."
  },
  {
    "id": "topo-6",
    "category": "Network Topologies and Architecture",
    "question": "In a fully connected mesh network, what is the formula to calculate the number of physical links required for 'n' devices?",
    "choices": [
      "n * (n - 1)",
      "n * (n - 1) / 2",
      "n * (n + 1)",
      "n^2"
    ],
    "correctIndex": 1,
    "explanation": "A full mesh network with 'n' nodes requires n(n-1)/2 physical connections, making it highly redundant but expensive."
  },
  {
    "id": "topo-7",
    "category": "Network Topologies and Architecture",
    "question": "Which network identifier corresponds to the unique MAC address of a specific wireless Access Point (AP)?",
    "choices": [
      "SSID",
      "BSSID",
      "ESSID",
      "CAPWAP"
    ],
    "correctIndex": 1,
    "explanation": "The BSSID (Basic Service Set Identifier) is the physical MAC address of the wireless AP's radio, while the SSID is the text network name."
  },
  {
    "id": "topo-8",
    "category": "Network Topologies and Architecture",
    "question": "What protocol is used by a Wireless LAN Controller (WLC) to manage and provision multiple lightweight access points (APs)?",
    "choices": [
      "LACP",
      "CAPWAP",
      "SAE",
      "STP"
    ],
    "correctIndex": 1,
    "explanation": "CAPWAP (Control and Provisioning of Wireless Access Points) allows WLCs to manage configurations and tunnels for lightweight APs."
  },
  {
    "id": "topo-9",
    "category": "Network Topologies and Architecture",
    "question": "What is the difference between Ad-hoc Wi-Fi and Wi-Fi Direct?",
    "choices": [
      "Ad-hoc uses a central switch; Wi-Fi Direct is completely wireless.",
      "Ad-hoc is client-server; Wi-Fi Direct is peer-to-peer.",
      "Ad-hoc is peer-to-peer but requires manual configuration; Wi-Fi Direct is peer-to-peer with automatic connection protocols.",
      "Ad-hoc operates at 5GHz; Wi-Fi Direct operates at 2.4GHz."
    ],
    "correctIndex": 2,
    "explanation": "Ad-hoc networks allow peer-to-peer client connections but require manual configuration. Wi-Fi Direct upgrades this by using automated setup protocols similar to WPS."
  },
  {
    "id": "topo-10",
    "category": "Network Topologies and Architecture",
    "question": "Which cloud service model provides virtualized servers, storage, and networking interfaces on demand, but leaves OS and application management to the subscriber?",
    "choices": [
      "SaaS",
      "PaaS",
      "IaaS",
      "VPC"
    ],
    "correctIndex": 2,
    "explanation": "IaaS (Infrastructure as a Service) delivers cloud-based infrastructure (VMs, storage, virtual networks) that the user must manage."
  },
  {
    "id": "topo-11",
    "category": "Network Topologies and Architecture",
    "question": "In cloud computing, what does 'bursting' refer to?",
    "choices": [
      "A server hardware crash due to high temperatures",
      "Shifting application traffic from a private datacenter to a public cloud when capacity limits are reached",
      "Upgrading bandwidth from Tier 3 to Tier 1 instantly",
      "Encrypting stored databases using AES-256 block ciphers"
    ],
    "correctIndex": 1,
    "explanation": "Cloud bursting is a hybrid cloud deployment configuration that leverages public cloud resources when a private cloud's capacity spikes."
  },
  {
    "id": "topo-12",
    "category": "Network Topologies and Architecture",
    "question": "Which hypervisor type runs directly on the bare-metal physical host hardware, providing high performance for enterprise server environments?",
    "choices": [
      "Type 1 Hypervisor",
      "Type 2 Hypervisor",
      "Hosted Hypervisor",
      "Container Hypervisor"
    ],
    "correctIndex": 0,
    "explanation": "Type 1 (bare-metal) hypervisors (like VMware ESXi) install directly on the host's physical motherboard, bypassing a standard OS layer."
  },
  {
    "id": "topo-13",
    "category": "Network Topologies and Architecture",
    "question": "What NFV component is responsible for orchestrating the virtualization layer and starting/stopping instances?",
    "choices": [
      "VPC",
      "NFVO (NFV Orchestrator)",
      "VIM (Virtual Infrastructure Manager)",
      "SVI"
    ],
    "correctIndex": 1,
    "explanation": "The NFVO manages the lifecycle of virtual network services, interacting with the VIM to allocate resources."
  },
  {
    "id": "topo-14",
    "category": "Network Topologies and Architecture",
    "question": "What is the difference between Security Lists and Security Groups in virtual private clouds (VPC)?",
    "choices": [
      "Security Lists are stateful; Security Groups are stateless.",
      "Security Lists apply broadly to entire subnets; Security Groups apply to specific virtual NICs (VNICs).",
      "Security Lists control physical switches; Security Groups control virtual routers.",
      "They are identical terms from different cloud providers."
    ],
    "correctIndex": 1,
    "explanation": "Security Lists act as firewalls at the subnet level. Security Groups act as firewalls at the VNIC level of specific VM instances."
  },
  {
    "id": "topo-15",
    "category": "Network Topologies and Architecture",
    "question": "Which wireless interference issue occurs when multiple access points within the same vicinity are tuned to the exact same channel?",
    "choices": [
      "Adjacent-Channel Interference",
      "Co-Channel Interference",
      "Multipath Interference",
      "Crosstalk"
    ],
    "correctIndex": 1,
    "explanation": "Co-Channel interference occurs when APs share the same frequency channel, forcing them to compete for transmission time."
  },
  {
    "id": "topo-16",
    "category": "Network Topologies and Architecture",
    "question": "What are the three non-overlapping channels in the 2.4 GHz Wi-Fi band?",
    "choices": [
      "1, 5, 11",
      "1, 6, 11",
      "2, 6, 10",
      "36, 40, 44"
    ],
    "correctIndex": 1,
    "explanation": "Channels 1, 6, and 11 have no overlapping frequencies in the 2.4 GHz spectrum, minimizing adjacent-channel interference."
  },
  {
    "id": "topo-17",
    "category": "Network Topologies and Architecture",
    "question": "In Wi-Fi engineering, what term describes the loss of signal strength as it propagates through space or materials, measured with a Wi-Fi analyzer?",
    "choices": [
      "Jitter",
      "Attenuation",
      "Crosstalk",
      "Modulation"
    ],
    "correctIndex": 1,
    "explanation": "Attenuation is the reduction in signal power over distance or when passing through obstacles (walls, glass)."
  },
  {
    "id": "topo-18",
    "category": "Network Topologies and Architecture",
    "question": "Which 5G technology pillar is optimized to support millions of dense Internet of Things (IoT) devices in small areas?",
    "choices": [
      "eMBB (Enhanced Mobile Broadband)",
      "URLLC (Ultra-Reliable Low-Latency Communications)",
      "mMTC (Massive Machine-Type Communications)",
      "Slicing"
    ],
    "correctIndex": 2,
    "explanation": "mMTC (Massive Machine-Type Communications) handles high-density, low-power connections, making it ideal for IoT sensors."
  },
  {
    "id": "topo-19",
    "category": "Network Topologies and Architecture",
    "question": "What 5G architecture feature allows operators to partition a single physical network into multiple virtual networks tailored to specific services?",
    "choices": [
      "MIMO",
      "Slicing",
      "Millimeter Wave",
      "Beamforming"
    ],
    "correctIndex": 1,
    "explanation": "Network Slicing allows providers to dedicate virtual networks (slices) with varying speed, latency, or capacity parameters to specific workloads (e.g., emergency service vs. general data)."
  },
  {
    "id": "topo-20",
    "category": "Network Topologies and Architecture",
    "question": "What type of routing relies on routers exchanging routing advertisements dynamically to update metrics like bandwidth and delay, in contrast to manual configurations?",
    "choices": [
      "Static Routing",
      "Dynamic Routing",
      "Policy-Based Routing",
      "Stub Routing"
    ],
    "correctIndex": 1,
    "explanation": "Dynamic Routing utilizes routing protocols (OSPF, EIGRP, BGP) to discover paths and adapt to network changes automatically."
  },
  {
    "id": "sec-1",
    "category": "Network Security",
    "question": "What is the standard formula used to calculate risk in security architectures?",
    "choices": [
      "Risk = Threat * Impact",
      "Risk = Vulnerability * Threat * Asset Value (Impact)",
      "Risk = Exploit * Threat",
      "Risk = Attack Surface * Vulnerability"
    ],
    "correctIndex": 1,
    "explanation": "Risk is defined as the product of the probability of a threat exploiting a vulnerability and the resulting financial or operational impact (Asset Value)."
  },
  {
    "id": "sec-2",
    "category": "Network Security",
    "question": "What security threat term describes highly organized, well-funded cybercriminals targeting a network over long periods for espionage or theft?",
    "choices": [
      "Zero-Day Threat",
      "Advanced Persistent Threat (APT)",
      "Supply Chain Vulnerability",
      "Worm"
    ],
    "correctIndex": 1,
    "explanation": "Advanced Persistent Threats (APTs) are targeted attacks conducted by sophisticated entities (like state-sponsored groups) over extended durations."
  },
  {
    "id": "sec-3",
    "category": "Network Security",
    "question": "What type of VPN connection links two entire local networks (such as remote corporate branch offices) over the Internet?",
    "choices": [
      "Client-to-Site VPN",
      "Site-to-Site VPN",
      "Personal/Consumer VPN",
      "Clientless SSL VPN"
    ],
    "correctIndex": 1,
    "explanation": "Site-to-Site VPNs connect distinct networks using VPN gateways at each perimeter, making the tunnel transparent to the end devices."
  },
  {
    "id": "sec-4",
    "category": "Network Security",
    "question": "In VPN configuration, what is the difference between a Full Tunnel and a Split Tunnel?",
    "choices": [
      "Full Tunnel is faster; Split Tunnel is more secure.",
      "Full Tunnel routes all traffic (corporate and public) through the VPN; Split Tunnel routes only corporate traffic through the VPN, sending public traffic out locally.",
      "Full Tunnel uses TCP; Split Tunnel uses UDP.",
      "Full Tunnel requires an app; Split Tunnel is clientless."
    ],
    "correctIndex": 1,
    "explanation": "Full tunneling routes all internet and local traffic through the secure VPN gateway, protecting all traffic but consuming bandwidth. Split tunneling sends only corporate-destined traffic through the VPN."
  },
  {
    "id": "sec-5",
    "category": "Network Security",
    "question": "What symmetric encryption algorithm uses a block size of 128 bits and a key length of 256 bits, and is considered the standard for securing data at rest?",
    "choices": [
      "SHA-256",
      "AES-256",
      "RSA-2048",
      "MD5"
    ],
    "correctIndex": 1,
    "explanation": "AES-256 (Advanced Encryption Standard with a 256-bit key) is a highly secure symmetric cipher used to encrypt stored files and databases."
  },
  {
    "id": "sec-6",
    "category": "Network Security",
    "question": "What Cisco feature replicates traffic from a switch interface or VLAN to a monitoring port for packet capture (IDS/performance check)?",
    "choices": [
      "GRE Tunneling",
      "SPAN (Switch Port Analyzer)",
      "LACP",
      "SVI"
    ],
    "correctIndex": 1,
    "explanation": "SPAN (often called port mirroring) copies traffic from source ports or VLANs to a destination port connected to an analysis device."
  },
  {
    "id": "sec-7",
    "category": "Network Security",
    "question": "What protocol encapsulates packets inside a point-to-point tunnel, allowing routing updates to travel between remote routers across the internet?",
    "choices": [
      "GRE (Generic Routing Encapsulation) Tunneling",
      "LACP",
      "SNMP",
      "SAML"
    ],
    "correctIndex": 0,
    "explanation": "GRE Tunneling encapsulates multicast and routing protocol packets inside standard unicast IP headers to route them over public networks."
  },
  {
    "id": "sec-8",
    "category": "Network Security",
    "question": "Which version of the Simple Network Management Protocol (SNMP) is the first to introduce robust cryptographic encryption and message source verification?",
    "choices": [
      "SNMPv1",
      "SNMPv2",
      "SNMPv3",
      "SNMPv4"
    ],
    "correctIndex": 2,
    "explanation": "SNMPv3 added encryption, authentication, and access controls to management messages, addressing major security flaws in v1/v2."
  },
  {
    "id": "sec-9",
    "category": "Network Security",
    "question": "What switch feature prevents rogue DHCP servers by categorizing ports as 'trusted' (connected to the official server) or 'untrusted' (clients)?",
    "choices": [
      "Port Security",
      "DHCP Snooping",
      "802.1X",
      "Dynamic ARP Inspection"
    ],
    "correctIndex": 1,
    "explanation": "DHCP Snooping builds a database of leases and blocks rogue DHCP offers originating from untrusted ports."
  },
  {
    "id": "sec-10",
    "category": "Network Security",
    "question": "In switch Port Security, what violation action discards offending packets, logs the violation to the system logs, increments the security counter, but keeps the port active?",
    "choices": [
      "Protect",
      "Restrict",
      "Shutdown",
      "Disable"
    ],
    "correctIndex": 1,
    "explanation": "The 'Restrict' mode drops packets, logs a message, and increments the counter. 'Protect' drops packets silently. 'Shutdown' disables the interface entirely."
  },
  {
    "id": "sec-11",
    "category": "Network Security",
    "question": "What IEEE standard defines port-based network access control and user authentication for enterprise LANs?",
    "choices": [
      "IEEE 802.1Q",
      "IEEE 802.1X",
      "IEEE 802.3",
      "IEEE 802.11r"
    ],
    "correctIndex": 1,
    "explanation": "IEEE 802.1X requires devices to authenticate (via RADIUS/TACACS+) before the switch transitions the port to an active data state."
  },
  {
    "id": "sec-12",
    "category": "Network Security",
    "question": "What asymmetric DDoS attack spoof-targets NTP or DNS servers, requesting large directory dumps while pretending to be the victim IP, resulting in massive flooding?",
    "choices": [
      "SYN Flood",
      "Amplification Attack",
      "MAC Flood",
      "XSS Injection"
    ],
    "correctIndex": 1,
    "explanation": "Amplification attacks send small requests with a spoofed source IP to public services (DNS/NTP), which respond with huge payloads directed at the victim."
  },
  {
    "id": "sec-13",
    "category": "Network Security",
    "question": "Which attack floods a switch's content addressable memory (CAM) table with dummy MAC addresses, forcing the switch to act like a hub and broadcast all frames?",
    "choices": [
      "ARP Poisoning",
      "MAC Flooding",
      "DNS Poisoning",
      "DHCP Starvation"
    ],
    "correctIndex": 1,
    "explanation": "MAC Flooding overflows the switch CAM table. Once full, the switch defaults to broadcasting all incoming frames, allowing attackers to sniff data."
  },
  {
    "id": "sec-14",
    "category": "Network Security",
    "question": "What vulnerability mitigation consists of checking and restricting data parameters (like location, time, and system attributes) before granting access?",
    "choices": [
      "Role-Based Access Control (RBAC)",
      "Attribute-Based Access Control (ABAC)",
      "Discretionary Access Control (DAC)",
      "Mandatory Access Control (MAC)"
    ],
    "correctIndex": 1,
    "explanation": "ABAC (Attribute-Based Access Control) grants permissions based on dynamic conditions (attributes) like user age, time of access, device type, or location."
  },
  {
    "id": "sec-15",
    "category": "Network Security",
    "question": "What is the difference between DAC (Discretionary Access Control) and MAC (Mandatory Access Control)?",
    "choices": [
      "DAC is command line; MAC is graphic UI.",
      "DAC relies on user roles; MAC relies on hardware MAC addresses.",
      "DAC allows the resource owner to dictate who gets access; MAC enforces security clearances determined by a central system administrator.",
      "They are identical concepts."
    ],
    "correctIndex": 2,
    "explanation": "In DAC, file owners control permissions. In MAC, the system enforces access controls based on classifications (labels) and clearances, typical in military systems."
  },
  {
    "id": "sec-16",
    "category": "Network Security",
    "question": "What cryptographic security concept does salting add to password hashing?",
    "choices": [
      "It speeds up the hashing execution.",
      "It appends a random string of characters to the password before hashing to defend against rainbow table attacks.",
      "It decrypts the hashes back into plaintext automatically.",
      "It converts symmetric keys into public keys."
    ],
    "correctIndex": 1,
    "explanation": "Salting inserts a unique, random value before hashing each password. This ensures identical passwords yield different hashes, neutralizing precomputed rainbow tables."
  },
  {
    "id": "sec-17",
    "category": "Network Security",
    "question": "In AAA frameworks, what function does the 'Accounting' step perform?",
    "choices": [
      "It verifies user credentials.",
      "It determines what commands a user is authorized to execute.",
      "It logs and tracks resources, command histories, and connection times for audit trails.",
      "It calculates subscription licensing costs."
    ],
    "correctIndex": 2,
    "explanation": "Accounting records user actions, connection times, and bandwidth usage for security audits and resource monitoring."
  },
  {
    "id": "sec-18",
    "category": "Network Security",
    "question": "Which authentication standard is XML-based, does not support mobile environments natively, and allows users to authenticate once to access multiple web apps (SSO)?",
    "choices": [
      "OAuth",
      "SAML (Security Assertion Markup Language)",
      "RADIUS",
      "OIDC"
    ],
    "correctIndex": 1,
    "explanation": "SAML is an XML-based federated identity standard used for web SSO, commonly used by enterprise SaaS applications."
  },
  {
    "id": "sec-19",
    "category": "Network Security",
    "question": "What Cisco-developed, TCP-based administrative protocol encrypts the entire payload (compared to RADIUS which only encrypts the password) and separates authentication from authorization?",
    "choices": [
      "LDAP",
      "TACACS+",
      "SAML",
      "RADIUS"
    ],
    "correctIndex": 1,
    "explanation": "TACACS+ uses TCP port 49, encrypts the entire packet header and payload, and decouples auth/authz, making it popular for network device admin access."
  },
  {
    "id": "sec-20",
    "category": "Network Security",
    "question": "What directory access structure represents the highest level administrative boundary in Microsoft Active Directory?",
    "choices": [
      "Domain Controller",
      "Organizational Unit (OU)",
      "Tree",
      "Forest"
    ],
    "correctIndex": 3,
    "explanation": "An Active Directory Forest is the top-level container that houses one or more domain trees sharing a schema and global catalog."
  },
  {
    "id": "proto-1",
    "category": "Network Protocols and Standards",
    "question": "What ports are reserved for the File Transfer Protocol (FTP), and what are their respective roles?",
    "choices": [
      "Port 22 for control, Port 23 for data",
      "Port 20 for data, Port 21 for control commands",
      "Port 69 for control, Port 123 for data",
      "Port 990 for explicit data, Port 443 for control"
    ],
    "correctIndex": 1,
    "explanation": "FTP uses TCP port 21 to send commands and manage the connection (Control) and port 20 to transfer raw files (Data)."
  },
  {
    "id": "proto-2",
    "category": "Network Protocols and Standards",
    "question": "What is a key difference between SFTP and FTPS?",
    "choices": [
      "SFTP runs over TLS; FTPS runs over SSH.",
      "SFTP runs over SSH (typically port 22); FTPS runs over TLS/SSL (utilizing certificates, port 990 or explicit STARTTLS).",
      "SFTP is plaintext; FTPS is encrypted.",
      "SFTP is UDP-based; FTPS is TCP-based."
    ],
    "correctIndex": 1,
    "explanation": "SFTP leverages SSH for encrypted file transfers. FTPS wraps standard FTP sessions in TLS/SSL encryption."
  },
  {
    "id": "proto-3",
    "category": "Network Protocols and Standards",
    "question": "What are the roles of SPF, DKIM, and DMARC in email security?",
    "choices": [
      "SPF encrypts payloads; DKIM resolves routing; DMARC manages pop interfaces.",
      "SPF lists authorized sender IPs in a DNS TXT record; DKIM adds a cryptographic signature to headers; DMARC provides policies on handling checks that fail.",
      "They are routing protocols for exchange servers.",
      "They map ports 25, 110, and 143 together."
    ],
    "correctIndex": 1,
    "explanation": "SPF defines which IPs can send mail for a domain. DKIM signs headers cryptographically. DMARC tells receiving servers how to handle messages that fail SPF/DKIM validation."
  },
  {
    "id": "proto-4",
    "category": "Network Protocols and Standards",
    "question": "In DNS querying, what is the role of a Recursive Resolver compared to an Authoritative Server?",
    "choices": [
      "Resolvers hold the master zone database; Authoritative servers query root servers.",
      "Resolvers search the hierarchy on behalf of the client; Authoritative servers hold the actual DNS records for a domain.",
      "Resolvers use TCP 53; Authoritative servers use UDP 53.",
      "They are identical components."
    ],
    "correctIndex": 1,
    "explanation": "The resolver (typically ISP/public DNS) queries the DNS tree for the client. Authoritative DNS servers hold the actual records (like A/AAAA) for the zone."
  },
  {
    "id": "proto-5",
    "category": "Network Protocols and Standards",
    "question": "What is the correct 4-step transaction sequence for DHCP addressing?",
    "choices": [
      "Request, Offer, Discover, Acknowledgement",
      "Discover, Offer, Request, Acknowledgement (DORA)",
      "Solicitation, Advertisement, Request, Lease",
      "Discover, Request, Lease, Acknowledgement"
    ],
    "correctIndex": 1,
    "explanation": "The DHCP lease sequence is: Discover (client broadcast), Offer (server unicast), Request (client broadcast), Acknowledgement (server unicast)."
  },
  {
    "id": "proto-6",
    "category": "Network Protocols and Standards",
    "question": "In DHCP configuration, what timers correspond to lease renewal (T1) and rebinding (T2)?",
    "choices": [
      "T1 at 50% of lease time; T2 at 87.5% of lease time",
      "T1 at 25% of lease time; T2 at 50% of lease time",
      "T1 at 75% of lease time; T2 at 95% of lease time",
      "T1 at 12 hours; T2 at 24 hours"
    ],
    "correctIndex": 0,
    "explanation": "A DHCP client attempts to renew its lease with the original server at 50% (T1). If unsuccessful, it attempts to bind to any DHCP server at 87.5% (T2)."
  },
  {
    "id": "proto-7",
    "category": "Network Protocols and Standards",
    "question": "What wireless standard is branded as Wi-Fi 6, and what technologies did it introduce to improve density and efficiency?",
    "choices": [
      "802.11ac; introduced Beamforming and MU-MIMO",
      "802.11ax; introduced OFDMA (Orthogonal Frequency Division Multiple Access) and RU channel divisions",
      "802.11n; introduced MIMO and dual-band support",
      "802.11be; introduced 320 MHz channels"
    ],
    "correctIndex": 1,
    "explanation": "Wi-Fi 6 (802.11ax) uses OFDMA to divide channels into smaller Resource Units (RU), allowing simultaneous communication with multiple clients."
  },
  {
    "id": "proto-8",
    "category": "Network Protocols and Standards",
    "question": "What is the maximum distance specification for all copper Ethernet twisted-pair cabling standards (Cat 5e to Cat 8)?",
    "choices": [
      "55 meters",
      "100 meters",
      "300 meters",
      "500 meters"
    ],
    "correctIndex": 1,
    "explanation": "The standard distance limit for copper Ethernet runs is 100 meters, after which signal attenuation requires a repeater or switch."
  },
  {
    "id": "proto-9",
    "category": "Network Protocols and Standards",
    "question": "What is a critical difference between TCP and UDP regarding packet routing and delivery?",
    "choices": [
      "TCP is stateless; UDP is stateful.",
      "TCP guarantees delivery and ordering via sequence numbers and retransmissions; UDP is connectionless and offers best-effort delivery with minimal overhead.",
      "TCP runs at Layer 3; UDP runs at Layer 4.",
      "TCP requires fiber optics; UDP runs over copper."
    ],
    "correctIndex": 1,
    "explanation": "TCP is a connection-oriented protocol that handles error correction and flow control. UDP is connectionless and sends datagrams without checking if the receiver is ready or received them."
  },
  {
    "id": "proto-10",
    "category": "Network Protocols and Standards",
    "question": "What Layer 2 loop-prevention protocol uses Bridge Protocol Data Unit (BPDU) hello messages to determine link states and block redundant switch ports?",
    "choices": [
      "LACP (802.3ad)",
      "STP (Spanning Tree Protocol - 802.1D)",
      "RSTP (802.1w)",
      "OSPF"
    ],
    "correctIndex": 1,
    "explanation": "STP (802.1D) prevents packet storms by sending BPDUs to discover switching loops and transition redundant paths into a Blocking state."
  },
  {
    "id": "proto-11",
    "category": "Network Protocols and Standards",
    "question": "What are the port states in the standard 802.1D Spanning Tree Protocol?",
    "choices": [
      "Blocking, Listening, Learning, Forwarding, Disabled",
      "Blocking, Learning, Forwarding, Discarding",
      "Active, Passive, Successor, Feasible",
      "Trunk, Access, SVI, Tunnel"
    ],
    "correctIndex": 0,
    "explanation": "The five STP states are Blocking (prevents loops), Listening (cleans MAC table), Learning (populates MAC table), Forwarding (operational), and Disabled (admin down)."
  },
  {
    "id": "proto-12",
    "category": "Network Protocols and Standards",
    "question": "Which dynamic routing protocol is a link-state protocol that uses the Dijkstra algorithm to calculate the shortest path based on cost (bandwidth)?",
    "choices": [
      "RIP",
      "EIGRP",
      "OSPF (Open Shortest Path First)",
      "BGP"
    ],
    "correctIndex": 2,
    "explanation": "OSPF is a link-state routing protocol that constructs topological maps and calculates paths using cost metrics (derived from bandwidth)."
  },
  {
    "id": "proto-13",
    "category": "Network Protocols and Standards",
    "question": "In OSPF, what Link State Advertisement (LSA) type is sent by an Area Border Router (ABR) to summarize routes between different OSPF areas?",
    "choices": [
      "Type 1 (Router LSA)",
      "Type 2 (Network LSA)",
      "Type 3 (Summary LSA)",
      "Type 5 (AS External LSA)"
    ],
    "correctIndex": 2,
    "explanation": "Type 3 Summary LSAs are generated by ABRs to advertise routes from one OSPF area to another."
  },
  {
    "id": "proto-14",
    "category": "Network Protocols and Standards",
    "question": "What dynamic routing protocol is Cisco-proprietary (historically), uses the DUAL algorithm, calculates metrics based on bandwidth and delay, and supports unequal cost load balancing?",
    "choices": [
      "RIPv2",
      "OSPF",
      "EIGRP (Enhanced Interior Gateway Routing Protocol)",
      "BGP"
    ],
    "correctIndex": 2,
    "explanation": "EIGRP uses the Diffusing Update Algorithm (DUAL), evaluates cumulative delay and minimum bandwidth, and is unique in supporting unequal cost load balancing."
  },
  {
    "id": "proto-15",
    "category": "Network Protocols and Standards",
    "question": "What path-vector protocol operates as the primary routing standard of the internet, exchanging routing paths between autonomous systems (AS) over TCP port 179?",
    "choices": [
      "OSPF",
      "EIGRP",
      "RIP",
      "BGP (Border Gateway Protocol)"
    ],
    "correctIndex": 3,
    "explanation": "BGP is the exterior gateway protocol that manages routing across the global internet by communicating between autonomous systems."
  },
  {
    "id": "proto-16",
    "category": "Network Protocols and Standards",
    "question": "What protocol allows multiple default gateways to share a single virtual IP address, providing immediate failover if the primary router goes offline?",
    "choices": [
      "LACP",
      "FHRP (First Hop Redundancy Protocol)",
      "OSPF",
      "STP"
    ],
    "correctIndex": 1,
    "explanation": "FHRPs (like HSRP and VRRP) allow redundant physical routers to act as a single logical default gateway, securing network paths."
  },
  {
    "id": "proto-17",
    "category": "Network Protocols and Standards",
    "question": "What wireless security protocol replaced pre-shared keys (PSK) with Simultaneous Authentication of Equals (SAE) to protect against offline dictionary attacks?",
    "choices": [
      "WEP",
      "WPA",
      "WPA2",
      "WPA3"
    ],
    "correctIndex": 3,
    "explanation": "WPA3 implements SAE (Simultaneous Authentication of Equals) to perform a secure handshake that prevents attackers from decrypting captured traffic offline."
  },
  {
    "id": "proto-18",
    "category": "Network Protocols and Standards",
    "question": "What DNS record type maps an IP address back to its human-readable domain name (performing reverse lookups)?",
    "choices": [
      "A Record",
      "AAAA Record",
      "PTR (Pointer) Record",
      "CNAME Record"
    ],
    "correctIndex": 2,
    "explanation": "PTR records are stored in the in-addr.arpa zone and resolve IP addresses to domain names, the exact reverse of A/AAAA records."
  },
  {
    "id": "proto-19",
    "category": "Network Protocols and Standards",
    "question": "What protocol combines multiple physical network connections into a single logical link to increase bandwidth and provide redundancy?",
    "choices": [
      "Spanning Tree Protocol (STP)",
      "Link Aggregation Control Protocol (LACP)",
      "High-Level Data Link Control (HDLC)",
      "RIP"
    ],
    "correctIndex": 1,
    "explanation": "LACP (802.3ad/802.1AX) negotiates the grouping of multiple physical Ethernet interfaces into a single logical channel (EtherChannel)."
  },
  {
    "id": "proto-20",
    "category": "Network Protocols and Standards",
    "question": "What is the standard Maximum Transmission Unit (MTU) size for standard Ethernet frames, and what are frames larger than this called?",
    "choices": [
      "1000 bytes; Super Frames",
      "1500 bytes; Jumbo Frames",
      "512 bytes; Extended Frames",
      "9000 bytes; Huge Frames"
    ],
    "correctIndex": 1,
    "explanation": "The default Ethernet MTU is 1500 bytes. Frames larger than this are called Jumbo Frames, which are common in datacenters to reduce overhead."
  },
  {
    "id": "hw-1",
    "category": "Network Hardware and Connectivity",
    "question": "What is the primary difference between Network Attached Storage (NAS) and a Storage Area Network (SAN)?",
    "choices": [
      "NAS uses fiber channels; SAN uses standard RJ45 copper.",
      "NAS provides file-level access over standard LAN networks (Ethernet, TCP/IP); SAN provides block-level access over a dedicated high-speed network (Fibre Channel / iSCSI).",
      "NAS is internal to a server; SAN is completely cloud-based.",
      "There is no difference; they are different terms for RAID storage."
    ],
    "correctIndex": 1,
    "explanation": "NAS acts as a file server (file-level access, e.g. NFS) connected to the local network. A SAN provides block-level access (appearing as a local disk) to servers via a dedicated fabric."
  },
  {
    "id": "hw-2",
    "category": "Network Hardware and Connectivity",
    "question": "What Fibre Channel implementation encapsulates Fibre Channel frames directly into Ethernet frames, relying on Data Center Bridging (DCB) to prevent packet loss?",
    "choices": [
      "iSCSI",
      "FCoE (Fibre Channel over Ethernet)",
      "NAS",
      "GRE Tunneling"
    ],
    "correctIndex": 1,
    "explanation": "FCoE maps Fibre Channel commands onto high-speed Ethernet physical networks, requiring DCB to maintain a lossless network state."
  },
  {
    "id": "hw-3",
    "category": "Network Hardware and Connectivity",
    "question": "What type of fiber optic connector is local, has a small form factor, and uses a push-pull latching clip (making it standard in dense datacenters)?",
    "choices": [
      "SC (Square Connector)",
      "LC (Local Connector)",
      "ST (Straight Tip)",
      "MPO (Multi-Fiber Push On)"
    ],
    "correctIndex": 1,
    "explanation": "LC (Local Connector) is a small, high-density fiber connector with a locking tab, widely used in modern switches and servers."
  },
  {
    "id": "hw-4",
    "category": "Network Hardware and Connectivity",
    "question": "In network server infrastructures, what is a key architectural advantage of Blade Servers compared to Rack Servers?",
    "choices": [
      "Blade servers are cheaper up front and require more individual cabling.",
      "Blade servers are highly modular, sharing power supplies, cooling fans, and network switches in a single chassis, reducing cabling by up to 85%.",
      "Blade servers run cooler without needing HVAC systems.",
      "Blade servers do not support virtual switches."
    ],
    "correctIndex": 1,
    "explanation": "Blade servers plug into a shared backplane chassis, consolidating cabling, cooling, and power resources, which increases density and reduces maintenance costs."
  },
  {
    "id": "hw-5",
    "category": "Network Hardware and Connectivity",
    "question": "In telecommunication wiring standards, what does the MDF (Main Distribution Frame) connect, and how does it relate to IDFs?",
    "choices": [
      "The MDF connects individual client terminals to office walls.",
      "The MDF is the central demarcation point where external WAN connections join the internal network, feeding signals to intermediate IDFs (wiring closets).",
      "The MDF is a virtual software adapter; the IDF is physical.",
      "The MDF is a fiber standard; the IDF is copper."
    ],
    "correctIndex": 1,
    "explanation": "The Main Distribution Frame (MDF) connects the primary external lines into the facility, distributing them to Intermediate Distribution Frames (IDFs) situated in wiring closets on different floors."
  },
  {
    "id": "hw-6",
    "category": "Network Hardware and Connectivity",
    "question": "What height is represented by a single Rack Unit (1U) in standard 19-inch equipment racks?",
    "choices": [
      "1.25 inches",
      "1.75 inches",
      "2.00 inches",
      "3.50 inches"
    ],
    "correctIndex": 1,
    "explanation": "A standard Rack Unit (U) is 1.75 inches high, which is the vertical measurement used to size rackmount server and switch chassis."
  },
  {
    "id": "hw-7",
    "category": "Network Hardware and Connectivity",
    "question": "What are the recommended temperature and relative humidity guidelines for corporate server rooms managed by HVAC systems?",
    "choices": [
      "50–60°F and 10–20% humidity",
      "64–81°F (18–27°C) and 40–60% humidity",
      "75–90°F and 70–80% humidity",
      "Freezing temperatures (32°F) and 0% humidity"
    ],
    "correctIndex": 1,
    "explanation": "Server rooms are typically kept between 64°F and 81°F with a relative humidity of 40% to 60% to prevent static discharge (dry air) or condensation (wet air)."
  },
  {
    "id": "hw-8",
    "category": "Network Hardware and Connectivity",
    "question": "Which virtual switch (vSwitch) mode allows a virtual machine to communicate with other VMs and the host operating system, but blocks access to the physical external network?",
    "choices": [
      "External Switch Mode (Bridged)",
      "Internal Switch Mode (Host-Only)",
      "Private Switch Mode",
      "Trunk Switch Mode"
    ],
    "correctIndex": 1,
    "explanation": "An Internal Switch allows communication between VMs and the physical host OS, but does not bind to a physical NIC to route traffic external to the host."
  },
  {
    "id": "hw-9",
    "category": "Network Hardware and Connectivity",
    "question": "What physical transceiver type supports data transfer rates up to 40 Gbps by bundling four 10 Gbps lanes into a single module?",
    "choices": [
      "SFP+",
      "QSFP+ (Quad Small Form-factor Pluggable Plus)",
      "SFP28",
      "QSFP28"
    ],
    "correctIndex": 1,
    "explanation": "QSFP+ transceivers combine four transmit/receive channels of 10 Gbps each, delivering 40 Gbps throughput."
  },
  {
    "id": "hw-10",
    "category": "Network Hardware and Connectivity",
    "question": "What does the 3-2-1 backup strategy recommend for data redundancy?",
    "choices": [
      "3 physical copies, 2 different network ports, 1 cloud target",
      "3 total copies of data, stored on 2 different media types, with 1 copy stored off-site",
      "3 backups per day, on 2 separate disks, for 1 year",
      "3 servers, 2 SAN controllers, 1 NAS backup"
    ],
    "correctIndex": 1,
    "explanation": "The 3-2-1 rule is a backup standard: keep 3 copies of data (1 primary, 2 backups), on 2 different media types (e.g., local drive and tape), with 1 copy stored off-site (e.g., cloud)."
  },
  {
    "id": "hw-11",
    "category": "Network Hardware and Connectivity",
    "question": "What is the difference between an Incremental Backup and a Differential Backup?",
    "choices": [
      "Incremental backups are faster to restore; differential backups are faster to copy.",
      "Incremental backups only copy files changed since the last backup of any type; Differential backups copy files changed since the last full backup.",
      "Incremental backups encrypt data; differential backups do not.",
      "Incremental is completely manual; differential is automated."
    ],
    "correctIndex": 1,
    "explanation": "Incremental backups only save data modified since the absolute last backup (reducing backup window time). Differential backups save all data changed since the last full backup (making restores faster since only the full and one differential are needed)."
  },
  {
    "id": "hw-12",
    "category": "Network Hardware and Connectivity",
    "question": "What are the two standards for copper twisted-pair pinout wiring, and what is the difference in their color sequences?",
    "choices": [
      "T568A starts with white/orange; T568B starts with white/green.",
      "T568A starts with white/green and green; T568B starts with white/orange and orange (swapping pairs 2 and 3).",
      "T568A uses 8 pins; T568B uses only 4 pins.",
      "T568A is for single-mode; T568B is for multi-mode."
    ],
    "correctIndex": 1,
    "explanation": "T568A pin 1 and 2 are white/green and green. T568B pin 1 and 2 are white/orange and orange. These standards swap the orange and green pairs."
  },
  {
    "id": "hw-13",
    "category": "Network Hardware and Connectivity",
    "question": "What type of patch cable is constructed by terminating one end with the T568A standard and the other end with the T568B standard, historically used to connect identical device types?",
    "choices": [
      "Straight-Through Cable",
      "Crossover Cable",
      "Rollover Cable",
      "Shielded Loopback Cable"
    ],
    "correctIndex": 1,
    "explanation": "Crossover cables swap the transmit and receive lines (T568A on one side, T568B on the other), enabling direct communication between similar devices (e.g., switch to switch) before Auto-MDIX was common."
  },
  {
    "id": "hw-14",
    "category": "Network Hardware and Connectivity",
    "question": "Which type of copper coaxial cable has an impedance of 75 ohms and is the modern standard for cable modems and television signal distribution?",
    "choices": [
      "RG-59",
      "RG-6",
      "RG-11",
      "TwinAx"
    ],
    "correctIndex": 1,
    "explanation": "RG-6 coaxial cable is shielded and rated for 75 ohms, designed for high-frequency applications like cable television and broadband internet."
  },
  {
    "id": "hw-15",
    "category": "Network Hardware and Connectivity",
    "question": "What is a major fire hazard associated with using cheap Copper Clad Aluminum (CCA) cables instead of Solid Copper Ethernet cables?",
    "choices": [
      "CCA cables catch fire when exposed to radio frequencies.",
      "CCA cables have higher electrical resistance, causing them to overheat and potentially ignite when carrying Power over Ethernet (PoE) currents.",
      "CCA cables degrade into toxic gases when running gigabit speeds.",
      "CCA cables do not have a fire hazard; they are just slower."
    ],
    "correctIndex": 1,
    "explanation": "CCA wire has higher resistance than pure copper. Running PoE over CCA cables causes significant heat buildup, which can melt insulation and cause electrical fires."
  },
  {
    "id": "apple-1",
    "category": "AppleTalk",
    "question": "Which AppleTalk protocol operates at the Data Link Layer (Layer 2) to handle medium-speed data transmission over Apple's original serial cabling?",
    "choices": [
      "AARP (Address Resolution)",
      "LLAP (LocalTalk Link Access Protocol)",
      "EtherTalk",
      "DDP (Datagram Delivery)"
    ],
    "correctIndex": 1,
    "explanation": "LLAP is the Layer 2 (Data Link) protocol for AppleTalk that handles medium-speed serial data transmission over proprietary LocalTalk wiring."
  },
  {
    "id": "apple-2",
    "category": "AppleTalk",
    "question": "Which AppleTalk Network Layer protocol resolves logical node addresses into physical hardware MAC addresses?",
    "choices": [
      "DDP (Datagram Delivery)",
      "AARP (AppleTalk Address Resolution Protocol)",
      "RTMP (Routing Table Maintenance)",
      "NBP (Name Binding)"
    ],
    "correctIndex": 1,
    "explanation": "AARP maps logical AppleTalk network addresses to physical MAC addresses, performing the same function as ARP in the TCP/IP suite."
  },
  {
    "id": "apple-3",
    "category": "AppleTalk",
    "question": "What is the foundational Network Layer protocol in AppleTalk responsible for socket-to-socket, best-effort datagram delivery?",
    "choices": [
      "AARP",
      "DDP (Datagram Delivery Protocol)",
      "ATP (Transaction Protocol)",
      "ADSP (Data Stream Protocol)"
    ],
    "correctIndex": 1,
    "explanation": "DDP is the core Layer 3 routing protocol in AppleTalk, responsible for best-effort delivery of packets across network sockets."
  },
  {
    "id": "apple-4",
    "category": "AppleTalk",
    "question": "Which AppleTalk routing protocol maintains routing tables across routers via periodic updates, and what is its optimized, update-only alternative?",
    "choices": [
      "RTMP (Routing Table Maintenance Protocol); optimized by AURP (AppleTalk Update-Based Routing Protocol)",
      "DDP; optimized by ZIP",
      "ATP; optimized by ADSP",
      "AEP; optimized by LLAP"
    ],
    "correctIndex": 0,
    "explanation": "RTMP is the default distance-vector routing protocol in AppleTalk. AURP is the optimized alternative that sends routing updates only when changes occur, rather than broadcasting periodically."
  },
  {
    "id": "apple-5",
    "category": "AppleTalk",
    "question": "Which AppleTalk Transport Layer protocol resolves human-readable device names (e.g., 'Accounting LaserWriter') into numerical AppleTalk addresses?",
    "choices": [
      "ZIP (Zone Information)",
      "NBP (Name Binding Protocol)",
      "ATP (Transaction Protocol)",
      "PAP (Printer Access Protocol)"
    ],
    "correctIndex": 1,
    "explanation": "NBP maps arbitrary, human-readable device names to logical AppleTalk addresses, acting like DNS in the AppleTalk suite."
  },
  {
    "id": "apple-6",
    "category": "AppleTalk",
    "question": "What AppleTalk Transport Layer protocol provides a reliable, request-response mechanism to ensure transactions are completed without loss?",
    "choices": [
      "ATP (AppleTalk Transaction Protocol)",
      "AEP (AppleTalk Echo Protocol)",
      "DDP",
      "ASP (Session Protocol)"
    ],
    "correctIndex": 0,
    "explanation": "ATP provides reliable transaction control using a request-response mechanism at the Transport Layer."
  },
  {
    "id": "apple-7",
    "category": "AppleTalk",
    "question": "Which AppleTalk protocol sends packets to a target destination and waits for a reply, functioning as a reachability and round-trip time diagnostics test (similar to PING)?",
    "choices": [
      "AEP (AppleTalk Echo Protocol)",
      "ATP",
      "RTMP",
      "LLAP"
    ],
    "correctIndex": 0,
    "explanation": "AEP sends echo requests to a node to verify connectivity and calculate round-trip latency, similar to ICMP Ping."
  },
  {
    "id": "apple-8",
    "category": "AppleTalk",
    "question": "Which Session/Presentation layer protocol in AppleTalk maps logical network numbers to human-readable zone names (groups of devices)?",
    "choices": [
      "ASP (Session Protocol)",
      "ZIP (Zone Information Protocol)",
      "PAP (Printer Access)",
      "AFP (Filing Protocol)"
    ],
    "correctIndex": 1,
    "explanation": "ZIP maintains the mapping of networks to zone names, allowing users to browse services by friendly group names."
  },
  {
    "id": "apple-9",
    "category": "AppleTalk",
    "question": "What is the connection-oriented Session-layer protocol in AppleTalk designed specifically to manage print queues and printing sessions?",
    "choices": [
      "AFP (Filing Protocol)",
      "PAP (Printer Access Protocol)",
      "ASP (Session Protocol)",
      "ADSP (Data Stream Protocol)"
    ],
    "correctIndex": 1,
    "explanation": "PAP manages connection setups to network printers and printer spoolers in AppleTalk environments."
  },
  {
    "id": "apple-10",
    "category": "AppleTalk",
    "question": "What is the Application Layer protocol in AppleTalk that provides remote file system sharing operations (allowing users to mount volumes)?",
    "choices": [
      "AFP (Apple Filing Protocol)",
      "PAP",
      "ADSP",
      "ZIP"
    ],
    "correctIndex": 0,
    "explanation": "AFP provides file sharing capabilities in AppleTalk, allowing clients to access and manage remote file systems."
  },
  {
    "id": "trouble-1",
    "category": "Networking Basics",
    "question": "What is the correct order of the 6 CompTIA troubleshooting methodology steps detailed in the FBLA guidelines?",
    "choices": [
      "Identify the problem, Test the theory, Establish a plan, Implement the solution, Verify system functionality, Document findings",
      "Establish a theory, Test the theory, Identify the problem, Implement a plan, Verify system, Document findings",
      "Identify the problem (I), Establish a theory of probable cause (E), Test the theory to determine the cause (T), Establish a plan of action and implement (E), Verify full system functionality and implement preventive measures (V), Document findings, actions, outcomes (D) [I Eat Tacos Every Vacation Day]",
      "Gather symptoms, duplicate problem, establish plan, implement solution, verify system, document"
    ],
    "correctIndex": 2,
    "explanation": "The standard 6-step troubleshooting methodology sequence is remembered by the mnemonic 'I Eat Tacos Every Vacation Day': Identify, Establish theory, Test theory, Establish plan/Implement, Verify, Document."
  },
  {
    "id": "trouble-2",
    "category": "Networking Basics",
    "question": "In the first step of troubleshooting (Identify the problem), what four actions are represented by the acronym SICC?",
    "choices": [
      "Symptom, Identify, Changed, Consequential",
      "Source, Interface, Cable, Connection",
      "State, Interface, Channel, Collision",
      "Segment, Subnet, SVI, Switch"
    ],
    "correctIndex": 0,
    "explanation": "SICC guides the problem identification phase: gather the Symptoms, Identify the affected area/duplicate, determine if anything has Changed, and recognize the Consequential effects/impact."
  },
  {
    "id": "trouble-3",
    "category": "Network Hardware and Connectivity",
    "question": "What command-line tool displays active TCP/UDP connections, listening ports, and ethernet statistics on a local computer?",
    "choices": [
      "ipconfig",
      "nslookup",
      "netstat",
      "tracert"
    ],
    "correctIndex": 2,
    "explanation": "The `netstat` (network statistics) command displays active socket connections, protocol details, and routing tables."
  },
  {
    "id": "trouble-4",
    "category": "Network Hardware and Connectivity",
    "question": "How does the `tracert` utility discover the hop path and locate network failures?",
    "choices": [
      "It sends ARP broadcast requests to every host on the subnet.",
      "It sends packets with incrementally increasing TTL values, recording the source IP of the ICMP Type 11 'Time Exceeded' messages returned by routers.",
      "It establishes a temporary BGP peering connection with each ISP.",
      "It maps logical DNS names to MAC addresses."
    ],
    "correctIndex": 1,
    "explanation": "Tracert sends packets starting with TTL=1. The first router drops it and returns an ICMP Time Exceeded (Type 11) packet, revealing its identity. Tracert then sends a packet with TTL=2, and so on."
  },
  {
    "id": "trouble-5",
    "category": "Network Hardware and Connectivity",
    "question": "What physical troubleshooting tool consists of an RF transmitter that injects a signal into a wire, and a probe to trace the cable's path behind walls?",
    "choices": [
      "Loopback Plug",
      "Time Domain Reflectometer (TDR)",
      "Tone Generator and Probe",
      "Cable Crimper"
    ],
    "correctIndex": 2,
    "explanation": "A Tone Generator (and Probe) is used to locate specific wires in a bundle or map runs through conduits by emitting an audible frequency tone."
  },
  {
    "id": "b1a",
    "category": "Networking Basics",
    "question": "Which type of LAN is typically found in a home office environment with fewer than 10 devices?",
    "choices": [
      "SOHO LAN",
      "Enterprise LAN",
      "Datacenter LAN",
      "Metropolitan LAN"
    ],
    "correctIndex": 0,
    "explanation": "SOHO (Small Office/Home Office) LANs serve small environments with limited devices and simple configurations."
  },
  {
    "id": "b1b",
    "category": "Networking Basics",
    "question": "What distinguishes an enterprise LAN from a SOHO LAN?",
    "choices": [
      "Enterprise LANs use only wireless connections",
      "Enterprise LANs support hundreds or thousands of users with managed switches, VLANs, and redundancy",
      "Enterprise LANs cannot connect to the internet",
      "Enterprise LANs only use coaxial cables"
    ],
    "correctIndex": 1,
    "explanation": "Enterprise LANs are large-scale, feature managed infrastructure like VLANs, redundant links, and centralized administration."
  },
  {
    "id": "b1c",
    "category": "Networking Basics",
    "question": "A datacenter LAN is characterized by:",
    "choices": [
      "Low bandwidth and minimal redundancy",
      "High-density server connectivity, top-of-rack switches, and spine-leaf architecture",
      "Exclusively wireless connections",
      "Single switch for all devices"
    ],
    "correctIndex": 1,
    "explanation": "Datacenter LANs use spine-leaf or fat-tree architectures with high bandwidth and redundancy to interconnect servers."
  },
  {
    "id": "b2a",
    "category": "Networking Basics",
    "question": "Which OSI layer is responsible for converting data into electrical, optical, or radio signals?",
    "choices": [
      "Data Link",
      "Network",
      "Physical",
      "Transport"
    ],
    "correctIndex": 2,
    "explanation": "The Physical layer (Layer 1) handles bit transmission over physical media — cables, connectors, and signal encoding."
  },
  {
    "id": "b2b",
    "category": "Networking Basics",
    "question": "What is the primary function of the Data Link layer?",
    "choices": [
      "Routing packets between networks",
      "Providing node-to-node data transfer and error detection using MAC addresses",
      "Encrypting data for security",
      "Managing user sessions"
    ],
    "correctIndex": 1,
    "explanation": "The Data Link layer (Layer 2) handles framing, MAC addressing, error detection (CRC), and access control on the local segment."
  },
  {
    "id": "b2c",
    "category": "Networking Basics",
    "question": "Which sublayers make up the Data Link layer?",
    "choices": [
      "TCP and UDP",
      "LLC (Logical Link Control) and MAC (Media Access Control)",
      "IP and ICMP",
      "Session and Presentation"
    ],
    "correctIndex": 1,
    "explanation": "The Data Link layer is divided into the LLC sublayer (flow control, error checking) and the MAC sublayer (physical addressing, media access)."
  },
  {
    "id": "b3a",
    "category": "Networking Basics",
    "question": "Which OSI layer is responsible for logical addressing and routing?",
    "choices": [
      "Physical",
      "Data Link",
      "Network",
      "Session"
    ],
    "correctIndex": 2,
    "explanation": "The Network layer (Layer 3) handles IP addressing and routing packets across different networks."
  },
  {
    "id": "b3b",
    "category": "Networking Basics",
    "question": "What does the Transport layer provide?",
    "choices": [
      "Physical signal transmission",
      "MAC addressing",
      "End-to-end communication, segmentation, flow control, and error recovery",
      "Data encryption"
    ],
    "correctIndex": 2,
    "explanation": "The Transport layer (Layer 4) ensures reliable (TCP) or fast (UDP) end-to-end delivery with segmentation and flow control."
  },
  {
    "id": "b3c",
    "category": "Networking Basics",
    "question": "Which protocol operates at the Network layer to report errors and diagnostic information?",
    "choices": [
      "TCP",
      "UDP",
      "ICMP",
      "ARP"
    ],
    "correctIndex": 2,
    "explanation": "ICMP (Internet Control Message Protocol) operates at Layer 3 and is used for error reporting (e.g., ping, traceroute)."
  },
  {
    "id": "b4a",
    "category": "Networking Basics",
    "question": "Which OSI layer manages establishing, maintaining, and terminating sessions between applications?",
    "choices": [
      "Transport",
      "Session",
      "Presentation",
      "Application"
    ],
    "correctIndex": 1,
    "explanation": "The Session layer (Layer 5) manages dialog control, session establishment, maintenance, and termination."
  },
  {
    "id": "b4b",
    "category": "Networking Basics",
    "question": "Data encryption, compression, and format translation occur at which OSI layer?",
    "choices": [
      "Application",
      "Session",
      "Presentation",
      "Transport"
    ],
    "correctIndex": 2,
    "explanation": "The Presentation layer (Layer 6) handles data translation, encryption/decryption, and compression."
  },
  {
    "id": "b4c",
    "category": "Networking Basics",
    "question": "HTTP, FTP, SMTP, and DNS operate at which OSI layer?",
    "choices": [
      "Transport",
      "Session",
      "Presentation",
      "Application"
    ],
    "correctIndex": 3,
    "explanation": "The Application layer (Layer 7) provides network services directly to end-user applications."
  },
  {
    "id": "b5a",
    "category": "Networking Basics",
    "question": "When data is sent across a network, it is broken into smaller units called:",
    "choices": [
      "Frames",
      "Segments",
      "Packets",
      "All of the above, depending on the OSI layer"
    ],
    "correctIndex": 3,
    "explanation": "Data is segmented at Layer 4, packetized at Layer 3, and framed at Layer 2 — different names at different layers."
  },
  {
    "id": "b5b",
    "category": "Networking Basics",
    "question": "What device forwards packets between different networks based on IP addresses?",
    "choices": [
      "Hub",
      "Switch",
      "Router",
      "Repeater"
    ],
    "correctIndex": 2,
    "explanation": "Routers operate at Layer 3 and forward packets between networks using IP addresses and routing tables."
  },
  {
    "id": "b5c",
    "category": "Networking Basics",
    "question": "A switch forwards data based on:",
    "choices": [
      "IP addresses",
      "MAC addresses",
      "Port numbers",
      "Domain names"
    ],
    "correctIndex": 1,
    "explanation": "Switches operate at Layer 2 and use MAC address tables to forward frames to the correct port."
  },
  {
    "id": "b6a",
    "category": "Networking Basics",
    "question": "What role does an ISP play in providing internet access?",
    "choices": [
      "It manufactures networking hardware",
      "It provides the connection between a local network and the internet backbone",
      "It only provides email services",
      "It creates web browsers"
    ],
    "correctIndex": 1,
    "explanation": "An ISP (Internet Service Provider) connects customers to the internet via various technologies (fiber, cable, DSL, satellite)."
  },
  {
    "id": "b6b",
    "category": "Networking Basics",
    "question": "Which device converts signals from an ISP's network into a format usable by your local network?",
    "choices": [
      "Switch",
      "Modem",
      "Firewall",
      "Access point"
    ],
    "correctIndex": 1,
    "explanation": "A modem modulates/demodulates signals between the ISP's infrastructure and the local network."
  },
  {
    "id": "b7a",
    "category": "Networking Basics",
    "question": "A MAC address is:",
    "choices": [
      "A 32-bit logical address assigned by DHCP",
      "A 48-bit hardware address burned into a network interface card",
      "A domain name used for web browsing",
      "A port number for applications"
    ],
    "correctIndex": 1,
    "explanation": "MAC addresses are 48-bit (6-byte) hardware addresses uniquely identifying NICs, written as six hex pairs (e.g., AA:BB:CC:DD:EE:FF)."
  },
  {
    "id": "b7b",
    "category": "Networking Basics",
    "question": "What is the purpose of subnetting?",
    "choices": [
      "To increase internet speed",
      "To divide a large network into smaller, manageable subnetworks",
      "To encrypt network traffic",
      "To eliminate the need for routers"
    ],
    "correctIndex": 1,
    "explanation": "Subnetting divides a network into smaller segments, improving performance, security, and IP address management."
  },
  {
    "id": "b7c",
    "category": "Networking Basics",
    "question": "A subnet mask of 255.255.255.0 (/24) allows how many usable host addresses?",
    "choices": [
      "256",
      "254",
      "255",
      "128"
    ],
    "correctIndex": 1,
    "explanation": "A /24 subnet has 256 addresses total, minus 2 (network address and broadcast) = 254 usable host addresses."
  },
  {
    "id": "b8a",
    "category": "Networking Basics",
    "question": "IPv4 addresses are how many bits long?",
    "choices": [
      "16 bits",
      "32 bits",
      "64 bits",
      "128 bits"
    ],
    "correctIndex": 1,
    "explanation": "IPv4 uses 32-bit addresses, providing approximately 4.3 billion unique addresses."
  },
  {
    "id": "b8b",
    "category": "Networking Basics",
    "question": "Which is a key advantage of IPv6 over IPv4?",
    "choices": [
      "IPv6 is faster",
      "IPv6 provides a vastly larger address space (128-bit)",
      "IPv6 uses MAC addresses instead of IP",
      "IPv6 doesn't require routers"
    ],
    "correctIndex": 1,
    "explanation": "IPv6 uses 128-bit addresses (3.4×10^38 addresses), solving IPv4 address exhaustion. It also has built-in IPsec and simplified headers."
  },
  {
    "id": "b8c",
    "category": "Networking Basics",
    "question": "Which of the following is a valid IPv6 address format?",
    "choices": [
      "192.168.1.1",
      "2001:0db8:85a3::8a2e:0370:7334",
      "FF:FF:FF:FF:FF:FF",
      "10.0.0.1/24"
    ],
    "correctIndex": 1,
    "explanation": "IPv6 addresses use eight groups of four hexadecimal digits separated by colons, with :: abbreviating consecutive zero groups."
  },
  {
    "id": "b9a",
    "category": "Networking Basics",
    "question": "Which IPv4 address class supports the largest number of hosts per network?",
    "choices": [
      "Class A",
      "Class B",
      "Class C",
      "Class D"
    ],
    "correctIndex": 0,
    "explanation": "Class A (1.0.0.0–126.255.255.255) uses 8 network bits, allowing ~16.7 million hosts per network."
  },
  {
    "id": "b9b",
    "category": "Networking Basics",
    "question": "The IP address 172.16.5.10 belongs to which class?",
    "choices": [
      "Class A",
      "Class B",
      "Class C",
      "Class D"
    ],
    "correctIndex": 1,
    "explanation": "Class B ranges from 128.0.0.0 to 191.255.255.255. 172.16.x.x is also a private Class B range."
  },
  {
    "id": "b9c",
    "category": "Networking Basics",
    "question": "Class D addresses (224.0.0.0–239.255.255.255) are reserved for:",
    "choices": [
      "Standard hosts",
      "Multicast groups",
      "Experimental use",
      "Private networks only"
    ],
    "correctIndex": 1,
    "explanation": "Class D is reserved for multicasting — sending data to multiple recipients simultaneously."
  },
  {
    "id": "b9d",
    "category": "Networking Basics",
    "question": "Which private IP address range belongs to Class A?",
    "choices": [
      "172.16.0.0 – 172.31.255.255",
      "192.168.0.0 – 192.168.255.255",
      "10.0.0.0 – 10.255.255.255",
      "169.254.0.0 – 169.254.255.255"
    ],
    "correctIndex": 2,
    "explanation": "10.0.0.0/8 is the Class A private range. 172.16.0.0/12 is Class B private, and 192.168.0.0/16 is Class C private."
  },
  {
    "id": "t1a",
    "category": "Network Topologies and Architecture",
    "question": "In a peer-to-peer network:",
    "choices": [
      "A central server manages all resources",
      "Each device can act as both a client and a server",
      "Only one device can share files at a time",
      "Dedicated IT staff is always required"
    ],
    "correctIndex": 1,
    "explanation": "In P2P networks, each node shares resources directly without a central server. Good for small environments."
  },
  {
    "id": "t1b",
    "category": "Network Topologies and Architecture",
    "question": "Which is an advantage of a client-server network over peer-to-peer?",
    "choices": [
      "Lower cost",
      "No server required",
      "Centralized management, security, and backups",
      "Each user manages their own data"
    ],
    "correctIndex": 2,
    "explanation": "Client-server networks provide centralized administration, better security, scalable storage, and easier backups."
  },
  {
    "id": "t2a",
    "category": "Network Topologies and Architecture",
    "question": "A network spanning a single city or campus is classified as a:",
    "choices": [
      "LAN",
      "MAN",
      "WAN",
      "PAN"
    ],
    "correctIndex": 1,
    "explanation": "A MAN (Metropolitan Area Network) covers a city or large campus, larger than a LAN but smaller than a WAN."
  },
  {
    "id": "t2b",
    "category": "Network Topologies and Architecture",
    "question": "The internet is the best example of a:",
    "choices": [
      "LAN",
      "MAN",
      "WAN",
      "VLAN"
    ],
    "correctIndex": 2,
    "explanation": "A WAN (Wide Area Network) spans large geographic areas — the internet is the largest WAN."
  },
  {
    "id": "t2c",
    "category": "Network Topologies and Architecture",
    "question": "Which network type typically covers a single building or floor?",
    "choices": [
      "WAN",
      "MAN",
      "LAN",
      "SAN"
    ],
    "correctIndex": 2,
    "explanation": "A LAN (Local Area Network) covers a limited area such as a building, floor, or small group of buildings."
  },
  {
    "id": "t3a",
    "category": "Network Topologies and Architecture",
    "question": "A company needs maximum fault tolerance where every device connects to every other device. Which topology?",
    "choices": [
      "Star",
      "Bus",
      "Full Mesh",
      "Ring"
    ],
    "correctIndex": 2,
    "explanation": "Full mesh topology provides maximum redundancy — if one link fails, data can route through alternative paths."
  },
  {
    "id": "t3b",
    "category": "Network Topologies and Architecture",
    "question": "For a small office with a limited budget needing simple setup, which topology is most practical?",
    "choices": [
      "Full Mesh",
      "Star",
      "Bus",
      "Ring"
    ],
    "correctIndex": 1,
    "explanation": "Star topology is cost-effective, easy to set up, and easy to troubleshoot — ideal for small offices."
  },
  {
    "id": "t4a",
    "category": "Network Topologies and Architecture",
    "question": "In a star topology, what happens if the central hub or switch fails?",
    "choices": [
      "Only one device loses connectivity",
      "The entire network goes down",
      "The network automatically switches to mesh",
      "Nothing — devices communicate directly"
    ],
    "correctIndex": 1,
    "explanation": "Star topology has a single point of failure: if the central device fails, all connected devices lose network access."
  },
  {
    "id": "t4b",
    "category": "Network Topologies and Architecture",
    "question": "A bus topology uses:",
    "choices": [
      "A central switch connecting all devices",
      "A single backbone cable that all devices tap into",
      "Redundant links between every device",
      "A ring of connected switches"
    ],
    "correctIndex": 1,
    "explanation": "Bus topology uses a single coaxial cable (backbone) with terminators at each end; all devices share the same medium."
  },
  {
    "id": "t4c",
    "category": "Network Topologies and Architecture",
    "question": "In a ring topology, data travels:",
    "choices": [
      "Directly between any two devices",
      "In one direction (or two in dual-ring) around the loop",
      "Only from the server to clients",
      "Randomly across the network"
    ],
    "correctIndex": 1,
    "explanation": "Ring topology passes data sequentially from device to device. Dual-ring adds a second ring for redundancy."
  },
  {
    "id": "t5a",
    "category": "Network Topologies and Architecture",
    "question": "For a large enterprise building, which wireless approach is most appropriate?",
    "choices": [
      "A single consumer-grade router",
      "Multiple managed access points with a wireless controller",
      "Bluetooth mesh",
      "Ad-hoc wireless connections"
    ],
    "correctIndex": 1,
    "explanation": "Enterprise wireless uses multiple APs managed by a centralized controller for roaming, load balancing, and security."
  },
  {
    "id": "t5b",
    "category": "Network Topologies and Architecture",
    "question": "Which wireless standard supports both 2.4 GHz and 5 GHz bands?",
    "choices": [
      "802.11b",
      "802.11a",
      "802.11n (Wi-Fi 4)",
      "802.11b only"
    ],
    "correctIndex": 2,
    "explanation": "802.11n (Wi-Fi 4) was the first standard to support dual-band operation on both 2.4 GHz and 5 GHz."
  },
  {
    "id": "t6a",
    "category": "Network Topologies and Architecture",
    "question": "A company rents virtual machines and storage from a cloud provider. This is an example of:",
    "choices": [
      "SaaS",
      "PaaS",
      "IaaS",
      "On-premises hosting"
    ],
    "correctIndex": 2,
    "explanation": "IaaS (Infrastructure as a Service) provides virtualized computing resources (VMs, storage, networking) on demand."
  },
  {
    "id": "t6b",
    "category": "Network Topologies and Architecture",
    "question": "A developer uses a cloud platform that provides the runtime, database, and tools so they only write application code. This is:",
    "choices": [
      "IaaS",
      "PaaS",
      "SaaS",
      "DaaS"
    ],
    "correctIndex": 1,
    "explanation": "PaaS (Platform as a Service) provides the development platform — OS, runtime, database — so developers focus on code."
  },
  {
    "id": "t6c",
    "category": "Network Topologies and Architecture",
    "question": "Google Workspace and Microsoft 365 are examples of:",
    "choices": [
      "IaaS",
      "PaaS",
      "SaaS",
      "On-premises software"
    ],
    "correctIndex": 2,
    "explanation": "SaaS (Software as a Service) delivers fully functional applications over the internet — no local installation needed."
  },
  {
    "id": "t7a",
    "category": "Network Topologies and Architecture",
    "question": "Which is a primary benefit of cloud computing?",
    "choices": [
      "Higher upfront capital costs",
      "Scalability and elasticity — scale resources up/down on demand",
      "Complete elimination of all security risks",
      "No internet connection required"
    ],
    "correctIndex": 1,
    "explanation": "Cloud computing offers on-demand scalability, pay-as-you-go pricing, and reduced capital expenditure."
  },
  {
    "id": "t7b",
    "category": "Network Topologies and Architecture",
    "question": "A significant risk of cloud architecture is:",
    "choices": [
      "Too much storage available",
      "Vendor lock-in and dependency on internet connectivity",
      "Cloud is always more expensive than on-premises",
      "Cloud eliminates the need for backups"
    ],
    "correctIndex": 1,
    "explanation": "Cloud risks include vendor lock-in, data sovereignty concerns, internet dependency, and shared responsibility for security."
  },
  {
    "id": "t8a",
    "category": "Network Topologies and Architecture",
    "question": "Which factor most reduces wireless signal range indoors?",
    "choices": [
      "Using the 5 GHz band instead of 2.4 GHz",
      "Having too few connected devices",
      "Using WPA3 encryption",
      "Running DHCP"
    ],
    "correctIndex": 0,
    "explanation": "5 GHz has shorter range than 2.4 GHz due to higher frequency. Physical obstacles (walls, floors) and interference also reduce range."
  },
  {
    "id": "t8b",
    "category": "Network Topologies and Architecture",
    "question": "Channel overlap and interference from microwaves affect which Wi-Fi frequency band most?",
    "choices": [
      "5 GHz",
      "2.4 GHz",
      "6 GHz",
      "60 GHz"
    ],
    "correctIndex": 1,
    "explanation": "The 2.4 GHz band has only 3 non-overlapping channels and shares frequency with microwaves, Bluetooth, and other devices."
  },
  {
    "id": "t9a",
    "category": "Network Topologies and Architecture",
    "question": "Which is a key characteristic of 5G networks?",
    "choices": [
      "Maximum speeds of 100 Mbps",
      "Ultra-low latency (as low as 1 ms) and speeds up to 10 Gbps",
      "Only works indoors",
      "Uses only the 2.4 GHz band"
    ],
    "correctIndex": 1,
    "explanation": "5G offers dramatically higher speeds (up to 10 Gbps), ultra-low latency (~1 ms), and massive device density."
  },
  {
    "id": "t9b",
    "category": "Network Topologies and Architecture",
    "question": "5G mmWave (millimeter wave) technology offers:",
    "choices": [
      "Long range but slow speeds",
      "Very high speeds but short range and poor obstacle penetration",
      "The same performance as 4G LTE",
      "Only voice call capabilities"
    ],
    "correctIndex": 1,
    "explanation": "mmWave (24-100 GHz) provides multi-gigabit speeds but has very limited range and is easily blocked by walls/objects."
  },
  {
    "id": "s1a",
    "category": "Network Security",
    "question": "A weakness in a system that could be exploited is called a:",
    "choices": [
      "Threat",
      "Risk",
      "Vulnerability",
      "Exploit"
    ],
    "correctIndex": 2,
    "explanation": "A vulnerability is a weakness or flaw in a system. A threat is a potential danger, an exploit is the method used to attack, and risk is the likelihood and impact."
  },
  {
    "id": "s1b",
    "category": "Network Security",
    "question": "The actual code or technique used to take advantage of a vulnerability is called:",
    "choices": [
      "A threat",
      "An exploit",
      "A risk",
      "A patch"
    ],
    "correctIndex": 1,
    "explanation": "An exploit is the specific method, tool, or code that leverages a vulnerability to compromise a system."
  },
  {
    "id": "s1c",
    "category": "Network Security",
    "question": "Risk in network security is best defined as:",
    "choices": [
      "Any malware on the network",
      "The probability that a threat will exploit a vulnerability and the resulting impact",
      "A firewall misconfiguration",
      "The number of users on a network"
    ],
    "correctIndex": 1,
    "explanation": "Risk = likelihood of a threat exploiting a vulnerability × the impact of that exploitation."
  },
  {
    "id": "s2a",
    "category": "Network Security",
    "question": "A zero-day vulnerability is dangerous because:",
    "choices": [
      "It only affects old systems",
      "It is known to the vendor and already patched",
      "It is unknown to the vendor and has no available patch",
      "It can only be exploited on day zero of a product launch"
    ],
    "correctIndex": 2,
    "explanation": "Zero-day vulnerabilities are unknown to the vendor, meaning no patch exists and systems are exposed until one is released."
  },
  {
    "id": "s2b",
    "category": "Network Security",
    "question": "Which is an example of an internal security threat?",
    "choices": [
      "A hacker in another country",
      "A disgruntled employee with network access",
      "A DDoS attack from a botnet",
      "A phishing email from an unknown sender"
    ],
    "correctIndex": 1,
    "explanation": "Internal threats come from within the organization — employees, contractors, or anyone with insider access."
  },
  {
    "id": "s3a",
    "category": "Network Security",
    "question": "The principle of least privilege means:",
    "choices": [
      "All users get administrator access",
      "Users receive only the minimum access rights needed for their role",
      "Passwords are optional for trusted employees",
      "Encryption is only used for external traffic"
    ],
    "correctIndex": 1,
    "explanation": "Least privilege restricts users to the minimum permissions necessary, reducing the attack surface."
  },
  {
    "id": "s3b",
    "category": "Network Security",
    "question": "Which security measure converts readable data into an unreadable format that requires a key to decode?",
    "choices": [
      "Authentication",
      "Encryption",
      "Authorization",
      "Auditing"
    ],
    "correctIndex": 1,
    "explanation": "Encryption transforms plaintext into ciphertext using an algorithm and key, protecting data confidentiality."
  },
  {
    "id": "s4a",
    "category": "Network Security",
    "question": "Patch management is important because:",
    "choices": [
      "It makes the network faster",
      "It fixes known vulnerabilities in software before they can be exploited",
      "It replaces antivirus software",
      "It only applies to operating systems"
    ],
    "correctIndex": 1,
    "explanation": "Patch management ensures timely updates that fix security vulnerabilities in OS, applications, and firmware."
  },
  {
    "id": "s4b",
    "category": "Network Security",
    "question": "Content filtering in a network security context refers to:",
    "choices": [
      "Compressing files for faster transfer",
      "Blocking access to malicious or inappropriate websites and content",
      "Filtering IP addresses only",
      "Removing all email attachments"
    ],
    "correctIndex": 1,
    "explanation": "Content filtering blocks access to harmful websites, malicious downloads, or policy-violating content at the network level."
  },
  {
    "id": "s5a",
    "category": "Network Security",
    "question": "A DDoS attack differs from a DoS attack in that:",
    "choices": [
      "DDoS uses encryption",
      "DDoS comes from multiple distributed sources simultaneously",
      "DDoS only targets DNS servers",
      "DDoS is always less harmful"
    ],
    "correctIndex": 1,
    "explanation": "DDoS (Distributed Denial of Service) uses many compromised machines (botnet) to overwhelm a target from multiple sources."
  },
  {
    "id": "s5b",
    "category": "Network Security",
    "question": "A botnet is:",
    "choices": [
      "A type of firewall",
      "A network of compromised computers controlled by an attacker to launch attacks",
      "A legitimate cloud computing service",
      "An antivirus tool"
    ],
    "correctIndex": 1,
    "explanation": "A botnet is a collection of infected devices (bots/zombies) remotely controlled by an attacker, often used for DDoS."
  },
  {
    "id": "s5c",
    "category": "Network Security",
    "question": "A SYN flood attack exploits:",
    "choices": [
      "The DNS resolution process",
      "The TCP three-way handshake by sending many SYN requests without completing the connection",
      "Weak Wi-Fi passwords",
      "Unencrypted email"
    ],
    "correctIndex": 1,
    "explanation": "SYN floods send massive SYN requests, leaving half-open connections that exhaust server resources."
  },
  {
    "id": "s6a",
    "category": "Network Security",
    "question": "Phishing is best described as:",
    "choices": [
      "Intercepting Wi-Fi signals",
      "Social engineering that tricks users into revealing credentials via fraudulent messages",
      "A brute-force password attack",
      "Scanning open ports"
    ],
    "correctIndex": 1,
    "explanation": "Phishing uses deceptive emails, websites, or messages that impersonate trusted entities to steal credentials or data."
  },
  {
    "id": "s6b",
    "category": "Network Security",
    "question": "IP spoofing involves:",
    "choices": [
      "Encrypting IP packets",
      "Forging the source IP address in packets to disguise the sender's identity",
      "Scanning for open ports",
      "Updating DNS records"
    ],
    "correctIndex": 1,
    "explanation": "IP spoofing forges source addresses to impersonate trusted systems or hide the attacker's origin."
  },
  {
    "id": "s6c",
    "category": "Network Security",
    "question": "DNS poisoning (cache poisoning) results in:",
    "choices": [
      "Faster DNS resolution",
      "Users being redirected to malicious websites by corrupting DNS records",
      "Stronger encryption",
      "Improved network performance"
    ],
    "correctIndex": 1,
    "explanation": "DNS poisoning inserts fraudulent entries into a DNS cache, redirecting users to attacker-controlled sites."
  },
  {
    "id": "s7a",
    "category": "Network Security",
    "question": "The CIA triad stands for:",
    "choices": [
      "Central Intelligence Agency",
      "Confidentiality, Integrity, and Availability",
      "Centralized Internet Access",
      "Compliance, Identity, Authentication"
    ],
    "correctIndex": 1,
    "explanation": "The CIA triad is the foundational security model: Confidentiality (privacy), Integrity (accuracy), Availability (accessibility)."
  },
  {
    "id": "s7b",
    "category": "Network Security",
    "question": "Integrity in the CIA triad ensures that:",
    "choices": [
      "Data is available 24/7",
      "Only authorized users can access data",
      "Data has not been tampered with or altered without authorization",
      "All connections are encrypted"
    ],
    "correctIndex": 2,
    "explanation": "Integrity means data remains accurate, complete, and unmodified by unauthorized parties. Hashing helps verify integrity."
  },
  {
    "id": "s7c",
    "category": "Network Security",
    "question": "Availability in the CIA triad means:",
    "choices": [
      "Data is encrypted at all times",
      "Systems and data are accessible to authorized users when needed",
      "Only one person can access the data",
      "Data is backed up monthly"
    ],
    "correctIndex": 1,
    "explanation": "Availability ensures that systems, applications, and data are accessible and functional when authorized users need them."
  },
  {
    "id": "s8a",
    "category": "Network Security",
    "question": "Closing unnecessary open ports on a server is an example of:",
    "choices": [
      "Increasing bandwidth",
      "Hardening — reducing the attack surface",
      "Load balancing",
      "DHCP configuration"
    ],
    "correctIndex": 1,
    "explanation": "Closing unused ports is a hardening technique that reduces the attack surface by eliminating potential entry points."
  },
  {
    "id": "s8b",
    "category": "Network Security",
    "question": "Which is the BEST combination for vulnerability mitigation?",
    "choices": [
      "Only using antivirus software",
      "Regularly updating software, using firewalls, closing unused ports, and running antivirus",
      "Changing passwords once a year",
      "Only using encryption"
    ],
    "correctIndex": 1,
    "explanation": "Defense in depth — combining multiple mitigations (patching, firewalls, port management, antivirus) — is most effective."
  },
  {
    "id": "s9a",
    "category": "Network Security",
    "question": "Hashing produces:",
    "choices": [
      "An encrypted version of data that can be decrypted",
      "A fixed-length digest that uniquely represents data and cannot be reversed",
      "A compressed file",
      "A digital signature"
    ],
    "correctIndex": 1,
    "explanation": "Hashing creates a one-way fixed-length output (digest). Any change to input produces a completely different hash. Common algorithms: SHA-256, MD5."
  },
  {
    "id": "s9b",
    "category": "Network Security",
    "question": "A digital signature provides:",
    "choices": [
      "Encryption only",
      "Authentication of the sender and integrity verification of the message",
      "Faster network speeds",
      "Physical security"
    ],
    "correctIndex": 1,
    "explanation": "Digital signatures use asymmetric cryptography to verify sender identity (authentication) and that data wasn't altered (integrity)."
  },
  {
    "id": "s9c",
    "category": "Network Security",
    "question": "A digital certificate issued by a Certificate Authority (CA) is used to:",
    "choices": [
      "Block malware",
      "Bind a public key to an entity's identity, enabling trust in encrypted communications",
      "Replace passwords entirely",
      "Speed up DNS lookups"
    ],
    "correctIndex": 1,
    "explanation": "Digital certificates (X.509) are issued by trusted CAs and associate a public key with an identity, enabling SSL/TLS trust."
  },
  {
    "id": "s10a",
    "category": "Network Security",
    "question": "Multi-Factor Authentication (MFA) requires:",
    "choices": [
      "Multiple passwords",
      "Two or more different types of verification factors (something you know, have, or are)",
      "Only a fingerprint",
      "Only a smart card"
    ],
    "correctIndex": 1,
    "explanation": "MFA combines factors: something you know (password), something you have (phone/token), something you are (biometrics)."
  },
  {
    "id": "s10b",
    "category": "Network Security",
    "question": "Single Sign-On (SSO) allows users to:",
    "choices": [
      "Only access one application",
      "Authenticate once and gain access to multiple systems without re-entering credentials",
      "Bypass all security measures",
      "Use the same password for everything without central management"
    ],
    "correctIndex": 1,
    "explanation": "SSO centralizes authentication — one login grants access to multiple applications, improving user experience and security management."
  },
  {
    "id": "s10c",
    "category": "Network Security",
    "question": "RADIUS is an example of:",
    "choices": [
      "A network topology",
      "A remote authentication protocol that centralizes access control",
      "A type of malware",
      "A wireless encryption standard"
    ],
    "correctIndex": 1,
    "explanation": "RADIUS (Remote Authentication Dial-In User Service) provides centralized authentication, authorization, and accounting (AAA)."
  },
  {
    "id": "p1a",
    "category": "Network Protocols and Standards",
    "question": "FTP operates on which default ports?",
    "choices": [
      "Port 80 and 443",
      "Port 20 (data) and 21 (control)",
      "Port 25 and 110",
      "Port 22 and 23"
    ],
    "correctIndex": 1,
    "explanation": "FTP uses port 21 for control commands and port 20 for data transfer."
  },
  {
    "id": "p1b",
    "category": "Network Protocols and Standards",
    "question": "SFTP differs from FTP in that SFTP:",
    "choices": [
      "Uses a different file format",
      "Encrypts the entire session using SSH (port 22)",
      "Is faster but less secure",
      "Only works on Linux"
    ],
    "correctIndex": 1,
    "explanation": "SFTP (SSH File Transfer Protocol) tunnels through SSH on port 22, encrypting both commands and data."
  },
  {
    "id": "p1c",
    "category": "Network Protocols and Standards",
    "question": "SMTP is used for:",
    "choices": [
      "Receiving email from a server",
      "Sending outgoing email",
      "Browsing the web",
      "Transferring files"
    ],
    "correctIndex": 1,
    "explanation": "SMTP (Simple Mail Transfer Protocol, port 25/587) handles sending and relaying outgoing email between servers."
  },
  {
    "id": "p2a",
    "category": "Network Protocols and Standards",
    "question": "DNS translates:",
    "choices": [
      "MAC addresses to IP addresses",
      "Domain names to IP addresses",
      "IP addresses to port numbers",
      "Encryption keys to certificates"
    ],
    "correctIndex": 1,
    "explanation": "DNS (Domain Name System) resolves human-readable domain names (e.g., google.com) to IP addresses."
  },
  {
    "id": "p2b",
    "category": "Network Protocols and Standards",
    "question": "DHCP automatically assigns:",
    "choices": [
      "MAC addresses to devices",
      "Domain names to websites",
      "IP addresses, subnet masks, default gateways, and DNS servers to devices",
      "Encryption keys"
    ],
    "correctIndex": 2,
    "explanation": "DHCP (Dynamic Host Configuration Protocol) automatically configures network settings for devices joining a network."
  },
  {
    "id": "p2c",
    "category": "Network Protocols and Standards",
    "question": "The process DORA in DHCP stands for:",
    "choices": [
      "Discover, Offer, Request, Acknowledge",
      "Download, Open, Read, Accept",
      "Detect, Operate, Route, Assign",
      "Deny, Override, Reject, Allow"
    ],
    "correctIndex": 0,
    "explanation": "DORA describes the four-step DHCP process: client Discovers, server Offers, client Requests, server Acknowledges."
  },
  {
    "id": "p3a",
    "category": "Network Protocols and Standards",
    "question": "Wi-Fi 6 corresponds to which IEEE standard?",
    "choices": [
      "802.11n",
      "802.11ac",
      "802.11ax",
      "802.11be"
    ],
    "correctIndex": 2,
    "explanation": "Wi-Fi 6 = 802.11ax, offering improved speed, efficiency in dense environments, and OFDMA technology."
  },
  {
    "id": "p3b",
    "category": "Network Protocols and Standards",
    "question": "802.11ac (Wi-Fi 5) operates on which frequency band?",
    "choices": [
      "2.4 GHz only",
      "5 GHz only",
      "Both 2.4 and 5 GHz",
      "6 GHz only"
    ],
    "correctIndex": 1,
    "explanation": "802.11ac (Wi-Fi 5) operates exclusively on the 5 GHz band, offering higher speeds but shorter range than 2.4 GHz."
  },
  {
    "id": "p3c",
    "category": "Network Protocols and Standards",
    "question": "Which Wi-Fi standard was the first to introduce MIMO (Multiple Input Multiple Output)?",
    "choices": [
      "802.11a",
      "802.11g",
      "802.11n (Wi-Fi 4)",
      "802.11b"
    ],
    "correctIndex": 2,
    "explanation": "802.11n introduced MIMO, using multiple antennas for increased throughput and range."
  },
  {
    "id": "p4a",
    "category": "Network Protocols and Standards",
    "question": "The 802.3 standard defines:",
    "choices": [
      "Wireless LAN specifications",
      "Ethernet wired LAN specifications",
      "Bluetooth connections",
      "Cellular data"
    ],
    "correctIndex": 1,
    "explanation": "IEEE 802.3 defines Ethernet standards for wired LANs, including speeds, cable types, and distances."
  },
  {
    "id": "p4b",
    "category": "Network Protocols and Standards",
    "question": "Gigabit Ethernet (1000BASE-T) runs over which cable type at up to 100 meters?",
    "choices": [
      "Cat 3 UTP",
      "Cat 5e or Cat 6 UTP",
      "Coaxial",
      "Single-mode fiber only"
    ],
    "correctIndex": 1,
    "explanation": "1000BASE-T (Gigabit Ethernet) uses Cat 5e or Cat 6 UTP copper cable for distances up to 100 meters."
  },
  {
    "id": "p5a",
    "category": "Network Protocols and Standards",
    "question": "TCP is described as connection-oriented because:",
    "choices": [
      "It doesn't need an IP address",
      "It establishes a session (three-way handshake) before sending data, ensuring reliable delivery",
      "It sends data without any acknowledgment",
      "It only works on wired networks"
    ],
    "correctIndex": 1,
    "explanation": "TCP uses SYN → SYN-ACK → ACK (three-way handshake) to establish a connection, then provides ordered, reliable delivery."
  },
  {
    "id": "p5b",
    "category": "Network Protocols and Standards",
    "question": "UDP is preferred for video streaming because:",
    "choices": [
      "It guarantees delivery of every packet",
      "It has lower overhead and latency since it skips handshaking and retransmission",
      "It uses more bandwidth than TCP",
      "It encrypts all data automatically"
    ],
    "correctIndex": 1,
    "explanation": "UDP is connectionless — no handshake, no retransmission — making it faster for real-time apps where occasional packet loss is acceptable."
  },
  {
    "id": "p5c",
    "category": "Network Protocols and Standards",
    "question": "Which protocol uses the three-way handshake?",
    "choices": [
      "UDP",
      "ICMP",
      "TCP",
      "ARP"
    ],
    "correctIndex": 2,
    "explanation": "TCP establishes connections using the three-way handshake (SYN, SYN-ACK, ACK) before data transfer begins."
  },
  {
    "id": "p6a",
    "category": "Network Protocols and Standards",
    "question": "BGP (Border Gateway Protocol) is primarily used for:",
    "choices": [
      "Routing within a single LAN",
      "Routing between autonomous systems on the internet",
      "Assigning IP addresses",
      "Wireless encryption"
    ],
    "correctIndex": 1,
    "explanation": "BGP is the routing protocol of the internet, managing routing between different autonomous systems (ISPs, large networks)."
  },
  {
    "id": "p6b",
    "category": "Network Protocols and Standards",
    "question": "OSPF (Open Shortest Path First) is a:",
    "choices": [
      "Distance-vector routing protocol",
      "Link-state routing protocol that uses Dijkstra's algorithm",
      "Proprietary Cisco protocol",
      "Layer 2 switching protocol"
    ],
    "correctIndex": 1,
    "explanation": "OSPF is an open-standard link-state protocol that builds a complete topology map and uses Dijkstra's SPF algorithm."
  },
  {
    "id": "p6c",
    "category": "Network Protocols and Standards",
    "question": "EIGRP is notable because:",
    "choices": [
      "It is open-source and used everywhere",
      "It is a Cisco-proprietary (now partially open) hybrid protocol combining distance-vector and link-state features",
      "It only routes IPv6",
      "It replaces BGP on the internet"
    ],
    "correctIndex": 1,
    "explanation": "EIGRP (Enhanced Interior Gateway Routing Protocol) is a Cisco-developed advanced distance-vector/hybrid protocol."
  },
  {
    "id": "p7a",
    "category": "Network Protocols and Standards",
    "question": "Port 443 is reserved for:",
    "choices": [
      "HTTP",
      "HTTPS (HTTP Secure)",
      "FTP",
      "SSH"
    ],
    "correctIndex": 1,
    "explanation": "Port 443 is used by HTTPS — HTTP encrypted with TLS/SSL for secure web browsing."
  },
  {
    "id": "p7b",
    "category": "Network Protocols and Standards",
    "question": "Port 22 is used by:",
    "choices": [
      "HTTP and HTTPS",
      "SSH and SFTP",
      "DNS",
      "SMTP"
    ],
    "correctIndex": 1,
    "explanation": "Port 22 is reserved for SSH (Secure Shell) and SFTP (SSH File Transfer Protocol)."
  },
  {
    "id": "p7c",
    "category": "Network Protocols and Standards",
    "question": "DNS uses port:",
    "choices": [
      "22",
      "25",
      "53",
      "80"
    ],
    "correctIndex": 2,
    "explanation": "DNS uses port 53 for both TCP and UDP queries to resolve domain names."
  },
  {
    "id": "p7d",
    "category": "Network Protocols and Standards",
    "question": "Which port is used by HTTP?",
    "choices": [
      "21",
      "25",
      "80",
      "443"
    ],
    "correctIndex": 2,
    "explanation": "HTTP (unencrypted web traffic) uses port 80. HTTPS uses port 443."
  },
  {
    "id": "p7e",
    "category": "Network Protocols and Standards",
    "question": "SMTP uses port:",
    "choices": [
      "22",
      "25 (or 587 for submission)",
      "53",
      "110"
    ],
    "correctIndex": 1,
    "explanation": "SMTP uses port 25 for server-to-server relay and port 587 for authenticated client submission."
  },
  {
    "id": "p8a",
    "category": "Network Protocols and Standards",
    "question": "Network Address Translation (NAT) allows:",
    "choices": [
      "Multiple devices on a private network to share a single public IP address",
      "Devices to communicate without IP addresses",
      "Wireless encryption",
      "Automatic DNS resolution"
    ],
    "correctIndex": 0,
    "explanation": "NAT translates private IP addresses to a public IP, allowing many devices to access the internet through one public address."
  },
  {
    "id": "p8b",
    "category": "Network Protocols and Standards",
    "question": "PAT (Port Address Translation) differs from basic NAT by:",
    "choices": [
      "Using MAC addresses instead of IP",
      "Mapping multiple private IPs to one public IP using different port numbers",
      "Only working with IPv6",
      "Eliminating the need for a router"
    ],
    "correctIndex": 1,
    "explanation": "PAT (a form of NAT overload) uses port numbers to distinguish sessions from multiple internal hosts sharing one public IP."
  },
  {
    "id": "p9a",
    "category": "Network Protocols and Standards",
    "question": "WPA3 improves upon WPA2 by:",
    "choices": [
      "Removing encryption entirely",
      "Using SAE (Simultaneous Authentication of Equals) for stronger key exchange and forward secrecy",
      "Only working with 802.11b",
      "Being backwards-compatible with WEP"
    ],
    "correctIndex": 1,
    "explanation": "WPA3 replaces the PSK handshake with SAE (Dragonfly), providing protection against offline dictionary attacks and forward secrecy."
  },
  {
    "id": "p9b",
    "category": "Network Protocols and Standards",
    "question": "WPA2 uses which encryption algorithm?",
    "choices": [
      "RC4",
      "AES (Advanced Encryption Standard)",
      "DES",
      "Blowfish"
    ],
    "correctIndex": 1,
    "explanation": "WPA2 uses AES-CCMP encryption, which is far stronger than the RC4 cipher used by WEP and WPA-TKIP."
  },
  {
    "id": "p9c",
    "category": "Network Protocols and Standards",
    "question": "WEP is considered insecure because:",
    "choices": [
      "It uses AES encryption",
      "Its RC4 implementation has known vulnerabilities allowing keys to be cracked in minutes",
      "It requires too-strong passwords",
      "It only works with IPv6"
    ],
    "correctIndex": 1,
    "explanation": "WEP uses weak RC4 key scheduling with short IVs, making it trivially crackable. It should never be used."
  },
  {
    "id": "h1a",
    "category": "Network Hardware and Connectivity",
    "question": "A router's primary function is to:",
    "choices": [
      "Connect devices within a single LAN using MAC addresses",
      "Forward packets between different networks using IP addresses",
      "Convert analog signals to digital",
      "Provide wireless access only"
    ],
    "correctIndex": 1,
    "explanation": "Routers operate at Layer 3, using IP addresses and routing tables to forward packets between different networks."
  },
  {
    "id": "h1b",
    "category": "Network Hardware and Connectivity",
    "question": "A managed switch differs from an unmanaged switch by:",
    "choices": [
      "Being more expensive but offering VLANs, QoS, port mirroring, and remote management",
      "Having fewer ports",
      "Only working with wireless",
      "Not requiring electricity"
    ],
    "correctIndex": 0,
    "explanation": "Managed switches provide advanced features like VLANs, SNMP monitoring, port security, QoS, and remote configuration."
  },
  {
    "id": "h1c",
    "category": "Network Hardware and Connectivity",
    "question": "A modem's function is to:",
    "choices": [
      "Route packets between networks",
      "Modulate and demodulate signals between the ISP's network and the local network",
      "Assign IP addresses",
      "Filter malicious traffic"
    ],
    "correctIndex": 1,
    "explanation": "Modems convert between the signal format used by the ISP (cable, DSL, fiber) and Ethernet for the local network."
  },
  {
    "id": "h2a",
    "category": "Network Hardware and Connectivity",
    "question": "A NIC (Network Interface Card) operates at which OSI layers?",
    "choices": [
      "Layers 1 and 2 (Physical and Data Link)",
      "Layers 3 and 4 (Network and Transport)",
      "Layer 7 (Application)",
      "Layer 5 (Session)"
    ],
    "correctIndex": 0,
    "explanation": "NICs handle physical signal transmission (Layer 1) and MAC addressing/frame handling (Layer 2)."
  },
  {
    "id": "h2b",
    "category": "Network Hardware and Connectivity",
    "question": "A virtual network adapter is used in:",
    "choices": [
      "Physical servers only",
      "Virtual machines and VPN connections to create software-defined network interfaces",
      "Replacing physical cables",
      "Wireless only"
    ],
    "correctIndex": 1,
    "explanation": "Virtual adapters are software-based NICs used by VMs, containers, and VPN clients to connect to virtual or tunneled networks."
  },
  {
    "id": "h2c",
    "category": "Network Hardware and Connectivity",
    "question": "PCIe network adapters are:",
    "choices": [
      "USB dongles",
      "Expansion cards installed in a computer's PCIe slot for high-performance networking",
      "Wireless-only devices",
      "External modems"
    ],
    "correctIndex": 1,
    "explanation": "PCIe (PCI Express) network adapters plug into motherboard slots for high-bandwidth, low-latency wired or wireless connectivity."
  },
  {
    "id": "h3a",
    "category": "Network Hardware and Connectivity",
    "question": "UTP (Unshielded Twisted Pair) cable is:",
    "choices": [
      "Surrounded by metal shielding",
      "The most common Ethernet cable type, relying on twisting to reduce interference",
      "A type of fiber optic cable",
      "Only used for telephone lines"
    ],
    "correctIndex": 1,
    "explanation": "UTP is the most widely used Ethernet cable. The twisting of wire pairs cancels out electromagnetic interference."
  },
  {
    "id": "h3b",
    "category": "Network Hardware and Connectivity",
    "question": "STP (Shielded Twisted Pair) is preferred over UTP when:",
    "choices": [
      "Cost is the primary concern",
      "The environment has high electromagnetic interference (EMI)",
      "Maximum speed is not needed",
      "Only short runs are required"
    ],
    "correctIndex": 1,
    "explanation": "STP adds foil or braided shielding around wire pairs, providing better protection in electrically noisy environments."
  },
  {
    "id": "h3c",
    "category": "Network Hardware and Connectivity",
    "question": "Coaxial cable uses:",
    "choices": [
      "Four twisted pairs of copper wire",
      "A single copper conductor surrounded by insulation, shielding, and an outer jacket",
      "Glass or plastic fibers",
      "Wireless signals"
    ],
    "correctIndex": 1,
    "explanation": "Coaxial cable has a central conductor, dielectric insulator, metallic shield, and outer jacket — used for cable TV/internet."
  },
  {
    "id": "h4a",
    "category": "Network Hardware and Connectivity",
    "question": "Single-mode fiber differs from multimode fiber in that:",
    "choices": [
      "Single-mode uses a larger core",
      "Single-mode uses a very small core (~9μm) for one light path, enabling longer distances",
      "Single-mode is cheaper",
      "Single-mode has shorter range"
    ],
    "correctIndex": 1,
    "explanation": "Single-mode fiber has a ~9μm core allowing one light mode, supporting distances of 10-100+ km. Multimode (50/62.5μm) is for shorter runs."
  },
  {
    "id": "h4b",
    "category": "Network Hardware and Connectivity",
    "question": "Common fiber optic connectors include:",
    "choices": [
      "RJ-45 and RJ-11",
      "SC, LC, ST, and MTP/MPO",
      "BNC and F-type",
      "USB-A and USB-C"
    ],
    "correctIndex": 1,
    "explanation": "SC (square/subscriber), LC (small form factor), ST (bayonet), and MTP/MPO (multi-fiber) are standard fiber connectors."
  },
  {
    "id": "h4c",
    "category": "Network Hardware and Connectivity",
    "question": "Fiber optic cables transmit data using:",
    "choices": [
      "Electrical signals",
      "Light pulses through glass or plastic strands",
      "Radio waves",
      "Magnetic fields"
    ],
    "correctIndex": 1,
    "explanation": "Fiber uses laser or LED light pulses through thin glass/plastic fibers, providing immunity to EMI and very high bandwidth."
  },
  {
    "id": "h5a",
    "category": "Network Hardware and Connectivity",
    "question": "A blade server's main advantage is:",
    "choices": [
      "Lower performance than tower servers",
      "High computing density — many blades share power, cooling, and networking in a single chassis",
      "No need for networking",
      "They cannot be clustered"
    ],
    "correctIndex": 1,
    "explanation": "Blade servers maximize density by sharing chassis components (power, cooling, switches), ideal for datacenters."
  },
  {
    "id": "h5b",
    "category": "Network Hardware and Connectivity",
    "question": "Rack servers are mounted in:",
    "choices": [
      "Desktop cases",
      "Standardized 19-inch equipment racks measured in rack units (U)",
      "Portable carrying cases",
      "Wireless enclosures"
    ],
    "correctIndex": 1,
    "explanation": "Rack servers install in standard 19-inch racks; each server is typically 1U-4U tall, allowing organized datacenter deployment."
  },
  {
    "id": "h6a",
    "category": "Network Hardware and Connectivity",
    "question": "To connect to the internet, a typical home network requires at minimum:",
    "choices": [
      "A switch and a firewall",
      "A modem (from ISP) and a router",
      "Only an Ethernet cable",
      "Only a wireless access point"
    ],
    "correctIndex": 1,
    "explanation": "A modem connects to the ISP, and a router provides NAT/DHCP/firewall for the local network (often combined in one device)."
  },
  {
    "id": "h6b",
    "category": "Network Hardware and Connectivity",
    "question": "An ONT (Optical Network Terminal) is used with which type of internet service?",
    "choices": [
      "DSL",
      "Cable",
      "Fiber-to-the-home (FTTH)",
      "Satellite"
    ],
    "correctIndex": 2,
    "explanation": "An ONT converts fiber optic light signals to electrical Ethernet signals at the customer's premises in FTTH deployments."
  },
  {
    "id": "h7a",
    "category": "Network Hardware and Connectivity",
    "question": "NAS (Network Attached Storage) is:",
    "choices": [
      "A hard drive inside a PC",
      "A dedicated file storage device connected to the network, accessible by multiple users",
      "A type of RAID configuration",
      "A cloud-only service"
    ],
    "correctIndex": 1,
    "explanation": "NAS is a specialized storage appliance connected to the network, providing shared file storage with its own OS."
  },
  {
    "id": "h7b",
    "category": "Network Hardware and Connectivity",
    "question": "RAID 1 (mirroring) provides:",
    "choices": [
      "Faster speeds by striping data across drives",
      "Redundancy by writing identical data to two or more drives",
      "No redundancy or speed benefit",
      "Parity-based fault tolerance"
    ],
    "correctIndex": 1,
    "explanation": "RAID 1 mirrors data across drives — if one fails, the other has an exact copy. Provides redundancy but uses 50% of total capacity."
  },
  {
    "id": "h7c",
    "category": "Network Hardware and Connectivity",
    "question": "RAID 5 requires a minimum of:",
    "choices": [
      "1 drive",
      "2 drives",
      "3 drives",
      "5 drives"
    ],
    "correctIndex": 2,
    "explanation": "RAID 5 stripes data with distributed parity across a minimum of 3 drives, tolerating a single drive failure."
  },
  {
    "id": "h7d",
    "category": "Network Hardware and Connectivity",
    "question": "RAID 0 (striping) provides:",
    "choices": [
      "Redundancy and speed",
      "Speed improvement but NO redundancy — any drive failure loses all data",
      "Mirroring of all data",
      "Parity-based protection"
    ],
    "correctIndex": 1,
    "explanation": "RAID 0 splits data across drives to increase performance, but provides no fault tolerance or redundancy."
  },
  {
    "id": "basics-41",
    "category": "Networking Basics",
    "question": "Which sublayer of the OSI Data Link Layer (Layer 2) acts as the interface between the Media Access Control (MAC) sublayer and the Network Layer, handling multiplexing so that multiple network protocols can share the same physical medium?",
    "choices": [
      "Logical Link Control (LLC) sublayer",
      "Media Access Control (MAC) sublayer",
      "Physical Layer Convergence Procedure (PLCP)",
      "Frame Check Sequence (FCS) sublayer"
    ],
    "correctIndex": 0,
    "explanation": "The Logical Link Control (LLC) sublayer (defined in IEEE 802.2) acts as the interface between the MAC sublayer and the Network layer (Layer 3), performing multiplexing to support multiple protocols (IPv4, IPv6, AppleTalk) over the same link."
  },
  {
    "id": "basics-42",
    "category": "Networking Basics",
    "question": "Match the ICMP message type to its numeric code: Type 0, Type 3, Type 5, and Type 11.",
    "choices": [
      "0: Echo Reply, 3: Destination Unreachable, 5: Redirect, 11: Time Exceeded",
      "0: Echo Request, 3: Redirect, 5: Destination Unreachable, 11: Parameter Problem",
      "0: Destination Unreachable, 3: Echo Reply, 5: Time Exceeded, 11: Redirect",
      "0: Time Exceeded, 3: Redirect, 5: Echo Reply, 11: Destination Unreachable"
    ],
    "correctIndex": 0,
    "explanation": "The standard ICMP codes are: Type 0 (Echo Reply), Type 3 (Destination Unreachable), Type 5 (Redirect — informs host of a faster route), and Type 11 (Time Exceeded — TTL expired, used by traceroute)."
  },
  {
    "id": "basics-43",
    "category": "Networking Basics",
    "question": "When transitioning from IPv4 to IPv6, which header field transformations occurred to simplify packet processing?",
    "choices": [
      "TTL became Hop Limit, Type of Service became Traffic Class, Protocol became Next Header, and Header Checksum was removed.",
      "TTL became Next Header, Protocol became Traffic Class, Type of Service was removed, and Checksum was kept.",
      "TTL was removed, Protocol became Hop Limit, Type of Service became Next Header, and Checksum was kept.",
      "TTL became Traffic Class, Protocol became Next Header, Type of Service became Hop Limit, and Checksum was kept."
    ],
    "correctIndex": 0,
    "explanation": "IPv6 simplified headers for speed: Time to Live (TTL) became Hop Limit, Type of Service (ToS) became Traffic Class, and Protocol became Next Header. The Header Checksum, Flags, and Identification fields were entirely removed."
  },
  {
    "id": "basics-44",
    "category": "Networking Basics",
    "question": "In a 48-bit MAC address, what do the two specific flag bits in the first octet indicate?",
    "choices": [
      "Least significant bit indicates Unicast (0)/Multicast (1); second-to-last bit indicates Globally Unique (0)/Locally Administered (1).",
      "Least significant bit indicates Globally Unique (0)/Locally Administered (1); second-to-last bit indicates Unicast (0)/Multicast (1).",
      "Least significant bit indicates classful network type; second-to-last bit indicates token ring configuration.",
      "They are reserved for IPv6 tunneling headers."
    ],
    "correctIndex": 0,
    "explanation": "In the first octet of a MAC address, the least significant bit (bit 0) determines if it is Unicast (0) or Multicast (1). The second-to-last bit (bit 1) determines if the MAC is Globally Unique (0, OUI-assigned) or Locally Administered (1, manually overridden)."
  },
  {
    "id": "basics-45",
    "category": "Networking Basics",
    "question": "What version of IGMP corresponds to a Leave Group message, and how does IGMP Snooping prevent multicast degradation?",
    "choices": [
      "IGMPv2 introduces Leave Group; IGMP Snooping maps multicast streams exclusively to requested switch ports instead of broadcasting like a hub.",
      "IGMPv1 introduces Leave Group; IGMP Snooping encrypts the multicast headers.",
      "IGMPv3 introduces Leave Group; IGMP Snooping translates multicast IPs to MAC addresses.",
      "IGMPv2 introduces Leave Group; IGMP Snooping disables multicast routing entirely."
    ],
    "correctIndex": 0,
    "explanation": "IGMPv2 introduced the 'Leave Group' message. IGMP Snooping allows a Layer 2 switch to peer into IGMP transactions between hosts and routers, mapping multicast streams to ports that requested them rather than flooding all ports."
  },
  {
    "id": "topo-21",
    "category": "Network Topologies and Architecture",
    "question": "What is the key business requirement distinction when choosing between Point-to-Point (P2P) and Point-to-Multipoint (P2MP) wireless bridge deployments?",
    "choices": [
      "P2P is used as a high-throughput backhaul link between two remote buildings; P2MP connects a central hub building to multiple surrounding satellite locations.",
      "P2P is for client-server; P2MP is for ad-hoc connections.",
      "P2P connects routers; P2MP connects only access points.",
      "P2P is restricted to 2.4 GHz; P2MP is restricted to 5 GHz."
    ],
    "correctIndex": 0,
    "explanation": "P2P (Point-to-Point) bridges connect two remote points over long distances (backhaul). P2MP (Point-to-Multipoint) bridges connect a single base station to multiple satellite receiver nodes across a campus."
  },
  {
    "id": "topo-22",
    "category": "Network Topologies and Architecture",
    "question": "Under the cloud Shared Responsibility Model for an Infrastructure as a Service (IaaS) deployment, who is responsible for securing the hypervisor layer and patching the virtual machine's guest operating system?",
    "choices": [
      "The cloud provider secures the hypervisor; the customer is responsible for patching the guest operating system.",
      "The customer secures the hypervisor; the cloud provider patches the guest operating system.",
      "The cloud provider is responsible for both the hypervisor and guest operating system patching.",
      "The customer is responsible for both the hypervisor and guest operating system patching."
    ],
    "correctIndex": 0,
    "explanation": "In IaaS, the cloud provider manages physical security, hardware, and the virtualization hypervisor. The customer is fully responsible for managing the VM configuration, firewall rules, application stack, and guest OS patching."
  },
  {
    "id": "topo-23",
    "category": "Network Topologies and Architecture",
    "question": "How do Type 1 (Bare-Metal) and Type 2 (Hosted) hypervisors differ in their access to physical hardware resources?",
    "choices": [
      "Type 1 hypervisors install directly on physical hardware and allocate resources bare-metal; Type 2 hypervisors run inside a host operating system, passing resource requests through the host OS kernel.",
      "Type 1 hypervisors run inside a guest operating system; Type 2 hypervisors install directly on hardware.",
      "Type 1 hypervisors only support Linux VMs; Type 2 hypervisors only support Windows VMs.",
      "Type 1 hypervisors are stateless; Type 2 hypervisors are stateful."
    ],
    "correctIndex": 0,
    "explanation": "Type 1 hypervisors (e.g. VMware ESXi) install directly on bare-metal hardware, securing maximum efficiency. Type 2 hypervisors (e.g. VirtualBox) run as an application on top of an host OS, meaning requests go through the host OS kernel, increasing overhead."
  },
  {
    "id": "topo-24",
    "category": "Network Topologies and Architecture",
    "question": "Which physical materials completely absorb radio frequency (RF) signals, and why does 2.4 GHz penetrate drywall better than 5 GHz?",
    "choices": [
      "Metal and water absorb RF waves; 2.4 GHz has a longer wavelength that travels through solid obstacles better than shorter 5 GHz waves.",
      "Concrete absorbs RF waves; 2.4 GHz has a shorter wavelength than 5 GHz.",
      "Glass absorbs RF waves; 2.4 GHz is a digital signal while 5 GHz is analog.",
      "Wood absorbs RF waves; 2.4 GHz runs at higher power than 5 GHz."
    ],
    "correctIndex": 0,
    "explanation": "Water and metal strongly absorb/reflect electromagnetic waves. Lower frequencies (2.4 GHz) have a longer wavelength, allowing them to bend around or pass through materials like wood and drywall more easily than high frequency, short wavelength signals (5/6 GHz)."
  },
  {
    "id": "topo-25",
    "category": "Network Topologies and Architecture",
    "question": "What are the three distinct technical service pillars defined in the 5G core architecture?",
    "choices": [
      "eMBB (high throughput), URLLC (ultra-low latency), and mMTC (massive IoT connection density)",
      "LTE (4G backward), VoLTE (voice calls), and MIMO (multi-antennas)",
      "Slicing (virtual partitioning), Beamforming (focusing), and Handshaking (security)",
      "DoT (DNS over TLS), DoH (DNS over HTTPS), and CGNAT (carrier NAT)"
    ],
    "correctIndex": 0,
    "explanation": "The 5G standard defines: eMBB (Enhanced Mobile Broadband for high throughput/streaming), URLLC (Ultra-Reliable Low-Latency Communications for critical automation/driving), and mMTC (Massive Machine-Type Communications for massive IoT sensor grids)."
  },
  {
    "id": "sec-21",
    "category": "Network Security",
    "question": "Contrast the exact switch behaviors when a port security violation occurs under Protect, Restrict, and Shutdown modes.",
    "choices": [
      "Protect silently drops frames; Restrict drops frames, increments the violation counter, and sends logs/SNMP traps; Shutdown disables the port to err-disable.",
      "Protect drops frames and sends logs; Restrict disables the port; Shutdown silently discards traffic.",
      "Protect disables the port; Restrict silently discards traffic; Shutdown increments the counter.",
      "Protect silently drops frames; Restrict disables the port; Shutdown sends logs without blocking traffic."
    ],
    "correctIndex": 0,
    "explanation": "Protect silently drops traffic without incrementing counters or sending logs. Restrict drops traffic, increments the security violation count, and sends Syslog/SNMP traps. Shutdown immediately places the port into an err-disabled state (needs admin reset)."
  },
  {
    "id": "sec-22",
    "category": "Network Security",
    "question": "What are the key transport, encryption, and operational differences between RADIUS and TACACS+?",
    "choices": [
      "RADIUS uses UDP, combines authentication/authorization, and encrypts only the password; TACACS+ uses TCP, completely separates authentication from authorization, and encrypts the entire packet payload.",
      "RADIUS uses TCP and encrypts the entire payload; TACACS+ uses UDP and encrypts only passwords.",
      "RADIUS separates authentication and authorization; TACACS+ combines them in UDP transport.",
      "RADIUS is Cisco-proprietary; TACACS+ is an open industry standard."
    ],
    "correctIndex": 0,
    "explanation": "RADIUS uses UDP (port 1812/1813), combines authentication and authorization, and only encrypts the password field (leaving user headers plaintext). TACACS+ uses TCP (port 49), completely separates authentication and authorization, and encrypts the entire packet payload, making it ideal for router/switch administrator management access."
  },
  {
    "id": "sec-23",
    "category": "Network Security",
    "question": "Arrange Microsoft Active Directory components in their correct hierarchical containment order from smallest boundary to largest.",
    "choices": [
      "Organizational Units (OUs) -> Domains -> Trees -> Forests",
      "Forests -> Trees -> Domains -> Organizational Units (OUs)",
      "Domains -> Organizational Units (OUs) -> Forests -> Trees",
      "Trees -> Domains -> Forests -> Organizational Units (OUs)"
    ],
    "correctIndex": 0,
    "explanation": "The Active Directory hierarchy is: OUs (contain users/groups inside a domain) -> Domains (logical security/DNS boundaries) -> Trees (group of domains sharing a contiguous namespace) -> Forests (the top security boundary, sharing a schema)."
  },
  {
    "id": "sec-24",
    "category": "Network Security",
    "question": "What is the primary difference in functional intent between OAuth 2.0 and OpenID Connect (OIDC)?",
    "choices": [
      "OAuth 2.0 is strictly an authorization framework that issues scoped tokens; OIDC is an identity layer built on top of it to handle authentication.",
      "OAuth 2.0 handles authentication; OIDC handles authorization.",
      "OAuth 2.0 runs over UDP; OIDC runs over TCP.",
      "OAuth 2.0 is for internal LAN access; OIDC is for remote public access."
    ],
    "correctIndex": 0,
    "explanation": "OAuth 2.0 is an authorization framework designed to grant access to resources (APIs) via scoped tokens. OIDC (OpenID Connect) is an identity layer built directly on top of OAuth 2.0 to provide user authentication and identity verification (using ID tokens)."
  },
  {
    "id": "sec-25",
    "category": "Network Security",
    "question": "Differentiate local SPAN, Remote SPAN (RSPAN), and Encapsulated Remote SPAN (ERSPAN) port mirroring.",
    "choices": [
      "SPAN mirrors locally on one switch; RSPAN mirrors across switches using a dedicated VLAN; ERSPAN mirrors across routed networks using Layer 3 GRE encapsulation.",
      "SPAN mirrors across switches; RSPAN is local; ERSPAN is restricted to fiber optic connections.",
      "SPAN uses GRE encapsulation; RSPAN uses VLANs; ERSPAN is local to a single switch.",
      "They are identical protocols but supported by different vendors."
    ],
    "correctIndex": 0,
    "explanation": "SPAN (Switch Port Analyzer) copies traffic locally on the same switch. RSPAN copies traffic across multiple switches over a dedicated VLAN. ERSPAN encapsulates mirrored frames into Layer 3 GRE packets, allowing them to route across different subnetworks to a collector."
  },
  {
    "id": "proto-22",
    "category": "Network Protocols and Standards",
    "question": "What is the difference in connection negotiation between Explicit FTPS and Implicit FTPS?",
    "choices": [
      "Explicit FTPS starts unencrypted on port 21 and upgrades to TLS via the STARTTLS command; Implicit FTPS forces immediate TLS encryption on port 990.",
      "Explicit FTPS requires SSH; Implicit FTPS requires certificates.",
      "Explicit FTPS runs on port 990; Implicit FTPS runs on port 21.",
      "Explicit FTPS is UDP; Implicit FTPS is TCP."
    ],
    "correctIndex": 0,
    "explanation": "Explicit FTPS starts as standard FTP (port 21) and relies on the client sending a command like 'STARTTLS' to upgrade the session to encryption. Implicit FTPS requires the client to establish a secure SSL/TLS session immediately upon connection to port 990, refusing any plaintext startup."
  },
  {
    "id": "proto-23",
    "category": "Network Protocols and Standards",
    "question": "Explain how DNSSEC and Bailiwick Checks protect DNS, and state the ports for DoT and DoH.",
    "choices": [
      "DNSSEC signs records with digital signatures; Bailiwick Checks reject out-of-scope name server responses to prevent cache poisoning; DoT uses Port 853 and DoH uses Port 443.",
      "DNSSEC encrypts the client lookup; Bailiwick Checks manage zone transfers; DoT uses Port 443 and DoH uses Port 853.",
      "DNSSEC replaces DNS entirely; Bailiwick Checks manage reverse PTR lookups; DoT/DoH use Port 53.",
      "DNSSEC is a firewall; Bailiwick Checks audit root servers; DoT/DoH run over UDP."
    ],
    "correctIndex": 0,
    "explanation": "DNSSEC uses cryptography to sign DNS records, ensuring authenticity. Bailiwick Checks prevent cache poisoning by verifying that a DNS server response is within the domain namespace requested. DoT (DNS over TLS) encrypts lookup traffic on Port 853, while DoH (DNS over HTTPS) hides query traffic inside standard HTTPS packets on Port 443."
  },
  {
    "id": "proto-24",
    "category": "Network Protocols and Standards",
    "question": "State the exact source power budgets and delivered power ratings for IEEE 802.3af (PoE), 802.3at (PoE+), and 802.3bt (PoE++ Type 3 & 4).",
    "choices": [
      "802.3af: 15.4W source, 12.95W delivered; 802.3at: 30W source, 25.5W delivered; 802.3bt (Type 3): 60W source, 51W delivered; 802.3bt (Type 4): 100W source, 71.3W delivered.",
      "802.3af: 30W source, 25.5W delivered; 802.3at: 15.4W source, 12.95W delivered; 802.3bt: 100W source, 90W delivered.",
      "802.3af: 15.4W source, 15.4W delivered; 802.3at: 30W source, 30W delivered; 802.3bt: 60W source, 60W delivered.",
      "They are determined dynamically by the WLC controller and do not have set standards."
    ],
    "correctIndex": 0,
    "explanation": "Standard values for PoE power budgets are: 802.3af (PoE) provides 15.4W source / 12.95W delivered; 802.3at (PoE+ / Type 2) provides 30W source / 25.5W delivered; 802.3bt (PoE++ / Type 3) provides 60W source / 51W delivered; 802.3bt (PoE++ / Type 4) provides 100W source / 71.3W delivered."
  },
  {
    "id": "proto-25",
    "category": "Network Protocols and Standards",
    "question": "Identify the OSPF LSA types matching their correct descriptions: Type 1, Type 2, Type 3, and Type 5.",
    "choices": [
      "Type 1: local area links; Type 2: generated by DR; Type 3: inter-area routes from ABR; Type 5: external routes from ASBR.",
      "Type 1: inter-area routes; Type 2: external routes; Type 3: local area links; Type 5: generated by DR.",
      "Type 1: generated by DR; Type 2: local area links; Type 3: external routes; Type 5: inter-area routes.",
      "Type 1: external routes; Type 2: inter-area routes; Type 3: generated by DR; Type 5: local area links."
    ],
    "correctIndex": 0,
    "explanation": "LSA Types are: Type 1 (Router LSA) is flooded within an area describing local interface links; Type 2 (Network LSA) is flooded by the Designated Router (DR) on multi-access segments; Type 3 (Summary LSA) is sent by the ABR containing routes between areas; Type 5 (AS External LSA) is sent by the ASBR to advertise external domain/internet routes."
  },
  {
    "id": "hw-16",
    "category": "Network Hardware and Connectivity",
    "question": "What is the primary function of SR-IOV (Single-Root I/O Virtualization) in virtual adapter architectures?",
    "choices": [
      "It allows a single physical PCIe network adapter to expose itself as multiple virtual functions, bypassing the host hypervisor kernel to deliver packets directly to virtual machines for ultra-low latency.",
      "It converts fiber optic light signals to electrical signals on a motherboard.",
      "It binds multiple physical ethernet ports into a single logical channel.",
      "It manages backup schedules across storage arrays (SAN)."
    ],
    "correctIndex": 0,
    "explanation": "SR-IOV allows virtual machines to directly share PCIe physical hardware resources (like network adapters). By exposing virtual functions, the VM communicates directly with the physical network card, bypassing the host hypervisor kernel, which reduces latency and CPU overhead."
  },
  {
    "id": "hw-17",
    "category": "Network Hardware and Connectivity",
    "question": "Differentiate Ultra Physical Contact (UPC) and Angled Physical Contact (APC) fiber connectors by color and return loss prevention.",
    "choices": [
      "UPC is blue with a flat endface polish prone to return loss; APC is green with an 8-degree angled polish that forces back-reflections into the fiber cladding.",
      "UPC is green with a round endface; APC is blue with a square endface.",
      "UPC is for single-mode fiber only; APC is for multimode fiber only.",
      "UPC is twist-locked; APC is push-pull clip connected."
    ],
    "correctIndex": 0,
    "explanation": "UPC connectors are blue with a flat endface polish; over time, physical contact degradation leads to return loss. APC connectors are green with an 8-degree angled polish, meaning any back-reflection is redirected into the fiber's cladding instead of reflecting back to the light source, minimizing return loss."
  },
  {
    "id": "hw-18",
    "category": "Network Hardware and Connectivity",
    "question": "State the exact switch transfer delay times and operational characteristics for Standby/Offline, Line-Interactive, and Online Double Conversion UPS systems.",
    "choices": [
      "Standby/Offline has a ~10ms switch delay; Line-Interactive has a 2-6ms delay with voltage regulation; Online Double Conversion has a 0ms switch delay (continuous AC-to-DC-to-AC cycle).",
      "Standby/Offline has a 0ms switch delay; Line-Interactive has a ~10ms delay; Online Double Conversion has a 2-6ms delay.",
      "Standby/Offline has a 2-6ms delay; Line-Interactive has a 0ms delay; Online Double Conversion has a ~10ms delay.",
      "They all operate with a constant 0ms transfer delay but support different voltage ranges."
    ],
    "correctIndex": 0,
    "explanation": "Offline/Standby has a ~10ms switch time (fine for simple clients). Line-Interactive has 2-6ms switch delay and utilizes automatic voltage regulation (AVR) to correct sags/brownouts without battery drainage. Online Double Conversion has 0ms switch delay because it constantly routes incoming power through an AC-to-DC-to-AC cycle, separating the load from line sags/surges entirely."
  }
];

console.log(`FBLA Questions loaded: ${window.FBLA_QUESTIONS.length} questions registered.`);
