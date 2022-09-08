const message = "Fuck'n World...";

//関数の外の定数"message"に依存している
//他のメッセージを表示して欲しい時、"message”を変更する必要がある。
//"message"が絶対あるなら良いけど、無くなるとしたら、関数も変更しなければならない。
function textNoArgue() {
    console.log(message);
}

//関数呼び出しで文字列を入れているので、他の要因に依存してない。
//他のメッセージを表示して欲しい時、引数を変えて呼び出せば良い。
textSomeArgue("Fuck'n World...");
function textSomeArgue(text) {
    console.log(text);
}
