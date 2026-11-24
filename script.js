/**
 * AULIA PUTRI RAMADHANI - CURRICULUM VITAE & INTERACTIVE PORTFOLIO
 * High-performance, accessible, bilingual & interactive script
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Inisialisasi Sistem Bahasa (ID / EN)
  initLanguage();

  // 2. Inisialisasi Mode Gelap & Terang
  initThemeToggle();

  // 3. Inisialisasi Pemilih Aksen Warna Tema
  initAccentPalette();

  // 4. Sapaan Dinamis Berdasarkan Waktu
  updateGreeting();

  // 5. Scroll Progress Bar & Tombol Back to Top dengan SVG Ring
  initScrollIndicators();

  // 6. Animasi Angka Statistik & Skill Progress Bars
  initIntersectionAnimations();

  // 7. Filter Kategori Proyek
  initProjectFilters();

  // 8. Modal Detail Proyek
  initProjectModal();

  // 9. Salin Email & Print Resume
  initQuickActions();

  // 10. Penanganan Formulir Kontak & Integrasi WhatsApp Langsung
  initContactForm();

  // 11. Navigasi Mobile Menu
  initMobileNav();

  // 12. Update Otomatis Tahun di Footer
  const yearElem = document.getElementById('currentYear');
  if (yearElem) {
    yearElem.textContent = new Date().getFullYear();
  }
});

/* ============================================================
   1. DICTIONARY & BILINGUAL TRANSLATION (ID / EN)
   ============================================================ */
let currentLang = 'id';

