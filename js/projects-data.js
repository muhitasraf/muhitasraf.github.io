/**
 * Muhit Ashraf - Personal Portfolio Projects Data
 * Dedicated Single Source of Truth for all portfolio projects
 */
const PROJECTS_DATA = {
  'p-elasticpress': {
    title: '10up ElasticPress — Enterprise WordPress Search Engine',
    category: 'opensource',
    categoryLabel: 'Open Source Core Contribution',
    categoryIcon: 'fab fa-github',
    status: 'Merged & Released (v5.3.4)',
    role: 'Open Source Contributor (PHP & WordPress Core Bugfix)',
    overview: "ElasticPress is 10up's flagship enterprise search and indexing solution for WordPress and WooCommerce, powering instant search, faceting, and content recommendations across massive datasets via Elasticsearch/OpenSearch. Contributed an essential type safety fix to resolve fatal PHP 8 runtime exceptions during Elementor template parsing.",
    architecture: "When indexing Elementor layouts, post meta ('_elementor_data') can be returned as a serialized array or raw JSON string depending on database migrations and setup. Under PHP 8+, passing an array directly into json_decode() throws a fatal TypeError (Argument #1 must be of type string, array given) that breaks the indexing pipeline. Implemented robust defensive type verification with strict fallback handlers and clean template iteration.",
    contributions: [
      'PHP 8 Type Safety Safeguard: Resolved fatal TypeError in json_decode() when Elementor post meta is retrieved as an array rather than JSON.',
      'Defensive Pipeline Architecture: Shielded recursive widget traversal against malformed or null metadata payloads, preventing search reindexing halts.',
      'Enterprise Open-Source Collaboration: Reviewed, approved, and merged by 10up maintainers; officially credited under Props in the v5.3.4 CHANGELOG.',
      'Strict Type Validation Logic: Engineered type-checking safeguards supporting both stringified JSON and pre-unserialized array structures.'
    ],
    tech: ['PHP 8.x', 'WordPress VIP', 'ElasticPress', 'Elasticsearch', 'Elementor', 'Type Safety', 'Git / CI Workflow', 'Open Source'],
    githubUrl: 'https://github.com/10up/ElasticPress/pull/4341',
    githubLabel: 'View Merged Pull Request #4341',
    demoUrl: 'https://github.com/10up/ElasticPress/blob/develop/CHANGELOG.md',
    demoLabel: 'Official Release CHANGELOG (v5.3.4)'
  },
  'p-edueasy': {
    title: 'EduEasy Academic Web Portals',
    category: 'web',
    categoryLabel: 'Enterprise Web',
    categoryIcon: 'fas fa-globe',
    status: 'Production Deployed',
    role: 'Full-Stack Web Architect & Database Designer',
    overview: 'A comprehensive multi-portal academic management platform consolidating student self-service course registration, faculty grade submissions, and administrative financial workflows into a synchronized ecosystem.',
    architecture: 'Engineered using a modular MVC paradigm with a normalized MySQL database backend. Designed specifically to handle extreme concurrent load during semester course registration rushes with minimal CPU overhead.',
    contributions: [
      'Relational Schema Design: Architected 3NF normalized relational database schema managing prerequisites, semester schedules, and multi-tenant student billing.',
      'Role-Based Access Control: Engineered strict multi-level Role-Based Access Control (RBAC) securely segregating Student, Faculty, and Admin permissions.',
      'Prerequisite Validation Engine: Automated prerequisite validation algorithms and automated transcript & invoice generation pipelines.',
      'High-Concurrency Optimization: Optimized critical database queries with compound indexing to maintain sub-200ms latency under high concurrent load.'
    ],
    tech: ['PHP', 'MySQL', 'JavaScript', 'RESTful APIs', 'RBAC Security', 'Bootstrap', 'HTML5/CSS3', 'Relational DB'],
    githubUrl: 'https://github.com/muhitAshraf'
  },
  'p-ai-vision': {
    title: 'Smart Assistive Device for Visually Impaired',
    category: 'iot-ai',
    categoryLabel: 'IoT & Embedded',
    categoryIcon: 'fas fa-microchip',
    status: 'B.Sc Thesis & Working Prototype',
    role: 'Embedded Systems & Firmware Engineer',
    overview: 'An intelligent embedded hardware prototype developed as an undergraduate thesis to empower visually impaired individuals with real-time navigational awareness, active collision avoidance, and spatial hazard feedback.',
    architecture: 'The system fuses ultrasonic sensor arrays with an Atmel microcontroller running low-latency C++ firmware. Sensor pulse timing is calculated via hardware interrupts, determining obstacle distance and velocity vectors to trigger calibrated PWM audio tones and tactile vibration patterns.',
    contributions: [
      'Multi-Sensor Fusion Firmware: Engineered multi-sensor fusion firmware using microsecond-precision hardware timers for ultrasonic echo acquisition.',
      'Sensory Audio & Tactile Synthesis: Designed low-latency audio frequency synthesis and multi-stage haptic vibration mapping for proximity warnings.',
      'Power-Optimized Circuits: Optimized embedded power distribution circuits and sleep routines to maximize battery runtime on a wearable chassis.',
      'Navigational Distance Benchmarking: Conducted controlled obstacle distance benchmarks achieving 98% detection accuracy within 3-meter navigational envelopes.'
    ],
    tech: ['Embedded C++', 'Arduino / Atmel', 'Sensor Arrays', 'Audio Synthesis', 'Hardware Interfacing', 'PWM Circuits'],
    githubUrl: 'https://github.com/muhitAshraf'
  },
  'p-prayer': {
    title: 'Islamic Prayer & Hijri Calendar Android App',
    category: 'app',
    categoryLabel: 'Mobile Application & Algorithms',
    categoryIcon: 'fab fa-android',
    status: 'Production Android App',
    role: 'Android Developer & Core Algorithmic Contributor',
    overview: 'A native Java Android application engineered to calculate precise astronomical Islamic prayer (Waqt) schedules, dynamic Jamat (congregational) prayer time predictions, and Islamic Hijri calendar dates conforming to traditional juristic astronomical rules.',
    architecture: 'Built using native Java with an offline-first astronomical calculation engine. Solar coordinates, twilight declination, and equation of time are evaluated mathematically on-device without external API latency. Jamat time prediction models forecast localized mosque congregation schedules based on dynamic offsets from Waqt boundaries. The Hijri calendar engine integrates astronomical lunar phase estimations with juristic sighting adjustments and regional calendar conversion algorithms.',
    contributions: [
      'Waqt Astronomical Calculation: Developed high-precision solar angle and spherical trigonometry algorithms in Java, calculating Fajr, Dhuhr, Asr (Hanafi & Shafi\'i shadow ratios), Maghrib, and Isha times with latitude-based twilight corrections.',
      'Jamat Time Prediction: Engineered predictive scheduling algorithms calculating congregation (Jamat) timings across local mosques using customizable post-Adhan interval rules and seasonal rounding thresholds.',
      'Hijri Calendar Engine: Implemented lunar date conversion algorithms incorporating Islamic astronomical rules, moon-sighting offsets, and historical Islamic calendar synchronization.',
      'Android System Automation: Integrated Android AlarmManager and background workers for battery-efficient Waqt notification triggers, localized Qibla direction math, and offline SQLite preference caching.'
    ],
    tech: ['Java', 'Android SDK', 'Spherical Astronomy', 'Hijri Calendar Algorithm', 'Jamat Prediction Logic', 'WorkManager / Alarms', 'SQLite', 'Offline-First'],
    githubUrl: 'https://github.com/muhitAshraf'
  },
  'p-webview': {
    title: 'Dynamic Cloud WebView Controller Engine',
    category: 'system',
    categoryLabel: 'Systems & Cloud Config',
    categoryIcon: 'fas fa-cogs',
    status: 'Production Utility',
    role: 'System & Mobile Infrastructure Engineer',
    overview: 'A remote policy management micro-engine providing real-time runtime control over Android applications without requiring redeployments through Google Play Store.',
    architecture: 'Client applications query a remote JSON configuration contract during boot. The engine parses version constraints, maintenance locks, redirect targets, and emergency notices with dual-tier local caching to prevent boot-up blocking during network partitions.',
    contributions: [
      'Remote App Policy Management: Designed cloud JSON configuration schema supporting emergency locks, dynamic maintenance banners, and forced updates.',
      'Semantic Version Enforcement: Built client-side semantic version comparator algorithm evaluating minimum required vs installed client versions.',
      'Fault-Tolerant Local Cache: Implemented local fallback cache ensuring application stability and offline usability even if remote endpoint is unreachable.',
      'Zero-Latency Deployments: Eliminated emergency update turnaround time from days (Play Store review) to milliseconds via cloud toggles.'
    ],
    tech: ['Android / Java', 'JSON Schema Engine', 'Remote Config', 'Semantic Versioning', 'Security Gating', 'Offline Fallback'],
    demoUrl: 'webview_control.json',
    demoLabel: 'View Live JSON Endpoint',
    githubUrl: 'https://github.com/muhitAshraf'
  },
  'p-desktop': {
    title: 'Enterprise Java Desktop Management Suite',
    category: 'system',
    categoryLabel: 'Desktop Systems',
    categoryIcon: 'fas fa-desktop',
    status: 'Enterprise Deployed',
    role: 'Desktop Software Developer & Database Designer',
    overview: 'An offline-first desktop ERP and inventory management suite built for commercial retailers requiring transaction processing, automated document generation, and ledger tracking.',
    architecture: 'Built using Java Swing with clean MVC architecture and a multi-threaded JDBC persistence layer. Implements strict ACID transaction handling for stock deduction and sales logging with automated backup routines.',
    contributions: [
      'Multi-Threaded Database Pipeline: Engineered multi-threaded SQLite database transaction manager preventing concurrency deadlocks during sales peaks.',
      'Automated Document Printing: Built automated invoice and thermal receipt printing pipeline utilizing iText PDF engine with custom barcode stamps.',
      'Inventory Allocation Guard: Implemented event-driven inventory reconciliation ledger preventing negative stock allocations across sales terminals.',
      'High-Speed Counter Interface: Designed clean, responsive desktop UI with keyboard shortcuts tailored for high-speed counter checkout operations.'
    ],
    tech: ['Java Swing', 'JDBC', 'SQLite', 'Multi-Threading', 'iText PDF Engine', 'OOP Architecture', 'ACID Compliance'],
    githubUrl: 'https://github.com/muhitAshraf'
  },
  'p-hamko': {
    title: 'Hamko Sales Order Android App',
    category: 'app',
    categoryLabel: 'Mobile System',
    categoryIcon: 'fab fa-android',
    status: 'Production Enterprise',
    role: 'Mobile App Architect & Lead Android Developer',
    overview: 'An enterprise mobility platform built for Hamko Group enabling corporate sales representatives across Bangladesh to record on-ground field retail orders, evaluate real-time dealer credit quotas, and synchronize transactions with central ERP systems.',
    architecture: 'Built with an offline-first transactional pipeline on top of SQLite and Retrofit. Field representatives often operate in rural regions with low or intermittent cellular reception. Orders and stock ledgers are committed into an ACID-compliant local database queue and dispatched via an automated background sync service when network connectivity is restored.',
    contributions: [
      'Offline-First Synchronization: Architected offline-first SQLite synchronization engine with deterministic retry queues and conflict resolution.',
      'Enterprise Session Security: Hardened client-server security using token-based session authentication and encrypted local credential storage.',
      'Hardware Scanner Integration: Engineered barcode scanning and automated real-time dealer discount calculations, slashing order placement time by 65%.',
      'Field Network Resilience: Built low-bandwidth network interceptors to prevent duplicated transaction submissions during unstable cellular handoffs.'
    ],
    tech: ['Java', 'Android SDK', 'SQLite', 'Retrofit / REST', 'Barcode Scanning', 'ERP Sync', 'Token Auth', 'WorkManager'],
    githubUrl: 'https://github.com/muhitAshraf'
  }
};

// Ensure global accessibility across all script tags and environments
if (typeof window !== 'undefined') {
  window.PROJECTS_DATA = PROJECTS_DATA;
}
