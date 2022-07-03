import React, { Component } from 'react'
import axios from 'axios'
import { API_URL } from '../utils/constans';
import KeranjangItem from '../components/KeranjangItem';

export default class Keranjang extends Component {
    constructor(props) {
        super(props);

        // declartion products to be called
        this.state = {
            keranjangs: [],
        }
    }


    // MEMBUKA SEMUA DATA KERANJANG DENGAN AXIOS
    componentDidMount() {
        axios.
            get(API_URL + "keranjangs")
            .then(res => {
                console.log(res);
                const keranjangs = res.data;
                this.setState({ keranjangs });
            })
    }

    render() {
        const { keranjangs } = this.state
        return (
            <>
                <div className="container mt-5">
                    <h2 className='text-light' style={{ borderBottom: '2px #66FCF1 solid' }}>
                        <div className="text mb-5">Keranjang Belanja </div>
                    </h2>

                    <div className="row">
                        <div className="col-md-8 text-light">
                            {keranjangs && keranjangs.map((keranjangs) => (
                                <KeranjangItem key={keranjangs.id} data={keranjangs} />
                            ))}
                        </div>

                        {/* BOX ORDERAN */}
                        <div className="col-md-4 text-light ">
                            <div className='p-3' style={{ backgroundColor: '#2C3745', border: '2px #66FCF1 solid', borderRadius: '20px' }}>
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
