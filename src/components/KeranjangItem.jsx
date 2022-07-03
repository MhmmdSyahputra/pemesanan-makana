import React from 'react'

const KeranjangItem = ({ data }) => {

    const formatRupiah = (angka) => {
        var reverse = angka.toString().split('').reverse().join(''),
            ribuan = reverse.match(/\d{1,3}/g);
        return ribuan = ribuan.join('.').split('').reverse().join('');
    }

    return (
        <div className="row mt-4" style={{ borderBottom: '2px #66FCF1 solid' }}>
            <div className="col-md-3 mb-5">
                <img src={data.products.gambar} width='200' alt="" style={{ borderRadius: '20px' }} />
            </div>
            <div className="col-md-8 ">
                <div className="title-product fs-4 fw-bold">
                    {data.products.nama}
                </div>
                <div className="categori-product">
                    {data.products.category}
                </div>
                <div className="price-product fs-3">
                    {formatRupiah(data.products.harga)}
                </div>
            </div>
        </div>
    )
}

export default KeranjangItem