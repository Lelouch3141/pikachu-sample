/*
    (2022.09.09) Queueの実装
 */

//メールボックスを用意
const mailBox = [];

//市民が投函する動作
//投函関数
function postLetter(letter) {
    mailBox.push(letter);
}

//郵便局員が手紙を取り出す動作
//順序は、市民が入れた順番に、です。
//先入れ、先出し
//first in first out
//要はうんこ
function getLetter() {
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

//乱数生成関数
function randomFunc(num) {
    const randomValue = Math.floor(Math.random() * num);
    return randomValue;
}

//10以下の乱数を生成して、定数に保存
const randomValue = randomFunc(10);

//市民がn回投函します。
//10以下の乱数が上限のforループ
for (i = 0; i < randomValue; i++) {
    //手紙を投函
    //手紙の内容は、各々"うんこ1"～"うんこn"
    posLetter(`うんこ${i + 1}`);
}

//郵便局員がn個の手紙を取り出します。
//順序は、市民が入れた順番に、です。
//メールボックスに入っている手紙の個数分、配列を回します。
for (i = 0; i < mailBox.length; i++) {
    //i回目の手紙を取り出して、letterに保存
    const letter = getLetter();
    console.log(`どれどれ... ${letter}か...`);
}
