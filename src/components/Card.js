import "./Card.css";

export default function Card(props) {
  const s = 'card ' + props.className; 
  return <div className={s}>{props.children}</div>;
}
