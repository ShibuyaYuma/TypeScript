// type Suji = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 
// type Dan = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" 
// type Player = "first" | "second"

// //駒の位置を表すクラス
// class Position {
//     constructor(
//         private suji: Suji,
//         private dan: Dan
//     ){}

//     //パラメータに渡された位置と現在の位置を比較するメソッド
//     distanceFrom(position: Position, player: Player){
//         if(player == "first"){
//             return {
//                 suji: Math.abs(position.suji - this.suji),
//                 dan: -(Math.abs(Number(position.dan) - Number(this.dan)))   //段(縦の位置)は正負反転
//             }
//         }
//     }
// }

// //駒を表すクラス
// abstract class Piece {  //abstractがつくと抽象クラスになる
//     //Pieceクラスとサブクラスでアクセスできる
//     position: Position

//     constructor(
//         private readonly player: Player,
//         suji: Suji,
//         dan: Dan
//     ){
//         this.position = new Position(suji, dan)
//     }

//     //メソッドの定義
//     //駒の移動用のメソッド
//     moveTo(position: Position){
//         this.position = position
//     }

//     //移動できるかどうかを判定するメソッド
//     abstract canMoveTo(position: Position, player: Player): boolean
// }

// //new Piece ("first", 1, "1") 抽象クラスはインスタンスを作成できない

// class Osho extends Piece {
//     //王将のcanMoveToメソッドを具体的に定義する
//     canMoveTo(position: Position, player: Player): boolean {
//         const distance = this.position.distanceFrom(position, player)
//         return (distance.suji < 2 && distance.dan < 2)
//     }
// }
// class Fu extends Piece {
//     //歩のcanMoveToメソッドを具体的に定義する
//     canMoveTo(position: Position, player: Player): boolean {
//         const distance = this.position.distanceFrom(position, player)
//         //移動先との距離が前方1マスであれば
//         return (distance.suji === 0 && distance.dan === 1)
//     }
// }
// class NariKin extends Piece {
//     //成金のcanMoveToメソッドを具体的に定義する
//     canMoveTo(position: Position, player: Player): boolean {
//         const distance = this.position.distanceFrom(position, player)
//         return (
//             //移動先1マス以内
//             distance.suji < 1 && distance.dan === -1
//             //左後方と右後方には進めない
//             && (distance.suji !== 0 && distance.dan === -1)

//         )
//     }
// }

// class Game {
//     private pieces = Game.makePieces()
//     private static makePieces(){
//         return [
//             new Osho("first", 5, "1"),
//             new Osho("second", 5, "9")
//         ]
//     }
// }
