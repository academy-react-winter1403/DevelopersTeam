import React from 'react'
import { Link } from 'react-router-dom'
import GlassyAbstract from './../../assets/images/3d-glassy-abstract-spiral-band-blue 1.svg'
import GlassyTwisted from './../../assets/images/3d-glassy-twisted-line-1 1.svg'

const NotFound = () => {
  return (
    <div className='relative'>
      <h2 className='text-blue-500 text-6xl indent-[700px] mt-24 font-bold'>404</h2>
     <div className='text-blue-500 text-2xl indent-[600px] mt-2 '>
        <h2>ما صفحه ای که دنبالش هستی</h2>
        <h2 className='indent-[630px]'>رو نتونستیم پیدا کنیم!</h2>
     </div>
      <Link to='/'><h2 className='bg-[#3772FF] text-white w-32 h-10 mx-auto rounded-full mt-2 indent-6 leading-10'>صفحه اصلی</h2></Link>
      <img src={GlassyAbstract} alt="" className='absolute top-32 right-[450px] w-16 h-16'/>
      <img src={GlassyTwisted} alt="" className='absolute top-[-40px] left-[470px] w-24 h-24'/>
    </div>
  )
}

export default NotFound
