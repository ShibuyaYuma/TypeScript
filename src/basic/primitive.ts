export default function privateSample() {
    let name: string = 'test';
    console.log("primitive sample 1:", typeof name, name)

    let age: number = 26;
    console.log("primitive sample 2:", typeof age, age)

    let isTrue: boolean = true;
    console.log("primitive sample 3:", typeof isTrue, isTrue)

    const isOver20: boolean = age >= 20;
    console.log("primitive sample 4:", typeof isOver20, isOver20)
}