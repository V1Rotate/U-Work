import React from 'react';
import { useSelector } from 'react-redux';

import { Skeleton } from './ApplicationItemBlock/Skeleton';
import { ApplicationItemBlock } from './ApplicationItemBlock';

import { useAppDispatch } from '../redux/store';
import { selectApplicationItemData } from '../redux/applicationItem/selectors';

import { fetchApplicationItems } from '../redux/applicationItem/asyncActions';

const ApplicationSection: React.FC = () => {
  const dispatch = useAppDispatch();

  const { items, status } = useSelector(selectApplicationItemData);

  const getApplicationItems = async () => {
    dispatch(fetchApplicationItems());

    window.scrollTo(0, 0);
  };

  React.useEffect(() => {
    getApplicationItems();
  }, []);

  const applicationItems = items.map((obj: any) => (
    <ApplicationItemBlock key={obj.id} {...obj} />
  ));
  const skeletons = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <div className='container-applicationSection'>
      <h2 className='applicationSection-title'>
        U-WORK RENTAL EQUIPMENT APPLICATION
      </h2>
      <div className='content__top'></div>
      {status === 'error' ? (
        <div className='content__error-info'>
          <h2>Error 😕</h2>
          <p>
            Unfortunately, something is going wrong. Please try again later.
          </p>
        </div>
      ) : (
        <div className='applicationItems-style'>
          {status === 'loading' ? skeletons : applicationItems}
        </div>
      )}
    </div>
  );
};

export default ApplicationSection;
