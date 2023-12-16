import { getCart } from '@/lib/db/cart';
import React from 'react';
import CartEntry from './CartEntry';
import { setProductQuantity } from './action';

export const metadata = {
  title: 'Your cart - Floricon',
};

export default async function ShoppingCart() {
  const cart = await getCart();


  return (
    <div>
      <h1 className='mb-6 text-2xl font-bold'>ShoppingCart</h1>

      {cart?.items.map((cartItem) => (
        <CartEntry key={cartItem.id} cartItem={cartItem} setProductQuantity={setProductQuantity}/>
      ))}
      {cart?.items.length === 0 && <p> Your cart is empty</p>}
      <div className='flex flex-col items-end sm:items-center'>
         <p className='mb-3 font-bold'>
            Total : ${cart?.subtotal || 0}
         </p>
         <button className='btn btn-primary sm:w-[200px]'>
            Checkout
         </button>
      </div>
    </div>
  );
}
