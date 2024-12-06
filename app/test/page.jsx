import { Card } from "@/components/card/Card";
import prisma from '@/lib/prisma';
import Link from "next/link";
import styles from "@/app/test/page.module.css"

export default async function Test(){
    const cardList = await prisma.Card.findMany();
        
    return(
        <>
            <h1>Тестовая страница</h1>

            <ul className={styles.list_ul}>
            {
                cardList.map((item) =>{
                return(
                <li key={item.id}>
                    <Link href={`/test/${item.id}`}>{item.name}</Link>
                </li>)
                })
            }
            </ul>
            <hr></hr>
            <Card name={'Товар'} description={'Хороший'} price={100} />
            

            {
                cardList.map((item) => {
                return (
                    <Card key={item.id} name={item.name} description={item.description} price={item.price} />
                )
                })
            }
            
        </>
    )
}