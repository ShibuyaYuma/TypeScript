const typeOf = () => {
    console.log(typeof "Hello");     // "string"
    console.log(typeof 42);          // "number"
    console.log(typeof true);        // "boolean"
    console.log(typeof undefined);   // "undefined"
    console.log(typeof { name: "Alice" }); // "object"
    console.log(typeof null);        // "object" (これは JavaScript のバグです)
    console.log(typeof function() {}); // "function"    

    let value: string | number = "Hello";

    if (typeof value === "string") {
        console.log("value is a string");
    } else if (typeof value === "number") {
        console.log("value is a number");
    }

}

export default typeOf