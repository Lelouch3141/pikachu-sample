//メールボックスを用意
const mailBox = [];

//投函関数
function post(letter) {
    mailBox.push(letter);
}

//後入れ、先出し
//late in first out
//要はゲロ
function ororororo() {
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
    //うんこ1 ～ うんこ9を投函
    post(`うんこ${i + 1}`);
}

//うんこ出す処理
for (i = 0; i < randomValue; i++) {
    //1回目のうんこを保存
    const getUncho = ororororo();
    console.log(`どれどれ... ${getUncho}か...`);
}
