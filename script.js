// تغییر حالت روز و شب
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('day');
    body.classList.toggle('night');
    themeToggle.textContent = body.classList.contains('night') ? 'تغییر به حالت روز' : 'تغییر به حالت شب';
});

// تنظیمات کارت (برای مثال، تغییر اندازه و موقعیت با کلیک)
const card = document.querySelector('.card');

card.addEventListener('click', () => {
    // مثال: تغییر اندازه کارت
    card.style.width = card.style.width === '250px' ? '200px' : '250px';
    card.style.height = card.style.height === '350px' ? '300px' : '350px';
});

// تبدیل HTML و CSS به JavaScript (تابع نمونه)
function convertToJS(html, css) {
    const jsCode = `
        // HTML به صورت دینامیک
        document.body.innerHTML += \`${html}\`;

        // CSS به صورت دینامیک
        const style = document.createElement('style');
        style.innerHTML = \`${css}\`;
        document.head.appendChild(style);
    `;
    console.log('کد JavaScript معادل:', jsCode);
    return jsCode;
}

// مثال تبدیل
const sampleHTML = `<div class="sample">سلام دنیا</div>`;
const sampleCSS = `.sample { color: blue; }`;
convertToJS(sampleHTML, sampleCSS);