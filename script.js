// スムーズスクロールの実装
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// スクロール時のヘッダーの表示/非表示
let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
        // 下スクロール時
        header.style.transform = 'translateY(-100%)';
    } else {
        // 上スクロール時
        header.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop;
});

// メール送信機能
function sendEmail(event) {
    event.preventDefault();
    
    const name = encodeURIComponent(document.getElementById('name').value);
    const email = encodeURIComponent(document.getElementById('email').value);
    const message = encodeURIComponent(document.getElementById('message').value);
    
    const subject = encodeURIComponent('ウェブサイトからのお問い合わせ');
    const body = encodeURIComponent(`お名前: ${name}\n\n返信用メールアドレス: ${email}\n\nメッセージ:\n${message}`);
    
    const mailtoLink = `mailto:t7krbtmch@gmail.com?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoLink;
    return false;
} 