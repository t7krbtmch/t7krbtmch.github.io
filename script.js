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

// EmailJSを使用したメール送信機能
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // 送信ボタンの無効化と読み込み状態の表示
    const submitButton = document.querySelector('.submit-button');
    const submitStatus = document.getElementById('submit-status');
    
    submitButton.disabled = true;
    submitButton.textContent = '送信中...';
    submitStatus.textContent = '';
    
    // EmailJSでメール送信
    emailjs.sendForm('service_id', 'template_id', this)
        .then(function() {
            // 成功時の処理
            submitButton.disabled = false;
            submitButton.textContent = '送信';
            submitStatus.textContent = 'メッセージが送信されました。ありがとうございます！';
            submitStatus.style.color = 'green';
            e.target.reset();
        }, function(error) {
            // エラー時の処理
            submitButton.disabled = false;
            submitButton.textContent = '送信';
            submitStatus.textContent = 'エラーが発生しました。後でもう一度お試しください。';
            submitStatus.style.color = 'red';
            console.log('送信エラー:', error);
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