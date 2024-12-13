export default function objectSample() {
    const a: object = {
        name: "testName",
        age: 26
    }
    //a.name

    //オブジェクトリテラル記法で型定義
    let country: {
        language: string
        name: string
    } = {
        language: "Japanese",
        name: "Japan"
    }

    console.log('Object object sample 2:', country);

    country = {
        language: "EN",
        name: "UK"
    }
    console.log('Object object sample 2:', country);

    //オプショナルとreadonly
    let me: {
        age: number
        lastName: string
        readonly firstName: string
        gender?: string
    } = {
        age: 26,
        lastName: "Shibuya",
        firstName: "Yuma"
    }

    me.gender = "male"
    me.lastName = "Yamada"
    //me.firstName = "XXX" 上書き不可

    //インデックスシグネチャ
    const capitals: {
        [countryName: string]: string
    } = {
        Japan: "Tokyo",
        Korea: "Seoul"
    }

    capitals.China = "Beijing"
    capitals.Canada = "Ottawa"

    console.log("Object object sample 4:", capitals);
}