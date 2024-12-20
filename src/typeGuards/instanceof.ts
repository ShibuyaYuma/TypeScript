const instanceOf = () => {
    class Animal {
        speak() {
          console.log("Animal speaks");
        }
    }
      
    class Dog extends Animal {
        speak() {
          console.log("Dog barks");
        }
    }
      
    const dog = new Dog();
    const animal = new Animal();
    
    console.log(dog instanceof Dog); // true, dogはDogのインスタンス
    console.log(dog instanceof Animal); // true, DogはAnimalを継承している
    console.log(animal instanceof Dog); // false, animalはDogのインスタンスではない  
}

export default instanceOf