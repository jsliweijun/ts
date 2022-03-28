// 类型推断

// ts 在某些情况上会进行类型推断，给变量确定具体类型。
// 赋值，函数返回值，函数定义 ，结构取值时。

// 类型反推： 使用 typeof 关键字，获取 变量中的类型。
let person = {
    name: 'zs',
    age: 18
};

type P = typeof person;

// 索引访问操作符， 进行获取 类型中的局部类型。
interface IPerson {
    name: string;
    age: number;
    job: {
        address: string;
    };
}

type jdo = IPerson['job']; // 局部类型

// keyof  返回类型中的所有 key
interface IPerson {
    name: string;
    age: number;
    job: {
        address: string;
    };
}

//  keyof 操作符获取 T 类型的所有键，其返回类型是联合类型，
type PKeys = keyof { name: string; age: number }; // type PKeys = "name" | "age"
type PKeys2 = keyof {
    name: string;
    age: number;
    job: {
        address: string;
    };
};

type PKeys3 = keyof IPerson;
let p2: PKeys3 = 'job';

let p: PKeys2 = 'name';

// keyof 使用在 类型约束上 prop 函数使用

// 在类型中 使用 in 操作符，对类型进行遍历  ,in 操作符，用来对联合类型实现遍历。
type Person = 'name' | 'age' | 'job';

// interface PP {
//     [key in Person]: string; //映射的类型可能不声明属性或方法。ts(7061)
// }

type mapP = { [key in Person]: string };
/**
 * type mapP = {
    name: string;
    age: string;
    job: string;
}
 * 
 * 
 */

export {};