const i18nDictionary = {
  id: {
    nav_about: 'Tentang',
    nav_skills: 'Keahlian',
    nav_projects: 'Portofolio',
    nav_experience: 'Pengalaman',
    nav_education: 'Pendidikan',
    nav_certs: 'Sertifikat',
    nav_contact: 'Kontak',
    theme_color_label: 'Warna Aksen',
    btn_print: 'Cetak CV',
    badge_open_to_work: 'Terbuka untuk Peluang Kerja',
    profile_bio: 'Fresh graduate Teknik Informatika dengan pengalaman praktis dalam membangun antarmuka web modern, responsif, dan ramah pengguna. Menggabungkan ketelitian desain visual dengan clean code berstandar industri. Berpengalaman di bidang dukungan operasional korporat serta pengembangan proyek web untuk berbagai kebutuhan klien.',
    btn_hire_me: 'Hubungi Saya',
    btn_copy_email: 'Salin Email',
    btn_download_cv: 'Unduh Resume',
    stat_projects: 'Proyek Selesai',
    stat_exp: 'Tahun Pengalaman',
    stat_certs: 'Sertifikasi Resmi',
    stat_gpa: 'IPK Akademik',
    sec_personal_info: 'Informasi Pribadi',
    label_fullname: 'Nama Lengkap',
    label_birth: 'Tempat, Tanggal Lahir',
    label_phone: 'WhatsApp / Telepon',
    label_location: 'Domisili',
    label_work_preference: 'Preferensi Kerja',
    sec_technical_skills: 'Keahlian Teknis',
    sec_languages: 'Kemampuan Bahasa',
    sec_soft_skills: 'Keahlian Interpersonal',
    sec_socials: 'Jejaring & Profil',
    sec_projects: 'Portofolio & Proyek Pilihan',
    sec_projects_sub: 'Beberapa proyek nyata yang telah saya selesaikan dengan fokus performa, responsivitas, dan user experience.',
    filter_all: 'Semua',
    btn_view_detail: 'Lihat Detail',
    link_read_case: 'Studi Kasus ↗',
    sec_experience: 'Pengalaman Kerja & Praktik',
    sec_education: 'Riwayat Pendidikan',
    sec_certifications: 'Sertifikasi & Lisensi Resmi',
    sec_testimonials: 'Testimoni & Rekomendasi',
    sec_contact: 'Hubungi Saya',
    sec_contact_sub: 'Tertarik merekrut, mengajak kolaborasi, atau mendiskusikan peluang kerja? Silakan kirimkan pesan di bawah ini.',
    form_name: 'Nama Lengkap',
    form_email: 'Email Perusahaan / Pribadi',
    form_subject: 'Subjek / Topik',
    form_phone: 'Nomor Telepon / WhatsApp (Opsional)',
    form_message: 'Pesan Anda',
    opt_job: 'Tawaran Pekerjaan (Full-time / Part-time)',
    opt_freelance: 'Proyek Pembuatan Website / Freelance',
    opt_collab: 'Undangan Diskusi & Kolaborasi',
    opt_other: 'Lainnya',
    btn_submit_msg: 'Kirim Pesan Sekarang',
    btn_send_wa: 'Kirim via WhatsApp',
    modal_about_title: 'Tentang Proyek',
    modal_challenge_title: 'Tantangan & Solusi',
    modal_tech_title: 'Teknologi yang Digunakan',
    modal_btn_demo: 'Buka Demo / Link'
  },
  en: {
    nav_about: 'About',
    nav_skills: 'Skills',
    nav_projects: 'Portfolio',
    nav_experience: 'Experience',
    nav_education: 'Education',
    nav_certs: 'Certifications',
    nav_contact: 'Contact',
    theme_color_label: 'Accent Color',
    btn_print: 'Print CV',
    badge_open_to_work: 'Open to Work & Opportunities',
    profile_bio: 'Informatics graduate with hands-on experience building modern, responsive, and user-centric web interfaces. Blends sharp visual design intuition with clean, maintainable, industry-standard code. Experienced in corporate operations support and custom web client solutions.',
    btn_hire_me: 'Get in Touch',
    btn_copy_email: 'Copy Email',
    btn_download_cv: 'Download Resume',
    stat_projects: 'Completed Projects',
    stat_exp: 'Years Experience',
    stat_certs: 'Certifications',
    stat_gpa: 'Academic GPA',
    sec_personal_info: 'Personal Information',
    label_fullname: 'Full Name',
    label_birth: 'Place, Date of Birth',
    label_phone: 'WhatsApp / Phone',
    label_location: 'Location',
    label_work_preference: 'Work Mode',
    sec_technical_skills: 'Technical Skills',
    sec_languages: 'Languages',
    sec_soft_skills: 'Soft Skills',
    sec_socials: 'Social & Profiles',
    sec_projects: 'Featured Portfolio',
    sec_projects_sub: 'Real-world projects developed with an emphasis on speed, clean layout, responsiveness, and usability.',
    filter_all: 'All',
    btn_view_detail: 'View Details',
    link_read_case: 'Case Study ↗',
    sec_experience: 'Experience & Practice',
    sec_education: 'Education History',
    sec_certifications: 'Licenses & Certifications',
    sec_testimonials: 'Testimonials & Reviews',
    sec_contact: 'Contact Me',
    sec_contact_sub: 'Interested in hiring, collaborating, or discussing potential career opportunities? Send a message below.',
    form_name: 'Full Name',
    form_email: 'Business / Personal Email',
    form_subject: 'Subject / Topic',
    form_phone: 'Phone / WhatsApp (Optional)',
    form_message: 'Your Message',
    opt_job: 'Job Opportunity (Full-time / Part-time)',
    opt_freelance: 'Website Development / Freelance Project',
    opt_collab: 'Discussion & Collaboration Invite',
    opt_other: 'Other Inquiry',
    btn_submit_msg: 'Send Message Now',
    btn_send_wa: 'Send via WhatsApp',
    modal_about_title: 'Project Overview',
    modal_challenge_title: 'Challenges & Solution',
    modal_tech_title: 'Technologies Used',
    modal_btn_demo: 'Launch Live Demo'
  }
};

