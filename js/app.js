/**
 * Muhit Asraf - Personal Portfolio Application Logic
 * Modern ES6+ Architecture, Zero Bloat, 100% Client-Side
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initExperienceCounter();
  initTypewriter();
  initMobileNav();
  initScrollspy();
  initProjectFiltersAndModal();
  initContactInteractions();
  initBackToTop();
});

/* ==========================================================================
   1. Theme Toggle (Dark / Light Mode)
   ========================================================================== */
function initThemeToggle() {
  const toggleBtn = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');
  if (!toggleBtn || !themeIcon) return;

  const savedTheme = localStorage.getItem('ma_theme') ||
    (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');

  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme, themeIcon);

  toggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('ma_theme', newTheme);
    updateThemeIcon(newTheme, themeIcon);
  });
}

function updateThemeIcon(theme, iconElem) {
  if (theme === 'light') {
    iconElem.className = 'fas fa-moon';
    iconElem.setAttribute('title', 'Switch to Dark Mode');
  } else {
    iconElem.className = 'fas fa-sun';
    iconElem.setAttribute('title', 'Switch to Light Mode');
  }
}

/* ==========================================================================
   2. Dynamic Experience Counter
   Calculates exact time since Jan 29, 2022 (Industry Career Start Date)
   ========================================================================== */
function initExperienceCounter() {
  const expElement = document.getElementById('dynamicExperienceText');
  const yearsNumberElem = document.getElementById('expYearsNumber');
  if (!expElement && !yearsNumberElem) return;

  const startDate = new Date('2022-01-29T00:00:00');

  function updateCounter() {
    const now = new Date();

    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();

    if (days < 0) {
      months--;
      const prevMonthLastDay = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
      days += prevMonthLastDay;
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    const displayText = `${years} yrs ${months} mos ${days} days`;
    if (expElement) expElement.textContent = displayText;
    if (yearsNumberElem) yearsNumberElem.textContent = `${years}+`;
  }

  updateCounter();
}

/* ==========================================================================
   3. Native Smooth Typewriter for Engineering Roles
   ========================================================================== */
function initTypewriter() {
  const target = document.getElementById('typewriterText');
  if (!target) return;

  const roles = [
    'Software Engineer',
    'Full-Stack Developer',
    'Open Source Contributor',
    'Android App Developer',
    'Problem Solver',
    'IoT & Systems Enthusiast'
  ];

  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let typeSpeed = 90;

  function type() {
    const currentRole = roles[roleIdx];

    if (isDeleting) {
      target.textContent = currentRole.substring(0, charIdx - 1);
      charIdx--;
      typeSpeed = 45;
    } else {
      target.textContent = currentRole.substring(0, charIdx + 1);
      charIdx++;
      typeSpeed = 95;
    }

    if (!isDeleting && charIdx === currentRole.length) {
      typeSpeed = 2000; // Pause at completion
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      typeSpeed = 400; // Pause before new word
    }

    setTimeout(type, typeSpeed);
  }

  type();
}

/* ==========================================================================
   4. Mobile Navigation & Smooth Scroll
   ========================================================================== */
function initMobileNav() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-menu-cv-btn');

  if (!menuBtn || !navMenu) return;

  function closeMenu() {
    navMenu.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
    menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
  }

  menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = navMenu.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', isOpen);
    menuBtn.innerHTML = isOpen ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // Close when clicking outside header
  document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !menuBtn.contains(e.target) && navMenu.classList.contains('open')) {
      closeMenu();
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('open')) {
      closeMenu();
    }
  });
}

/* ==========================================================================
   5. Active Scrollspy with Intersection Observer
   ========================================================================== */
function initScrollspy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!sections.length || !navLinks.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));
}

/* ==========================================================================
   6. Project Filtering and Technical Architecture Dossier Modal
   Data is loaded from dedicated js/projects-data.js (Single Source of Truth)
   ========================================================================== */

/**
 * Dynamically renders project cards from the single source of truth (PROJECTS_DATA)
 * and automatically updates filter button counters.
 */
