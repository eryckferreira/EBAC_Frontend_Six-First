# 🚀 Inicialização do Projeto
Crie um novo projeto com Vite:

## bash
npm create vite@latest nome-do-projeto  
Escolha o template react ou react-swc.

#### Instale as dependências:

## bash
npm install  

Execute o servidor de desenvolvimento:

## bash
npm run dev  

---

## 🔌 Plugins Oficiais
Atualmente, existem dois plugins oficiais para React no Vite:

- @vitejs/plugin-react → utiliza Oxc.  
- @vitejs/plugin-react-swc → utiliza SWC.  

---

## 🧠 React Compiler
O React Compiler não vem habilitado neste template por questões de desempenho em desenvolvimento e build.  
Para adicioná-lo, siga a documentação oficial.  

---

## 🪄 Configuração do ESLint
Este template já inclui regras básicas de lint.  
Para aplicações em produção, recomenda-se:

- Usar TypeScript com regras de lint baseadas em tipos.  
- Conferir o template React + TS.  
- Integrar o typescript-eslint.  

---

## 📂 Estrutura Básica do Projeto
nome-do-projeto/
├── node_modules/
├── public/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── assets/
├── index.html
├── package.json
└── vite.config.js
