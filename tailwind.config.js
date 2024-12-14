/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    'flex',
    'flex-1',
    'flex-shrink-0',
    'w-[15%]',
    'max-w-[100px]',
    'min-w-[15%]',
    'h-full',
    'items-center',
    'justify-center',
    'bg-white',
    'text-black',
    'hover:bg-gray-200',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};


