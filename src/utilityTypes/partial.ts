//Partial 型は、TypeScriptのユーティリティ型の1つで、オブジェクト型のすべてのプロパティをオプショナルにするための型
//Partial 型の利点
    // 1.部分的な更新: オブジェクトの一部のプロパティだけを変更する場合に便利です。
    // 2.オプショナルなプロパティ: オブジェクトの一部を省略しても問題なく扱えるため、柔軟性が増します。

const partial = () => {
    interface Person {
        name: string;
        age: number;
        address: string;
    }
      
    const updatePerson = (person: Person, updatedFields: Partial<Person>): Person => {
        return { ...person, ...updatedFields };
    };
    
    const person = { name: 'Alice', age: 30, address: 'Wonderland' };
    
    // 部分的にプロパティを更新する
    const updatedPerson = updatePerson(person, { age: 31 });
    console.log(updatedPerson); // { name: 'Alice', age: 31, address: 'Wonderland' }
      
}

export default partial