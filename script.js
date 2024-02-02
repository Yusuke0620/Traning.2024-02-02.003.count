const text = document.querySelector("#text");
const count = document.querySelector("#count");

// キーが押された時
text.addEventListener("keyup", () => {    
    // countに文字数を数えるlengthと実際の数valueを代入
    count.textContent = text.value.length;

    // もし文字数が10超過であれば
    if (text.value.length > 100) {

        // countにalertクラスを追加する※内容はカラー変更
        count.classList.add("alert");

        // 10未満であればalertクラスを追加は削除
    } else {
        count.classList.remove("alert");
    }
});
