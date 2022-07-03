import React, { Component } from 'react'

export default class Keranjang extends Component {
    render() {
        return (
            <>
                <div className="container mt-5">
                    <h2 className='text-light' style={{ borderBottom: '2px #66FCF1 solid' }}>
                        <div className="text mb-5">Keranjang Belanja 3</div>
                    </h2>

                    <div className="row">
                        <div className="col-md-8 text-light">
                            <div className="row mt-4" style={{ borderBottom: '2px #66FCF1 solid' }}>
                                <div className="col-md-3 bg-info mb-5">
                                    <img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFjYm9va3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" width='200' alt="" />
                                </div>
                                <div className="col-md-2">
                                    <div className="title-product fs-2 fw-bold">
                                        macbook
                                    </div>
                                    <div className="categori-product">
                                        electronik
                                    </div>
                                    <div className="price-product fs-2">
                                        20000000
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-4" style={{ borderBottom: '2px #66FCF1 solid' }}>
                                <div className="col-md-3 bg-info mb-5">
                                    <img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFjYm9va3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" width='200' alt="" />
                                </div>
                                <div className="col-md-2">
                                    <div className="title-product fs-2 fw-bold">
                                        macbook
                                    </div>
                                    <div className="categori-product">
                                        electronik
                                    </div>
                                    <div className="price-product fs-2">
                                        20000000
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-4" style={{ borderBottom: '2px #66FCF1 solid' }}>
                                <div className="col-md-3 bg-info mb-5">
                                    <img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFjYm9va3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" width='200' alt="" />
                                </div>
                                <div className="col-md-2">
                                    <div className="title-product fs-2 fw-bold">
                                        macbook
                                    </div>
                                    <div className="categori-product">
                                        electronik
                                    </div>
                                    <div className="price-product fs-2">
                                        20000000
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* BOX ORDERAN */}
                        <div className="col-md-4 text-light ">
                            <div className='p-3' style={{ backgroundColor: '#2C3745', border: '2px #66FCF1 solid' }}>
                                <div className='fs-2'>Total Order</div>
                                <div className='fs-1 text-center mb-4'>Rp 20000000</div>
                                <div className='row'>
                                    <div className="col">
                                        keranjang <br />
                                        Diskon <br />
                                        Total
                                    </div>
                                    <div className="col">
                                        Rp <br />
                                        Rp <br />
                                        Rp
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </>
        )
    }
}
