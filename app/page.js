"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { Card } from "@/components/card/Card";
import { useEffect, useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  const cardList = [
    {
      id: "1",
      name: "Молоко 2.5",
      description: "Описание товара очень очень подробное",
      price: "1"
    },
    {
      id: "2",
      name: "Молоко 3.2",
      description: "Описание товара очень очень подробное",
      price: "1,5"
    },
    {
      id: "3",
      name: "Сметана 10%",
      description: "Описание товара очень очень подробное",
      price: "1"
    },
    {
      id: "4",
      name: "сметана 15%",
      description: "Описание товара очень очень подробное",
      price: "1,5"
    },
    {
      id: "5",
      name: "Творог 0%",
      description: "Описание товара очень очень подробное",
      price: "5"
    },
  ]

  return (
    <div className={styles.page}>
      <h1>Магазин</h1>
    
      <p>{count}</p>
      <button onClick={() => {
        setCount(count + 1);
      }}>+1</button>

      <Card/>
      
      {
        cardList.map((item) => {
          return (
            <Card key={item.id} name={item.name} description={item.description} price={item.price} />
          )
        })
      }
      
    </div>
  );
}
