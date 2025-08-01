import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
   <footer className='bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-gray-200 pt-18 pb-10
   bg-cover bg-center' style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.8)),url('/images/banner2.jpeg')`}}>
      <div className='max-w-7xl mx-auto px-4 md:flex md:justify-between gap-8'>
        {/*  info */}
        <div className='mb-6 md:mb-0'>
            <Link to='/'>
              <h1 className='text-[#0070ff] md:text-4xl text-3xl mb-5'>TecnoKloud</h1>
            </Link>
            <p className='max-w-xl text-lg'>We Provide ourselves in our ability to deliver our client’s vision. Customer satisfaction is our number one priority. We understand that our work is our expression to the outside world and we make sure that we produce high-quality solutions.</p>
            
        </div>
        {/* customer service link */}
        <div className='mb-6 md:mb-0'>
            <h3 className='text-3xl text-[#0070ff] mb-5 '>Quick Links</h3>
            <ul className='mt-2 text-lg space-y-7'>
                <Link to='/'><li>HOME</li></Link>
                <Link to='/about'><li>ABOUT</li></Link>
                <Link to='/services'><li>SERVICES</li></Link>
                <Link to='/contact'><li>CONTACT</li></Link>
            </ul>
        </div>

         <div className='mb-6 md:mb-0'>
            <Link to='/'>
              <h1 className='text-[#0070ff] text-3xl mb-5'>Get in touch</h1>
            </Link>
            <p className='mt-2 text-lg'>Phone: <span className='ml-3'>+92301-7144752</span></p>
            <p className='text-lg'>Email: <span className='ml-3'>technokloud@gmail.com</span></p>
            <p className='text-lg'>Address: <span className='ml-3'>1st floor 22, Block H2, Johar Town, Lahore.</span></p>
        </div>
      </div>
      {/* bottom section */}
      <div className='font-semibold mt-8 border-t border-gray-700 pt-6 text-center text-lg'>
        <p>&copy; {new Date().getFullYear()} <span className='text-[#0070ff] '>TecnoKloud</span>. All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer