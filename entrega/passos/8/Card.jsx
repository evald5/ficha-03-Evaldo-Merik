import { useState } from "react";

// Componente Card: recebe name, type, attack e defense como props
function Card({ name, type, attack, defense }) {
  // cada carta tem o seu contador de corações
  const [hearts, setHearts] = useState(0);

  return (
    <li>
      {name} ({type}, ataque {attack}, defesa {defense})
      {attack >= 6 && <span className="strong">forte</span>}
      <button onClick={() => setHearts(hearts + 1)}>♥ {hearts}</button>
    </li>
  );
}

export default Card;
