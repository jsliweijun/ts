// 工具类型 ， 实现类型的转换， 更快的创建新类型。
// TypeScript提供了几种实用工具类型来促进常见的类型转换。这些实用程序是全局可用的。
// https://www.typescriptlang.org/docs/handbook/utility-types.html

// 使用 infer 推断
// infer 可以推断出 函数参数，函数返回值，推断类构造函数的参数， 推断实例类型

// 获取函数的返回类型
function getSchool() {
    return { name: 'zs', age: 123 };
}

// 执行函数获取返回值 , 这种方式要执行函数。
let r = getSchool();
type ResType = typeof r;

/**
 *  type ResType = {
    name: string;
    age: number;
}
 */

// let ResType: "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function"

// 这些内置实现都使用了  infer 关键字进行 类型推断，创建一个类型变量进行返回
// 使用 ReturnType<Type>  Parameters<Type> ConstructorParameters<Type>  InstanceType<Type>

// infer R 会声明 返回类型的 变量
// T 进行泛型约束，是个函数
type MyReturnType<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer R ? R : any;

type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer P) => any ? P : any;

type MyConstructorParameters<T> = T extends { new (...args: infer P): any } ? P : any;

type MyInstanceType<T> = T extends { new (...args: any[]): infer R } ? R : any;

export {};
