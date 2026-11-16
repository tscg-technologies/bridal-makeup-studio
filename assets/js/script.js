/**
 * BRIDAL MAKEUP STUDIO — LUXURY INTERACTIVE JAVASCRIPT
 * Pure Vanilla JavaScript (No Frameworks, No Dependencies)
 * Handles Navigation, Mobile Drawer, FAQ Accordion, Gallery Filters,
 * Lightbox Modal, Booking Validation, Summary Preview & Contact Forms.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize all interactive modules
  initNavigation();
  initStickyHeader();
  initScrollTop();
  initFAQAccordion();
  initGalleryFilterAndLightbox();
  initBookingForm();
  initContactForm();
  initActiveNavLink();
  initDateConstraints();
});

/* ==========================================================================
   1. NAVIGATION & MOBILE DRAWER
   ========================================================================== */
function initNavigation() {
  const toggleBtn = document.getElementById('mobileToggleBtn');
  const drawer = document.getElementById('mobileNavDrawer');
  const backdrop = document.getElementById('mobileNavBackdrop');
  const mobileDropdownToggle = document.getElementById('mobileDropdownToggle');
  const mobileSubmenu = document.getElementById('mobileSubmenu');

  if (!toggleBtn || !drawer || !backdrop) return;

  function toggleMenu() {
    const isOpen = drawer.classList.contains('open');
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  function openMenu() {
    drawer.classList.add('open');
    backdrop.classList.add('open');
    toggleBtn.classList.add('active');
    toggleBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    drawer.classList.remove('open');
    backdrop.classList.remove('open');
    toggleBtn.classList.remove('active');
    toggleBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  toggleBtn.addEventListener('click', toggleMenu);
  backdrop.addEventListener('click', closeMenu);

  // Close drawer when any mobile link is clicked (except submenu toggles)
  const navLinks = drawer.querySelectorAll('a:not(.mobile-dropdown-title)');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // Mobile submenu accordion
  if (mobileDropdownToggle && mobileSubmenu) {
    mobileDropdownToggle.addEventListener('click', (e) => {
      e.preventDefault();
      const isOpen = mobileSubmenu.classList.contains('open');
      if (isOpen) {
        mobileSubmenu.classList.remove('open');
      } else {
        mobileSubmenu.classList.add('open');
      }
    });
  }

  // Handle ESC key to close mobile menu
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      closeMenu();
    }
  });
}

/* ==========================================================================
   2. STICKY HEADER & SCROLL BEHAVIOR
   ========================================================================== */
