import React, { Component, useState } from 'react'
import axios from 'axios'
import { API_URL } from '../utils/constans';
import KeranjangItem from '../components/KeranjangItem';
import { useHistory } from 'react-router-dom'
import swal from 'sweetalert';

export default class Keranjang extends Component {

    constructor(props) {
        super(props);
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

    // menyimpan nama setiap ada perubahan ke nama
    nama(event) {
        this.setState({ nama: event.target.value });
    }
    // menyimpan alamat setiap ada perubahan ke alamat
    alamat(event) {
        this.setState({ alamat: event.target.value });
    }


    // CHECKOUTNYA
    checkout(value) {
        // cek terlebih dahulu apakah pelanggan memasukkan nama dan alamat jika iya maka jalankan
        if (this.state.nama && this.state.alamat !== "") {
            const pesanan = {
                nama: this.state.nama,
                alamat: this.state.alamat,
                products: value
            }

            axios
                // masukan data keranjang ke pesanan
                .post("http://localhost:3000/pesanans/", pesanan)
                // jika berhasil maka hapus item yg ada dikeranjang nya
                .then(() => {
                    value.map((keranjangs) => {
                        return axios
                            .delete("http://localhost:3000/keranjangs/" + keranjangs.id)
                            .then(() => {
                                swal({
                                    title: "Barang berhasil di pesan",
                                    icon: "success",
                                    button: "Oke"
                                })
                                this.props.history.push({
                                    pathname: '/',
                                });
                            })
                    });

                })
            // jika tidak maka munculkan alert
        } else {
            swal({
                title: "Masukan Nama Anda Dan Alamat Anda",
                icon: "warning",
                button: "Oke"
            })
        }


    }

    render() {
        const { keranjangs } = this.state

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
                                                            <input type="nama" className='form-control mb-4' value={this.state.nama} onChange={this.nama} placeholder='Nama Anda' />
                                                            <textarea name="alamat" value={this.state.alamat} onChange={this.alamat} className='form-control' placeholder='Alamat Lengkap Anda'></textarea>
                                                        </form>
                                                    </div>
                                                    <div className="modal-footer " style={{ backgroundColor: '#282A35' }}>
                                                        <button type="button" className="btn " data-bs-dismiss="modal" style={{ color: 'red', border: '2px red solid' }} >Close</button>

                                                        <button type="button" data-bs-dismiss="modal" onClick={() => this.checkout(keranjangs)} style={{ color: '#66FCF1', border: '2px #66FCF1 solid' }} className="btn" >Checkout</button>
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
