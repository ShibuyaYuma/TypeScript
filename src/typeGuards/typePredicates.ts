const typePredicates = () => {
    function isString(value: any): value is string {
        return typeof value === 'string';
    }
      
    let someValue: any = "Hello, world!";
      
    if (isString(someValue)) {
        // この時点で TypeScript は `someValue` の型を `string` と推論
        console.log(someValue.toUpperCase());  // 正常に動作
    } else {
        console.log(someValue);  // `someValue` の型は `any` または他の型
    }
      
}

export default typePredicates