import React from 'react'
import { GoPlus } from "react-icons/go";

const Product = ({image}) => {
  return (
    <div className='w-72 '>
        <div className="pro-mg relative ">
            <img className='h-96 object-cover object-top w-full rounded-sm' src={image} alt="" />
            <div className="add absolute bg-white bottom-0 right-0 w-11 h-9 rounded-sm z-50 text-black flex justify-center items-center" >
            <GoPlus />
            </div>
        </div>
            <p className="text-xs mt-2">$ 79.00 USD <span className="text-[10px] ml-1.5 text-gray-400">$ 99.00 USD</span></p>
            <h3 className='text-sm my-0.5'>Deep nourishing day cream</h3>
            <p className="text-[10px]">★ 4.0 stars, 3504 Reviews</p>
    </div>
  )
}

export default Product