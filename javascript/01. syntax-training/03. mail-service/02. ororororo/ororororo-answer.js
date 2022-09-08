/*
    (2022.09.09) Stackの実装
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
//後入れ、先出し
//late in first out
//要はゲロ
function getLetter() {
    //メールボックスに何個入ってるか
    const letterCount = mailBox.length;

    //メールボックスが空なら、return "何もありません"
    if (letterCount === 0) {
        return "何もありません";
    }

    //メールボックスの最後尾の値を取得
    const drawLetter = mailBox[letterCount - 1];

    //メールボックスの最後尾を削除
    mailBox.splice(letterCount - 1, 1);

    //return 最後尾のメール
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
    //手紙を投函
    //手紙の内容は、各々"うんこ1"～"うんこn"
    postLetter(`うんこ${i + 1}`);
}

//郵便局員がn個の手紙を取り出します
//順序は、市民が入れた順番に、です。
//メールボックスに入っている手紙の個数分、配列を回します。
for (i = 0; i < mailBox.length; i++) {
    //1回目のうんこを保存
    const letter = getLetter();
    console.log(`どれどれ... ${letter}か...`);
}
