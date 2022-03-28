// 类型保护： typeof ， intenseof ， in ， 类型中的相关属性， null判断， if else / switch 完整性保护。

// 在代码执行中，对变量的类型进行判断后再进行执行响应的操作。

//1. typeof  ，判断原始数据类型
function getValue(val: string | number) {
    if (typeof val == 'string') {
        console.log('s');
    } else {
        console.log(111);
    }
}

//2.  instanceof ，判断不同的类型
class Cat {}
class Dog {
    wool() {
        console.log('www');
    }
}

let animal = new Cat();

if (animal instanceof Dog) {
    // 判断实例类型
    animal.wool();
} else {
    console.log(animal);
}

// 3. in 判断是否有某个属性
interface Fish {
    swiming: string;
}

interface Bird {
    fly: string;
}

function isAnimal(animal: Fish | Bird) {
    // property in obj
    if ('fly' in animal) {
        console.log(animal.fly);
    } else {
        console.log(animal.swiming);
    }
}

//4. 判断变量具体值，确定类型保护
interface W {
    class: 'warning';
}
interface D {
    class: 'danger';
}
function createButton(btn: W | D) {
    if (btn.class == 'warning') {
        // W
    } else {
        // D
    }
}

// 5.  null 保护 ， 函数嵌套函数，内部函数的变量类型 ts 无法检测到
const addPrefix = (num?: number) => {
    num = num || 1.1; // 可选参数，需要判断

    function prefix(fix: string) {
        return fix + num?.toFixed();
    }
};

// 自定义类型保护 ,   is  xxx 做判断
interface W {
    class: 'warning';
}
interface D {
    class: 'danger';
}

// 定义一个函数
function isW(button: W | D): button is W {
    return button.class == 'warning';
}

export {};
