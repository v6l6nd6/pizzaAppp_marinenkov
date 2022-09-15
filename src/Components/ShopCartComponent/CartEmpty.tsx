import React from 'react';
import { Link } from 'react-router-dom';

import cartEmptyImg from '../../img/empty-cart.png';

export const CartEmpty: React.FC = () => (
  <div className="cart cart--empty">
    <h2>
      The basket is empty <span>😕</span>
    </h2>
    <p>
      Most likely, you haven't ordered pizza yet.
      <br />
      To order a pizza, go to the main page.
    </p>
    <img src={cartEmptyImg} alt="Empty cart" />
    <Link to="/" className='w-[210px] h-[55px] border-1 border-gray-300 border-solid rounded-full flex justify-center items-center text-black text-base font-bold hover:bg-[#D7D7D7] cursor-pointer mt-14'>
      go back
    </Link>
  </div>
);
