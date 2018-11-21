import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import pkg from './package.json';
import {terser} from 'rollup-plugin-terser';

export default [
    {
        input: 'console-magic.js',
        output: {
            name: 'console-magic',
            file: pkg.main,
            format: 'umd',
        },
        plugins: [
            resolve(),
            commonjs(),
            terser(),
        ],
    },
];
