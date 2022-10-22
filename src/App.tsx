import React from 'react';
import Loadbale from 'react-loadable';
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';

import './scss/app.scss';
import MainLayout from './layouts/MainLayout';

const Cart = Loadbale({
  loader: () => import('./pages/Cart'),
  loading: () => <div>Cart is loading ...</div>,
});

const FullUworkItem = React.lazy(() => import('./pages/FullUworkItem'));
const FullApplicationItem = React.lazy(
  () => import('./pages/FullApplicationItem')
);

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route path='' element={<Home />} />
        <Route
          path='cart'
          element={
            <Suspense fallback={<div>Cart is loading ...</div>}>
              <Cart />
            </Suspense>
          }
        />
        <Route
          path='uWorkItem/:id'
          element={
            <Suspense fallback={<div>Loading ...</div>}>
              <FullUworkItem />
            </Suspense>
          }
        />
        <Route
          path='applicationItem/:id'
          element={
            <Suspense fallback={<div>Loading ...</div>}>
              <FullApplicationItem />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
