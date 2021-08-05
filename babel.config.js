module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@controllers': './src/app/controllers',
          '@models': './src/app/models',
          '@config': './src/config',
          '@database': './src/database',
          '@routes': './src/app/routes/routes',
          '@repositories': './src/app/repositories',
          '@services': './src/app/services',
          '@interfaces': './src/app/interfaces/interfaces',
          '@dtos': './src/app/dtos/dtos',
          '@middlewares': './src/app/middlewares',
          '@utils': './src/app/utils',
          '@documentation': './src/app/documentation',
          '@core': './src/app/core',
        },
      },
    ],
    'babel-plugin-transform-typescript-metadata',
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
  ],
};
