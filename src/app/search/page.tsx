import React from 'react';
import prisma from '@/lib/db/prisma';
import ProductCard from '@/components/ProductCard';

type Props = {
  searchParams: {
    query: string;
  };
};

export default async function page({ searchParams: { query } }: Props) {
  const products = await prisma.products.findMany({
    where: {
      OR: [
        { name: { contains: query, mode: 'insensitive' } },
        { description: { contains: query, mode: 'insensitive' } },
      ],
    },
    orderBy: {
      id: 'desc',
    },
  });

  if (!products) {
    return <h2>No Product found</h2>;
  }

  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}
