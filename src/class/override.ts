const override = () => {
    //メソッドのオーバーライド
    class Parent {
        public greet(): void {
            console.log("Hello from Parent");
        }
    }
      
    class Child extends Parent {
        public greet(): void {
            console.log("Hello from Child");
        }
    }
    
    const parent = new Parent();
    parent.greet(); // Hello from Parent
    
    const child = new Child();
    child.greet(); // Hello from Child

    class Parent2 {
        public greet(): void {
            console.log("Hello from Parent");
        }
    }
      
    class Child2 extends Parent2 {
        public greet(): void {
          console.log("Hello from Child");
            super.greet(); // 親クラスの greet メソッドを呼び出し
        }
    }
    
    const child2 = new Child2();
    child2.greet(); 
    // Hello from Child
    // Hello from Parent
      
    abstract class Animal {
        abstract makeSound(): void; // 抽象メソッド
    }
      
    class Dog extends Animal {
        public makeSound(): void {
            console.log("Woof!");
        }
    }
    
    const dog = new Dog();
    dog.makeSound(); // Woof!


    //コンストラクタのオーバーロード
    class MyClass {
        // コンストラクタのオーバーロードシグネチャ
        constructor(param1: number);
        constructor(param1: string, param2: number);
        
        // 実装 (全てのケースを扱う1つのコンストラクタ)
        constructor(param1: number | string, param2?: number) {
            if (typeof param1 === "number") {
                    console.log(`Single number parameter: ${param1}`);
            } else {
                    console.log(`String and number parameters: ${param1}, ${param2}`);
            }
        }
    }
    
    // 使用例
    const instance1 = new MyClass(42);            // Single number parameter: 42
    const instance2 = new MyClass("Hello", 10);  // String and number parameters: Hello, 10
      
      
}

export default override