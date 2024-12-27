const LogClass = (target: Function) => {
    console.log(`Class ${target.name} is being created`);
}

@LogClass
    class Person {
    constructor(public name: string) {}
}

const person = new Person('Alice'); // "Class Person is being created"
  
const LogMethod = (target: any, key: string, descriptor: PropertyDescriptor): void => {
    const originalMethod = descriptor.value;

    descriptor.value = (...args: any[]): any => {
        console.log(`Method ${key} is called with args: ${args}`);
        return originalMethod.apply(target, args);
    };
};

class Person2 {
    constructor(public name: string) {}

    @LogMethod
    greet(message: string): string {
        return `${this.name} says: ${message}`;
    }
}

const person2 = new Person2('Alice');
person2.greet('Hello'); // "Method greet is called with args: ['Hello']"

const LogProperty = (target: any, key: string): void => {
    let value = target[key];
    
    const getter = (): any => value;
    const setter = (newValue: any): void => {
        console.log(`${key} was set to ${newValue}`);
        value = newValue;
    };
    
    Object.defineProperty(target, key, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true,
    });
};
  
class Person3 {
    @LogProperty
    name: string;

    constructor(name: string) {
        this.name = name;  // コンストラクターでプロパティを初期化
    }
}

const person3 = new Person3('Alice');
person3.name = 'Alice'; // "name was set to Alice"
console.log(person3.name); // "Alice"

const LogParameter = (target: any, key: string, index: number): void => {
    const existingParams = target[`${key}_parameters`] || [];
    existingParams.push(index);
    target[`${key}_parameters`] = existingParams;
};

class Person4 {
    greet4(@LogParameter message: string): void {
        console.log(message);
}
}

const person4 = new Person4();
person4.greet4('Hello'); // パラメータデコレーターは何もしませんが、メソッドのパラメータにインデックスを記録します。
  