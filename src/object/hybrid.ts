const hybrid = () => {
    type Hybrid = {
        (x: number): number;  // 関数としての型
        property: string;      // プロパティとしての型
    };
    
    const hybrid: Hybrid = ((x: number) => x * 2) as Hybrid;
    hybrid.property = "Hello";
    
    console.log(hybrid(5));       // 10（関数として呼び出し）
    console.log(hybrid.property); // "Hello"（プロパティにアクセス）
      
}

export default hybrid