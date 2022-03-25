import path from 'path';

import { nodeResolve } from '@rollup/plugin-node-resolve';
import ts from 'rollup-plugin-typescript2';
import serve from 'rollup-plugin-serve';

export default {
    input: 'src/index.ts',
    output: {
        format: 'iife', // umd （amd + commonjs  但不兼容 es6 模块导入）  iife 是自执行函数
        file: path.resolve('dist/bundle.js'),
        sourcemap: true
    },
    plugins: [
        nodeResolve({
            extensions: ['.js', '.ts']
        }),
        ts({
            tsconfig: path.resolve(__dirname, 'tsconfig.json')
        }),
        serve({
            open: true,
            openPage: '/public/index.html',
            port: 3000,
            contentBase: ''
        })
    ]
};
