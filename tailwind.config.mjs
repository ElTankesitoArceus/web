/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'text': '#e4f2fc',
				'background': '#020c12',
				'primary': '#4797cd',
				'secondary': '#041824',
				'accent': '#fc6703',
			   },
			fontSize: {
			sm: '0.667rem',
			base: '1rem',
			xl: '1.500rem',
			'2xl': '2.250rem',
			'3xl': '3.375rem',
			'4xl': '5.063rem',
			'5xl': '7.595rem',
		  },
		  fontFamily: {
			heading: 'Noto Sans Vithkuqi',
			body: 'Kanit',
		  },
		  fontWeight: {
			normal: '400',
			bold: '700',
		  },},
	},
	plugins: [],
}
