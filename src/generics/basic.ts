export default function genericsBasicSample() {
    //ジェネリック型を使わない場合
    const stringReduce = (array: string[], initiaValue: string): string => {
        let result = initiaValue
        for(let i = 0; i < array.length; i++){
            result += array[i]
        }
        return result
    }
    console.log("Generics basic sample 1: ", stringReduce(["May ", "the ", "force ", "be ","with ", "you"], "hello "))

    const numberReduce = (array: number[], initiaValue: number): number => {
        let result = initiaValue
        for(let i = 0; i < array.length; i++){
            result += array[i]
        }
        return result
    }
    console.log("Generics basic sample 2: ", numberReduce([100,200,300], 1000)) //1600

    type Reduce = {
        (array: string[], initiaValue: string): string
        (array: number[], initiaValue: number): number
    }

    type GenericReduce<T> = {
        (array: T[], initiaValue: T): T
    }

    const generateStringReduce: GenericReduce<string> = (array, initiaValue) => {
        let result = initiaValue
        for(let i = 0; i < array.length; i++){
            result += array[i]
        }
        return result
    }
    console.log("Generics basic sample 3: ", generateStringReduce(["Make ", "TypeScript ", "Great ", "Agein "], "Hello World. "))

    const generateNumberReduce: GenericReduce<number> = (array, initiaValue) => {
        let result = initiaValue
        for(let i = 0; i < array.length; i++){
            result += array[i]
        }
        return result
    }
    console.log("Generics basic sample 4: ", generateNumberReduce([-100,-200,-300], 0))

    //いろいろなジェネリック型の定義方法
    //完全な呼び出しシグネチャ(ここのシグネチャにジェネリック型を割り当てる)
    type GenericReduce2 = {
        <T>(array: T[], initiaValue: T): T
        <U>(array: U[], initiaValue: U): U
    }

    //呼び出しシグネチャの省略方法
    type GenericReduce3<T> = (array: T[], initiaValue: T) => T
    type GenericReduce4 = <T>(array: T[], initiaValue: T) => T
}