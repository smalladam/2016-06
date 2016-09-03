'use strict';
// if(true){
//   let a = 1;
//   let b = 2; //Identifier 'a' has already been declared
// }
// for (let i = 0; i < 3; i++) {
//   console.log("out", i);
//   for (let i = 0; i < 2; i++) {
//     console.log("in", i);
//   }
// }

const PI = 3.1415;
console.log(PI); // 3.1415
let  PI = 3;
console.log(PI);

// 嵌套循环不会相互影响
// for (let i = 0; i >-3; i++) {
//   console.log("out", i);
//   for (let i = 0; i < 2; i++) {
//     console.log("in", i);
//   }
// }
//结果 out 0 in 0 in 1 out 1 in 0 in 1 out 2 in 0 in 1
// 解构
// var [name,age] = ['zfpx',8];
// console.log(name,age); // zfpx 8

// var [x,y]=getVal(),//函数返回值的解构
//     [name,,age]=['zf','male','secrect'];//数组解构
//     function getVal() {
//     return [ 1, 2 ];
// }
//
// console.log('x:'+x+', y:'+y);//输出：x:1, y:2
// console.log('name:'+name+', age:'+age);//输出： name:zf, age:secrect

// 数组的解构赋值
// let [foo, [[bar], baz]] = [1, [[2], 3]];
// console.log(foo); // 1
// console.log(bar); // 2
// console.log(baz); // 3
// 对象的解构赋值
// var { foo, bar } = { foo: "aaa", bar: "bbb" };
// console.log(foo);   // "aaa"
// console.log(bar );  // "bbb"
// 字符串的解构赋值
// const [a, b, c, d, e] = 'hello';
// console.log(a + b + c + e); // 'hello'
// 箭头函数
//以前
// let [a,b]=[1,2];
// function add(a,b) {
//   console.log(a+b);
// }
// add(a,b);
// //现在
// let add = (a,b) => console.log(a+b);
// var numbers = [1, 2, 3, 4];
// numbers.forEach(function(item, index, array) {
//   console.log(item + "\t" + index + "\t" + array);
// });
// var array = [1, 2, 3];
// //传统写法
// array.forEach(function(v, i, a) {
//     console.log(v);
// });
//ES6
// array.forEach(v = > console.log(v));
// 输入参数如果多于一个要用()包起来，函数体如果有多条语句需要用{}包起来
//产生一个随机数
// var num = Math.random();
// //将这个数字输出到console
// console.log(`your num is ${num}`);
//
// let name = 'guoyongfeng';
// let age = 18;
//
// console.log(`${name} was ${age}`)
// function sayHello(name){
//     //传统的指定默认参数的方式
//     var name=name||'dude';
//     console.log('Hello '+name);
// }
// //运用ES6的默认参数
// function sayHello2(name='dude'){
//     console.log(`Hello ${name}`);
// }
// sayHello();//输出：Hello dude
// sayHello('zf');//输出：Hello zf
// sayHello2();//输出：Hello dude
// sayHello2('zf');//输出：Hello zf

// rest
// function restFunc(a, ...rest) {
//   console.log(a)
//   console.log(rest)
// }
// restFunc(1);
// restFunc(1, 2, 3, 4);
//将所有参数相加的函数
// function add(...x){
//     return x.reduce((m,n)=>m+n);
// }
// //传递任意个数的参数
// console.log(add(1,2,3));//输出：6
// console.log(add(1,2,3,4,5));//输出：15
// 扩展操作符则是另一种形式的语法糖，它允许传递数组或者类数组直接做为函数的参数而不用通过apply。

// var people=['zf','John','Sherlock'];
//
// function sayHello(people1,people2,people3){
//     console.log(`Hello ${people1},${people2},${people3}`);
// }
// //但是我们将一个数组以拓展参数的形式传递，它能很好地映射到每个单独的参数
// sayHello(...people);//输出：Hello zf,John,Sherlock
//
// //而在以前，如果需要传递数组当参数，我们需要使用函数的apply方法
// sayHello.apply(null,people);//输出：Hello zf,John,Sherlock
// function Point(x,y){
//   this.x = x;
//   this.y = y;
// }
// Point.prototype.toString = function () {
//   return '(' + this.x + ', ' + this.y + ')';
// }
// var point = new Point(6,3);
// console.log(point.toString());//(6,3)
//类的定义
// class Animal {
//     //ES6中新型构造器
//     constructor(name) {
//         this.name = name;
//     }
//     //实例方法
//     sayName() {
//         console.log('My name is '+this.name);
//     }
// }
// //类的继承
// class Programmer extends Animal {
//   constructor(name) {
//       //直接调用父类构造器进行初始化
//     super(name);
//   }
//   program() {
//     console.log("I'm coding...");
//   }
// }
//
// //测试我们的类
// var animal=new Animal('dummy'),
// zf=new Programmer('zf');
//
// animal.sayName();//输出 ‘My name is dummy’
// zf.sayName();//输出 ‘My name is zf’
// zf.program();//输出 ‘I'm coding...’
// // 定义“类”的方法的时候，前面不需要加上function这个关键字，直接把函数定义放进去了就可以了。另外，方法之间不需要逗号分隔，
// // 加了会报错。

// point.js
// export default class Point {
//    constructor (x, y) {
//      public x = x;
//      public y = y;
//    }
//  }
//
// // myapp.js
// //这里可以看出，尽管声明了引用的模块，还是可以通过指定需要的部分进行导入
// import Point from "point";
//
// var origin = new Point(0, 0);
// console.log(origin);
// export
// // demo1：简单使用
// export var firstName = 'Michael';
// export var lastName = 'Jackson';
// export var year = 1958;
//
// // 等价于
// var firstName = 'Michael';
// var lastName = 'Jackson';
// var year = 1958;
//
// export {firstName, lastName, year};
// // demo2：还可以这样
// function v1() { ... }
// function v2() { ... }
//
// export {
//   v1 as streamV1,
//   v2 as streamV2,
//   v2 as streamLatestVersion
// };
// // demo3：需要注意的是export命令规定的是对外的接口，必须与模块内部的变量建立一一对应关系。
// // 报错
// function f() {}
// export f;
//
// // 正确
// export function f() {};


// var str = "今天8月31号(实时温度：25℃)"
// function search(str) {
//   var reg=/\d+/g;
//   return reg.exec(str)[0]
// }
// console.log(search(str));
