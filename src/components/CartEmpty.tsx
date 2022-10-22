import { Link } from 'react-router-dom';

import cartEmptyImg from '../assets/img/cartEmptyImg.png';

export const CartEmpty: React.FC = () => (
  <div className='cart cart--empty'>
    <h2>Your order is not placed yet...</h2>
    <p>Please let us know if you have any questions</p>
    <img className='anotherCarImg' src={cartEmptyImg} alt='Empty cart' />
    <Link to='/' className='button button--black'>
      <span>Back</span>
    </Link>
  </div>
);
