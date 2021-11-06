// Components
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import Slider from '../components/Slider'

import useFetch from './useFetch';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Actions
import { getProducts as listProducts } from '../redux/actions/productActions';

const Home = () => {

  const dispatch = useDispatch();
  
  const getProducts = useSelector((state) => state.getProducts);

  // const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
    
  }, [dispatch]);


    return (
        <div>
            <Slider />
            <Categories />
            <Products />
            <Newsletter /> 
            <Footer />
        </div>
    )
}

export default Home
