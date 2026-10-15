import { useState } from "react";
import Card from "./Card.jsx";

const cards = [
  { name: "Dragão de Cobalto", type: "Criatura", attack: 7, defense: 5 },
  { name: "Guardiã das Marés", type: "Criatura", attack: 4, defense: 8 },
  { name: "Raio Carmesim", type: "Feitiço", attack: 6, defense: 0 },
  { name: "Muralha de Granito", type: "Estrutura", attack: 0, defense: 10 },
  { name: "Lobo das Cinzas", type: "Criatura", attack: 5, defense: 3 },
];

function App() {
  // "todas", "Criatura" ou "Feitiço"
  const [typeFilter, setTypeFilter] = useState("todas");
  const [search, setSearch] = useState("");
  const [randomCard, setRandomCard] = useState(null);

  let visible = cards;
  if (typeFilter !== "todas") {
    visible = visible.filter((card) => card.type === typeFilter);
  }
  // pesquisa pelo nome, sem ligar a maiúsculas/minúsculas
  visible = visible.filter((card) =>
    card.name.toLowerCase().includes(search.toLowerCase()),
  );

  function pickRandomCard() {
    const index = Math.floor(Math.random() * cards.length);
    setRandomCard(cards[index]);
  }

  return (
    <main>
      <h1>A minha coleção</h1>
      <p>
        Tenho {cards.length} cartas (à vista: {visible.length})
      </p>

      <div>
        <button onClick={() => setTypeFilter("todas")}>Todas</button>
        <button onClick={() => setTypeFilter("Criatura")}>Só criaturas</button>
        <button onClick={() => setTypeFilter("Feitiço")}>Só feitiços</button>
        <button onClick={pickRandomCard}>Carta à sorte</button>
      </div>

      {randomCard && (
        <div>
          <h2>Carta à sorte</h2>
          <ul>
            <Card
              key={randomCard.name}
              name={randomCard.name}
              type={randomCard.type}
              attack={randomCard.attack}
              defense={randomCard.defense}
            />
          </ul>
        </div>
      )}

      <p>
        <input
          type="text"
          placeholder="Pesquisar pelo nome..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </p>

      <ul>
        {visible.map((card) => (
          <Card
            key={card.name}
            name={card.name}
            type={card.type}
            attack={card.attack}
            defense={card.defense}
          />
        ))}
      </ul>
    </main>
  );
}

export default App;
