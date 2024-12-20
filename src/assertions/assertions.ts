const assertion = () => {
    //as
    let someValue: any = "Hello, TypeScript"
    let strLength: number = (someValue as string).length

    console.log(strLength)

    //as const
    const colors = ['red', 'green', 'blue'] as const;   //as const 変更不可能な読み取り専用にする

    // colors.push("black") //エラー: プロパティ 'push' は型 'readonly ["red", "green", "blue"]' に存在しません
    console.log(colors)

    //非nullアサーション    name が null でないと確信する
    let name: string | null = "Alice"
    let nameLength: number = name!.length;
    console.log(nameLength)

    //satisfies演算子
}

export default assertion;