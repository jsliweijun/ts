// 全局变量
declare var fooo: number;

// 全局方法
// declare function greet(msg: string): void;

// 带属性对象
declare namespace myLib {
    // 在声明文件中是namespace 不用导出
    // export function makeGreeting(msg: string): string;
    // export let numberOfGreetings: number;
    function makeGreeting(msg: string): string;
    let numberOfGreetings: number;
}

declare interface Widget {}
declare function getWidget(p: number): Widget;
declare function getWidget(p: string): Widget[];

declare interface GreetingSettings {
    greeting: string;
    duration: number;
    color?: string;
}
// declare function greet(msg: GreetingSettings): void;

// 6
declare class Greeter {
    constructor(msg?: string);
    log: (option: { verbose: boolean }) => {};
    alert: (option: { modal: boolean; title: string }) => {};
    greeting: string;
    // showGreeting: () => {};
    showGreeting(): void;
}
// declare function greet(cb: () => string);
// declare function greet<T extends Greeter>(instance: T);

// greet 方法等参数可以使用联合类型
type GreetingLike = string | (() => string) | MyGreeter | GreetingSettings;
declare function greet(g: GreetingLike);
