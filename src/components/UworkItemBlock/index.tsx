import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItemById } from '../../redux/cart/selectors';
import { CartItem } from '../../redux/cart/types';
import { addItem } from '../../redux/cart/slice';
import { stringify } from 'qs';

import { SettingOutlined } from '@ant-design/icons';

type UworkItemBlockProps = {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  imageUrl: string;
};

export const UworkItemBlock: React.FC<UworkItemBlockProps> = ({
  id,
  title,
  subtitle,
  price,
  imageUrl,
}) => {
  const dispatch = useDispatch();
  const cartItem = useSelector(selectCartItemById(id));

  const addedCount = cartItem ? cartItem.count : 0;

  const onClickAdd = () => {
    const item: CartItem = {
      id,
      title,
      subtitle,
      price,
      imageUrl,
      count: 0,
    };
    dispatch(addItem(item));
  };

  return (
    <div className='uWorkhItem-block-wrapper'>
      <div className='uWorkItem-block'>
        <Link key={id} to={`/uWorkItem/${id}`}>
          <img
            className='uWorkItem-block_image itemImg'
            src={imageUrl}
            alt='U-Work Item'
          />
          <h4 className='uWorkItem-block__title uWorkItem-title'>{title}</h4>
          <h2 className='uWorkItem-block__title uWorkItem-subTitle'>
            {subtitle}
          </h2>
        </Link>
        <div className='uWorkItem-block_bottom wBlockBottom'>
          <div className='uWorkItem-block_price itemPrice'>$ {price} / Day</div>
          <button
            onClick={onClickAdd}
            className='button button--outline button-add uWorkItemBlock-addBtn'
          >
            <SettingOutlined />
            <span>Add</span>
            {addedCount > 0 && <i>{addedCount}</i>}
          </button>
        </div>
      </div>
    </div>
  );
};
