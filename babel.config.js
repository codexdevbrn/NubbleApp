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
                    '@brand': './src/brand',
                    '@api': './src/api',
                    '@types': './src/types',
                },
            },
        ],
        [
            'module:react-native-dotenv',
            {
                envName: 'APP_ENV',
                moduleName: '@env',
                path: '.env',
            },
        ],
    ],
};
