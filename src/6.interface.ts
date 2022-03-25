export {};
// 接口  interface
// 对行为的抽象，
// 对结构的约束。对象的形状。

// 对象，变量的结构, 对象接口
interface IFullName {
    firstName: string;
    lastName: string;
}

let fullName: IFullName = {
    firstName: '123',
    lastName: '234'
};

// 函数接口 , 这个函数 入参 是 string ，返回参数是 string
// 接口也可以定义函数对象中的属性
interface IFn {
    (s: string): string;
    count: 0; // 声明函数的属性变量
}

const s: IFn = (s: string): string => {
    return s.substring(0);
};
s.count = 0;

// 对象接口，任意属性
interface Person {
    name: string;
    [aaa: string]: any; // 其他属性没要求 [key: string]: any; ，使用 中括号语法 []:xxx
}

let p: Person = { name: 'zs', age: 12 };

// 可索引接口
interface IArr {
    [key: number]: any;
}

let a: IArr = [1, 2, 3, 3, 4];
let b: IArr = { 1: 111, 2: 'sss' };

//用于 类 进行 实现的 接口，类接口
interface Speakable {
    name: string;
    speak(): void;
}

class Speak implements Speakable {
    name: string;
    speak(): void {
        throw new Error('Method not implemented.');
    }
}

// 接口 继承 接口

// 构造函数类型  new()

interface Clazz<T> {
    new (): T;
}

let speak: Clazz<Speak> = Speak;
