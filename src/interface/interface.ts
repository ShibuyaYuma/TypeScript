interface Bread {
    calories: number
}

interface Bread {
    type: string
}

const francePan: Bread = {
    //caloriesとtypeの両方が必要
    calories: 300,
    type: "hard"
}

//型エイリアスで表現
type MaboDofu = {
    calories: number,
    spaicyLevel: number
}

type Rice = {
    calories: number,
    gram: number
}

type MaboDon = MaboDofu & Rice //交差型(union)

const maboDon: MaboDon = {
    calories: 500,
    spaicyLevel: 10,
    gram: 350
} 

//インターフェイスの継承
interface Book {
    page: number,
    title: string
}

interface Magazine extends Book {
    cycle: "daily" | "weekly" | "monthly" | "yearly"
}

const jamp: Magazine = {
    page: 300,
    title: "週刊少年ジャンプ",
    cycle: "weekly"
}

type BookType = {
    page: number,
    title: string
}

interface Handbook extends BookType {
    theme: string
}

const cotrip: Handbook = {
    page: 120,
    title: "ことりっぷ",
    theme: "旅行"
}

//implementsを使ってclassに型を定義する
class Comic implements Book {
    page: number
    title: string

    constructor(page: number, title: string, private publicYear: string){
        this.page = page
        this.title = title
    }

    getPublishYear() {
        return this.title + "が発売されたのは" + this.getPublishYear + "年です。"
    }
}

const poplarComic = new Comic(200, "鬼滅の刃", "2016")
console.log(poplarComic.getPublishYear())