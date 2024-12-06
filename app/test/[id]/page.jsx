import prisma from '@/lib/prisma';

export default async function Page({ params }) {
    const {id} = await params
    const cardList = await prisma.Card.findMany();
    return (
    <>
        
        ID: {id}<br></br>
        {
            cardList.map((post)=>{
                if (id==post.id)
                    return(
                        <>
                            <h2>{post.name}</h2><br></br>
                            <p>{post.description}<br></br>
                            {post.price}$</p>
                        </>
                )
            })
        }
    </>
    )
  }