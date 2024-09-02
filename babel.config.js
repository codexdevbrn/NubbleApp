module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                root: '.',
                alias: {
                    '@components': './src/components',
                    '@assets': './src/assets',
                    '@hooks': './src/hooks',
                    '@routes': './src/routes',
                    '@screens': './src/screens',
                    '@theme': './src/theme',
                    '@domain': './src/domain',
                },
            },
        ],
    ],
};
