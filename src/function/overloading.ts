const overloading = () => {
    function add(a: number, b: number): number;
    function add(a: string, b: string): string;

    function add(a: any, b: any): any {
        return a + b;
    }

    console.log(add(1, 2)); // 3
    console.log(add('Hello', ' World')); // "Hello World"

    function greet(name: string): string;  // オーバーロードシグネチャ1
    function greet(age: number): string;   // オーバーロードシグネチャ2

    function greet(value: any): string {   // 実装シグネチャ
    if (typeof value === "string") {
        return `Hello, ${value}!`;
    } else if (typeof value === "number") {
        return `You are ${value} years old.`;
    }
        return "Invalid input";
    }

    console.log(greet("Alice"));  // Hello, Alice!
    console.log(greet(30));       // You are 30 years old.

}

export default overloading