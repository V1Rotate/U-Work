import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import logoSvg from '../assets/img/logo.jpg';
import logoSlogan from '../assets/img/logoSlogan.jpg';
import { selectCart } from '../redux/cart/selectors';
import { PhoneOutlined } from '@ant-design/icons';

export const Header: React.FC = () => {
  const { items, totalPrice } = useSelector(selectCart);
  const location = useLocation();
  const isMounted = React.useRef(false);

  const totalCount = items.reduce(
    (sum: number, item: any) => sum + item.count,
    0
  );

  React.useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items);
      localStorage.setItem('cart', json);
    }
    isMounted.current = true;
  }, [items]);

  return (
    <div className='header'>
      <div className='container'>
        <Link to='/'>
          <div className='header__logo'>
            <img width='170' src={logoSvg} alt='U-WORK logo' />
            <div>
              <img
                height='20'
                src={logoSlogan}
                alt='Slogan to Logo'
                className='header__logo-slogan'
              />
            </div>
          </div>
        </Link>

        <div className='phone'>
          <div className='phone__icon'>
            <PhoneOutlined />
          </div>
          <h2 className='phone__number'>
            1-800-GO-U-WORK<span>®</span>
          </h2>
        </div>
        {location.pathname !== '/cart'}
        <div className='header__cart'>
          {location.pathname !== '/cart' && (
            <Link to='/cart' className='button button--cart'>
              <span>$ {totalPrice}</span>
              <div className='button__delimiter'></div>
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
              <span>{totalCount}</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
