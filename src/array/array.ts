export default function arraySample() {
    //シンプルな配列の型定義
    const color: string[] = ["red", "blue"]
    color.push("yellow")
    //color.push(123)   //string型しか入らない
    console.log("Array array sample 1: ", color);

    const even: Array<number> = [2,4,6]
    even.push(8)
    //even.push("10")   //number型しか入らない
    console.log("Array array sample 2: ", even)

    //合併型(非推奨)
    const ids: (string | number)[] = ["ABC",123]
    ids.push("DEF")
    ids.push(456)
    //ids.push(true)    //string型かnumber型しか入らない
    console.log("Array array sample 3", ids)

    //配列の型推論
    const generateSomeArray = ()/*: (string | number)[] 厳密に定義もできる*/ => {
        const _someArray = []   //any型
        _someArray.push(123)    //number型
        _someArray.push("ABC")  //(number | string)型
        //_someArray.push(true) //ここでならboolean型もpushできる
        return _someArray
    }

    const someArray = generateSomeArray()
    someArray.push(456)
    //someArray.push(true)  //string型かnumber型しか入らない
    console.log("Array array sample 4: ", someArray)

    //イミュータブル(書き換え不可)な配列
    const commands: readonly string[] = ["git add", "git commit", "git push"]
    //commands.push("git fetch")    readonlyなのでpushできない
    //commands[2] = "git pull"      readonlyなので書き換えられない
    console.log("Array array sample 5", commands)
}