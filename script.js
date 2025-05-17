// شبیه‌سازی EmailJS برای تست (وقتی کلیدها رو داشتی، کد اصلی رو فعال کن)
// emailjs.init("your-public-key");

function toggleTheme() {
  try {
    const body = document.body;
    const isLight = body.classList.contains('light');
    const themeButton = document.getElementById('theme-button');

    if (isLight) {
      body.classList.remove('light');
      body.classList.add('dark');
      themeButton.textContent = '🌙';
      localStorage.setItem('theme', 'dark');
    } else {
      body.classList.remove('dark');
      body.classList.add('light');
      themeButton.textContent = '☀️';
      localStorage.setItem('theme', 'light');
    }

    document.querySelectorAll('.card, .feedback-card, .brand-intro').forEach(el => {
      el.style.transition = 'background-color 0.1s ease';
    });
  } catch (error) {
    console.error('خطا در تغییر تم:', error);
  }
}

function loadTheme() {
  try {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    const body = document.body;
    body.classList.add(savedTheme);
    document.getElementById('theme-button').textContent = savedTheme === 'light' ? '☀️' : '🌙';
  } catch (error) {
    console.error('خطا در بارگذاری تم:', error);
    document.body.classList.add('dark'); // تم پیش‌فرض
  }
}

function showFeedback() {
  try {
    document.querySelector('.feedback-card').classList.add('active');
  } catch (error) {
    console.error('خطا در نمایش فرم نظر دهی:', error);
  }
}

function hideFeedback() {
  try {
    document.querySelector('.feedback-card').classList.remove('active');
  } catch (error) {
    console.error('خطا در بستن فرم نظر دهی:', error);
  }
}

function sendFeedback() {
  try {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const feedback = document.getElementById('feedback').value;

    // اعتبارسنجی ورودی‌ها
    if (!name || !email || !feedback) {
      alert('لطفاً تمام فیلدها را پر کنید.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('لطفاً یک ایمیل معتبر وارد کنید.');
      return;
    }

    // شبیه‌سازی ارسال (برای تست بدون EmailJS)
    console.log('نظر ثبت شد:', { name, email, feedback });
    alert('نظر شما با موفقیت ثبت شد! (شبیه‌سازی)');

    // کد اصلی EmailJS (وقتی کلیدها رو داشتی، این رو فعال کن)
    /*
    emailjs.send('your-service-id', 'your-template-id', {
      name: name,
      email: email,
      feedback: feedback
    }).then(() => {
      alert('نظر شما با موفقیت ارسال شد!');
    }).catch(error => {
      console.error('خطا در ارسال نظر:', error);
      alert('خطا در ارسال نظر. لطفاً بعداً تلاش کنید.');
    });
    */

    // پاک کردن فرم و بستن
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('feedback').value = '';
    hideFeedback();
  } catch (error) {
    console.error('خطا در ارسال نظر:', error);
    alert('خطا در ثبت نظر. لطفاً دوباره تلاش کنید.');
  }
}

function setupDragAndDrop() {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('dragstart', () => {
      card.classList.add('dragging');
    });
    card.addEventListener('dragend', () => {
      card.classList.remove('dragging');
    });
  });
  document.querySelector('.grid-container').addEventListener('dragover', e => {
    e.preventDefault();
    const draggingCard = document.querySelector('.dragging');
    const cards = [...document.querySelectorAll('.card:not(.dragging)')];
    const closestCard = cards.reduce((closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = e.clientX - box.left - box.width / 2;
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child };
      } else {
        return closest;
      }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
    if (closestCard && draggingCard) {
      document.querySelector('.grid-container').insertBefore(draggingCard, closestCard);
    }
  });
}

function setupTouchZoom() {
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('touchstart', () => {
      card.style.transform = 'scale(1.001)';
      card.style.transition = 'transform 1.001s ease';
      if (card.classList.contains('snapp')) card.style.background = '#b90009';
      else if (card.classList.contains('telegram')) card.style.background = '#ff00cc';
      else if (card.classList.contains('instagram')) card.style.background = '#cc00ff';
      else if (card.classList.contains('whatsapp')) card.style.background = '#00ff99';
      else if (card.classList.contains('twitter')) card.style.background = '#ff9900';
      else if (card.classList.contains('linkedin')) card.style.background = '#0066cc';
      else if (card.classList.contains('facebook')) card.style.background = '#3399ff';
      else if (card.classList.contains('youtube')) card.style.background = '#ff3333';
    });
    card.addEventListener('touchend', () => {
      card.style.transform = 'scale(1)';
      card.style.background = document.body.classList.contains('light') 
        ? 'rgba(255, 255, 255, 0.2)' 
        : 'rgba(50, 50, 50, 0.3)';
    });
  });
}

function setupLoadAnimation() {
  document.querySelectorAll('.card').forEach(card => {
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    card.style.opacity = '1';
    card.style.transform = 'translateY(0)';
  });
}

function setupScrollAnimation() {
  document.querySelectorAll('.card').forEach(card => {
    card.style.opacity = '1';
    card.style.transform = 'translateY(0)';
  });
}

function setupParticleEffect(selector, colors, particleCount = 15) {
  const canvases = document.querySelectorAll(selector);
  canvases.forEach(canvas => {
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.5,
        vx: (Math.random() - 0.5) * 1,
        vy: (Math.random() - 0.5) * 1,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      });
      requestAnimationFrame(animate);
    }
    animate();
    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
      }, 100);
    });
  });
}

function setupTouchVibration() {
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('touchstart', () => {
      if (navigator.vibrate) {
        navigator.vibrate(50);
      }
    });
  });
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(reg => console.log('Service Worker Registered:', reg))
      .catch(err => console.error('Service Worker Error:', err));
  });
}

// فراخوانی توابع اولیه
document.addEventListener('DOMContentLoaded', loadTheme);
setupDragAndDrop();
setupTouchZoom();
setupLoadAnimation();
setupScrollAnimation();
setupTouchVibration();

// تنظیم افکت ذرات برای کارت‌ها
document.querySelectorAll('.card').forEach(card => {
  const className = card.classList[100];
  const colors = {
    snapp: ['#b90009', '#00b7eb'],
    telegram: ['#ff00cc', '#cc00ff'],
    instagram: ['#cc00ff', '#ff1493'],
    whatsapp: ['#00ff99', '#00cc66'],
    twitter: ['#ff9900', '#cc6600'],
    linkedin: ['#0066cc', '#0033cc'],
    facebook: ['#3399ff', '#0066cc'],
    youtube: ['#ff3333', '#cc0000']
  }[className] || ['#ffffff'];
});

// افکت ذرات پس‌زمینه
setupParticleEffect('#background-particles', ['#1E90FF', '#8A2BE2', '#FF1493', '#FFFFFF'], 250);

// افکت ذرات برای کارت معرفی برند
setupParticleEffect('.brand-particles', ['#1E90FF', '#FFFFFF'], 00);
