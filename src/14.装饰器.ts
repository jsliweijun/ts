// 装饰器

function eat(num: string) {
    console.log(num);
    return function (target: any) {
        console.log(target, num);
    };
}

// @eat('3')
// @eat('2')
// @eat('1')
class Person {
    // @toUpperCase
    name: string = 'zs';

    @showMethodInfo
    getName(@param name: string) {
        console.log('getName');
    }
}

function toUpperCase(target: any, key: string) {
    console.log('执行 toUpperCase ', target, key);
    console.log('无法获取值，还没执行赋值操作', target[key]);
    let val = '';
    Object.defineProperty(target, key, {
        get() {
            console.log('get', '页面获取值');
            return val;
        },
        set(newVal) {
            console.log('set');
            val = newVal;
        }
    });
}

function showMethodInfo(target: any, key: string, descripter: PropertyDescriptor) {
    console.log(target, key, descripter);
}

function param(target: any, key: string, index: number) {
    console.log(target, key, index);
}

let p: Person = new Person();
console.log('具体值', p.name);
