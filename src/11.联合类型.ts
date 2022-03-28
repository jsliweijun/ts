// 交叉类型 ，进行合并类型成一个新类型。

// c 类型 为 never 后， XY ，YX 类型是不可用的了。
interface X {
    c: string;
    d: string;
}

interface Y {
    c: number;
    e: string;
}

type XY = X & Y;
type YX = Y & X;

let a: never;

// let p: XY = { d: 'ss', e: 'dd' }; // 不能将类型“string”分配给类型“never”。ts(2322)
// let q: YX = { d: 'ss', e: 'dd', c: '' };

export {};