function initLanguage() {
  const langToggle = document.getElementById('langToggle');
  const langLabel = document.getElementById('langLabel');
  if (!langToggle || !langLabel) return;

  const savedLang = localStorage.getItem('user-language') || 'id';
  applyLanguage(savedLang);

  langToggle.addEventListener('click', () => {
    const nextLang = currentLang === 'id' ? 'en' : 'id';
    applyLanguage(nextLang);
    localStorage.setItem('user-language', nextLang);
    showToast(nextLang === 'en' ? 'Switched to English 🇺🇸' : 'Beralih ke Bahasa Indonesia 🇮🇩');
  });

  function applyLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    langLabel.textContent = lang === 'id' ? 'EN' : 'ID';
    langToggle.setAttribute('title', lang === 'id' ? 'Switch to English' : 'Beralih ke Bahasa Indonesia');

    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (i18nDictionary[lang] && i18nDictionary[lang][key]) {
        el.textContent = i18nDictionary[lang][key];
      }
    });

    // Update greeting
    updateGreeting();
  }
}

/* ============================================================
   2. DARK & LIGHT THEME TOGGLE
   ============================================================ */
function initThemeToggle() {
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  if (!themeToggle || !themeIcon) return;

  const savedTheme = localStorage.getItem('user-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme ? savedTheme : (prefersDark ? 'dark' : 'light');

  applyTheme(initialTheme);

  themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const newTheme = isDark ? 'light' : 'dark';
    applyTheme(newTheme);
    localStorage.setItem('user-theme', newTheme);
  });

  function applyTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      themeIcon.textContent = '☀️';
      themeToggle.setAttribute('title', 'Beralih ke Mode Terang');
    } else {
      document.documentElement.removeAttribute('data-theme');
      themeIcon.textContent = '🌙';
      themeToggle.setAttribute('title', 'Beralih ke Mode Gelap');
    }
  }
}

/* ============================================================
   3. ACCENT COLOR PALETTE PICKER
   ============================================================ */
