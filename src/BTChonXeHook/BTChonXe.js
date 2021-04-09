import { set } from 'lodash'
import React, { useState } from 'react'

export default function BTChonXe(props) {
    const [img, setImg] = useState({ src: "./img/car/products/black-car.jpg" })
    return (
        <div >
            <div className="card text-left  " >
                <img className="card-img-top" src={img.src} alt="black-car" />
                <div className="card-body container ">
                    <button className="btn btn-danger mr-2" onClick={() => {
                        const newImg = { src: "./img/car/products/red-car.jpg" }
                        setImg(newImg)
                    }}>Red</button>
                    <button className="btn btn-dark mr-2" onClick={()=>{
                         const newImg = { src: "./img/car/products/black-car.jpg" }
                         setImg(newImg)
                    }}>Black</button>
                    <button className="btn btn-light mr-2" onClick={()=>{
                          const newImg = { src: "./img/car/products/silver-car.jpg" }
                          setImg(newImg)
                    }}>Silver</button>
                    <button className="btn btn-secondary mr-2" onClick={()=>{
                          const newImg = { src: "./img/car/products/steel-car.jpg" }
                          setImg(newImg)
                    }}>Steel</button>
                </div>
            </div>

        </div>
    )
}

