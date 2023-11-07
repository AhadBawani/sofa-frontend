import React from 'react'
import Product from './Product';
import image from '../Images/Products/images.jpeg';

const ProductList = () => {
    const data = [
        {
            id: 1,
            productImage: image,
            productName: "Ceiling Table",
            productPrice: "$ 75",
            quantity: 1
        }
    ]
    return (
        <div className='m-8 mx-24'>
            {
                data.map((item, index) => {
                    return <>
                        <div key={item?.id + item?.productName}>
                            <Product product={item} />
                        </div>
                    </>
                })
            }
        </div>
    )
}

export default ProductList;