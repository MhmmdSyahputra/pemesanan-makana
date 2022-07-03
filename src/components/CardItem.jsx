import React from 'react'
import { useHistory } from 'react-router-dom';
const CardItem = ({ data }) => {

  let history = useHistory();

  const jalan = (index) => {
    history.push("/productdetail/" + index);
  }

  // FUNCTION UNTUK FORMAT RUPIAH HARGANYA
  const formatRupiah = (angka) => {
    var reverse = angka.toString().split('').reverse().join(''),
      ribuan = reverse.match(/\d{1,3}/g);
    return ribuan = ribuan.join('.').split('').reverse().join('');
  }

  return (
    <div className="col-md-3 mb-4">
      <div className="card shadow card-produk" onClick={() => jalan(data.id)} style={{ backgroundColor: '#F2EBE9' }}>
        <img src={data.gambar} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{data.nama}</h5>
          <p className="card-text text-danger">Rp. {formatRupiah(data.harga)}  </p>
        </div>
      </div>
    </div>

  )
}

export default CardItem