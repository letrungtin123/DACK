1. npm create vite@latest
2. đặt tên cho dự án
3. chọn react -> typescript + swc
4. npm i prettier eslint-config-prettier eslint-plugin-prettier -D
   -> prettier: dùng để format code
   -> eslint-config-prettier: vô hiệu hóa các rule xung đột với prettier
   -> eslint-plugin-prettier: dùng thêm 1 số rule prettier cho eslint
5. mở file .eslintrc.cjs
   -> trong ignorePatterns:
   ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts'],
   -> trong mục extends: thêm 2 giá trị
   'eslint-config-prettier',
   'prettier',
   -> trong mục plugins:
   thêm giá trị 'prettier'
   -> trong mục rules:
   'prettier/prettier': [
   'warn',
   {
   arrowParens: 'always',
   semi: false,
   trailingComma: 'none',
   tabWidth: 2,
   endOfLine: 'auto',
   useTabs: false,
   singleQuote: true,
   printWidth: 120,
   jsxSingleQuote: true,
   },
   ],

6. tạo file .prettierrc
   {
   "arrowParens": "always",
   "semi": false,
   "trailingComma": "none",
   "tabWidth": 2,
   "endOfLine": "auto",
   "useTabs": false,
   "singleQuote": true,
   "printWidth": 120,
   "jsxSingleQuote": true
   }

7. tạo file .prettierignore
   node_modules/
   dist/
   package-lock.json

8. tạo file .editorconfig
   [*]
   indent_size = 2
   indent_style = space

9. vào file tsconfig.json
   "baseUrl": ".",
   "paths": {
   "@/_": ["src/_"]
   }

10. chạy npm i @types/node -D

11. vào file vite.config.ts
    import { defineConfig } from 'vite'
    import path from 'path'
    import react from '@vitejs/plugin-react-swc'

export default defineConfig({
plugins: [react()],
server: {
port: 3000
},
css: {
devSourcemap: true
},
resolve: {
alias: {
'@': path.resolve(\_\_dirname, './src')
}
}
})

// https://vitejs.dev/config/

12. vào package.json
    dán vào script các câu lệnh
    "lint:fix": "eslint --fix src --ext ts,tsx",
    "prettier": "prettier --check \"src/**/(_.tsx|_.ts|_.css|_.scss)\"",
    "format:fix": "prettier --write \"src/**/(_.tsx|_.ts|_.css|_.scss)\"",

13. cài thư viện
    npm i react-router-dom axios react-toastify sweetalert2

14. cài thư viện tailwindcss
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
    docs: https://tailwindcss.com/docs/guides/vite

15. cài thư viện: npm i clsx tailwind-merge
