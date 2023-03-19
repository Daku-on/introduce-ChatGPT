'use strict';

// ボタンの参照を取得
const switcher = document.querySelector('.btn');

// ボタンをクリックしたときの処理
switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    // ボタンのラベルを切り替える
const className = document.body.className;
if (className == "light-theme") { // もし現在ライトテーマの状態だったら
    this.textContent = "ダークテーマにする";
} else { // もし現在ダークテーマの状態だったら
    this.textContent = "ライトテーマにする";
}
});