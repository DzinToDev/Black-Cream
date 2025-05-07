import React from 'react'
import Button from './Button'
import Product from './Product'

const Section2 = () => {
  return (
    <div className='w-full min-h-dvh px-26 py-35 bg-black'>
        <div className="mission text-gray-200 text-[14px] font-thin flex justify-between">
            <h3 className='font-FragmentMono font-thin'>Brand Mission</h3>
            <div className="mission-right w-[39%] leading-6">
                <p className='font-Gt-Planer-L'>B Black cream is the only cream that clear pimples, wrinkles, marks, hives even shadows under the eyes and turns your skin white. B Black whitening cream makes your face softer brighter and fairer, B Black whitening cream is useful to removes surface scars.</p>
                <Button text="Larn more about us" />
            </div>
        </div>
        <div className="more-products text-white mt-40">
            <h1 className='font-Gt-Planer-L text-3xl'>Discover more for your skin</h1>
            <div className="product flex gap-8 py-8">
                <Product image="/img/prod1.png" />
                <Product image="/img/prod2.png"/>
                <Product image="/img/prod3.png"/>
                <Product image="/img/prod4.png"/>
            </div>
        </div>
    </div>
  )
}

export default Section2