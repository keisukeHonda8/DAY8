"use strict";
// 1行目に記載している 'use strict' は削除しないでください

// TEST-code
// test(sumArray([1, 2, 3, 4]),10);

// JSON-block
/**
 * @param {Array<number>} arrNums 数値型の要素を持つ配列
 * @returns {number} sumResalt 与えられた配列のすべての数字の合計
 * 関数sumArrayは数値型の要素を持つ配列を1個取り、
 *                          与えられた配列のすべての数字の合計を数値型データで返す
 */

// テスト用関数
function test(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Yay! Test PASSED.");
    console.log("  actual:", actual);
    console.log("expected:", expected);
  } else {
    console.error("Test FAILED. Keep trying");
    console.log("  actual:", actual);
    console.log("expected:", expected);
  }
}

/* from here */

//1.関数 sumArray を宣言してください。
/**
 * @param {Array<number>} arrayOfNumbers 数値型の要素を持つ配列
 * @returns {number} result 与えられた配列のすべての数字の合計
 */
// function sumArray(arrayOfNumbers) {
//   // ここにコードを書きましょう。
//   let result = 0;

//   for (const number of arrayOfNumbers) {
//     result = result + number;
//   }
//   return result;
// }

// test(sumArray([1, 2, 3, 4]), 10);
// test(sumArray([5, 6, 7, 8]), 26);
// test(sumArray([-5, 6, 7, 8.3]), 16.3);
// test(sumArray(["5", 6, 7, 8]), 26);

//2.関数 productArray を宣言してください。
/**
 * @param {Array<number>} arrayOfNumbers 数値型の要素を持つ配列
 * @returns {number} result 与えられた配列の全ての数字をかけ合わせた積 (product)
 */
// function productArray(arrayOfNumbers) {
//   // ここにコードを書きましょう。
//   let result = 1;

//   for (const number of arrayOfNumbers) {
//     result = result * number;
//   }
//   return Math.floor(result);
// }

// test(productArray([1, 2, 3, 4]), 24);
// test(productArray([1, 2, 3, -4]), -24);
// test(productArray([0.1, 2, 3, -4]), -2.4);

//3.関数 hasFun を宣言してください。
/**
 * @param {Array<any>} variousArray 配列
 * @returns {boolean} result 与えられた配列に "fun" という文字列が要素として入っているかどうかを表す
 *                           ブーリアン
 */
// function hasFun(variousArray) {
//   // ここにコードを書きましょう。
//   let result;
//   result = variousArray.includes("fun");
//   return result;
// }

// test(hasFun(["dog", 2, false, "fun", "hello"]), true);
// test(hasFun(["gift", 2, false, "run", "hello"]), false);
// test(hasFun(["gift", 2, false, "Fun", "hello"]), false);

//4.関数 containsOnlyBooleans を宣言してください。
/**
 * @param {Array<any>} ???
 * @returns {boolean} 与えられた配列の要素がブーリアンだけかどうかを表すブーリアン
 */
function containsOnlyBooleans() {
  // ここにコードを書きましょう。
}

actual = containsOnlyBooleans([true, false, true, false, false]);
expected = true;

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

actual = containsOnlyBooleans([true, true, true, "not a boolean"]);
expected = false;

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

// さらにテストを書きましょう。
