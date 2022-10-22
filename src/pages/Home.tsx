import React from 'react';

import { useSelector } from 'react-redux';

import NewUnit from '../components/NewUnit';
import CatalogueRequest from '../components/CatalogueRequest';
import ContactUsLine from '../components/ContactUsLine';

import { UworkItemBlock } from '../components/UworkItemBlock';
import { Skeleton } from '../components/UworkItemBlock/Skeleton';
import ApplicationSection from '../components/ApplicationSection';
import MapSection from '../components/MapSection';

import { useAppDispatch } from '../redux/store';
import { selectUworkItemData } from '../redux/uWorkItem/selectors';

import { fetchUworkItems } from '../redux/uWorkItem/asyncActions';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items, status } = useSelector(selectUworkItemData);

  const getUworkItems = async () => {
    dispatch(fetchUworkItems());

    window.scrollTo(0, 0);
  };

  React.useEffect(() => {
    getUworkItems();
  }, []);

  const uWorkItems = items.map((obj: any) => (
    <UworkItemBlock key={obj.id} {...obj} />
  ));
  const skeletons = [...new Array(8)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <div className='container'>
      <div className='content__top'></div>
      <NewUnit />
      {status === 'error' ? (
        <div className='content__error-info'>
          <h2>Error 😕</h2>
          <p>
            Unfortunately, something is going wrong. Please try again later.
          </p>
        </div>
      ) : (
        <div className='content__items'>
          {status === 'loading' ? skeletons : uWorkItems}
        </div>
      )}
      <CatalogueRequest />
      <ApplicationSection />
      <ContactUsLine />
      <MapSection />
      <CatalogueRequest />
    </div>
  );
};

export default Home;
