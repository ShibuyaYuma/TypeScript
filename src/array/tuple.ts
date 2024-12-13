export default function tupleSmaple () {
    //厳格な配列 = タプル
    //一般的なタプルの型定義
    let response: [number, string] = [200, "OK"]
    //response = [400, "Bad Request", "Good"]   //3つめの要素を定義できない
    //response = ["400", "Bad Request"]         //1つめの要素はnumber型じゃないとダメ
    console.log("Array tuple sample 1: ", response)

    //可変長引数を使ったタプル
    const girlfriend: [string, ...String[]] = ["Kana", "Miku", "Keiko"]
    girlfriend.push("Misa")
    console.log("Array tuple sample 2: ", girlfriend)
}