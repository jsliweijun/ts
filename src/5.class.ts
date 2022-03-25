// 类  ，面向对象方式
export {};

// 定义一个 类
class Greeter {
    greeting: string; // 声明属性
    constructor(msg: string) {
        this.greeting = msg;
    } // 构造函数
    greet() {
        console.log('hello ' + this.greeting);
    } // 方法
}
// 使用类
let greeter = new Greeter('world'); // 创建类的实例

// 继承 extends ， super 关键字，调用父类的方法

// 修饰符， 默认 public。

// protected ， 当前内的内部和继承的子类可以访问

// private  只能在当前类的内部访问，

// readonly 修饰变量，需要声明时或者contractor 中进行初始化。

// 参数属性 ： 直接在构造函数的参数列表中，加上修饰符声明 参数，这个参数就会定义在类中，成为实例的属性。
class Dog {
    // name:string; 可以减少写句代码。
    constructor(public name: string) {
        this.name = name;
    }
}

// 类的实例成员，那些仅当类被实例化的时候才会被初始化的属性

// 类的静态成员： 静态属性和方法

class Person {
    static username: string = 'z';
    static getUsername() {
        console.log(this.username); // 在类的内部使用 属性和方法通过this 访问。
    }
}

Person.getUsername();

// 抽象类 只能 被继承，不能创建实例
abstract class Animal {
    static username: string;
    abstract getUsername(): string;
}

class Bird extends Animal {
    getUsername() {
        return '123';
    }
}

//
// 使用typeof Greeter，意思是取Greeter类的类型，而不是实例的类型。 或者更确切的说，”告诉我Greeter标识符的类型”，也就是构造函数的类型。
// 这个类型包含了类的所有静态成员和构造函数。 之后，就和前面一样，我们在greeterMaker上使用new，创建Greeter的实例。

// typeof Class  ，获取的是类的构造函数和静态成员。返回的信息也可以用来创建对象。

// 类定义会创建两个东西：类的实例类型和一个构造函数。 因为类可以创建出类型，所以你能够在允许使用接口的地方使用类。

// 类的装饰器 在类，属性，方法上 使用 @xxx 的语法标注 装饰器
