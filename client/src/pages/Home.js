import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

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
  
  const getProduct = useSelector((state) => state.getProducts);

  const { products, loading, error } = getProduct;

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch]);


    
  return (
    <div>
    
      { loading ? <div><Box sx={{ width: '100%' }}>
                  <LinearProgress />
                  </Box></div>   : error ? <h2>{ error }</h2> : products.map((product) => (
      
      <Slider 
      key={product._id} 
      productId={product._id}
      name={product.name}
      price={product.price}
      desc={product.description}
      imageUrl={product.imageUrl}
      countInStock={product.countInStock}
      color={product.color}
      size={product.size}

      />
      ))}

      { loading ? <div><Box sx={{ width: '100%' }}>
                  <LinearProgress />
                  </Box></div>   : error ? <h2>{ error }</h2> : products.map((product) => (
      
      <Categories 
      key={product._id} 
      productId={product._id}
      name={product.name}
      price={product.price}
      desc={product.description}
      imageUrl={product.imageUrl}
      countInStock={product.countInStock}
      color={product.color}
      size={product.size}

      />
      ))}

      { loading ? <div><Box sx={{ width: '100%' }}>
                  <LinearProgress />
                  </Box></div>   : error ? <h2>{ error }</h2> : products.map((product) => (
      
      <Products 
      key={product._id} 
      productId={product._id}
      name={product.name}
      price={product.price}
      desc={product.description}
      imageUrl={product.imageUrl}
      countInStock={product.countInStock}
      color={product.color}
      size={product.size}

      />
      ))}

      <Newsletter /> 
      <Footer />
        
    </div>
    )
}

export default Home