function initAccentPalette() {
  const pickerBtn = document.getElementById('accentPickerBtn');
  const dropdown = document.getElementById('accentDropdown');
  const optionBtns = document.querySelectorAll('.accent-option');
  if (!pickerBtn || !dropdown) return;

  const savedAccent = localStorage.getItem('user-accent') || 'indigo';
  applyAccent(savedAccent);

  pickerBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown.classList.toggle('show');
  });

  document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target) && e.target !== pickerBtn) {
      dropdown.classList.remove('show');
    }
  });

  optionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedColor = btn.getAttribute('data-color');
      applyAccent(selectedColor);
      localStorage.setItem('user-accent', selectedColor);
      dropdown.classList.remove('show');
      showToast(`Aksen warna: ${selectedColor.toUpperCase()} diaplikasikan! 🎨`);
    });
  });

  function applyAccent(color) {
    if (color === 'indigo') {
      document.documentElement.removeAttribute('data-accent');
    } else {
      document.documentElement.setAttribute('data-accent', color);
    }

    optionBtns.forEach(btn => {
      if (btn.getAttribute('data-color') === color) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }
}

/* ============================================================
   4. DYNAMIC GREETING (TIME-BASED)
   ============================================================ */
function updateGreeting() {
  const greetingBadge = document.getElementById('greetingBadge');
  if (!greetingBadge) return;

  const currentHour = new Date().getHours();
  let text = '';

  if (currentLang === 'id') {
    if (currentHour >= 4 && currentHour < 11) {
      text = 'Selamat Pagi! 🌅 Semangat Beraktivitas!';
    } else if (currentHour >= 11 && currentHour < 15) {
      text = 'Selamat Siang! ☀️ Selamat Datang!';
    } else if (currentHour >= 15 && currentHour < 18) {
      text = 'Selamat Sore! 🌇 Senang Bertemu Anda!';
    } else {
      text = 'Selamat Malam! 🌙 Terima Kasih Telah Berkunjung!';
    }
  } else {
    if (currentHour >= 4 && currentHour < 12) {
      text = 'Good Morning! 🌅 Welcome to my portfolio!';
    } else if (currentHour >= 12 && currentHour < 17) {
      text = 'Good Afternoon! ☀️ Glad you are here!';
    } else {
      text = 'Good Evening! 🌙 Thanks for visiting!';
    }
  }

  greetingBadge.textContent = text;
}

/* ============================================================
   5. SCROLL PROGRESS BAR & BACK TO TOP BUTTON
   ============================================================ */
function initScrollIndicators() {
  const progressBar = document.getElementById('scrollProgressBar');
  const backToTopBtn = document.getElementById('backToTopBtn');
  const circle = document.querySelector('.progress-ring-circle');
  if (!progressBar || !backToTopBtn || !circle) return;

  const radius = circle.r.baseVal.value;
  const circumference = 2 * Math.PI * radius;
  circle.style.strokeDasharray = `${circumference} ${circumference}`;
  circle.style.strokeDashoffset = circumference;

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) : 0;
    const progressPercent = Math.min(100, Math.max(0, progress * 100));

    // Update Bar
    progressBar.style.width = `${progressPercent}%`;

    // Update Circle Ring
    const offset = circumference - (progress * circumference);
    circle.style.strokeDashoffset = offset;

    // Show / Hide Back to Top Button
    if (scrollTop > 350) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* ============================================================
   6. INTERSECTION OBSERVER (STATS COUNTER & SKILL BARS)
   ============================================================ */
function initIntersectionAnimations() {
  // Animasi Angka Statistik
  const statNumbers = document.querySelectorAll('.stat-number[data-target]');
  let statsAnimated = false;

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !statsAnimated) {
        statsAnimated = true;
        statNumbers.forEach(counter => {
          const target = +counter.getAttribute('data-target');
          const duration = 1200; // ms
          const stepTime = 30;
          const steps = duration / stepTime;
          const increment = target / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              counter.textContent = `${target}+`;
              clearInterval(timer);
            } else {
              counter.textContent = `${Math.ceil(current)}+`;
            }
          }, stepTime);
        });
      }
    });
  }, { threshold: 0.3 });

  const statsGrid = document.querySelector('.stats-grid');
  if (statsGrid) statsObserver.observe(statsGrid);

  // Animasi Skill Progress Fill saat terlihat
  const progressFills = document.querySelectorAll('.progress-fill');
  const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        progressFills.forEach(fill => {
          const val = fill.getAttribute('data-progress');
          if (val) {
            fill.style.width = `${val}%`;
          }
        });
        skillsObserver.disconnect();
      }
    });
  }, { threshold: 0.15 });

  const skillsSection = document.getElementById('keahlian');
  if (skillsSection) skillsObserver.observe(skillsSection);
}

/* ============================================================
   7. PROJECT CATEGORY FILTERS
   ============================================================ */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          card.style.opacity = '0';
          card.style.transform = 'scale(0.96)';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
            card.style.transition = 'all 0.3s ease';
          }, 30);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ============================================================
   8. PROJECT DETAIL MODAL ENGINE
   ============================================================ */
