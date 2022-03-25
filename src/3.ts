export {};

// 类型推导
// 当变量定义时没声明类型，会自动推导为 any 类型
let zname;
zname = 'zs'; // 还是 any 类型
zname = 10;

let zname2 = 'zs'; // 推导为 string
// zname2 = 10; //  不能将类型“number”分配给类型“string”。ts(2322)

// 包装对象， 使用基本类型时，调用它们的方法，它们会变为 包装对象，只有对象类型才有方法。
// number 是基本类型， Number() 是它的包装类
let n1: number = 1;
let n2: number = Number(1);
let n3: object = new Number(1); // 不能将类型“Number”分配给类型“number”。  “number”是基元，但“Number”是包装器对象。如可能首选使用“number”。ts(2322)
console.log(typeof n3); // object

// 联合类型
let name1: string | number;
// name1.toString()   // 只能访问共同方法。
name1 = 1;
name1 = 'string';

// ! 非空判断
console.log(name1!.length);

// as  类型断言
let a: unknown;
console.log(a as undefined);

// 字面量类型
type D = 'up' | 'down';
// let d: D = 'left';  left 值不在 D 类型范围中
let d: D = 'up';
