import React from 'react'
import { FaFacebookF, FaInstagram, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-[#19adc7] py-8 lg:px-[60px] xs:px-[20px] lg:flex items-center justify-between'>
        <div className='lg:flex items-center gap-[2rem] '>
            <h2 className='text-white-0 font-Mulish font-medium lg:text-[18px] xs:text-[20px] text-center'>Follow Us</h2>
            <div className='flex items-center gap-[1rem] lg:mt-0 xs:mt-[1rem] lg:px-0 xs:px-[25px]'>
                <span className='bg-Primary-0 lg:p-2 xs:p-3 lg:text-[14px] xs:text-[16px] text-white-0 rounded-full'><Link to='https://www.facebook.com/profile.php?id=61560119206001' target='_blank'><FaFacebookF/></Link></span>
                <span className='bg-Primary-0 lg:p-2 xs:p-3 lg:text-[14px] xs:text-[16px] text-white-0 rounded-full'><Link to='https://www.instagram.com/caresync_med/' target='_blank'><FaInstagram/></Link></span>
                <span className='bg-Primary-0 lg:p-2 xs:p-3 lg:text-[14px] xs:text-[16px] text-white-0 rounded-full'><Link to='https://x.com/CareSyncMed/' target='_blank'><FaTwitter/></Link></span>
                <span className='bg-Primary-0 lg:p-2 xs:p-3 lg:text-[14px] xs:text-[16px] text-white-0 rounded-full'><Link to='https://www.youtube.com/@CareSyncMed' target='_blank'><FaYoutube/></Link></span>
                <span className='bg-Primary-0 lg:p-2 xs:p-3 lg:text-[14px] xs:text-[16px] text-white-0 rounded-full'><Link to='https://www.tiktok.com/@caresync_med' target='_blank'><FaTiktok/></Link></span>
            </div>
        </div>
        <h2 className='text-white-0 font-Mulish font-medium lg:text-[16px] xs:text-[20px] lg:mt-0 xs:mt-[3rem] text-center'>Copyright © 2024 CareSync Med. All rights reserved.</h2>
    </div>
  )
}

export default Footer