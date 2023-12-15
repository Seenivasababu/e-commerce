import Image from 'next/image';
import prisma from '@/lib/db/prisma';
import ProductCard from '@/components/ProductCard';
import Link from 'next/link';

export default async function Home() {
  const products = await prisma.products.findMany({
    orderBy: {
      id: 'desc',
    },
  });
  return (
    <div>
      <div className="hero rounded-xl bg-base-200">
        <div className="hero-content flex-col md:flex-row">
          <Image
            src={products[0].imageUrl}
            alt={products[0].name}
            width={400}
            height={800}
            className="w-full max-w-sm rounded-lg shadow-2xl"
            priority
          />
          <div>
            <h1 className='text-2xl font-bold'>{products[0].name}</h1>
            <p className='py-6'>{products[0].description}</p>
            <Link href={'/products/'+products[0].id} className='btn btn-primary'> Check it out</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
