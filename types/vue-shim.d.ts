// 模块声明
// 模块，将 ‘*.vue’  '*.png' 这些资源当做模块来导入导出处理，所以需要进行全局声明

declare module '*.vue' {
    type COM = {
        name: string;
        install(): void;
    };

    const component: COM;
    export default component;
}
