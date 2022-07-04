import React from 'react'
import { BsTrashFill } from 'react-icons/bs'
import axios from 'axios'
import { API_URL } from '../utils/constans'
import swal from 'sweetalert'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

const KeranjangItem = ({ data }) => {
    let history = useHistory();
    const [keranjangs, setkeranjangs] = useState(data);


    const hapusKeranjang = (dataa) => {

        axios
            .delete(API_URL + "keranjangs/" + dataa)
            .then(res => {
                swal({
                    title: "Berhasil Masuk Keranjang",
                    icon: "success",
                    button: "Oke"
                })
                history.push("/");
            })
    }


    const formatRupiah = (angka) => {
        var reverse = angka.toString().split('').reverse().join(''),
            ribuan = reverse.match(/\d{1,3}/g);
        return ribuan = ribuan.join('.').split('').reverse().join('');
    }

    return (

        <>
            <div className="row mt-4" style={{ borderBottom: '2px #66FCF1 solid' }}>
                <div className="col-md-3 mb-5">
                    <img src={keranjangs.products.gambar} width='200' alt="" style={{ borderRadius: '20px' }} />
                </div>
                <div className="col-md-8 ">
                    <div className="title-product fs-4 fw-bold">
                        {keranjangs.products.nama}
                    </div>
                    <div className="categori-product">
                        {keranjangs.products.category}
                    </div>
                    <div className="jumlah-product fs-5 mt-3">
                        Jumlah {keranjangs.jumlah}
                    </div>
                    <div className="price-product fs-4">
                        Total Rp {formatRupiah(keranjangs.products.harga * keranjangs.jumlah)}
                    </div>
                    <div className="hapus fs-3 text-end ">

                        <div className='btn' onClick={() => hapusKeranjang(keranjangs.id)}>
                            <BsTrashFill className='fs-2 text-danger' />
                        </div>

                    </div>
                </div>
            </div>


        </>

    )
}

export default KeranjangItem