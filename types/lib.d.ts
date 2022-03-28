// 安装 ts 时会自带一个全局声明文件，声明了 如浏览器中提供的对象 DOM document ， window。
/**
 * 它自动包含在 TypeScript 项目的编译上下文中；
    它能让你快速开始书写经过类型检查的 JavaScript 代码。
 * 
     noLib:true   // 可以排除这些声明
 */

// 在全局对象的原型中声明方法。
interface String {
    double(): string;
}

interface Math {
    seed(): void;
}

// 可以在全局下声明模块
// 这种方式要在 文件模块中使用
// declare global {
//     interface Number {
//         double(): string;
//     }
// }
