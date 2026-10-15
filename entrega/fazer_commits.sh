
set -e
REPO="$1"
if [ -z "$REPO" ] || [ ! -d "$REPO/.git" ]; then
  echo "Diz-me o caminho do repositório (a pasta que tem o .git)."
  exit 1
fi
if [ -e "$REPO/client" ]; then
  echo "Já existe uma pasta client/ no repositório. Apaga-a ou muda-lhe o nome primeiro."
  exit 1
fi

AQUI="$(pwd)"
cp -r client "$REPO/client"
rm -f "$REPO/client/src/Card.jsx"

cd "$REPO"

passo() {
  # $1 = número do passo, $2 = mensagem do commit
  cp "$AQUI/passos/$1/App.jsx" client/src/App.jsx
  [ -f "$AQUI/passos/$1/Card.jsx" ] && cp "$AQUI/passos/$1/Card.jsx" client/src/Card.jsx
  git add client
  git commit -m "$2"
}

passo 1 "feat: add my cards"
passo 2 "feat: add Card component and list cards with map"
passo 3 "feat: show number of cards at the top"
passo 4 "feat: show forte label on cards with attack 6 or more"
passo 5 "feat: add filter buttons by type"
passo 6 "feat: add search box to filter by name"
passo 7 "feat: add random card button"
passo 8 "feat: add heart button with counter to each card"
passo 9 "feat: add button to sort cards by attack"

# README
cat "$AQUI/README_acrescentar.md" >> README.md
git add README.md
git commit -m "docs: add how to run the React app and answers to questions 3 and 4"

git status --short
git push
echo "Feito. Confirma no GitHub que client/ está lá e sem node_modules."