const projectDetails = {
  1: {
    title: 'Edutech LMS Platform & Dashboard',
    category: 'Web Application',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
    desc: 'Platform pembelajaran digital interaktif yang dirancang untuk memfasilitasi perkuliahan online mahasiswa. Dilengkapi dashboard analitik progres belajar, kuis interaktif, integrasi pemutar video materi adaptif, dan fitur forum diskusi kelas.',
    challenge: 'Menyajikan data analitik kemajuan siswa secara real-time tanpa memperlambat performa render halaman. Masalah diselesaikan melalui caching state dengan React Context dan virtualisasi list untuk daftar materi yang panjang.',
    tags: ['React.js', 'Tailwind CSS', 'REST API', 'Chart.js', 'Vite', 'Local Storage'],
    demo: 'https://github.com',
    repo: 'https://github.com'
  },
  2: {
    title: 'EcoMart - Sustainable Grocery Mobile UI',
    category: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1000&q=80',
    desc: 'Studi kasus desain UI/UX menyeluruh untuk aplikasi belanja bahan makanan ramah lingkungan. Menghubungkan pembeli langsung dengan petani lokal yang menerapkan prinsip zero-waste packaging.',
    challenge: 'Menciptakan alur checkout yang intuitif bagi pengguna pemula dengan tetap menyertakan opsi penukaran wadah daur ulang. Melakukan 2 putaran user testing dan iterasi pada prototype Figma hingga mencapai 92% task completion rate.',
    tags: ['Figma', 'Design System', 'User Persona', 'Wireframing', 'Prototyping', 'WCAG Accessibility'],
    demo: 'https://figma.com',
    repo: 'https://figma.com'
  },
  3: {
    title: 'Kopi Nusantara - High-Converting Landing Page',
    category: 'Landing Page',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
    desc: 'Landing page promosi produk kopi nusantara artisanal. Dibuat dengan animasi interaktif pada scroll, katalog biji kopi dengan filter aroma & rasa, serta tombol pemesanan langsung terintegrasi WhatsApp bot.',
    challenge: 'Mengoptimalkan aset foto beresolusi tinggi agar skor Core Web Vitals tidak menurun. Diterapkan modern webp image format, lazy loading, dan optimasi CSS animations sehingga menghasilkan performa 98/100 pada Google Lighthouse.',
    tags: ['HTML5', 'CSS3 Keyframes', 'JavaScript ES6+', 'Lighthouse Optimization', 'WhatsApp API'],
    demo: 'https://github.com',
    repo: 'https://github.com'
  },
  4: {
    title: 'SmartDesa - Portal Administrasi Publik',
    category: 'Web Application',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80',
    desc: 'Sistem informasi berbasis web yang memfasilitasi permohonan surat keterangan kependudukan desa secara mandiri oleh warga, lengkap dengan nomor resi pelacakan digital dan panel admin pengurus.',
    challenge: 'Mendesain formulir pengajuan dokumen yang bersih dan mudah diisi melalui smartphone oleh masyarakat dari beragam kelompok usia.',
    tags: ['JavaScript', 'Bootstrap 5', 'REST API', 'MySQL', 'Responsive UX'],
    demo: 'https://github.com',
    repo: 'https://github.com'
  }
};

function initProjectModal() {
  const modal = document.getElementById('projectModal');
  const closeBtn = document.getElementById('modalCloseBtn');
  const triggerBtns = document.querySelectorAll('.view-project-btn');
  if (!modal || !closeBtn) return;

  const modalCategory = document.getElementById('modalCategory');
  const modalTitle = document.getElementById('modalTitle');
  const modalImg = document.getElementById('modalImg');
  const modalDesc = document.getElementById('modalDesc');
  const modalChallenge = document.getElementById('modalChallenge');
  const modalTags = document.getElementById('modalTags');
  const modalLiveLink = document.getElementById('modalLiveLink');
  const modalRepoLink = document.getElementById('modalRepoLink');

  triggerBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const id = btn.getAttribute('data-project-id');
      const data = projectDetails[id];
      if (!data) return;

      modalCategory.textContent = data.category;
      modalTitle.textContent = data.title;
      modalImg.src = data.image;
      modalImg.alt = data.title;
      modalDesc.textContent = data.desc;
      modalChallenge.textContent = data.challenge;

      modalTags.innerHTML = '';
      data.tags.forEach(tag => {
        const span = document.createElement('span');
        span.textContent = tag;
        modalTags.appendChild(span);
      });

      modalLiveLink.href = data.demo;
      modalRepoLink.href = data.repo;

      openModal();
    });
  });

  function openModal() {
    modal.classList.add('show');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
      closeModal();
    }
  });
}

