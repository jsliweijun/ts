// 函数
export {};

// 声明方式 function 关键字
function sum(a: number, b: number): number {
    return a + b;
}

// 表达式方式
// 可以提前声明类型，进行声明 sFn 的类型
type Sum = (a: number, b: number) => number;

const sFn: Sum = (a: number, b: number): number => {
    return a + b;
};

// 声明函数的 可选参数 ？ , 在参数名字后面
function sum2(a: string, b?: string) {}

// 设置默认参数
function sum3(a: string, b: string = 'zhansan') {}

// 剩余参数  ,最后面 使用 ...args 定义剩余参数
function sum4(a: string, ...args) {}

// 函数重载写法 , 最后一个函数写实现。 重载函数之间不能有空行
function toSum(v: number): number;
function toSum(v: string): string;
function toSum(v) {
    if (typeof v == 'number') {
        return v;
    } else {
        return v;
    }
}
