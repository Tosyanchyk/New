import Expenses from "./components/Expenses/Expenses";

export default function App() { // you can also write it this way, const (instead of keyword "function") App = () => {}
  // const para = document.createElement("p"); // how this works behind the scenes
  // para.textContent = "This is also visible!";
  // document.getElementById("root").append(para); //old comments of react features
  const expenses = [
    {
      id: "e1",
      title: "Toilet paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <div>
      <h2> Let 's get started!</h2>
      <Expenses items={expenses}/>
    </div>
  );
}
