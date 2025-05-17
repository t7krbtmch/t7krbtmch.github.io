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
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    const mailtoLink = `mailto:t7krbtmch@gmail.com?subject=ウェブサイトからのお問い合わせ&body=お名前: ${name}%0D%0A%0D%0A返信用メールアドレス: ${email}%0D%0A%0D%0Aメッセージ:%0D%0A${message}`;
    
    window.location.href = mailtoLink;
    return false;
} 