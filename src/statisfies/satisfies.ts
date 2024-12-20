const satisfies = () => {
    interface Person {
        name: string;
        age: number;
    }
    
    const person = {
        name: "Alice",
        age: 30,
    } satisfies Person;  // OK, personはPerson型を満たしている
    
    const anotherPerson = {
        name: "Bob",
    } //satisfies Person;  // エラー, ageが足りない
      
}

export default satisfies