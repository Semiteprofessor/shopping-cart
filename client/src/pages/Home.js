
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import Slider from '../components/Slider'

import ProductDetails from './ProductDetails'
import useFetch from './useFetch'


const Home = () => {

  const { data: products, setData,  isPending, error } = useFetch('http://localhost:8000/blogs/')

  const handleDelete = (id) => {
    const deleteBlog = products.filter(product => product.id !== id);
    setData(deleteBlog);
  }


    return (
        <div>
            {/* { error && <div>{ error } </div>} */}
        {isPending && <div><div class="progress">
              <div className="indeterminate"></div>
              </div>
            </div>
        }
            <Slider />
            <Categories />
        {products && <ProductDetails products={products} handleDelete={handleDelete} /> }
            <Newsletter /> 
            <Footer />
        </div>
    )
}

export default Home
