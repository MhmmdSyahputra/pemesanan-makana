import React, { Component, Fragment } from 'react'
import { API_URL } from '../utils/constans'
import axios from 'axios'
import { ProductDetail } from '../components/ProductDetail'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { Link } from 'react-router-dom'

export default class Product extends Component {
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
  render() {
    const { products } = this.state
    return (
      <Fragment>
        <div className="container mt-5">
          <div className='fs-2 text-light ms-5'>
            <Link to='/' className='text-light text-decoration-none'>
              <IoMdArrowRoundBack className='display-4 me-2' />Kembali
            </Link>
          </div>
          <div className="row">
            {
              products
                .filter(products => products.id == this.props.match.params.id)
                .map(products =>
                  <ProductDetail key={products.id} data={products} />
                )
            }

          </div>
        </div>
      </Fragment>

    )
  }
}
