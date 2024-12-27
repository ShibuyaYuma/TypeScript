// 指定した型から特定のプロパティだけを取り出して新しい型を作成する
// 利用シーン
    // 部分的な型抽出: 大きな型から必要なプロパティだけを抽出して、新しい型を作成したいときに便利です。
    // 関数の引数での利用: 型が大きいオブジェクトから、特定のプロパティだけを受け取りたい場合に利用します。

const pick = () => {
    interface Person {
        name: string;
        age: number;
        address: string;
    }
      
    type PersonName = Pick<Person, 'name'>;
      
    const person: PersonName = {
        name: 'Alice'
    };
    
    console.log(person); // { name: 'Alice' }
}

export default pick