function initStickyHeader() {
  const header = document.querySelector('.header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

/* ==========================================================================
   3. SCROLL TO TOP BUTTON
   ========================================================================== */
function initScrollTop() {
  const scrollBtn = document.getElementById('scrollTopBtn');
  if (!scrollBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 450) {
      scrollBtn.classList.add('visible');
    } else {
      scrollBtn.classList.remove('visible');
    }
  }, { passive: true });

  scrollBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* ==========================================================================
   4. ACTIVE NAV LINK DETECTION
   ========================================================================== */
function initActiveNavLink() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const links = document.querySelectorAll('.nav-link, .dropdown-link, .mobile-nav-item a');

  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

/* ==========================================================================
   5. DATE CONSTRAINTS (NO PAST DATES ALLOWED)
   ========================================================================== */
function initDateConstraints() {
  const dateInputs = document.querySelectorAll('input[type="date"]');
  const today = new Date().toISOString().split('T')[0];

  dateInputs.forEach(input => {
    input.setAttribute('min', today);
  });
}

/* ==========================================================================
   6. FAQ ACCORDION
   ========================================================================== */
function initFAQAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const header = item.querySelector('.faq-header');
    if (!header) return;

    header.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Optional: Close all others for a neat accordion feel
      faqItems.forEach(other => {
        if (other !== item) other.classList.remove('active');
      });

      if (isActive) {
        item.classList.remove('active');
      } else {
        item.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   7. GALLERY FILTERS & LIGHTBOX
   ========================================================================== */
function initGalleryFilterAndLightbox() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('galleryLightbox');

  if (!filterBtns.length && !galleryItems.length) return;

  // Filter Buttons
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      galleryItems.forEach(item => {
        const category = item.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue || category?.includes(filterValue)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // Lightbox Functionality
  if (!lightbox) return;

  const closeBtn = document.getElementById('lightboxCloseBtn');
  const prevBtn = document.getElementById('lightboxPrevBtn');
  const nextBtn = document.getElementById('lightboxNextBtn');
  const captionTitle = document.getElementById('lightboxTitle');
  const captionCat = document.getElementById('lightboxCategory');
  const captionFilename = document.getElementById('lightboxFilename');
  const captionCounter = document.getElementById('lightboxCounter');
  const placeholderWrap = document.getElementById('lightboxPlaceholderWrap');

  let currentIndex = 0;
  let visibleItems = [];

  function getVisibleItems() {
    return Array.from(galleryItems).filter(item => item.style.display !== 'none');
  }

  function openLightbox(index) {
    visibleItems = getVisibleItems();
    if (!visibleItems.length) return;

    currentIndex = index;
    updateLightboxContent();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  function updateLightboxContent() {
    const item = visibleItems[currentIndex];
    if (!item) return;

    const title = item.getAttribute('data-title') || 'Bridal Makeup Look';
    const cat = item.getAttribute('data-category-label') || 'Bridal Artistry';
    const filename = item.getAttribute('data-filename') || 'bridal-gallery.webp';
    const specs = item.getAttribute('data-specs') || 'Portrait 4:5 • 1200 x 1500 px';

    if (captionTitle) captionTitle.textContent = title;
    if (captionCat) captionCat.textContent = cat;
    if (captionCounter) captionCounter.textContent = `${currentIndex + 1} / ${visibleItems.length}`;

    const cleanFilename = filename.replace(/\.(webp|jpg|jpeg)$/i, '') + '.jpeg';

    if (placeholderWrap) {
      placeholderWrap.innerHTML = `
        <div class="lightbox-image-preview">
          <img src="assets/images/${cleanFilename}" alt="${title}" loading="eager" onerror="this.onerror=null; this.src='images/${cleanFilename}';">
        </div>
      `;
    }
  }

  function showNext() {
    visibleItems = getVisibleItems();
    if (visibleItems.length <= 1) return;
    currentIndex = (currentIndex + 1) % visibleItems.length;
    updateLightboxContent();
  }

  function showPrev() {
    visibleItems = getVisibleItems();
    if (visibleItems.length <= 1) return;
    currentIndex = (currentIndex - 1 + visibleItems.length) % visibleItems.length;
    updateLightboxContent();
  }

  // Attach click listener to gallery items
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      visibleItems = getVisibleItems();
      const index = visibleItems.indexOf(item);
      if (index !== -1) {
        openLightbox(index);
      }
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (nextBtn) nextBtn.addEventListener('click', showNext);
  if (prevBtn) prevBtn.addEventListener('click', showPrev);

  // Click backdrop outside content to close
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  // Keyboard navigation for Lightbox
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') showNext();
    if (e.key === 'ArrowLeft') showPrev();
  });
}

/* ==========================================================================
   8. BOOKING FORM VALIDATION & SUMMARY PREVIEW
   ========================================================================== */
function initBookingForm() {
  const form = document.getElementById('bridalBookingForm');
  if (!form) return;

  const modal = document.getElementById('bookingModal');
  const summaryBox = document.getElementById('bookingSummaryDetails');
  const confirmBtn = document.getElementById('confirmBookingBtn');
  const editBtn = document.getElementById('editBookingBtn');
  const closeBtn = document.getElementById('closeModalBtn');
  const successBox = document.getElementById('bookingSuccessState');
  const summaryState = document.getElementById('bookingSummaryState');

  // Today's date check
  const dateInput = form.querySelector('input[name="weddingDate"]');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validateBookingForm(form)) return;

    // Collect data
    const formData = new FormData(form);
    const data = {
      brideName: formData.get('brideName') || '',
      phone: formData.get('phone') || '',
      email: formData.get('email') || '',
      weddingDate: formData.get('weddingDate') || '',
      eventType: formData.get('eventType') || '',
      eventLocation: formData.get('eventLocation') || '',
      venueName: formData.get('venueName') || 'To be determined',
      readyByTime: formData.get('readyByTime') || 'Not specified',
      guestCount: formData.get('guestCount') || '1 (Bride only)',
      makeupStyle: formData.get('makeupStyle') || '',
      hairstyling: formData.get('hairstyling') || 'No',
      draping: formData.get('draping') || 'No',
      trial: formData.get('trial') || 'No',
      onLocation: formData.get('onLocation') || 'No',
      notes: formData.get('notes') || 'None provided'
    };

    // Render Summary list
    if (summaryBox) {
      summaryBox.innerHTML = `
        <div class="summary-row">
          <span class="summary-label">Bride Name:</span>
          <span class="summary-value">${escapeHtml(data.brideName)}</span>
        </div>
        <div class="summary-row">
          <span class="summary-label">Phone & Email:</span>
          <span class="summary-value">${escapeHtml(data.phone)} | ${escapeHtml(data.email)}</span>
        </div>
        <div class="summary-row">
          <span class="summary-label">Event Date:</span>
          <span class="summary-value" style="color: var(--deep-burgundy);">${formatDate(data.weddingDate)}</span>
        </div>
        <div class="summary-row">
          <span class="summary-label">Event Type:</span>
          <span class="summary-value">${escapeHtml(data.eventType)}</span>
        </div>
        <div class="summary-row">
          <span class="summary-label">Preferred Makeup Style:</span>
          <span class="summary-value" style="color: var(--champagne-gold-dark);">${escapeHtml(data.makeupStyle)}</span>
        </div>
        <div class="summary-row">
          <span class="summary-label">Location / Venue:</span>
          <span class="summary-value">${escapeHtml(data.eventLocation)} (${escapeHtml(data.venueName)})</span>
        </div>
        <div class="summary-row">
          <span class="summary-label">Ready-By Time:</span>
          <span class="summary-value">${escapeHtml(data.readyByTime)}</span>
        </div>
        <div class="summary-row">
          <span class="summary-label">People Requiring Makeup:</span>
          <span class="summary-value">${escapeHtml(data.guestCount)}</span>
        </div>
        <div class="summary-row">
          <span class="summary-label">Styling Inclusions:</span>
          <span class="summary-value">Hairstyling: ${escapeHtml(data.hairstyling)} • Draping: ${escapeHtml(data.draping)}</span>
        </div>
        <div class="summary-row">
          <span class="summary-label">Trial & On-Location:</span>
          <span class="summary-value">Trial: ${escapeHtml(data.trial)} • On-Location: ${escapeHtml(data.onLocation)}</span>
        </div>
        ${data.notes !== 'None provided' ? `
        <div class="summary-row">
          <span class="summary-label">Special Notes:</span>
          <span class="summary-value">${escapeHtml(data.notes)}</span>
        </div>` : ''}
      `;
    }

    // Reset views inside modal
    if (summaryState) summaryState.style.display = 'block';
    if (successBox) successBox.style.display = 'none';

    // Show modal
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  });

  // Edit Button in Modal (Back to form)
  if (editBtn) {
    editBtn.addEventListener('click', () => {
      if (modal) modal.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  // Close Button in Modal
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      if (modal) modal.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  // Confirm Submission Button
  if (confirmBtn) {
    confirmBtn.addEventListener('click', () => {
      if (summaryState) summaryState.style.display = 'none';
      if (successBox) {
        successBox.style.display = 'block';
        const codeElem = document.getElementById('demoReferenceCode');
        if (codeElem) {
          codeElem.textContent = 'BMS-DEMO-' + Math.floor(100000 + Math.random() * 900000);
        }
      }
      form.reset();
    });
  }
}

function validateBookingForm(form) {
  let isValid = true;

  // Clear previous errors
  form.querySelectorAll('.form-control').forEach(el => el.classList.remove('error'));
  form.querySelectorAll('.error-text').forEach(el => el.classList.remove('visible'));

  const brideName = form.querySelector('input[name="brideName"]');
  const phone = form.querySelector('input[name="phone"]');
  const email = form.querySelector('input[name="email"]');
  const weddingDate = form.querySelector('input[name="weddingDate"]');
  const eventType = form.querySelector('select[name="eventType"]');
  const makeupStyle = form.querySelector('select[name="makeupStyle"]');

  // Bride Name
  if (!brideName || brideName.value.trim().length < 2) {
    setError(brideName, 'Please enter the bride or client name.');
    isValid = false;
  }

  // Phone: At least 10 digits
  const phoneVal = phone ? phone.value.replace(/[^0-9]/g, '') : '';
  if (!phone || phoneVal.length < 10) {
    setError(phone, 'Please enter a valid 10-digit phone number.');
    isValid = false;
  }

  // Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email.value.trim())) {
    setError(email, 'Please provide a valid email address.');
    isValid = false;
  }

  // Wedding Date & Past Date Check
  if (!weddingDate || !weddingDate.value) {
    setError(weddingDate, 'Please select your wedding/event date.');
    isValid = false;
  } else {
    const selectedDate = new Date(weddingDate.value);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (selectedDate < today) {
      setError(weddingDate, 'Event date cannot be in the past. Please select an upcoming date.');
      isValid = false;
    }
  }

  // Event Type
  if (!eventType || !eventType.value) {
    setError(eventType, 'Please select an event type.');
    isValid = false;
  }

  // Makeup Style
  if (!makeupStyle || !makeupStyle.value) {
    setError(makeupStyle, 'Please select a preferred makeup style.');
    isValid = false;
  }

  return isValid;
}

function setError(inputElement, message) {
  if (!inputElement) return;
  inputElement.classList.add('error');
  const formGroup = inputElement.closest('.form-group');
  if (formGroup) {
    let errorText = formGroup.querySelector('.error-text');
    if (!errorText) {
      errorText = document.createElement('div');
      errorText.className = 'error-text';
      formGroup.appendChild(errorText);
    }
    errorText.textContent = message;
    errorText.classList.add('visible');
  }
}

/* ==========================================================================
   9. CONTACT FORM VALIDATION & DEMO RESPONSE
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('generalContactForm');
  if (!form) return;

  const resultBox = document.getElementById('contactResultBox');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Reset errors
    form.querySelectorAll('.form-control').forEach(el => el.classList.remove('error'));
    form.querySelectorAll('.error-text').forEach(el => el.classList.remove('visible'));

    const name = form.querySelector('input[name="name"]');
    const phone = form.querySelector('input[name="phone"]');
    const email = form.querySelector('input[name="email"]');
    const message = form.querySelector('textarea[name="message"]');

    let isValid = true;

    if (!name || name.value.trim().length < 2) {
      setError(name, 'Please enter your name.');
      isValid = false;
    }

    const phoneVal = phone ? phone.value.replace(/[^0-9]/g, '') : '';
    if (!phone || phoneVal.length < 10) {
      setError(phone, 'Please enter a valid 10-digit phone number.');
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.value.trim())) {
      setError(email, 'Please enter a valid email address.');
      isValid = false;
    }

    if (!message || message.value.trim().length < 5) {
      setError(message, 'Please enter your enquiry message.');
      isValid = false;
    }

    if (!isValid) return;

    // Display professional demo confirmation
    if (resultBox) {
      resultBox.style.display = 'block';
      resultBox.innerHTML = `
        <div style="background: var(--warm-beige-light); border: 1px solid var(--champagne-gold); border-radius: var(--radius-sm); padding: 20px; text-align: center; margin-top: 20px;">
          <h4 style="font-family: var(--font-serif); color: var(--deep-burgundy); margin-bottom: 8px;">Enquiry Received (Demonstration)</h4>
          <p style="font-size: 0.88rem; color: var(--charcoal-light); margin-bottom: 12px;">
            Thank you, <strong>${escapeHtml(name.value)}</strong>. In a live deployment, this enquiry would be routed directly to the studio's booking desk.
          </p>
          <div style="font-size: 0.76rem; color: var(--text-muted); font-style: italic;">
            Notice: This is a frontend demo. No data has been saved or sent to any server.
          </div>
        </div>
      `;
    }

    form.reset();
  });
}

/* ==========================================================================
   UTILITY HELPERS
   ========================================================================== */
function escapeHtml(string) {
  if (!string) return '';
  return String(string)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function formatDate(dateString) {
  if (!dateString) return 'Not specified';
  try {
    const parts = dateString.split('-');
    if (parts.length === 3) {
      const year = parts[0];
      const monthIndex = parseInt(parts[1], 10) - 1;
      const day = parts[2];
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      return `${months[monthIndex]} ${day}, ${year}`;
    }
    return dateString;
  } catch (e) {
    return dateString;
  }
}
