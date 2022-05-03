import {
  nodeResolve
} from '@rollup/plugin-node-resolve'
// import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import globals from 'rollup-plugin-node-globals'
import image from '@rollup/plugin-image'
import typescript from 'rollup-plugin-typescript'
import dts from "rollup-plugin-dts";

const nodePlugins = [
  image(),
  typescript(),
  nodeResolve(),
  globals(),
  commonjs({
    include: ['node_modules/**']
  }),
  commonjs(),
]
const external = []

export default [{
    input: 'src/main.ts',
    output: {
      file: 'dist/utils-node.mjs',
      format: 'esm'
    },
    plugins: nodePlugins,
    external
  },
  {
    input: 'src/main.ts',
    output: {
      file: 'dist/utils-node.cjs.js',
      format: 'cjs'
    },
    plugins: nodePlugins,
    external
  },
  {
    input: 'src/main.ts',
    output: [{
      file: "dist/types-node.d.ts",
      format: "es"
    }],
    plugins: [dts()],
  },
]