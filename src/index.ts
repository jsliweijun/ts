// 声明文件例子

//1.  全局变量
console.log('Half the number of widgets is ' + fooo / 2);

//2. 全局方法
greet('hello, world');

//3. 带属性对象
let result = myLib.makeGreeting('hello, world');
console.log('The computed greeting is:' + result);

let count = myLib.numberOfGreetings;

//4. 函数重载
let x12: Widget = getWidget(43);

let arr13: Widget[] = getWidget('all of them');

//5. 可重用类型接口
// 当指定一个欢迎词时，你必须传入一个GreetingSettings对象。 这个对象具有以下几个属性：
// 1- greeting：必需的字符串
// 2- duration: 可靠的时长（毫秒表示）
// 3- color: 可选字符串，比如‘#ff00ff’

greet({
    greeting: 'hello world',
    duration: 4000
});

//6. 可重用类型 （类型别名）
// 在任何需要欢迎词的地方，你可以提供一个string，一个返回string的函数或一个Greeter实例。
function getGreeting() {
    return 'howdy';
}
class MyGreeter extends Greeter {}

greet('hello');
greet(getGreeting);
greet(new MyGreeter());

// 7. 组织类型
// greeter对象能够记录到文件或显示一个警告。 你可以为 .log(...)提供LogOptions和为.alert(...)提供选项。

const g = new Greeter('Hello');
g.log({ verbose: true });
g.alert({ modal: false, title: 'Current Greeting' });

// 8. 类
// 你可以通过实例化Greeter对象来创建欢迎词，或者继承Greeter对象来自定义欢迎词。
const myGreeter = new Greeter('hello, world');
myGreeter.greeting = 'howdy';
myGreeter.showGreeting();

class SpecialGreeter extends Greeter {
    constructor() {
        super('Very special greetings');
    }
}
