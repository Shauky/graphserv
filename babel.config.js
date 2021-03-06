module.exports = {
    env: {
        test: {
            presets: [
                [
                    '@babel/preset-env',
                    {
                        targets: {
                            node: 'current',
                            esmodules: true,
                        },
                    },
                ],
            ],
        },
        development: {
            presets: [
                [
                    '@babel/preset-env',
                    {
                        modules: false,
                    },
                ],
            ],
            plugins: ['add-module-exports', '@babel/plugin-syntax-jsx'],
        },
        production: {
            presets: [
                [
                    '@babel/preset-env',
                    {
                        modules: false,
                    },
                ],
            ],
            plugins: ['add-module-exports'],
        },
    },
};
