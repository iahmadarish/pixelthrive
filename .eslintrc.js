module.exports = {
  extends: ['next', 'next/core-web-vitals', 'eslint:recommended'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off', // TypeScript 'any' erro fix for development deployment. Please don't change it" shifat molla"
    'react/no-unescaped-entities': 'off',        // 
  },
}