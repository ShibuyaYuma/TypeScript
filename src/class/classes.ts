const classes = () => {
    class Person {
        //プロパティ
        public name: string;    //外部からアクセス可能
        private age: number;    //外部からアクセス不可
        protected city: string; //サブクラスからはアクセス可能

        //コンストラクタ
        constructor(name: string, age: number, city: string){
            this.name = name;
            this.age = age;
            this.city = city;
        }

        //メソッド
        greet() {
            console.log(`こんにちは! 私の名前は${this.name}、年齢は${this.age}、出身は${this.city}です。`)
        }
    }

    //インスタンス化
    const person1 = new Person("Bob", 32, "Tokyo")
    person1.greet()
    const person2 = new Person("Alice", 24, "USA")
    person2.greet()

    //継承
    class Employee extends Person {
        jobTitle: string;

        constructor(name: string, age: number, city: string, jobTitle: string){
            super(name, age, city); //親クラスのコンストラクタを呼び出す
            this.jobTitle = jobTitle;
        }

        describeJob() {
            console.log(`${this.name} の仕事は ${this.jobTitle}です。`);
        }
    }

    const emp = new Employee("Takashi", 42, "Kobe", "Engibeer")
    emp.describeJob()

    //インターフェース(クラスがプロパティやメソッドを持つことを強制する)
    interface Greetable {
        name: string;  // nameプロパティが必須
        age: number;   // ageプロパティが必須
        greet(): void; // greet()メソッドも必須
    }

    class Person2 implements Greetable {
        //プロパティ
        name: string;   //インターフェースで指定しているためないとエラー: プロパティ 'name' は型 'Person2' にありませんが、型 'Greetable' では必須です。
        age: number;    //インターフェースで指定しているためないとエラー

        //コンストラクタ
        constructor(name: string, age: number){
            this.name = name;
            this.age = age;
        }

        //メソッド
        greet() {   //インターフェースで指定しているためないとエラー: プロパティ 'greet' は型 'Person2' にありませんが、型 'Greetable' では必須です。
            console.log(`こんにちは! 私の名前は${this.name}、年齢は${this.age}です。`)
        }
    }
}

export default classes