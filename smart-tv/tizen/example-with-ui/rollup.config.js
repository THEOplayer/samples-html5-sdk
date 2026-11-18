// rollup.config.js
import typescript from '@rollup/plugin-typescript';
import {ScriptTarget} from "typescript";

export default {
  input: 'src/TVBundler.ts',
  output: {
    file: 'js/Main.js',
    format: 'iife',
    name: 'ReferenceApp'
  },
  plugins: [typescript({
    target: ScriptTarget.ES5
  })]
};
