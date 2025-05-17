addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const url = new URL(request.url);

  // ارائه manifest.json
  if (url.pathname === '/manifest.json') {
    return new Response(manifestJson, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  }

  // ارائه sw.js
  if (url.pathname === '/sw.js') {
    return new Response(serviceWorkerJs, {
      headers: {
        'Content-Type': 'application/javascript',
        'Access-Control-Allow-Origin': '*'
      }
    });
  }

  // HTML اصلی
  const html = `
    <!DOCTYPE html>
    <html lang="fa" dir="rtl">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
      <meta name="theme-color" content="#2A3A5A">
      <title>کارت‌های شبکه‌های اجتماعی</title>
      <link rel="manifest" href="/manifest.json">
      <link rel="apple-touch-icon" href="https://imagedelivery.net/your-account-hash/icon-192x192/public">
      <link rel="icon" href="https://imagedelivery.net/your-account-hash/icon-192x192/public">
      <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
      <style>
        body {
          background: linear-gradient(180deg, #09203F, #303841);
          color: #fff;
          font-family: 'Inter', Arial, sans-serif;
          margin: 0;
          padding: 60px 20px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: background 0.3s ease;
          min-height: 100vh;
          box-sizing: border-box;
          position: relative;
          overflow-x: hidden;
        }
        body.light {
          background: linear-gradient(180deg, #C7C700, #FF0088);
          color: #333;
        }
        canvas#background-particles {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -5;
          opacity: 0.3;
        }
        .top-bar {
          position: fixed;
          top: 5px;
          left: 0;
          right: 0;
          height: 50px;
          z-index: -1;
          background: rgba(50, 50, 50, 0.2);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 20px;
          z-index: 1000;
          box-sizing: border-box;
        }
        body.light .top-bar {
          background: rgba(255, 255, 255, 0.15);
        }
        .top-bar button {
          background: none;
          border: none;
          color: #fff;
          font-size: 18px;
          cursor: pointer;
          transition: transform 0.3s ease, color 0.3s ease;
        }
        body.light .top-bar button {
          color: #333;
        }
        .top-bar button:hover {
          transform: scale(1.2);
          color: #007BFF;
        }
        .header-container {
          display: flex;
          flex-direction: column;
          width: 100%;
          max-width: 755px;
          margin: 0 auto 30px;
          box-sizing: border-box;
        }
        .brand-intro {
          position: relative;
          top: 5px;
          background: #2a3a5aa3;
          color: #fff;
          border-radius:  50% 10% 50% 10% / 10% 50% 10% 50%;
          padding: 20px;
          width: 100%;
          max-width: 750px;
          box-shadow: 0 0 16px rgba(0, 0, 0, 0.3);
          transition: background 0.3s ease, color 0.3s ease;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-height: 200px;
          margin: 0 auto;
          overflow: hidden;
        }
        body.light .brand-intro {
          background: #fbfbbc5c;
          color: #333;
        }
        .brand-intro canvas.brand-particles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          opacity: 0.6;
        }
        .brand-intro::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: 400%;
          z-index: -2;
          animation: neonGradient 8s ease infinite;
        }
        @keyframes neonGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .brand-intro h2 {
          margin: 0 0 10px;
          font-size: 22px;
          position: relative;
        }
        .brand-intro p {
          margin: 0;
          font-size: 14px;
          line-height: 1.5;
          position: relative;
        }
        .grid-container {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          width: 100%;
          max-width: 750px;
          margin: 0 auto;
          box-sizing: border-box;
        }
        .card {
          position: relative;
          background: rgba(50, 50, 50, 0.3);
          border-radius: 50% 10% 50%10% / 10% 50% 10% 50%;  
          padding: 15px;
          text-align: center;
          box-shadow: 0 0 16px rgba(0, 0, 0, 0.3);
          transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
          width: 170px;
          height: 170px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          overflow: hidden;
        }
        body.light .card {
          background: rgba(255, 255, 255, 0.25);
          box-shadow: 0 0 16px rgba(50, 50, 50, 0.3);
        }
        @supports (backdrop-filter: blur(8px)) {
          .card {
            background: rgba(50, 50, 50, 0.2);
            backdrop-filter: blur(8px);
          }
          body.light .card {
            background: rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(8px);
          }
        }
        .card.snapp { box-shadow: 0 0 10px rgba(357.08, 1, 0.36); }
        .card.telegram { box-shadow: 0 0 10px rgba(255, 0, 204, 0.5); }
        .card.instagram { box-shadow: 0 0 10px rgba(204, 0, 255, 0.5); }
        .card.whatsapp { box-shadow: 0 0 10px rgba(0, 255, 153, 0.5); }
        .card.twitter { box-shadow: 0 0 10px rgba(255, 153, 0, 0.5); }
        .card.linkedin { box-shadow: 0 0 10px rgba(0, 102, 204, 0.5); }
        .card.facebook { box-shadow: 0 0 10px rgba(51, 153, 255, 0.5); }
        .card.youtube { box-shadow: 0 0 10px rgba(255, 51, 51, 0.5); }
        .card.snapp:hover, .card.snapp:active {
          background: #b90009;
          box-shadow: 0 0 30px #b90009;
        }
        .card.telegram:hover, .card.telegram:active {
          background: #ff00cc;
          box-shadow: 0 0 30px #ff00cc;
        }
        .card.instagram:hover, .card.instagram:active {
          background: #cc00ff;
          box-shadow: 0 0 30px #cc00ff;
        }
        .card.whatsapp:hover, .card.whatsapp:active {
          background: #00ff99;
          box-shadow: 0 0 30px #00ff99;
        }
        .card.twitter:hover, .card.twitter:active {
          background: #ff9900;
          box-shadow: 0 0 30px #ff9900;
        }
        .card.linkedin:hover, .card.linkedin:active {
          background: #0066cc;
          box-shadow: 0 0 30px #0066cc;
        }
        .card.facebook:hover, .card.facebook:active {
          background: #3399ff;
          box-shadow: 0 0 30px #3399ff;
        }
        .card.youtube:hover, .card.youtube:active {
          background: #ff3333;
          box-shadow: 0 0 30px #ff3333;
        }
        .card:hover {
          transform: scale(1.2);
          border-radius: 10% 50% 10% 50% / 50% 10% 50% 10%; 
        }
        .card canvas.particle-canvas {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          opacity: 0.7;
        }
        .card:hover canvas {
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .card img {
          width: 50px;
          height: 50px;
          margin-bottom: 8px;
          position: relative;
          z-index: 0;
          transition: transform 0.3s ease;
          animation: bounce 2s infinite;
        }
        .card:hover img {
          transform: scale(1.2);
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .card .info {
          position: relative;
          z-index: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: transform 0.3s ease;
        }
        .card:hover .info {
          transform: translateY(-5px);
        }
        .card .info h2 {
          margin: 0;
          font-size: 18px;
          transition: font-size 0.3s ease;
        }
        .card:hover .info h2 {
          font-size: 20px;
        }
        .card p {
          margin: 5px 0 8px;
          font-size: 14px;
          color: #E6E6FA;
        }
        body.light .card p {
          color: #555;
        }
        .card:hover p {
          color: #007BFF;
          text-decoration: underline;
        }
        .enter-button {
          background: rgba(50, 50, 50, 0.3);
          backdrop-filter: blur(5px);
          color: #fff;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 500px;
          padding: 6px 12px;
          font-size: 12px;
          cursor: pointer;
          transition: background 0.3s ease, transform 0.2s, box-shadow 0.3s ease;
          z-index: 1;
          position: relative;
          overflow: hidden;
        }
        body.light .enter-button {
          background: rgba(255, 255, 255, 0.2);
          border: 1px solid rgba(0, 0, 0, 0.2);
          color: #333;
        }
        .enter-button:hover {
          background: rgba(0, 123, 255, 0.3);
          transform: scale(1.05);
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        }
        .enter-button::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: width 0.4s ease, height 0.4s ease;
        }
        .enter-button:active::after {
          width: 200px;
          height: 200px;
          opacity: 0;
        }
        .card.dragging {
          opacity: 0.5;
          cursor: grabbing;
        }
        .feedback-card {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(0);
          background-color: #2a3a5aa3;
          color: #fff;
          border-radius: 25px;
          padding: 20px;
          width: 250px;
          height: 350px;
          box-shadow: 0 0 16px rgba(0, 0, 0, 0.3);
          transition: transform 0.3s ease, opacity 0.3s ease;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          gap: 10px;
          z-index: 2000;
          opacity: 0;
        }
        .feedback-card.active {
          transform: translate(-50%, -50%) scale(1);
          opacity: 1;
        }
        body.light .feedback-card {
          background-color: #fbfbbc5c;
          color: #333;
        }
        .feedback-card h2 {
          margin: 0 0 10px;
          font-size: 18px;
        }
        .feedback-card input, .feedback-card textarea {
          width: 100%;
          padding: 8px;
          border: 1px solid #ccc;
          border-radius: 10px;
          font-size: 14px;
          box-sizing: border-box;
        }
        .feedback-card textarea {
          height: 120px;
          resize: none;
        }
        .feedback-card button {
          background-color: #007BFF;
          color: #fff;
          border: none;
          border-radius: 50px;
          padding: 10px;
          font-size: 15px;
          cursor: pointer;
          transition: background-color 1.5s ease;
        }
        .feedback-card button:hover {
          background-color: #0056b3;
        }
        .close-button {
          position: absolute;
          top: 10px;
          left: 10px;
          background: none;
          border: none;
          font-size: 18px;
          cursor: pointer;
          color: #fff;
        }
        body.light .close-button {
          color: #333;
        }
        body.dark .feedback-card input, body.dark .feedback-card textarea {
          background-color: #1A2A44;
          color: #fff;
          border-color: #E6E6FA;
        }
        body.light .feedback-card input, body.light .feedback-card textarea {
          background-color: #fff;
          color: #333;
          border-color: #ccc;
        }
        @media (max-width: 800px) {
          body {
            padding: 50px 10px 10px;
          }
          .header-container, .brand-intro, .grid-container {
            max-width: 280px;
          }
          .grid-container {
            grid-template-columns: repeat(2, 1fr);
          }
          .card {
            width: 130px;
            height: 130px;
            padding: 10px;
          }
          .card img {
            width: 40px;
            height: 40px;
          }
          .card p {
            font-size: 12px;
          }
          .card .info h2 {
            font-size: 16px;
          }
          .card:hover .info h2 {
            font-size: 18px;
          }
          .enter-button {
            font-size: 10px;
            padding: 5px 10px;
          }
          .feedback-card {
            width: 250px;
            height: 300px;
          }
          .feedback-card input, .feedback-card textarea {
            font-size: 12px;
            padding: 6px;
          }
          .feedback-card textarea {
            height: 100px;
          }
          .feedback-card button {
            font-size: 12px;
            padding: 6px;
          }
          .feedback-card h2 {
            font-size: 16px;
          }
          .top-bar {
            height: 40px;
          }
          .top-bar button {
            font-size: 16px;
          }
        }
      </style>
    </head>
    <body>
    <canvas id="background-particles" width="auto" height="auto"></canvas>
      <div class="top-bar">
        <button onclick="toggleTheme()" id="theme-button">🌙</button>
        <button onclick="showFeedback()">نظردهی</button>
      </div>
      <div class="header-container">
        <div class="brand-intro">
          <canvas class="brand-particles"></canvas>
          <h2>معرفی برند</h2>
          <p>این سایت مجموعه‌ای از لینک‌های شبکه‌های اجتماعی شماست. با کلیک روی دکمه‌های ورود به سایت، می‌تونید به صفحه مورد نظرتون برید و از خدمات ما استفاده کنید!</p>
        </div>
      </div>
      <div class="grid-container">
        <div class="card snapp" draggable="true">
          <canvas class="particle-canvas"></canvas>
          <div class="info">
            <img src= "https://raw.githubusercontent.com/mpcirancom/server/refs/heads/main/icon/Snapp.png" alt="واتساپ" style="border-radius: 20%;>
            <h2>اسنپ</h2>
            <p>لینک: snapp.ir</p>
            <button class="enter-button" onclick="window.open('https://telegram.org', '_blank')">ورود به سایت</button>
            <button class="enter-button" onclick="window.open('https://snapp.ir', '_blank')">ورود به سایت</button>
          </div>
        </div>
        <div class="card telegram" draggable="true">
          <canvas class="particle-canvas"></canvas>
          <div class="info">
            <img src="https://raw.githubusercontent.com/mpcirancom/server/refs/heads/main/icon/Instagram.png" alt="تلگرام" style="border-radius: 20%;">
            <p>تلگرام: telegram.org</p>
            <button class="enter-button" onclick="window.open('https://telegram.org', '_blank')">ورود به سایت</button>
          </div>
        </div>
        <div class="card instagram" draggable="true">
          <canvas class="particle-canvas"></canvas>
          <div class="info">
            <img src="https://raw.githubusercontent.com/mpcirancom/server/refs/heads/main/icon/Telegram.png" alt="اینستاگرام" style="border-radius: 20%;">
            <p>اینستاگرام: instagram.com</p>
            <button class="enter-button" onclick="window.open('https://instagram.com', '_blank')">ورود به سایت</button>
          </div>
        </div>
        <div class="card whatsapp" draggable="true">
          <canvas class="particle-canvas"></canvas>
          <div class="info">
            <img src="https://raw.githubusercontent.com/mpcirancom/server/refs/heads/main/icon/Whatsapp.png" alt="واتساپ" style="border-radius: 20%;">
            <p>واتساپ: whatsapp.com</p>
            <button class="enter-button" onclick="window.open('https://whatsapp.com', '_blank')">ورود به سایت</button>
          </div>
        </div>
        <div class="card twitter" draggable="true">
          <canvas class="particle-canvas"></canvas>
          <div class="info">
            <img src="https://raw.githubusercontent.com/mpcirancom/server/refs/heads/main/icon/Snapp.png" alt="توییتر" style="border-radius: 20%;">
            <p>توییتر: twitter.com</p>
            <button class="enter-button" onclick="window.open('https://twitter.com', '_blank')">ورود به سایت</button>
          </div>
        </div>
        <div class="card linkedin" draggable="true">
          <canvas class="particle-canvas"></canvas>
          <div class="info">
            <img src="https://raw.githubusercontent.com/mpcirancom/server/refs/heads/main/icon/BaSalam.png" alt="لینکدین" style="border-radius: 20%;">
            <p>لینکدین: linkedin.com</p>
            <button class="enter-button" onclick="window.open('https://linkedin.com', '_blank')">ورود به سایت</button>
          </div>
        </div>
        <div class="card facebook" draggable="true">
          <canvas class="particle-canvas"></canvas>
          <div class="info">
            <img src="https://raw.githubusercontent.com/mpcirancom/server/refs/heads/main/icon/Torob.png" alt="فیسبوک" style="border-radius: 20%;">
            <p>فیسبوک: facebook.com</p>
            <button class="enter-button" onclick="window.open('https://facebook.com', '_blank')">ورود به سایت</button>
          </div>
        </div>
        <div class="card youtube" draggable="true">
          <canvas class="particle-canvas"></canvas>
          <div class="info">
            <img src="https://raw.githubusercontent.com/mpcirancom/server/refs/heads/main/icon/Technolife.png" alt="یوتیوب" style="border-radius: 20%;">
            <p>یوتیوب: youtube.com</p>
            <button class="enter-button" onclick="window.open('https://youtube.com', '_blank')">ورود به سایت</button>
          </div>
        </div>
      </div>
      <div class="feedback-card">
        <button class="close-button" onclick="hideFeedback()">×</button>
        <h2>نظردهی</h2>
        <input type="text" id="name" placeholder="نام" required>
        <input type="email" id="email" placeholder="ایمیل" required>
        <textarea id="feedback" placeholder="نظر خود را بنویسید" required></textarea>
        <button onclick="sendFeedback()">ارسال</button>
      </div>

      <script>
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
      </script>
    </body>
    </html>
  `;

  // فایل manifest.json
  const manifestJson = JSON.stringify({
    name: "کارت‌های شبکه‌های اجتماعی",
    short_name: "شبکه‌های اجتماعی",
    start_url: "/",
    display: "standalone",
    background_color: "#2A3A5A",
    theme_color: "#2A3A5A",
    icons: [
      {
        src: "https://imagedelivery.net/your-account-hash/icon-192x192/public",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "https://imagedelivery.net/your-account-hash/icon-512x512/public",
        sizes: "512x512",
        type: "image/png"
      }
    ]
  });

  // فایل sw.js
  const serviceWorkerJs = `
    const CACHE_NAME = 'social-cards-v2';
    const urlsToCache = [
      '/',
      '/index.html',
      'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js',
      'https://imagedelivery.net/your-account-hash/snapp-icon/public',
      'https://imagedelivery.net/your-account-hash/telegram-icon/public',
      'https://imagedelivery.net/your-account-hash/instagram-icon/public',
      'https://imagedelivery.net/your-account-hash/whatsapp-icon/public',
      'https://imagedelivery.net/your-account-hash/twitter-icon/public',
      'https://imagedelivery.net/your-account-hash/linkedin-icon/public',
      'https://imagedelivery.net/your-account-hash/facebook-icon/public',
      'https://imagedelivery.net/your-account-hash/youtube-icon/public',
      'https://imagedelivery.net/your-account-hash/icon-192x192/public',
      'https://imagedelivery.net/your-account-hash/icon-512x512/public'
    ];

    self.addEventListener('install', event => {
      event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
          return cache.addAll(urlsToCache);
        })
      );
    });

    self.addEventListener('fetch', event => {
      event.respondWith(
        caches.match(event.request).then(response => {
          return response || fetch(event.request);
        })
      );
    });

    self.addEventListener('activate', event => {
      const cacheWhitelist = [CACHE_NAME];
      event.waitUntil(
        caches.keys().then(cacheNames => {
          return Promise.all(
            cacheNames.map(cacheName => {
              if (!cacheWhitelist.includes(cacheName)) {
                return caches.delete(cacheName);
              }ّ
            })
          );
        })
      );
    });
  `;

  return new Response(html, {
    headers: {
      'content-type': 'text/html; charset=UTF-8',
      'Access-Control-Allow-Origin': '*'
    }
  });
}
