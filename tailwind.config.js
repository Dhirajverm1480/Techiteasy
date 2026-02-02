export default {
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter", "system-ui", "sans-serif"],
                heading: ["Poppins", "system-ui", "sans-serif"],
                mono: ["JetBrains Mono", "monospace"]
            },
            colors: {
                primary: {
                    DEFAULT: '#ff5500',
                    dark: '#ab0000',
                },

                secondary: {
                    DEFAULT: '#00a2ff',
                },

                success: '#00cf7f',
                danger: '#ab0000',

                gray: {
                    100: '#f2f2f2',
                    200: '#d9d9d9a1',
                    300: '#d1d1d1',
                    400: '#cfcfcf',
                    500: '#b8b8b8',
                    600: '#797979',
                },

                white: '#ffffff',
                black: '#000000',
            },
        },
    },
    plugins: [],
}
