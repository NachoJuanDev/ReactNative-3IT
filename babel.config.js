module.exports = {
  presets: ['module:@react-native/babel-preset', 'nativewind/babel'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          src: './src',
          '@/navigation': './src/navigation',
          '@/screens': './src/screens',
          '@/components': './src/components',
          '@/icons': './src/assets/icons',
          '@/lib': './src/lib',
        },
      },
    ],
  ],
};
