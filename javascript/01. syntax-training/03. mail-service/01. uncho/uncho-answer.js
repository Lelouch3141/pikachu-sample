//メールボックスを用意
const mailBox = [];

//投函関数
function post(letter) {
    mailBox.push(letter);
}

//先入れ、先出し
//first in first out
//要はうんこ
function uncho() {
    //メールボックスに何個入ってるか
    const letterCount = mailBox.length;

    //メールボックスが空なら、return "何もありません"
    if (letterCount === 0) {
        return "何もありません";
    }

    //メールボックスの先頭のメールを取得
    const drawLetter = mailBox[0];

    //メールボックスの先頭を削除(メールボックス配列も削除した分詰められる)
    mailBox.splice(0, 1);

    //return メールボックスの先頭の値
    return drawLetter;
}

function randomFunc(num) {
    const randomValue = Math.floor(Math.random() * num);
    return randomValue;
}

//10以下の乱数を生成
const randomValue = randomFunc(10);

//10以下の乱数が上限のforループ
for (i = 0; i < randomValue; i++) {
    //うんこ1 ～ うんこ9を投函
    post(`うんこ${i + 1}`);
}

//うんこ出す処理
for (i = 0; i < randomValue; i++) {
    //1回目のうんこを保存
    const getUncho = uncho();
    console.log(`どれどれ... ${getUncho}か...`);
}
