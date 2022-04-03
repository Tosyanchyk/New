import { useState } from "react";

import ExpenseDate from "./ExpenseDate.js";
import Card from "../UI/Card";
import "./ExpenseItem.css";

export default function ExpenceItem(props) {
  const [title, setTitle] = useState(props.title);

  const clickHancler = () => {
    setTitle("Updated!");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2> {title} </h2>
        <div className="expense-item__price"> $ {props.amount} </div>{" "}
      </div>
      <button onClick={clickHancler}>Change Title</button>
    </Card>
  );
}
