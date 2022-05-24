module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        fontFamily: {
            sans: ['Nunito', 'sans-serif'],
            serif: ['PlayfairDisplay', 'serif'],
        },
        extend: {
            colors: {
                primary: {
                    100: '#fdffbc',
                    200: '#ffeebb',
                    300: '#ffdcb8',
                    400: '#ffc1b6',
                    active: '#fcd34d',
                    hover: '#fde68a',
                },
            },
            backgroundImage: theme => ({
                'image-home': "url('../public/images/fillers/home.png')",
                'image-about': "url('../public/images/fillers/about.jpg')",
                'image-enroll': "url('../public/images/fillers/enroll.jpg')",
            }),
        },
    },
    plugins: [],
}
