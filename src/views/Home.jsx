import React, { Component, Fragment } from 'react'
import Carditem from '../components/CardItem'
import Hero from '../components/Hero'
import Kategori from '../components/Kategori'
import { BiCategoryAlt } from 'react-icons/bi'

export default class Home extends Component {

  render() {
    return (
      <Fragment>
        <div className="home">
          <div className="container">
            <Hero />


            <div className="categori">
              <h2 class='text-light'><BiCategoryAlt className='me-2' />Kategori</h2>
              <div className="wrapper">
                <Kategori />
              </div>
            </div>

            <div className="row p-5">
              <h2 class='text-light'>Electronik</h2>
              <Carditem />
            </div>

            <div className="row p-5">
              <h2 class='text-light'>Perabot Rumah</h2>
              <Carditem />
            </div>

            <div className="row p-5">
              <h2 class='text-light'>Pakaian</h2>
              <Carditem />
            </div>


          </div>
        </div>



      </Fragment >
    )
  }
}