function renderProjectsFromData() {
  const container = document.getElementById('projectsList');
  if (!container) return;

  // 1. Calculate dynamic filter counts
  const counts = { all: 0 };
  Object.values(PROJECTS_DATA).forEach(p => {
    counts.all++;
    counts[p.category] = (counts[p.category] || 0) + 1;
  });

  document.querySelectorAll('.filter-btn').forEach(btn => {
    const filter = btn.getAttribute('data-filter');
    const countSpan = btn.querySelector('.filter-count');
    if (countSpan) {
      countSpan.textContent = counts[filter] || 0;
    }
  });

  // 2. Render cards
  container.innerHTML = Object.entries(PROJECTS_DATA).map(([id, proj]) => {
    const contribs = (proj.contributions || []).slice(0, 3).map(item => {
      if (item.includes(':')) {
        const colonIdx = item.indexOf(':');
        const headline = item.substring(0, colonIdx);
        const detail = item.substring(colonIdx + 1);
        return `<li><i class="fas fa-circle-check"></i> <span><strong>${headline}:</strong>${detail}</span></li>`;
      }
      return `<li><i class="fas fa-circle-check"></i> <span>${item}</span></li>`;
    }).join('');

    const techTags = (proj.tech || []).slice(0, 6).map(t => `<span class="tech-tag">${t}</span>`).join('');

    let extLinkHtml = '';
    if (proj.githubUrl) {
      extLinkHtml = `
        <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-ext-link" aria-label="GitHub Repository">
          <i class="fab fa-github"></i> ${proj.githubLabel || 'Repository'} <i class="fas fa-arrow-up-right-from-square"></i>
        </a>
      `;
    } else if (proj.demoUrl) {
      extLinkHtml = `
        <a href="${proj.demoUrl}" ${proj.demoUrl.startsWith('#') ? '' : 'target="_blank" rel="noopener noreferrer"'} class="project-ext-link" aria-label="Resource Demo">
          <i class="fas fa-arrow-up-right-from-square"></i> ${proj.demoLabel || 'View Resource'}
        </a>
      `;
    }

    return `
      <article class="project-list-item" data-category="${proj.category}">
        <div class="project-item-header">
          <div class="project-item-title-wrap">
            <div class="project-type-tag">
              <i class="${proj.categoryIcon || 'fas fa-microchip'}"></i>
              <span>${proj.categoryLabel || 'Technical System'}</span>
            </div>
            <h3 class="project-title">${proj.title}</h3>
          </div>
          <span class="project-status-pill">
            <span class="status-dot"></span> ${proj.status || 'Active'}
          </span>
        </div>

        <div class="project-role-badge">
          <i class="fas fa-user-gear"></i>
          <span>Role: <strong>${proj.role}</strong></span>
        </div>

        <p class="project-desc">${proj.overview}</p>

        <div class="project-contributions-block">
          <h4 class="contributions-heading"><i class="fas fa-diagram-project"></i> Key Engineering Contributions:</h4>
          <ul class="contributions-list">
            ${contribs}
          </ul>
        </div>

        <div class="project-item-footer">
          <div class="project-tech-tags">
            ${techTags}
          </div>
          <div class="project-item-actions">
            <button type="button" class="btn btn-secondary btn-sm" data-project-id="${id}">
              <i class="fas fa-diagram-project"></i> Deep Architecture
            </button>
            ${extLinkHtml}
          </div>
        </div>
      </article>
    `;
  }).join('');
}

