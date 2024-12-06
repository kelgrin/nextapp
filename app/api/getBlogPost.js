import prisma from '@/lib/prisma';
import getBlogPosts from './getBlogPosts';

export default async function getBlogPostById(id){
    const card = await getBlogPosts();

    return card.find((card) => card.id == id);
}