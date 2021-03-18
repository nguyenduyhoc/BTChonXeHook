import React, { Component } from 'react'

export default class BTThuKinh extends Component {
    arrProduct = [

        { id: 1, price: 30, name: 'GUCCI G8850U', url: './img/v1.png', desc: 'Light pink these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 2, price: 50, name: 'GUCCI G8759H', url: './img/v2.png', desc: 'Liht pink square lenses defin, ending with amother of pearl effect tip. ' },

        { id: 3, price: 60, name: 'DIOR D6700HQ', url: './img/v3.png', desc: 'Ligt pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 4, price: 70, name: 'DIOR D6005U', url: './img/v4.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 5, price: 90, name: 'PRADA P8750', url: './img/v5.png', desc: 'k square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 6, price: 100, name: 'PRADA P9700', url: './img/v6.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 7, price: 24, name: 'FENDI F8750', url: './img/v7.png', desc: 'ght pink square lenseglasses, ending with amother of pearl effect tip. ' },

        { id: 8, price: 32, name: 'FENDI F8500', url: './img/v8.png', desc: 'ight pink square lese sunglasses, ending with amother of pearl effect tip. ' },

        { id: 9, price: 12, name: 'FENDI F4300', url: './img/v9.png', desc: 'Light pink square lthese sunglasses, ending with amother of pearl effect tip. ' },

    ];
    state = {
        productDetail: {
            id: 1, price: 30, name: 'GUCCI G8850U', url: './img/v1.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. '
        }
    }
    changeGlasses = (itemClick) => {
        console.log(itemClick)
        this.setState({
            productDetail: itemClick

        });
    }
    renderInforGlass = () => {
        return this.arrProduct.map((item, index) => {
            return <div className="container" key={index}>
                <button><img src={item.url} alt="hinhanh" height="50" onClick={() => { this.changeGlasses(item) }}></img></button>
            </div>
        })
    }
    render() {
        let { url, name, price, desc } = this.state.productDetail
        return (
            <div className="container ">
                <h3 className="display-4">Try Glasses App Online</h3>
                <div className="row">
                    <div className="col-4 mt-2 ">
                        <div>
                            <img className="position-relative" src="./img/model.jpg" height="300" alt="nguoimau" />
                            <img className="position-absolute mt-5 kinh" src={url} height="50" alt="kinh1" />
                            <p>Name: {name}</p>
                            <p>Price: {price}</p>
                            <p>Description: {desc}</p>
                            <div className="d-flex">
                                {this.renderInforGlass()}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
