// 兼容性 ： 当变量赋值时，会出现兼容性的判断，a 的类型兼容 b 的类型，才能将 b 赋值给 a； 语句 a:xx = b; 才会不报错。
//  TS中的兼容性，主要看结构是否兼容。（核心是考虑安全性）

// 基本数据类型
let t: number | string = 10;
let n: number = 9;
let b: boolean = false;
t = n; // t 的类型兼容 n的类型
// t = b; // 不能将类型“boolean”分配给类型“string | number”。ts(2322)

// 结构兼容
type T = {
    toString(): string;
};

let nn: T;
let str: string = 'ss';
nn = str; // 由于 str 类型有 toString 方法，满足 T 类型的要求，所以可以赋值给他。

// 接口兼容
interface IAnimal {
    name: string;
    age: number;
}

interface IPerson {
    name: string;
    age: number;
    address: string;
}

let animal: IAnimal;
let person: IPerson = { name: 'zs', age: 18, address: 'gd' };
animal = person; // animal 的类型只需要两个变量， person 数据满足要求。

//函数数的兼容性： 主要看 参数列表 返回值要求。

// 协变和逆变都是术语，
// 协变指能够使用比原始指定的派生类型的派生程度更大（更具体的）的类型， 子类？
// 逆变指能够使用比原始指定的派生类型的派生程度更小（不太具体的）的类型 。  父类？
// 保持原继承关系的为协变，继承关系反转的为逆变。
// 函数： （逆变-传父类）:协变 子类

export {};
