// 声明文件
// 使用第三方文件，安装 @type/xxx 声明文件的包

import $ from 'jquery';

import test from './test.vue';

type AA = { install(): void };
type BB = { a: string; b: number };

let component: AA & BB;

// 接口的 只读属性
// interface Point {
//     readonly x: number;
//     readonly y: number;
// }

// let p: Point = { x: 1, y: 3 };
// // p.x = 2; // error

// let ro: ReadonlyArray<number> = [1, 2, 3, 4];
// ro[1] = 111;

interface SquareConfig {
    color?: string;
    width?: number;
}

// function createSquare(config: SquareConfig): { color: string; area: number } {
//     // ...
// }

// 类型“{ colour: string; width: number; }”的参数不能赋给类型“SquareConfig”的参数。
// 对象文字只能指定已知的属性，但“colour”中不存在类型“SquareConfig”。是否要写入 color?ts(2345)
//let mySquare = createSquare({ colour: 'red', width: 100 });

// interface StringArray {
//     [index: string]: string; // 索引都是数字。返回值是字符串。定义其他具体属性时，返回值也需要是字符串。
//     length: string; // 可以
//     name: number; // 报错，与上面的 产生冲突了。
// }

interface StringArray {
    readonly [index: number]: string; // 只读索引
}
let sa: StringArray = ['aa', 'bb'];
// sa[1] = 'ss'; //

// 定义 需要的是这种结构的 类
interface ClockConstructor {
    new (hour: number, minute: number);
}

class Clock {
    name: string;
    constructor(h: number, m: number) {}
    static age: number; //
}

class Clock2 {
    name: string;
    constructor(h: number, m: Number) {}
    static age: number;
}

let c: ClockConstructor = Clock;

let c1: Clock = new Clock(1, 2);
let c2: typeof Clock = Clock2; // 需要有相同构造函数的类,静态成员，普通成员也需要有

export {};
