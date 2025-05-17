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

// アプリ一覧を表示する関数
async function loadApps() {
    try {
        // CSVファイルを読み込む
        const response = await fetch('icon.csv');
        const data = await response.text();
        
        // CSVをパースする
        const rows = data.split('\n');
        const appsContainer = document.getElementById('apps-container');
        
        // 各行をループして処理
        rows.forEach(row => {
            if (!row.trim()) return; // 空行はスキップ
            
            const [appName, appUrl, iconFile] = row.split(',');
            
            // アプリカードを作成
            const appCard = document.createElement('div');
            appCard.className = 'app-card';
            
            // カードの内容を設定
            appCard.innerHTML = `
                <a href="${appUrl}" target="_blank">
                    <img src="images/${iconFile}" alt="${appName}アイコン" class="app-icon" onerror="this.src='images/placeholder.svg'">
                </a>
                <h3>${appName}</h3>
                <a href="${appUrl}" class="app-link" target="_blank">App Storeで見る</a>
            `;
            
            // コンテナに追加
            appsContainer.appendChild(appCard);
        });
    } catch (error) {
        console.error('アプリデータの読み込みに失敗しました:', error);
    }
}

// ページ読み込み時にアプリ一覧を表示
document.addEventListener('DOMContentLoaded', loadApps); 