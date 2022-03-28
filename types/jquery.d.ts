//  全局声明文件
declare function $(selector: string): {
    css(val: object): void;
    height(val: string): void;
    width(val: string): void;
};

// 命名空间可以跟函数合并，在函数上添加静态方法或者对象是可以使用
declare namespace $ {
    namespace fn {
        function extend(): void;
    }
}

// $.fn.extend() 使用。

export default $;
