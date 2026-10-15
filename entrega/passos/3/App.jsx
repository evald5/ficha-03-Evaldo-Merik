import Card from "./Card.jsx";

const cards = [
  { name: "Dragão de Cobalto", type: "Criatura", attack: 7, defense: 5 },
  { name: "Guardiã das Marés", type: "Criatura", attack: 4, defense: 8 },
  { name: "Raio Carmesim", type: "Feitiço", attack: 6, defense: 0 },
  { name: "Muralha de Granito", type: "Estrutura", attack: 0, defense: 10 },
  { name: "Lobo das Cinzas", type: "Criatura", attack: 5, defense: 3 },
];

function App() {
  return (
    <main>
      <h1>A minha coleção</h1>
      <p>Tenho {cards.length} cartas</p>
      <ul>
        {cards.map((card) => (
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
