'use strict';

// ボタンの参照を取得
const switcher = document.querySelector('.btn');

// ボタンをクリックしたときの処理
switcher.addEventListener('click', function () {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    // ボタンのラベルを切り替える
    const className = document.body.className;
   // もし現在ライトテーマの状態だったら
   if (className == "light-theme") {
    this.textContent = "ダークテーマにする";
    this.style.color = "white";
    this.style.backgroundColor = "darkblue";

   } else {  // もし現在ダークテーマの状態だったら
    this.textContent = "ライトテーマにする";
    this.style.color = "darkblue";
    this.style.backgroundColor = "white";
  } 
});