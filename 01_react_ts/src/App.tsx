import "./App.css";
import Card from "./components/Card";
import { ChaiCard } from "./components/ChaiCard";
import ChaiList from "./components/ChaiList";
import Counter from "./components/Counter";
import OrderForm from "./components/OrderForm";
import type { Chai } from "./types";

const menu: Chai[] = [
  { id: 1, name: "masala", price: 24 },
  { id: 2, name: "mint", price: 240 },
  { id: 3, name: "lemon", price: 244 },
];

function App() {
  return (
    <>
      <h1>HII</h1>
      <ChaiCard name="headphones" price={5000} />

      <Counter />
      <div>
        <ChaiList items={menu} />
      </div>
      <div>
        <OrderForm 
        onSubmit={(order)=>{
          console.log("Placed",order.name,order.cup)
        }}
         />
      </div>
      <div>
        <Card 
         title="chai aur typo"
         footer={<button>order now</button>}
        />
      </div>
    </>
  );
}

export default App;
