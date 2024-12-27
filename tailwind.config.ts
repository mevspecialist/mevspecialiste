import type { Config } from 'tailwindcss';

export default {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                'footer-bg': '#D8D9EA',
                'pry-text-color-1': '#222222',
                'pry-text-color-2': '#909090',
            },
        },
    },
    plugins: [],
} satisfies Config;
