const abstract = () => {
    abstract class Animal {
        // 共通プロパティ
        constructor(public name: string) {}
      
        // 共通メソッド
        public move(): void {
            console.log(`${this.name} is moving.`);
        }
      
        // 抽象メソッド（サブクラスで実装を強制）
        abstract makeSound(): void;
    }
      
    class Dog extends Animal {
        constructor(name: string) {
            super(name);
        }
      
        // 抽象メソッドの実装を提供
        public makeSound(): void {
            console.log(`${this.name} says: Woof!`);
        }
    }
      
    class Cat extends Animal {
        constructor(name: string) {
            super(name);
        }
      
        public makeSound(): void {
            console.log(`${this.name} says: Meow!`);
        }
    }
    
    // 抽象クラスのインスタンス化はできない
    // const animal = new Animal("Generic Animal"); // エラー: 抽象クラスは直接インスタンス化できません
    
    const dog = new Dog("Rex");
    dog.move();         // Rex is moving.
    dog.makeSound();    // Rex says: Woof!
    
    const cat = new Cat("Whiskers");
    cat.move();         // Whiskers is moving.
    cat.makeSound();    // Whiskers says: Meow!
      
}

export default abstract