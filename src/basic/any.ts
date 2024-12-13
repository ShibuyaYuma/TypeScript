export default function anySample() {
    let name: any = "test";
    console.log("any sample 1:", typeof name, name);

    name = 26;
    console.log("any sample 2:", typeof name, name);
}