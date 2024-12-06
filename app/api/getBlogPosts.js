import prisma from '@/lib/prisma';

export default async function getBlogPosts(){
    const cardList = await prisma.Card.findMany();
}