
## Como pôr a app React a correr

```
cd client
npm install
npm run dev
```

Depois abre http://localhost:5173 no browser.

## Pergunta 3: onde é que o HTML foi construído?

No site Express (porta 3000) o View Source mostra o HTML todo já feito, com a lista de cartas lá dentro, porque foi o server que montou a página e a mandou pronta. Na app React (porta 5173) o View Source mostra quase só uma `<div id="root"></div>` vazia e um script. Isso quer dizer que o HTML das cartas é construído no browser, pelo JavaScript do React. Sei isto porque no Express vejo as cartas no código-fonte e no React não as vejo, só aparecem no Elements (F12), que mostra a página já construída.

## Pergunta 4: quantos requests no Network tab?

No site Express, cada vez que mudo de página (por exemplo de /cartas para /cartas/aleatoria) o browser faz um request novo ao server, que devolve uma página HTML nova. Na app React, quando filtro ou pesquiso não aparece nenhum request novo, porque os dados já estão no browser e o React só volta a desenhar a lista com o `useState` e o `.filter()`. A diferença acontece porque no Express quem constrói a página é o server (e tem de ser chamado outra vez), e no React é o browser, que já tem tudo.
