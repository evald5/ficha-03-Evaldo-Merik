# Pôr o server Express a correr (para as perguntas 3 e 4)

Na pasta do teu repositório (a que tem o .git), copia o ficheiro `servidor-express.js` para lá e corre:

```
npm init -y
npm install express
node servidor-express.js
```

Abre http://localhost:3000 (clica nos links para mudar de página).

Antes de fazeres commit, confirma que o ficheiro `.gitignore` do repositório tem `node_modules` (se não tiver, acrescenta uma linha com `node_modules`). Depois:

```
git status
git add servidor-express.js package.json package-lock.json .gitignore
git commit -m "feat: add express server with cards routes"
git push
```

Para as perguntas 3 e 4 usa este server na porta 3000 e a app React na porta 5173
(`cd client`, `npm run dev`), cada uma com o seu terminal aberto.
