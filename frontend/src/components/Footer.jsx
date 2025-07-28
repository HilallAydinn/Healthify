import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { Phone, Mail } from "lucide-react";

const Footer = () => {
    const navigate = useNavigate();
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <img className='mb-3 -mt-3 w-40' src={assets.logo} alt="" />
            <p className='w-full md:w-2/3 text-gray-600 leading-6'>We are committed to delivering accessible, reliable, and personalized healthcare services. With 24/7 access to a wide network of trusted specialists, we ensure that your well-being is always within reach.</p>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li className='cursor-pointer' onClick={()=>{navigate('/'); scrollTo(0, 0)}}>Home</li>
                <li className='cursor-pointer' onClick={()=>{navigate('/about'); scrollTo(0, 0)}}>About us</li>
                <li className='cursor-pointer' onClick={()=>{navigate('contact'); scrollTo(0, 0)}}>Contact us</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li><Phone className="w-5 h-5 inline" /> +0-000-000-000</li>
                <li><Mail className="w-5 h-5 inline" /> healthify@gmail.com</li>
            </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright {new Date().getFullYear()} @ Healthify - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
