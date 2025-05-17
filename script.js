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

// フォーム送信処理
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // フォームデータの取得
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    // ここでフォームデータの処理を行う
    // 例: APIへの送信やメール送信など
    console.log('送信されたデータ:', formData);

    // 送信完了メッセージ
    alert('お問い合わせありがとうございます。\n内容を確認次第、ご連絡させていただきます。');
    
    // フォームのリセット
    this.reset();
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