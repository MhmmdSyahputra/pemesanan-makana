import React, { Component, Fragment } from 'react'
import Carditem from '../components/CardItem'
import Hero from '../components/Hero'
import Kategori from '../components/Kategori'
import { BiCategoryAlt } from 'react-icons/bi'
import { API_URL } from '../utils/constans'
import axios from 'axios'

export default class Home extends Component {
  constructor(props) {
    super(props);

    // declartion products to be called
    this.state = {
      products: [],
    }
  }


  // MEMBUKA SEMUA DATA PRODUCTS DENGAN AXIOS
  componentDidMount() {
    axios.
      get(API_URL + "products")
      .then(res => {
        console.log(res);
        const products = res.data;
        this.setState({ products });
      })
  }

  // MEMBUKA SEMUA DATA KATEGORI DENGAN AXIOS
  componentDidMount() {
    axios.
      get(API_URL + "products")
      .then(res => {
        console.log(res);
        const products = res.data;
        this.setState({ products });
      })
  }

  render() {
    const { products } = this.state
    return (
      <Fragment>
        <div className="home">
          <div className="container">
            <Hero />

            <div className="categori">
              <h2 className='colorfont'><BiCategoryAlt className='me-2' />Kategori</h2>
              <div className="wrapper">
                <Kategori />
              </div>
            </div>

            <div className="row p-5">
              <h2 className='colorfont'>Populer</h2>
              {products && products.slice(5, 9).map((products) => (
                <Carditem key={products.id} data={products} />
              ))}
            </div>


            <div className="row p-5">
              <h2 className='colorfont'>All Products</h2>
              {products && products.map((products) => (
                <Carditem key={products.id} data={products} />
              ))}

            </div>



          </div>
        </div>



      </Fragment >
    )
  }
}
