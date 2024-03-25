import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

const Footer = () => {
  return (
    <main className='bg-primary text-primary-foreground text-center py-5 '>
      {/* TOP SECTION */}
      <div className='py-10 text-lg'>
        <h2 className='mb-2 md:mb-3'>Unlock Your Furniture Potential.</h2>
        <h2 className='mb-2 md:mb-3'>Begin Your Journey Now!</h2>
        <Button className='rounded-full bg-yellow-600'><Link href="/">Get Started</Link></Button>
      </div>
      {/* TOP SE


      {/* BOTTOM SECTION */}
      <div className='border-white border-b-2 opacity-20'></div>
      <div className='flex justify-between pt-5 flex-col-reverse md:flex-row w-[77%] mx-auto'>
        <p>©️ 2024 HART Furniture</p>
        <div className='flex  justify-between md:w-1/3 mb-3 md:mb-0'>
          <Link href="/about">About</Link>
          <Link href="/services">Service</Link>
          <Link href="/">Cookie policy</Link>
        </div>
      </div>
      {/* BOTTOM SECTION */}
    </main>
  )
}

export default Footer