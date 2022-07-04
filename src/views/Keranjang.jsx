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

            nama: '',
            alamat: '',


        }
        this.formatRupiah = this.formatRupiah.bind(this);
        this.nama = this.nama.bind(this);
        this.alamat = this.alamat.bind(this);
        this.checkout = this.checkout.bind(this);
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

    // FORMAT RUPIAH
    formatRupiah = (angka) => {
        var reverse = angka.toString().split('').reverse().join(''),
            ribuan = reverse.match(/\d{1,3}/g);
        return ribuan = ribuan.join('.').split('').reverse().join('');
    }

    nama(event) {
        this.setState({ nama: event.target.value });
    }

    alamat(event) {
        this.setState({ alamat: event.target.value });
    }

    checkout() {
        alert("ejjrnfirn")
    }

    // CHECKOUTNYA
    // checkout() {
    //     alert("bismillah")
    // if (this.nama && this.alamat) {
    //     this.event.keranjangs = this.keranjangs;
    //     axios
    //         .post("http://localhost:3000/pesanans/", this.pesan)
    //         .then(() => {
    //             Hapus Semua keranjang
    //             this.keranjangs.map(function (item) {
    //                 return axios
    //                     .delete("http://localhost:3000/keranjangs/" + item.id)
    //                     .catch((err) => console.log(err));
    //             });

    //             this.$router.push({ path: "/pesanan-sukses" });
    //             this.$toast.success("Sukses Di Pesan.", {
    //                 type: "success",
    //                 position: "top-right",
    //                 duration: 3000,
    //                 dismissible: true,
    //             });
    //         })
    //         .catch((err) => console.log(err));
    // }
    // event.preventDefault();
    // }

    render() {
        const { keranjangs, nama, alamat } = this.state

        //TOTAL HARGA
        const totalHarga = keranjangs.reduce(function (result, item) {
            return result + item.products.harga * item.jumlah
        }, 0)

        return (

            <>
                <div className="container mt-5">
                    <h2 className='text-light' style={{ borderBottom: '2px #66FCF1 solid' }}>
                        <div className="text mb-5">Keranjang Belanja <span style={{ color: '#66FCF1' }}>{keranjangs.length}</span></div>
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
                                <div className='fs-2' >Total Order</div>
                                <div className='fs-1 text-center mb-4'>
                                    <span style={{ color: '#66FCF1' }}>Rp </span>{this.formatRupiah(totalHarga)}
                                </div>
                                <div className='row'>

                                    <div className="col">
                                        keranjang ({keranjangs.length})<br />
                                        Diskon <br />
                                        Total
                                    </div>
                                    <div className="col">
                                        Rp {this.formatRupiah(totalHarga)}<br />
                                        Rp 0<br />
                                        Rp {this.formatRupiah(totalHarga)}
                                    </div>

                                    <div className='fs-2 mt-4'>
                                        <button className='btn' type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" style={{ width: '100%', color: '#66FCF1', border: '2px #66FCF1 solid' }} >
                                            Pesan
                                        </button>

                                        {/* MODAL NYA */}
                                        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                            <div className="modal-dialog ">
                                                <div className="modal-content">
                                                    <div className="modal-header" style={{ backgroundColor: '#282A35' }}>
                                                        <h5 className="modal-title" style={{ color: '#66FCF1' }} id="staticBackdropLabel">CHECKOUT</h5>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div className="modal-body" style={{ backgroundColor: '#282A35' }}>
                                                        <form action="">
                                                            <input type="nama" className='form-control mb-4' value={nama} onChange={this.nama} placeholder='Nama Anda' />
                                                            <textarea name="alamat" value={alamat} onChange={this.alamat} className='form-control' placeholder='Alamat Lengkap Anda'></textarea>
                                                        </form>
                                                    </div>
                                                    <div className="modal-footer " style={{ backgroundColor: '#282A35' }}>
                                                        <button type="button" className="btn " data-bs-dismiss="modal" style={{ color: 'red', border: '2px red solid' }} >Close</button>

                                                        <button type="button" onclick={() => this.checkout()} style={{ color: '#66FCF1', border: '2px #66FCF1 solid' }} className="btn" >Checkout</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

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