/* ============================================================
   9. QUICK ACTIONS (SALIN EMAIL & PRINT RESUME)
   ============================================================ */
function initQuickActions() {
  const copyBtn = document.getElementById('copyEmailBtn');
  const emailValElem = document.getElementById('emailVal');

  if (copyBtn && emailValElem) {
    copyBtn.addEventListener('click', async () => {
      const email = emailValElem.textContent.trim();
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(email);
        } else {
          const tempInput = document.createElement('input');
          tempInput.value = email;
          document.body.appendChild(tempInput);
          tempInput.select();
          document.execCommand('copy');
          document.body.removeChild(tempInput);
        }
        showToast('Email berhasil disalin ke clipboard! 📋');
      } catch (err) {
        showToast('Gagal menyalin email secara otomatis.');
      }
    });
  }

  // Print CV Buttons (Header & Hero)
  const printBtns = [document.getElementById('printBtn'), document.getElementById('heroPrintBtn')];
  printBtns.forEach(btn => {
    if (btn) {
      btn.addEventListener('click', () => {
        window.print();
      });
    }
  });
}

/* ============================================================
   10. CONTACT FORM & DIRECT WHATSAPP INTEGRATION
   ============================================================ */
function initContactForm() {
  const contactForm = document.getElementById('contactForm');
  const sendWhatsappBtn = document.getElementById('sendWhatsappBtn');
  if (!contactForm) return;

  // Tombol Kirim Langsung ke WhatsApp
  if (sendWhatsappBtn) {
    sendWhatsappBtn.addEventListener('click', () => {
      const name = document.getElementById('nameInput').value.trim();
      const email = document.getElementById('emailInput').value.trim();
      const subject = document.getElementById('subjectInput').value;
      const phone = document.getElementById('phoneInput').value.trim();
      const message = document.getElementById('messageInput').value.trim();

      if (!name || !message) {
        showToast('Mohon lengkapi Nama dan Pesan terlebih dahulu! ⚠️');
        return;
      }

      const waNumber = '6281234567890';
      const text = `Halo Aulia Putri, perkenalkan saya *${name}* (${email || 'No Email'}${phone ? ', Telp: ' + phone : ''}).%0A%0A*Topik:* ${subject}%0A%0A*Pesan:*%0A${message}`;
      const waUrl = `https://wa.me/${waNumber}?text=${text}`;

      window.open(waUrl, '_blank', 'noopener');
      showToast('Membuka WhatsApp untuk mengirim pesan... 💬');
    });
  }

  // Submit Form Biasa
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('nameInput').value.trim();
    const email = document.getElementById('emailInput').value.trim();
    const message = document.getElementById('messageInput').value.trim();

    if (!name || !email || !message) {
      showToast('Harap isi semua kolom bertanda bintang! ⚠️');
      return;
    }

    const submitBtn = document.getElementById('sendBtn');
    const originalText = submitBtn.innerHTML;

    submitBtn.innerHTML = `<span>Mengirim...</span>`;
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
      showToast(`Terima kasih Bapak/Ibu ${name}, pesan Anda berhasil dikirim! ✨`);
      contactForm.reset();
    }, 800);
  });
}

/* ============================================================
   11. MOBILE MENU NAVIGATION
   ============================================================ */
function initMobileNav() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');
  if (!menuBtn || !navLinks) return;

  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  const links = navLinks.querySelectorAll('.nav-link');
  links.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });
}

/* ============================================================
   12. TOAST NOTIFICATION UTILITY
   ============================================================ */
let toastTimer;
function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toastMessage');
  if (!toast || !toastMessage) return;

  toastMessage.textContent = message;
  toast.classList.add('show');

  if (toastTimer) {
    clearTimeout(toastTimer);
  }

  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}
