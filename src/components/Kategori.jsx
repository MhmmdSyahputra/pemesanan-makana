import React from 'react'

export const Kategori = ({ data }) => {
    return (
        <div className="col-md-1 m-4 mb-4 position-relative">
            <div className="text-categori position-absolute" >
                <div className="categori-text  fw-bold p-1" style={{ backgroundColor: '#2C3745', color: '#46D7F1' }}>{data.nama}</div>
            </div>
            <div className="shadow card-categori ">
                <img src={data.gambar} width='120' alt="..." />
            </div>
        </div >
    )
}
export default Kategori
