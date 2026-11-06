module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0b1020',
        panel: '#111827',
        accent: '#8b5cf6',
        accentSoft: '#c4b5fd',
        mint: '#34d399'
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(139, 92, 246, 0.2), 0 20px 60px rgba(139, 92, 246, 0.25)'
      }
    }
  },
  plugins: []
};
