import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel';

export default class Hero extends Component {
  render() {
    return (
      <div className="container" style={{ marginTop: '100px' }}>
        <div className="row">
          <div className="col m-auto text-light">
            <h1 className='fs-1'><strong>Habiskan Duit Anda disini</strong> </h1>
            <h2 className='text-bold'>Shapee Athena</h2>
            <h3 className='text-bold fs-6'>Produk yang kami jual berkualitas</h3>
          </div>
          <div className="col">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100" src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2xvdGhpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="First slide"
                />
                {/* <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="First slide"
                />
                {/* <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdCUyMGRpZ2l0YWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="First slide"
                />
                {/* <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
              </Carousel.Item>

            </Carousel>
          </div>
        </div>
      </div>

    )
  }
}
