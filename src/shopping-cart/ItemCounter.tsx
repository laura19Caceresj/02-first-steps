import { useState } from "react";

//import "./itemCounter.css"

import styles from "./itemCounter.module.css";


interface Props {
  name: string;
  quantity?: number;
}

export const ItemCounter = ({ name, quantity = 1 }: Props) => {


  const [count, setCount] = useState(quantity);


  // 
  const handleAdd = () => {
    console.log('Hola Mundo desde ItemCounter');
    setCount(count + 1);
  }

  const handleSubtract = () => {
    console.log('Hola Mundo laura');

    if (count === 1) return;
    setCount(count - 1);
  }




  return (
    <section
      className={styles.itemRow}

   /*    
      -----escritura valida en js pero no en css----
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        marginTop: 10
      }}
    */ >
      <span
        className={styles["item-text"]}
        style={{
          color: count === 1 ? "red" : "black",
        }}
      >
        {name}
      </span>
      <button onClick={handleAdd}>+1</button >
      <span>{count}</span>
      <button onClick={handleSubtract}>-1</button>
    </section>

  );
};