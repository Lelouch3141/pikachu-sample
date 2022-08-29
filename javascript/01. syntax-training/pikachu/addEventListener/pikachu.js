const types = ["でんき", "みず", "ほのお", "じめん"]

function pikachu(type) {
    console.log("イケっ！♂ピカチュウ！10万ボルトだ！")
    console.log(type)
    switch(type) {
        case "でんき" :
            return "いまひとつだ。"
            break
        case "みず" :
            return "ばつぐんだ！！！"
            break
        case "じめん" :
            return "ないようだ..."
            break
        default :
            return "ふつうでごわすね。"
            break
    }
}

for(i = 0; i < types.length; i++) {
    type = types[i]
    console.log(`タイプ : ${ type }`)
    console.log(`こうかは${ pikachu(type) }だ！！`)
}