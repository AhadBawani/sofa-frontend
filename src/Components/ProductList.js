import React from 'react'
import Product from './Product';
import { useSelector } from 'react-redux';

const ProductList = () => {
    const product = useSelector((state) => state?.Product?.products) || [];
    return (
        <div className='flex justify-center w-full'>
            <div className='m-4 grid grid-cols-2 md:grid-cols-4 gap-8'>
                {
                    product.map((item, index) => {
                        return <>
                            <div key={item?.id + item?.productName}>
                                <Product product={item} />
                            </div>
                        </>
                    })
                }
            </div>
        </div>
    )
}

export default ProductList;