// import World from "./world";

// const root = document.getElementById("root");
// const world = new World("Hello, World!");
// world.sayHello(root);

// // 基本の型定義
// import { unknownSample, anySample, notExistSample, privateSample } from "./basic";

// unknownSample();
// anySample();
// notExistSample();
// privateSample();

// // 関数の型定義
// import { logMessage, logMessage2, logMessage3, logMessage4 } from "./function/basic";
// import { isUserSignedIn, isUserSignedIn2, sumProductsPrice } from "./function/parameters";

// logMessage("Hello, TypeScript");
// logMessage2("Hello, TypeScript");
// logMessage3("Hello, TypeScript");
// logMessage4("Hello, TypeScript");
// isUserSignedIn("ABC", "testName");
// isUserSignedIn("DEF");
// isUserSignedIn2("ABC");
// const sum = sumProductsPrice(100,200,300,400,500);
// console.log("Function parameters sample 5:", sum);

// // オブジェクトの型定義
// import objectSample from "./object/object";
// import typeAliasSample from "./object/alias"

// objectSample();
// typeAliasSample();

// // 配列とタプル
// import arraySample from "./array/array"
// import tupleSmaple from "./array/tuple"

// arraySample();
// tupleSmaple();

// // ジェネリック型とポリモーフィズム
// import genericsBasicSample from "./generics/basic";
// import genericsAdvancedSample from "./generics/advanced";

// genericsBasicSample();
// genericsAdvancedSample();

// // 非同期処理
// import callbackSample from './asynchronous/callback'
// import promiseSample from './asynchronous/Promise'

// callbackSample()
// promiseSample()

//型アサーション
import assertion from "./assertions/assertions";

assertion();

//クラス
import classes from "./class/classes"
classes();

//enum(列挙型)
import enums from "./enum/enums"
enums()

//instanceof演算子
import instanceOf from "./typeGuards/instanceof";
instanceOf()

//typeof演算子
import typeOf from "./typeGuards/typeof";
typeOf()

//Type Predicates(型述語)
import typePredicates from "./typeGuards/typePredicates";
typePredicates()

//関数のオーバーロード
import overloading from "./function/overloading"
overloading()

//ハイブリッド型
import hybrid from "./object/hybrid";
hybrid()

import partial from "./utilityTypes/partial";
partial()

import pick from "./utilityTypes/pick";
pick()