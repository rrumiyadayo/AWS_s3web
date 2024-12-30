document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // フォームのデフォルト送信を防ぐ

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // 簡単なチェック
    if(name && email && message) {
        alert('お問い合わせありがとうございます！');
        // ここにAWS Lambdaと連携予定
        document.getElementById('contact-form').reset(); // フォームのリセット
    } else {
        alert('全てのフィールドを入力してください。');
    }
});
