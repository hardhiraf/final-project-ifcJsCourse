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
  input: 'index_styles.js',
  output: [
    {
      format: 'esm',
      file: 'index_bundle.js'
    },
  ],
  plugins: [
    resolve(),
  ]
}];