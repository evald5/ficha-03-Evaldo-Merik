// Componente Card: recebe name, type, attack e defense como props
function Card({ name, type, attack, defense }) {
  return (
    <li>
      {name} ({type}, ataque {attack}, defesa {defense})
      {attack >= 6 && <span className="strong">forte</span>}
    </li>
  );
}

export default Card;
