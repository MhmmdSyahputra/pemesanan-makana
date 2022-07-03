import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdAddShoppingCart } from 'react-icons/md'

export const ProductDetail = ({ data }) => {
    const [count, setCount] = useState(0);
    const [product, setProduct] = useState(data);

    // FORMAT RUPIAH
    const formatRupiah = (angka) => {
        var reverse = angka.toString().split('').reverse().join(''),
            ribuan = reverse.match(/\d{1,3}/g);
        return ribuan = ribuan.join('.').split('').reverse().join('');
    }
    return (
        <>

            <div className="container d-flex justify-content-center">
                <div className="col-md-11 text-light">
                    <div className="row p-4">
                        <div className="col-md-7">
                            <img src={product.gambar} width='600' alt="" />
                        </div>
                        <div className="col">
                            <div className="title-product fs-3 fw-bold mb-4">
                                {product.nama}
                            </div>
                            <div className="price-product fs-5 fw-bold mb-5">
                                Rp. {formatRupiah(product.harga)}
                            </div>
                            <div className="deskripsi-product fs-5 mb-4">
                                <div className='fw-bold mb-3'>Deskripsi Barang</div>
                                <div className="text fs-5">
                                    {product.deskripsi}
                                </div>
                            </div>
                            <div className="total-product fs-5 fw-bold mb-5">
                                <form action="" className='form-inline'>
                                    <span>
                                        <span className='me-3'>Jumlah</span>
                                        <button type='button' className='transparentnstroke  p-1 px-3' onClick={() => setCount(count - 1)}>-</button>
                                        <input type="text" readOnly name="" className='transparentnstroke text-center p-1' id="" value={count} style={{ width: '100px' }} />
                                        <button type='button' className='transparentnstroke  p-1 px-3' onClick={() => setCount(count + 1)}>+</button>
                                    </span>
                                </form>
                            </div>
                            <div className="total-product fs-5 fw-bold mb-5">
                                <Link className='transparentnstroke p-3 text-decoration-none'><MdAddShoppingCart className='me-2 fs-3' /> Masukan Keranjang</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}
