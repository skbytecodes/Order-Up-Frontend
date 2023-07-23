import React from 'react'
import Banner2 from "../images/zpkkdkmvlj5cuvqbc50t.webp"
import Banner3 from "../images/s5ug2key6e2sptaxku5v.webp"
import Banner1 from "../images/pneknawbadtvceqzwiep.webp"
import Banner4 from "../images/ifi2lbzxeu1hvsqrsip3.webp";
import { ArrowRightIcon } from '@heroicons/react/outline';

function BannerSection() {
  return (
    <div className='flex items-center justify-evenly h-80 bg-gray-900 relative shadow-md shadow-gray-400'>
        <img className="h-64 w-64" src={Banner1}/>
        <img className="h-64 w-64" src={Banner2}/>
        <img className="h-64 w-64" src={Banner3}/> 
        <img className="h-64 w-64" src={Banner4}/>
        <div className='h-12 w-12 absolute right-4 flex items-center justify-center bg-white text-gray-500 rounded-full hover:cursor-pointer hover:transition'>
            <ArrowRightIcon height={20} className=' hover:translate-x-1 duration-100'/>
        </div>
    </div>
  )
}

export default BannerSection