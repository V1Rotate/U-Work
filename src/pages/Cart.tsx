import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { CartItem, CartEmpty } from '../components';

import { selectCart } from '../redux/cart/selectors';
import { clearItems } from '../redux/cart/slice';

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const { totalPrice, items } = useSelector(selectCart);

  const totalCount = items.reduce(
    (sum: number, item: any) => sum + item.count,
    0
  );

  const onClickClear = () => {
    if (window.confirm('Empty cart?')) {
      dispatch(clearItems());
    }
  };

  if (!totalPrice) {
    return <CartEmpty />;
  }

  return (
    <div className='container container--cart'>
      <div className='cart'>
        <div className='cart__top'>
          <h2 className='content__title'>
            <svg
              height='22'
              vertical-align='middle'
              fill='currentColor'
              overflow='hidden'
              viewBox='0 0 1024 1024'
              version='1.1'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M810.666667 853.333333h-85.333334v-384H298.666667v384H213.333333V384l298.666667-170.666667 298.666667 170.666667v469.333333M341.333333 512h341.333334v85.333333H341.333333v-85.333333m0 128h341.333334v85.333333H341.333333v-85.333333m341.333334 128v85.333333H341.333333v-85.333333h341.333334z'
                fill=''
              />
            </svg>
            Garage
          </h2>
          <div onClick={onClickClear} className='cart__clear'>
            <svg
              version='1.1'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 512 512'
              enable-background='new 0 0 512 512'
            >
              <g>
                <path d='m489.2,107.5c-2.6-6.3-8.2-10.9-14.9-12.2-6.7-1.4-13.6,0.8-18.4,5.6l-74,74-44.8-44.8 74-74c4.8-4.8 6.9-11.7 5.6-18.4-1.3-6.7-5.9-12.3-12.2-14.9-19-7.8-39-11.8-59.5-11.8-41.6,0-80.8,16.2-110.2,45.6-42.3,42.3-55.2,103-38.6,156.6l-164,164c-13.7,13.7-21.2,31.9-21.2,51.3 0,19.4 7.5,37.6 21.2,51.2 13.7,13.7 31.9,21.3 51.3,21.3 19.4,0 37.6-7.5 51.2-21.2l163.9-163.9c14.8,4.6 30.4,7 46.4,7 41.6,0 80.8-16.2 110.2-45.7 44.7-44.7 58-111.3 34-169.7zm-383.3,343.4c-12.3,12.3-32.4,12.3-44.8,0-6-6-17.1-27.6 0-44.8l153.6-153.6c5.7,8.7 12.4,17 20.1,24.7 7.6,7.6 15.9,14.3 24.7,20.1l-153.6,153.6zm320.5-202.6c-21.7,21.7-50.6,33.7-81.4,33.7-30.7,0-59.6-12-81.4-33.7-44.9-44.9-44.9-117.9 0-162.7 21.7-21.7 52.7-37 93.3-33.1l-63.2,63.2c-11.2,13.5-3.8,25 0,28.9l73.6,73.6c8,8 20.9,8 28.9,0l63.2-63.2c3.7,33.9-8,68.3-33,93.3z' />
              </g>
            </svg>

            <span>Empty Garage</span>
          </div>
        </div>
        <div className='content__items'>
          {items.map((item: any) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
        <div className='cart__bottom'>
          <div className='cart__bottom-details'>
            <span>
              {' '}
              Total Units: <b>{totalCount} </b>{' '}
            </span>
            <span>
              {' '}
              Total Amount: <b>$ {totalPrice}</b>{' '}
            </span>
          </div>
          <div className='cart__bottom-buttons'>
            <Link
              to='/'
              className='button button--outline button--add go-back-btn'
            >
              <svg
                width='8'
                height='14'
                viewBox='0 0 8 14'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M7 13L1 6.93015L6.86175 1'
                  stroke='#D3D3D3'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                ></path>
              </svg>

              <span>Back</span>
            </Link>
            <div className='button pay-btn'>
              <span>Order</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
