import resolve from '@rollup/plugin-node-resolve';

export default [{
  input: 'viewer.js',
  output: [
    {
      format: 'esm',
      file: 'viewer-bundle.js'
    },
  ],
  plugins: [
    resolve(),
  ]
}, {
  input: './styles/index_styles.js',
  output: [
    {
      format: 'esm',
      file: './styles/index_bundle.js'
    },
  ],
  plugins: [
    resolve(),
  ]
}];