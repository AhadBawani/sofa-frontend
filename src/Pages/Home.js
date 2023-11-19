import React, { useEffect } from 'react';
import ProductList from '../Components/ProductList';
import { useDispatch } from 'react-redux';
import { GetProductHandler } from '../RequestHandlers/RequestHandler/RequestHandler';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    GetProductHandler(dispatch);
  }, [])
  return (
    <div>
      <ProductList />
    </div>
  )
}

export default Home;