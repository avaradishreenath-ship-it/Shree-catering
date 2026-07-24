// ============== SHREE CATERING SERVICES — MAIN JS ==============

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Loader ---------- */
  window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    setTimeout(() => loader.classList.add('hide'), 400);
  });

  /* ---------- AOS init ---------- */
  if (window.AOS) {
    AOS.init({ duration: 800, once: true, offset: 60, easing: 'ease-out-cubic' });
  }

  /* ---------- Navbar scroll state ---------- */
  const navbar = document.getElementById('navbar');
  const onScroll = () => {
    if (window.scrollY > 40) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');

    const top = document.getElementById('fab-top');
    if (window.scrollY > 600) top.classList.add('show');
    else top.classList.remove('show');
  };
  window.addEventListener('scroll', onScroll);
  onScroll();

  /* ---------- Mobile menu ---------- */
  const menuBtn = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  menuBtn?.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
  mobileMenu?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileMenu.classList.add('hidden')));

  /* ---------- GSAP hero entrance ---------- */
  if (window.gsap) {
    gsap.from('.hero-eyebrow', { opacity: 0, y: 20, duration: 0.9, delay: 0.3 });
    gsap.from('.hero-title-line', { opacity: 0, y: 40, duration: 1, stagger: 0.15, delay: 0.5 });
    gsap.from('.hero-sub', { opacity: 0, y: 20, duration: 1, delay: 1.1 });
    gsap.from('.hero-btns > *', { opacity: 0, y: 20, duration: 0.8, stagger: 0.12, delay: 1.3 });
  }

  /* ---------- Animated counters ---------- */
  const counters = document.querySelectorAll('.counter');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = +el.dataset.target;
        const suffix = el.dataset.suffix || '';
        let cur = 0;
        const step = Math.max(1, Math.ceil(target / 80));
        const tick = () => {
          cur += step;
          if (cur >= target) { el.textContent = target.toLocaleString() + suffix; return; }
          el.textContent = cur.toLocaleString() + suffix;
          requestAnimationFrame(tick);
        };
        tick();
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => counterObserver.observe(c));

  /* ---------- Service / Menu category tabs ---------- */
  function setupTabs(tabSelector, panelSelector) {
    const tabs = document.querySelectorAll(tabSelector);
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const cat = tab.dataset.cat;
        document.querySelectorAll(panelSelector).forEach(panel => {
          panel.style.display = (cat === 'all' || panel.dataset.cat === cat) ? '' : 'none';
        });
      });
    });
  }
  setupTabs('.menu-tab', '.menu-card');

  /* ---------- FAQ accordion ---------- */
  document.querySelectorAll('.faq-item').forEach(item => {
    item.querySelector('.faq-q').addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

  /* ---------- Gallery Lightbox ---------- */
  const galleryImgs = Array.from(document.querySelectorAll('.gallery-item img'));
  const lightbox = document.getElementById('lightbox');
  const lbImg = document.getElementById('lb-img');
  let lbIndex = 0;

  function openLightbox(i) {
    lbIndex = i;
    lbImg.src = galleryImgs[i].src;
    lbImg.alt = galleryImgs[i].alt;
    lightbox.classList.add('open');
  }
  function closeLightbox() { lightbox.classList.remove('open'); }
  function navLightbox(dir) {
    lbIndex = (lbIndex + dir + galleryImgs.length) % galleryImgs.length;
    lbImg.src = galleryImgs[lbIndex].src;
    lbImg.alt = galleryImgs[lbIndex].alt;
  }
  galleryImgs.forEach((img, i) => img.closest('.gallery-item').addEventListener('click', () => openLightbox(i)));
  document.querySelector('.lb-close')?.addEventListener('click', closeLightbox);
  document.querySelector('.lb-prev')?.addEventListener('click', () => navLightbox(-1));
  document.querySelector('.lb-next')?.addEventListener('click', () => navLightbox(1));
  lightbox?.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') navLightbox(1);
    if (e.key === 'ArrowLeft') navLightbox(-1);
  });

  /* ---------- Testimonials Swiper ---------- */
  if (window.Swiper) {
    new Swiper('.testimonial-swiper', {
      loop: true,
      autoplay: { delay: 4500, disableOnInteraction: false },
      slidesPerView: 1,
      spaceBetween: 24,
      pagination: { el: '.swiper-pagination', clickable: true },
      breakpoints: {
        768: { slidesPerView: 2 },
        1100: { slidesPerView: 3 }
      }
    });

    new Swiper('.gallery-swiper-mobile', {
      slidesPerView: 1.2,
      spaceBetween: 14,
      breakpoints: { 640: { slidesPerView: 2.2 }, 900: { slidesPerView: 3.2 } }
    });
  }

  /* ---------- Dark mode toggle ---------- */
  const darkToggle = document.getElementById('dark-toggle');
  const applyDark = (on) => {
    document.body.classList.toggle('dark', on);
    localStorage.setItem('scs-dark', on ? '1' : '0');
    darkToggle.innerHTML = on ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
  };
  applyDark(localStorage.getItem('scs-dark') === '1');
  darkToggle?.addEventListener('click', () => applyDark(!document.body.classList.contains('dark')));

  /* ---------- Booking form validation ---------- */
  const form = document.getElementById('booking-form');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;
    form.querySelectorAll('[data-required]').forEach(field => {
      const val = field.value.trim();
      let ok = val.length > 0;
      if (field.type === 'email' && val) ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
      if (field.type === 'tel' && val) ok = /^[0-9+\-\s]{7,15}$/.test(val);
      field.classList.toggle('error', !ok);
      if (!ok) valid = false;
    });
    const successBox = document.getElementById('form-success');
    if (valid) {
      const name = form.querySelector('[name="name"]').value;
      successBox.textContent = `Thank you, ${name}! Your enquiry has been noted. Our team will call you shortly to confirm details.`;
      successBox.classList.remove('hidden');
      form.reset();
      setTimeout(() => successBox.classList.add('hidden'), 7000);

      // Build a WhatsApp message with booking details as a convenience option
      const data = new FormData(form);
      const msg = encodeURIComponent(
        `New Booking Enquiry\nName: ${data.get('name')}\nPhone: ${data.get('phone')}\nEvent: ${data.get('eventType')}\nDate: ${data.get('eventDate')}\nLocation: ${data.get('location')}\nGuests: ${data.get('guests')}`
      );
      const waLink = document.getElementById('form-wa-link');
      if (waLink) waLink.href = `https://wa.me/919900000000?text=${msg}`;
    } else {
      successBox.classList.add('hidden');
    }
  });

  /* ---------- Smooth scroll for in-page nav links ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href');
      if (id.length > 1) {
        const target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          window.scrollTo({ top: target.offsetTop - 84, behavior: 'smooth' });
        }
      }
    });
  });

  /* ---------- Back to top ---------- */
  document.getElementById('fab-top')?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

});
