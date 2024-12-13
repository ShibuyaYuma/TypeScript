export default function genericsAdvancedSample() {
    //map関数のシグネチャ
    type Map<T, U> = (array: T[], fn: (item: T) => U) => U[]

    const mapStringsToNumbers: Map<string, number> = (array, fn) => {   //string型をnumber型に変更
        const result = []
        for(let i=0; i<array.length; i++){
            const item = array[i]
            result[i] = fn(item)
        }
        return result
    }

    const numbers = mapStringsToNumbers(["123", "456", "789"], (item) => Number(item))
    console.log("Generics advanced sample 1: ", numbers)

    const mapNumbersToStrings: Map<number, string> = (array, fn) => {   //number型をstring型に変更
        const result = []
        for(let i=0; i<array.length; i++){
            const item = array[i]
            result[i] = fn(item)
        }
        return result
    }

    const strings = mapNumbersToStrings(numbers, (item) => String(item))
    console.log("Generics advanced sample 1: ", strings)
}