function initProjectFiltersAndModal() {
  renderProjectsFromData();

  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectItems = Array.from(document.querySelectorAll('.project-list-item, .project-card'));
  const modalBackdrop = document.getElementById('projectModalBackdrop');
  const modalCloseBtn = document.getElementById('modalCloseBtn');

  // Pagination elements
  const paginationRange = document.getElementById('paginationRange');
  const paginationTotal = document.getElementById('paginationTotal');
  const paginationPages = document.getElementById('paginationPages');
  const paginationPrev = document.getElementById('paginationPrev');
  const paginationNext = document.getElementById('paginationNext');

  const ITEMS_PER_PAGE = 3;
  let currentFilter = 'all';
  let currentPage = 1;

  function getFilteredItems() {
    if (currentFilter === 'all') {
      return projectItems;
    }
    return projectItems.filter(item => item.getAttribute('data-category') === currentFilter);
  }

  function renderPage(page, shouldScroll = false) {
    const filtered = getFilteredItems();
    const totalItems = filtered.length;
    const totalPages = Math.max(1, Math.ceil(totalItems / ITEMS_PER_PAGE));

    if (page < 1) page = 1;
    if (page > totalPages) page = totalPages;
    currentPage = page;

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, totalItems);

    // Hide all items first
    projectItems.forEach(item => {
      item.style.display = 'none';
      item.style.opacity = '0';
    });

    // Show only the slice for this page
    const visibleSlice = filtered.slice(startIndex, endIndex);
    visibleSlice.forEach((item, idx) => {
      item.style.display = 'block';
      setTimeout(() => {
        item.style.opacity = '1';
      }, 15 * (idx + 1));
    });

    // Update pagination info text
    if (paginationRange && paginationTotal) {
      if (totalItems === 0) {
        paginationRange.textContent = '0';
        paginationTotal.textContent = '0';
      } else {
        paginationRange.textContent = `${startIndex + 1}–${endIndex}`;
        paginationTotal.textContent = totalItems.toString();
      }
    }

    // Update Previous / Next button disabled states
    if (paginationPrev) {
      paginationPrev.disabled = currentPage <= 1;
    }
    if (paginationNext) {
      paginationNext.disabled = currentPage >= totalPages;
    }

    // Render page number buttons
    if (paginationPages) {
      paginationPages.innerHTML = '';
      for (let p = 1; p <= totalPages; p++) {
        const pageBtn = document.createElement('button');
        pageBtn.type = 'button';
        pageBtn.className = `page-number-btn ${p === currentPage ? 'active' : ''}`;
        pageBtn.textContent = p.toString();
        pageBtn.setAttribute('aria-label', `Page ${p}`);
        pageBtn.addEventListener('click', () => {
          if (p !== currentPage) {
            renderPage(p, true);
          }
        });
        paginationPages.appendChild(pageBtn);
      }
    }

    // Smooth scroll to top of projects if navigating pages
    if (shouldScroll) {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        const topOffset = projectsSection.getBoundingClientRect().top + window.pageYOffset - 70;
        window.scrollTo({ top: topOffset, behavior: 'smooth' });
      }
    }
  }

  // Prev / Next button listeners
  if (paginationPrev) {
    paginationPrev.addEventListener('click', () => {
      if (currentPage > 1) {
        renderPage(currentPage - 1, true);
      }
    });
  }

  if (paginationNext) {
    paginationNext.addEventListener('click', () => {
      const filtered = getFilteredItems();
      const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
      if (currentPage < totalPages) {
        renderPage(currentPage + 1, true);
      }
    });
  }

  // Filter tabs
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      currentFilter = btn.getAttribute('data-filter') || 'all';
      renderPage(1, false);
    });
  });

  // Initial render
  renderPage(1, false);

  // Modal handlers
  document.querySelectorAll('[data-project-id]').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const projId = trigger.getAttribute('data-project-id');
      const data = PROJECTS_DATA[projId];
      if (!data) return;

      const categoryIcon = document.getElementById('modalCategoryIcon');
      const categoryLabel = document.getElementById('modalCategoryLabel');
      const statusText = document.getElementById('modalStatusText');
      const projectTitle = document.getElementById('modalProjectTitle');
      const projectRole = document.getElementById('modalProjectRole');
      const projectDesc = document.getElementById('modalProjectDesc');
      const projectArch = document.getElementById('modalProjectArch');
      const contribsList = document.getElementById('modalProjectContributions');
      const techContainer = document.getElementById('modalProjectTech');
      const gitLink = document.getElementById('modalGitLink');
      const demoLink = document.getElementById('modalDemoLink');
      const demoText = document.getElementById('modalDemoText');

      if (categoryIcon) categoryIcon.className = data.categoryIcon || 'fas fa-microchip';
      if (categoryLabel) categoryLabel.textContent = data.categoryLabel || 'Technical System';
      if (statusText) statusText.textContent = data.status || 'Active';
      if (projectTitle) projectTitle.textContent = data.title;
      if (projectRole) projectRole.textContent = data.role;
      if (projectDesc) projectDesc.textContent = data.overview;
      if (projectArch) projectArch.textContent = data.architecture;

      // Populate Key Contributions
      if (contribsList) {
        contribsList.innerHTML = '';
        if (Array.isArray(data.contributions)) {
          data.contributions.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `<i class="fas fa-circle-check"></i> <span>${item}</span>`;
            contribsList.appendChild(li);
          });
        }
      }

      // Populate Tech Tags
      if (techContainer) {
        techContainer.innerHTML = '';
        if (Array.isArray(data.tech)) {
          data.tech.forEach(t => {
            const pill = document.createElement('span');
            pill.className = 'tech-tag';
            pill.innerHTML = `<i class="fas fa-code-commit"></i> ${t}`;
            techContainer.appendChild(pill);
          });
        }
      }

      // Populate Links
      const gitText = document.getElementById('modalGitText');
      if (gitLink) {
        gitLink.href = data.githubUrl || 'https://github.com/muhitAsraf';
        if (gitText) {
          gitText.textContent = data.githubLabel || 'View GitHub Repository';
        }
      }

      if (demoLink) {
        if (data.demoUrl && data.demoUrl !== '#') {
          demoLink.style.display = 'inline-flex';
          demoLink.href = data.demoUrl;
          if (demoText) demoText.textContent = data.demoLabel || 'Visit Resource / Demo';
          if (data.demoUrl.startsWith('#')) {
            demoLink.target = '_self';
            demoLink.removeAttribute('rel');
            demoLink.onclick = () => closeModal();
          } else {
            demoLink.target = '_blank';
            demoLink.rel = 'noopener noreferrer';
            demoLink.onclick = null;
          }
        } else {
          demoLink.style.display = 'none';
        }
      }

      if (modalBackdrop) {
        modalBackdrop.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  function closeModal() {
    if (modalBackdrop) {
      modalBackdrop.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) closeModal();
    });
  }

  // Escape key closes modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop && modalBackdrop.classList.contains('open')) {
      closeModal();
    }
  });
}

