// Componente Card: recebe name, type, attack e defense como props
function Card({ name, type, attack, defense }) {
  return (
    <li>
      {name} ({type}, ataque {attack}, defesa {defense})
    </li>
  );
}

export default Card;
