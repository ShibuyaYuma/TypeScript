export default function notExistSample() {
    let name = null;
    console.log("notExist sample 1:", typeof name, name);

    if(!name){
        console.log("notExist sample 2:", "null null");
    } else{
        console.log("notExist sample 3:", "not null");
    }

    let age = undefined;
    console.log("notExist sample 4:", typeof age, age);

    if(!age){
        console.log("notExist sample 5:", "undefined");
    } else{
        console.log("notExist sample 6:", "def");
    }
}