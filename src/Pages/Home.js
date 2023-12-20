import React, { useEffect } from 'react';
import ProductList from '../Components/ProductList';
import { useDispatch } from 'react-redux';
import { GetProductHandler } from '../RequestHandlers/RequestHandler/RequestHandler';
import { Link } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    GetProductHandler(dispatch);
  }, [])
  return (
    <div>
      <ProductList />
      <div className='mb-3'>
        <div className='sm:hidden'>
          <hr style={{ border: 'solid 1px grey' }} />
          <div className='flex justify-center items-center w-full space-x-6 my-4 text-xl'>
            <Link to="/About">About Us</Link>
            <Link to="/Contact">Contact Us</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;