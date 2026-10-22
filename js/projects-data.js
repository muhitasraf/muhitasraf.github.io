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
  'p-alfafaa': {
    title: 'Alfafaa — High-Traffic Social Media & Multi-Server Cloud Infrastructure',
    category: 'web',
    categoryLabel: 'Cloud Architecture & Web Platform',
    categoryIcon: 'fas fa-cloud',
    status: 'Production Live Platform',
    role: 'Lead Full-Stack Engineer & Cloud Administrator',
    overview: 'A large-scale WordPress-powered social media ecosystem and content platform. Architected the multi-server infrastructure, developed custom feature plugins, optimized critical rendering paths, and established high-availability cloud hosting.',
    architecture: 'Designed a high-availability multi-server topology fronted by Cloudflare load balancing, routing traffic to Nginx application nodes with a dedicated centralized MySQL database cluster. Conducted comprehensive latency and memory benchmarking across Redis, Valkey, and KeyDB to deploy the optimal caching layer. Administered 10+ subdomain production environments (including blog.alfafaa.com, directory.alfafaa.com).',
    contributions: [
      'Multi-Server Scaling & Cloudflare: Architected multi-node load balancing via Cloudflare with centralized database replication and SSL termination.',
      'In-Memory Caching Benchmarking: Evaluated and benchmarked Redis vs. Valkey vs. KeyDB for low-latency session and object query caching under traffic surges.',
      'Custom Payment Gateway Plugins (bKash, PayPal, Stripe): Architected and developed bespoke WordPress plugins integrating bKash (Bangladesh mobile money merchant API), PayPal REST API, and Stripe, managing tokenized card processing, IPN/webhook reconciliations, and automated multi-currency recurring subscriptions.',
      'Custom Plugin Engineering: Developed bespoke WordPress plugins for specialized community engagement features, access gating, and media feeds.',
      'Cloud Migration & Cost Optimization: Seamlessly migrated infrastructure across cloud providers, slashing monthly infrastructure overhead while improving page speed.',
      'Multi-Service Server Administration: Managed and hardened 10+ production Linux VPS servers across active micro-sites and subdomains.'
    ],
    tech: ['WordPress', 'PHP 8', 'bKash API', 'PayPal REST', 'Stripe API', 'Cloudflare Load Balancing', 'Redis / Valkey / KeyDB', 'MySQL Replication', 'Nginx', 'Linux VPS', 'Security Hardening'],
    demoUrl: 'https://alfafaa.com',
    demoLabel: 'Visit Live Platform (alfafaa.com)'
  },
  'p-canadian-school': {
    title: 'Canadian Online School Management & Examination Platform (nistonline.ca)',
    category: 'web',
    categoryLabel: 'Enterprise SaaS & EdTech',
    categoryIcon: 'fas fa-school',
    status: 'Production Commercial System',
    role: 'Full-Stack Software Engineer (Aniya Network Solutions)',
    overview: 'A full-cycle online school and educational ecosystem engineered for Canadian academic curriculums (nistonline.ca). Consolidates student admissions, interactive lesson delivery, multi-tier examination evaluations, and automated academic transcripts.',
    architecture: 'Built on a decoupled full-stack architecture with a Laravel RESTful API backend and a responsive Nuxt.js / Vue frontend. Implements real-time exam auto-saving, granular Role-Based Access Control (RBAC) across Students, Teachers, and Parents, and automated grading pipelines for objective and subjective tests.',
    contributions: [
      'Full Student Admission Lifecycle: Engineered automated registration, document verification, enrollment workflows, and student profile registries.',
      'Curriculum & Lesson Engine: Architected hierarchical Course, Module, and Lesson content delivery with multimedia tracking and prerequisite gating.',
      'Comprehensive Assessment Engine: Built interactive quiz builders, objective/subjective timed exams, automated scoring, and detailed report cards.',
      'Attendance & Result Processing: Developed real-time student attendance monitoring and statistical grade calculation engines conforming to academic standards.',
      'Decoupled Nuxt & Laravel Architecture: Maintained low-latency response times with optimized database schemas and clean API contracts.'
    ],
    tech: ['Laravel', 'Nuxt.js', 'Vue.js', 'MySQL', 'RESTful APIs', 'RBAC Security', 'State Management', 'Education Tech'],
    demoUrl: 'https://nistonline.ca',
    demoLabel: 'Visit Live Platform (nistonline.ca)'
  },
  'p-edueasy': {
    title: 'Edueasy — Comprehensive School Management & Bulk SMS Notification System',
    category: 'web',
    categoryLabel: 'Enterprise EdTech SaaS',
    categoryIcon: 'fas fa-graduation-cap',
    status: 'Commercial Production System',
    role: 'Software Engineer (Data Envelope)',
    overview: 'An institutional school management platform engineered for schools and colleges to streamline academic administration, dynamic student marks calculation, report card generation, and automated real-time communication with parents via bulk SMS.',
    architecture: 'Engineered with Laravel and MySQL utilizing normalized 3NF relational schemas for high-concurrency academic reporting. Features an asynchronous queue-based bulk SMS dispatching engine interfacing with Bangladeshi telecommunications SMS gateway APIs for instantaneous result and attendance delivery.',
    contributions: [
      'Edueasy Core Architecture: Built the complete academic portal from scratch with Laravel and MySQL, handling admissions, classes, subjects, and exams.',
      'Bulk SMS Gateway Integration (BD SMS Provider): Integrated Bangladeshi SMS provider APIs to dispatch automated, high-volume SMS alerts for student exam results, marks summaries, and daily attendance logs.',
      'Automated Result & Grade Engine: Developed dynamic grade point average (GPA) and marksheet computation algorithms conforming to national grading standards.',
      'Attendance & Parent Notifications: Built automated daily attendance tracking triggers that notify parents via SMS whenever a student is absent or tardy.'
    ],
    tech: ['Laravel', 'MySQL', 'BD SMS Gateway API', 'Bulk SMS Automation', 'Queue Workers', 'Blade / JavaScript', 'REST APIs', 'Academic ERP'],
    githubUrl: 'https://github.com/muhitasraf'
  },
  'p-amanix': {
    title: 'Amanix — Lightweight VPS Monitoring & Automated Disaster Backup Suite',
    category: 'system',
    categoryLabel: 'Systems & DevOps Tooling',
    categoryIcon: 'fas fa-server',
    status: 'Production Tooling (Nabatek USA)',
    role: 'Systems & Tooling Engineer',
    overview: 'An efficient, self-hosted Linux server monitoring and automated backup utility engineered to provide real-time hardware telemetries, threshold alerts, and scheduled offsite backup synchronization for multi-VPS fleets.',
    architecture: 'Core daemon written in Python with low-level Linux Bash automation scripts interfacing with /proc, systemd, and cron. Features a responsive, lightweight web dashboard crafted in Alpine.js and clean HTML/CSS with minimal server memory footprint (<30MB RAM overhead).',
    contributions: [
      'Automated Backup Pipeline: Engineered automated cron-driven database and filesystem archive routines with compression, rotation, and cloud sync.',
      'Real-Time Telemetry Daemon: Developed Python process monitors tracking CPU loads, RAM thresholds, disk IOPS, and network bandwidth in real time.',
      'Ultra-Lightweight UI: Built an intuitive administrative web dashboard utilizing Alpine.js and CSS, avoiding heavy node runtime dependencies on production servers.',
      'Disaster Recovery Automation: Implemented one-command snapshot restoration routines to minimize recovery time objectives (RTO).'
    ],
    tech: ['Python', 'Linux Bash', 'Alpine.js', 'Systemd', 'Cron Automation', 'Nginx', 'HTML5 / Modern CSS', 'DevOps'],
    githubUrl: 'https://github.com/muhitasraf'
  },
  'p-haya-ai': {
    title: 'HayaAI — Computer Vision Inappropriate Attire & Content Moderation Engine',
    category: 'system',
    categoryLabel: 'AI & Computer Vision',
    categoryIcon: 'fas fa-brain',
    status: 'Production Microservice',
    role: 'Computer Vision & Backend Engineer',
    overview: 'An automated computer vision image detection and classification microservice engineered to detect nudity and clothing rule violations (such as tight-fit wear and nudity) for platform content safety compliance.',
    architecture: 'Built in Python utilizing the NudeNet deep learning framework and pre-trained convolutional neural network (CNN) detection models. Images submitted via REST API are normalized, processed through neural detection bounding boxes, and scored against customizable strictness thresholds.',
    contributions: [
      'Automated Visual Moderation: Engineered image classification pipelines detecting inappropriate or tight-fitting attire based on bounding box confidence.',
      'API Integration & Automation: Integrated the Python inference engine into social platform upload hooks with asynchronous queue processing.',
      'False-Positive Calibration: Tuned detection thresholds and confidence filters to balance user experience with strict content compliance policies.',
      'Containerized Inference: Packaged the service into lightweight Docker containers for reproducible multi-server deployment.'
    ],
    tech: ['Python', 'NudeNet', 'Computer Vision', 'Deep Learning / CNN', 'Docker', 'REST API', 'Content Moderation'],
    githubUrl: 'https://github.com/muhitasraf'
  },
  'p-go-email': {
    title: 'High-Throughput Concurrent Email Validation Microservice',
    category: 'system',
    categoryLabel: 'Systems & Microservices',
    categoryIcon: 'fas fa-bolt',
    status: 'Production Microservice',
    role: 'Backend & Systems Engineer (Go)',
    overview: 'A high-performance email verification service engineered in Go (Golang) capable of detecting disposable, malformed, and non-deliverable email addresses at high scale with sub-millisecond response rates.',
    architecture: 'Leverages Go goroutines and channels for asynchronous, concurrent DNS MX record lookups, disposable domain blacklist matching, and SMTP handshake simulation without sending actual emails. Designed for minimal memory footprint and zero external database dependencies.',
    contributions: [
      'Concurrent DNS Resolution: Implemented concurrent worker pools in Go querying root DNS servers and evaluating MX record deliverability.',
      'Disposable Domain Shield: Built in-memory radix trie structures to match disposable email provider domains in O(1) time.',
      'Syntax & RFC 5322 Validator: Engineered strict RFC-compliant regex and lexical parsers filtering out deceptive or forged recipient headers.',
      'High-Throughput API: Packaged as a standalone microservice capable of processing thousands of verification requests per second.'
    ],
    tech: ['Go (Golang)', 'Goroutines & Channels', 'DNS / MX Verification', 'SMTP Handshake', 'Concurrency', 'Microservices', 'High Performance'],
    githubUrl: 'https://github.com/muhitasraf'
  },
  'p-medical-erp': {
    title: 'Esteem Hospital Medical ERP & Critical Care (ICU/NICU) Suite',
    category: 'web',
    categoryLabel: 'Enterprise ERP & Healthcare',
    categoryIcon: 'fas fa-hospital',
    status: 'Production Hospital Deployment',
    role: 'Software Engineer (Esteem Soft Limited)',
    overview: 'A mission-critical enterprise hospital management and ERP suite deployed across medical centers, managing clinical records, payroll, inventory, and life-critical patient monitoring in intensive care units.',
    architecture: 'Built with raw PHP, MySQL, and JavaScript using an event-driven MVC architecture. Handles real-time transaction processing for pharmaceutical inventory, staff salary calculation, biometric attendance integration, and clinical data logging with strict audit trails.',
    contributions: [
      'ICU & NICU Modules from Scratch: Architected and built specialized intensive care unit (ICU) and neonatal intensive care (NICU) patient tracking workflows.',
      'Payroll & Salary Engine: Developed complex salary computation algorithms taking into account attendance logs, statutory deductions, bonuses, and leave adjustments.',
      'Inventory & Requisition System: Automated multi-departmental pharmaceutical requisition, stock allocations, and purchase approval pipelines.',
      'Biometric Attendance Processing: Implemented batch processing scripts transforming raw biometric punch logs into verified daily timesheets.'
    ],
    tech: ['PHP', 'MySQL', 'JavaScript', 'ERP Architecture', 'Hospital Systems', 'Payroll Automation', 'Inventory Requisition'],
    githubUrl: 'https://github.com/muhitasraf'
  },
  'p-hamko': {
    title: 'Hamko Sales Order Android WebView Application',
    category: 'app',
    categoryLabel: 'Mobile WebView Engineering',
    categoryIcon: 'fab fa-android',
    status: 'Production Enterprise Deployment',
    role: 'Android Developer (Hamko Group)',
    overview: 'An Android WebView-powered enterprise mobile application built for Hamko Group to provide nationwide corporate sales representatives with a native-wrapped, high-performance interface for logging and tracking retail sales orders.',
    architecture: 'Developed in Java utilizing the full suite of the Android WebView engine. Configured hardware-accelerated rendering, advanced WebSettings (DOM storage, database API, JavaScript execution, responsive viewport controls), and custom WebViewClient / WebChromeClient handlers for seamless internal URL navigation, progress tracking, cookie session persistence, and remote configuration controls.',
    contributions: [
      'Full-Featured WebView Engine: Engineered a dedicated Android WebView client configuring hardware acceleration, DOM storage, responsive viewport scaling, and multi-window handling.',
      'Navigation & Lifecycle Management: Implemented custom WebViewClient and WebChromeClient handling deep-link routing, page loading progress bars, pull-to-refresh, and back-button history traversal.',
      'Session & Cookie Persistence: Managed CookieManager and WebStorage synchronization to maintain field sales representatives authenticated across network handoffs and application restarts.',
      'Remote App Configuration & Controls: Integrated remote JSON-driven runtime controls enabling dynamic over-the-air status alerts, maintenance dialogues, and redirect policies.'
    ],
    tech: ['Java', 'Android SDK', 'Android WebView Engine', 'WebViewClient / WebChromeClient', 'CookieManager', 'DOM Storage', 'Hardware Acceleration'],
    githubUrl: 'https://github.com/muhitasraf'
  },
  'p-prayer': {
    title: 'Islamic Astronomical Waqt & Jamat Prediction Android Engine',
    category: 'app',
    categoryLabel: 'Mobile Application & Algorithms',
    categoryIcon: 'fab fa-android',
    status: 'Production Android App',
    role: 'Android Developer & Core Algorithmic Contributor',
    overview: 'A native Java Android application engineered to calculate precise astronomical Islamic prayer (Waqt) schedules, dynamic Jamat (congregational) prayer time predictions, and Islamic Hijri calendar dates conforming to traditional juristic astronomical rules.',
    architecture: 'Built using native Java with an offline-first astronomical calculation engine. Solar coordinates, twilight declination, and equation of time are evaluated mathematically on-device without external API latency. Jamat models forecast localized mosque congregation schedules based on dynamic offsets from Waqt boundaries.',
    contributions: [
      'Waqt Astronomical Calculation: Developed high-precision solar angle and spherical trigonometry algorithms in Java with latitude-based twilight corrections.',
      'Jamat Time Prediction: Engineered predictive scheduling algorithms calculating congregation (Jamat) timings across local mosques using seasonal rounding thresholds.',
      'Hijri Calendar Engine: Implemented lunar date conversion algorithms incorporating Islamic astronomical rules and moon-sighting offsets.',
      'Android System Automation: Integrated Android AlarmManager and background workers for battery-efficient notification triggers and offline caching.'
    ],
    tech: ['Java', 'Android SDK', 'Spherical Astronomy', 'Hijri Calendar Algorithm', 'Jamat Prediction Logic', 'WorkManager / Alarms', 'SQLite', 'Offline-First'],
    githubUrl: 'https://github.com/muhitasraf'
  }
};

// Ensure global accessibility across all script tags and environments
if (typeof window !== 'undefined') {
  window.PROJECTS_DATA = PROJECTS_DATA;
}
