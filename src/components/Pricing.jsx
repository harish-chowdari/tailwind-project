import React from 'react'
import {  pricingOptions } from '../constants'
import { CheckCircle2 } from 'lucide-react'

const Pricing = () => {
  return (
    <div className='mt-20'>
        <h2 className='text-3xl sm:text-5xl lg:text-6xl text-center
          my-8 tracking-wider'>
            Pricing
        </h2>
        <div className='flex flex-wrap'>
            {pricingOptions.map((item,i)=>{
                return <div key={i} className='w-full sm:w-1/2 lg:w-1/3 p-2'>
                    <div className='p-10 border border-neutral-700 rounded-xl'>
                        <p>
                            {item.title}
                            {item.title === "Pro" && <span className='
                              bg-gradient-to-r from-orange-500 to-red-400
                              text-transparent bg-clip-text text-xl mb-4 ml-2'>
                                (Most Popular)
                            </span>}
                        </p>

                        <p className='mb-8'>
                            <span className='text-5xl mt-6 mr-2'>{item.price}</span>
                            <span className='text-neutral-400 tracking-tight'>/Month</span>
                        </p>

                        <ul>
                            {item.features.map((item,i)=>{
                                return <li key={i} className='mt-8 flex items-center'>
                                    <CheckCircle2/>
                                    <span className='ml-2'>{item}</span>
                                </li>
                            })}

                        </ul>
                        <a href='/' className='inline-flex justify-center 
                          items-center w-full h-1/2 p-5 mt-20 tracking-tight 
                          text-xl hover:bg-orange-900 border border-red-900
                          transition duration-200 rounded-lg'>
                          Subscride
                        </a>

                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default Pricing