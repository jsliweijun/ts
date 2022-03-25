export {};
// 类型系统，类型注解语法，在变量后面通过 :type 声明类型。

// 原始类型

// 布尔：boolean 类型只能赋值 true /false，赋值其他类型式报错
let isGood: boolean = true;
let isOk: boolean = false;

// let isOk1: boolean = 'false';  // error
// let isOk2: boolean = ''; //  semantic error TS2322: Type 'string' is not assignable to type 'boolean'.

// 数字: 可以是小数也可以是整数
let age: number = 12;
let n1: number = 1.23;

// 字符串： string , 可以是 模版字符串，单双引号
let s: string = '123';
let s2: string = 'ssss';
let s3: string = `sssss`;

console.log(s); // 只声明不使用 是不会编译到吧到 bundle 中的， tree shaking 功能。

// 元组 : 是限制了个数和类型的 数组，每个索引对应的值类型一致，总长度也被限制了
let t1: [number] = [1];

// let t: [string, number] = ['ss', 123, 1233]; // semantic error TS2322: Type '[string, number, number]' is not assignable to type '[string, number]'.

// 数组: 一组指定类型的数据。
let arr: number[] = [1, 2, 3, 4];
let arr2: string[] = ['1', '33'];
let arr3: (number | string)[] = [1, 2, 3, 'ssss'];
let arr4: Array<number> = [1, 2, 3]; // 使用 泛型方式 声明数组

// let arr3: string[] = ['1', 33]; // 只能放同一类型  semantic error TS2322: Type 'number' is not assignable to type 'string'.
//let arr1: [] = [12, 2, 3]; //前面没加类型，当做元组类型判断。 semantic error TS2322: Type '[number, number, number]' is not assignable to type '[]'.

// 枚举: 值默认是 inde 0 开始 ， 可以给枚举项设置值 ‘123’
enum USER_TYPE {
    USER,
    ADMIN,
    MANAGER = 'sss'
}

console.log(USER_TYPE.USER); // 0
console.log(USER_TYPE.MANAGER); // sss

// 常量枚举 ， 编译到 js 中直接就是当前值，不会将枚举定义到 js 中。
const enum USER_TYPE1 {
    USER,
    ADMIN,
    MANAGER = 'sss'
}
console.log(USER_TYPE1.USER); // 0
console.log(USER_TYPE1.MANAGER); // sss

// any 类型  , 不进行类型检测
let arrAny: any = '';
arrAny = 1;

// null， undefined  ， 是其他类型的子类型， 但是 配置设置了 strictNullChecks 后不能赋值给其他类型了。
let nullVal: null = null;
// nullVal = undefined;
let un: undefined = undefined;
// let h1: string = null; // 开启 strictNullChecks
// h1 = nullVal;

// void 类型, 用于声明数组的返回值，当函数没返回值时使用 void 声明
let v: void;
v = undefined;
// v = null;
// v = {};

// never 类型， 任何类型的子类型 ， 代表不会出现的值
// 使用 never 时，一般用于声明是 抛异常，或者无限循环场景，被类型推断出
type nv = never;
function error(msg: string): nv {
    throw new Error(msg); // 知道了业务就是 抛出异常，上面使用 never 声明返回值类型为never
}

// Symbol() 类型 ， 它是一个构造函数，执行时返回一个唯一值
let s1 = Symbol('s1');
let s22 = Symbol('s2');
console.log(s1 == s22);

// BigInt()  也是一个构造函数，执行创建一个 大整型
let b1 = BigInt(1);
console.log(b1); // 1n

// object  对象类型，表示非基础类型
let o: object = {};
o = { name: 'zs' };
o = function () {};
o = [1, 2, 'dd'];
o = new Date();
console.log(o); // 2022-03-25T06:00:18.915Z
// o = '123';  基础数据类型不能赋值给他

// unknown 类型， 它是 any 的安全类型，在使用 unknown 类型的变量时，需要安全判断
let un1: unknown;
un1 = '123';
if (typeof un1 == 'string') {
    // 在使用 unknown 类型前需要做判断。
    let a = un1.split('');
    console.log(a);
}