/* ==========================================================================
   7. Contact Interactions & Toast Notifications
   ========================================================================== */
function initContactInteractions() {
  const form = document.getElementById('contactForm');
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  const copyPhoneBtn = document.getElementById('copyPhoneBtn');

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      navigator.clipboard.writeText('muhitasraf.swe@gmail.com').then(() => {
        showToast('Email copied to clipboard!');
      });
    });
  }

  if (copyPhoneBtn) {
    copyPhoneBtn.addEventListener('click', () => {
      navigator.clipboard.writeText('+8801568017734').then(() => {
        showToast('Phone number copied to clipboard!');
      });
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contactName').value.trim();
      const email = document.getElementById('contactEmail').value.trim();
      const subject = document.getElementById('contactSubject').value.trim();
      const message = document.getElementById('contactMessage').value.trim();

      if (!name || !email || !message) {
        showToast('Please fill in all required fields.');
        return;
      }

      // Open user's default email client pre-populated
      const mailtoUrl = `mailto:muhitasraf.swe@gmail.com?subject=${encodeURIComponent(subject || 'Portfolio Inquiry from ' + name)}&body=${encodeURIComponent(message + '\n\nFrom: ' + name + ' (' + email + ')')}`;
      window.location.href = mailtoUrl;

      showToast('Opening your email client to send message...');
      form.reset();
    });
  }
}

function showToast(message) {
  let toast = document.getElementById('toastNotice');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toastNotice';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<i class="fas fa-check-circle text-accent"></i> <span>${message}</span>`;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

/* ==========================================================================
   9. Back to Top Button
   ========================================================================== */
function initBackToTop() {
  const btn = document.getElementById('backToTopBtn');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
