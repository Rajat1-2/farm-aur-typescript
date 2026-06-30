import React, { useState } from "react";

interface OrderFormProps {
  onSubmit(order: { name: string; cup: number }): void;
}

function OrderForm({ onSubmit }: OrderFormProps) {
  const [name, setname] = useState<string>("masala");
  const [cup, setcup] = useState<number>(1);

//   btana pdega ki kha konsa typo use krna h mtlb interface
  function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSubmit({ name, cup });
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>name</label>
        <input
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setname(e.target.value)
          }
        />

        <label>cups</label>
        <input
          type="number"
          value={cup}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            // value string jati h to have to change it to number
            setcup(Number(e.target.value) || 0)
          }
        />
        <button
        type="submit"
        >
            SUBMIT
        </button>
      </form>
    </div>
  );
}

export default OrderForm;
