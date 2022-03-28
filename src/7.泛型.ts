export {};
// 泛型： 在声明类型式时不指定类型，使用 <T> 标识

// 在使用时，传入具体的类型。

// 泛型定义时，可以在 函数，类，接口 定义时指定泛型

// 默认泛型

// 泛型约束 extends , T 类型被约束了
function getLen<T extends number>(val: T) {
    return val;
}

// 使用时传递 真正的类型
console.log(getLen<number>(2));
