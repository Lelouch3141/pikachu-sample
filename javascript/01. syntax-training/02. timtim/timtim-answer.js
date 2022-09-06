//引数以下の乱数生成
function randomFunc(num) {
  const randomValue = Math.floor(Math.random() * num);
  return randomValue;
}

//tim配列の要素をランダムで返す、otimtim関数
function otimtimFunc() {
  const tim = ["お", "ち", "ん", "ち", "ん"];
  const randomValue = randomFunc(tim.length);
  return tim[randomValue];
}

//500回for文回す
for (i = 0; i < 500; i++) {
  //otimtim関数を5回呼んだ結果を格納する変数
  var result = "";
  //otimtim関数を5回読んで、resultへ連結
  for (j = 0; j < 5; j++) {
    result += otimtimFunc();
  }

  //おちんちんびろーん
  if (result === "おちんちん") {
    console.log(`・${i + 1} びろーん`);
  }
}
