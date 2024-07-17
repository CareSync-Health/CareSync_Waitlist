import React, { useState } from 'react';
import Navbar from './Navbar';
import home from '../assets/home_img.png';
import { IoCalendarNumberSharp } from "react-icons/io5";
import { FaHandsHoldingChild, FaPlay } from "react-icons/fa6";
import { IoFileTrayFullSharp } from "react-icons/io5";
import { FaTimes } from 'react-icons/fa'
import { HiOutlineLightBulb } from "react-icons/hi";
import { TbPuzzle2 } from "react-icons/tb";
import { FaHandsHelping } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import about from '../assets/about.png'
import { FaArrowRightLong } from "react-icons/fa6";
import { CiMedicalCross } from "react-icons/ci";
import calltoaction from '../assets/call-to-action.png'
import { Link } from 'react-router-dom';
import Footer from './Footer';



const LandingPage = () => {

  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className='bg-[#19adc709] w-full'>
      <Navbar />
      <div className='flex justify-center items-center'>
        <div className='w-[97%] lg:-mt-1 rounded-[30px] bg-Accent-0'>
          <div className='pt-[3rem] lg:px-[5rem] xs:px-[10px] lg:flex items-center '>
            <div className='relative lg:mt-[-5rem]'>
              <h1 className='lg:text-[60px] xs:text-[30px] text-[#19adc7] font-Mulish font-bold lg:w-[130%]'>Your Partner in Health and Wellness</h1>
              <p className='text-[#19adc7] lg:text-[20px] xs:text-[18px] leading-[2rem] lg:w-[530px] font-Mulish font-normal mt-[1rem]'>We are committed to providing you with the best medical and healthcare services to help you live healthier and happier.</p>
              <div className="lg:mt-[13rem] xs:mt-[2rem] cursor-pointer" onClick={() => setShowVideo(true)}>
                <h2 className="lg:text-[22px] xs:text-[20px] text-Primary-0 font-Mulish font-semibold flex items-center gap-[10px] group">
                  <span className="border border-Primary-0 lg:p-3 xs:p-3 lg:text-[28px] xs:text-[20px] text-center rounded-[100px] group-hover:animate-scale-up">
                    <FaPlay />
                  </span>
                  <span className="relative">
                    See how we work
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-Primary-0 group-hover:animate-slide-border-bottom"></span>
                  </span>
                </h2>
              </div>

              {showVideo && (
                <div className='bg-[#000000c5] w-full fixed z-10 top-0 bottom-0 left-0 animation-gb-popup-slide-zoom-right'>
                  <FaTimes className='float-end text-[30px] font-bold text-white-0 mt-5 me-5 cursor-pointer' onClick={() => setShowVideo(false)} />
                  <div className='lg:ps-[4rem] xs:px-[1rem] pt-[1rem]'>
                    <iframe src="https://www.youtube.com/embed/AU9jIjAXCdY?si=Bqh690fY7VEu9R88" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='lg:w-[1200px] lg:h-[580px] fixed z-50 top-0 bottom-0'></iframe>
                  </div>
                </div>
              )}
            </div>
            <img src={home} className='lg:max-h-[72%] lg:w-[78%] xs:w-full lg:ms-[-12rem] lg:mt-0 xs:mt-[3rem]' />
          </div>
          <center>
            <div className='bg-[#fff] py-[50px] lg:w-[88%] xs:w-[95%] lg:mt-[-7rem] xs:mt-[-3rem] lg:px-[30px] xs:px-[20px] rounded-[30px] lg:flex items-center justify-between absolute lg:left-[6%] shadow-2xl'>
              <div className='lg:block xs:flex xs:items-center xs:gap-[20px]'>
                <div className='border-Primary-0 border-[2px] text-Primary-0 lg:text-[35px] xs:text-[30px] rounded-[100px] lg:w-[27%] lg:p-[20px] xs:p-3'>
                  <IoCalendarNumberSharp />
                </div>
                <h2 className='text-[22px] xs:text-start lg:text-center text-Primary-0 font-Mulish font-bold w-[70%] lg:mt-[2rem]'>Easy Appointment Booking</h2>
              </div>
              <div className='lg:block xs:flex xs:items-center xs:gap-[20px] lg:mt-0 xs:mt-[2rem]'>
                <div className='border-Primary-0 border-[2px] text-Primary-0 lg:text-[35px] xs:text-[30px] rounded-[100px] lg:w-[27%] lg:p-[20px] xs:p-3'>
                  <IoFileTrayFullSharp />
                </div>
                <h2 className='text-[22px] xs:text-start lg:text-center text-Primary-0 font-Mulish font-bold w-[70%] lg:mt-[2rem]'>Health Records Management</h2>
              </div>
              <div className='lg:block xs:flex xs:items-center xs:gap-[20px] lg:mt-0 xs:mt-[2rem]'>
                <div className='border-Primary-0 border-[2px] text-Primary-0 lg:text-[35px] xs:text-[30px] rounded-[100px] lg:w-[27%] lg:p-[20px] xs:p-3'>
                  <CiMedicalCross />
                </div>
                <h2 className='text-[22px] xs:text-start lg:text-center text-Primary-0 font-Mulish font-bold w-[70%] lg:mt-[2rem]'>Free Medical Consultations</h2>
              </div>
            </div>
          </center>
        </div>
      </div>

      <center>
        <div className='lg:mt-[20rem] xs:mt-[30rem] lg:px-[90px] xs:px-[10px] mb-5'>
          <h1 className='text-[#19adc7] lg:text-[60px] xs:text-[48px] font-Mulish font-bold text-center'>Our Values</h1>
          <div className='flex items-center flex-wrap gap-[3.5rem] lg:mt-[5rem] xs:mt-[3rem]'>
            <div className='w-[350px] bg-white-0 lg:shadow-lg xs:shadow-md xs:shadow-Primary-0 lg:shadow-Primary-0 rounded-[20px] px-[2rem] py-[50px]'>
              <h2 className='text-Primary-0 text-[32px] font-Mulish text-center font-bold flex items-center gap-[15px] ms-[1rem]'><span className='text-white-0 bg-Primary-0 p-3 rounded-[100px] text-[24px]'><FaHandsHoldingChild /></span>  Compassion</h2>
              <p className='text-[#5a5a5a] text-[16px] text-center mt-5 font-Mulish font-normal'>We understand that seeking medical care can be a stressful and emotional experience, and we strive to create a welcoming and supportive environment that puts our patients at ease and every one.</p>
            </div>
            <div className='w-[350px] bg-white-0 lg:shadow-lg xs:shadow-md xs:shadow-Primary-0 lg:shadow-Primary-0 rounded-[20px] px-5 py-[50px] lg:mt-[-4rem]'>
              <h2 className='text-Primary-0 text-[32px] font-Mulish text-center font-bold flex items-center gap-[15px] ms-[1rem]'><span className='text-white-0 bg-Primary-0 p-3 rounded-[100px] text-[26px]'><HiOutlineLightBulb /></span> Excellence </h2>
              <p className='text-[#5a5a5a] text-[16px] text-center mt-5 font-Mulish font-normal'>We are committed to providing excellent medical care and services to our patients. We believe in continuously improving our skills, knowledge, and resources to ensure that we deliver the highest quality care possible.</p>
            </div>
            <div className='w-[350px] bg-white-0 lg:shadow-lg xs:shadow-md xs:shadow-Primary-0 lg:shadow-Primary-0 rounded-[20px] px-5 py-[50px]'>
              <h2 className='text-Primary-0 text-[32px] font-Mulish text-center font-bold flex items-center gap-[15px] ms-[1rem]'><span className='text-white-0 bg-Primary-0 p-3 rounded-[100px] text-[26px]'><TbPuzzle2 /></span>Integrity</h2>
              <p className='text-[#5a5a5a] text-[16px] text-center mt-5 font-Mulish font-normal'>We believe in practicing medicine with integrity and honesty. We are transparent in our communication and decision-making processes, and we always put our patient's interests first & provide best solution.</p>
            </div>
            <div className='w-[350px] bg-white-0 lg:shadow-lg xs:shadow-md xs:shadow-Primary-0 lg:shadow-Primary-0 rounded-[20px] px-5 py-[50px] lg:ms-[12rem]'>
              <h2 className='text-Primary-0 text-[32px] font-Mulish text-center font-bold flex items-center gap-[15px] ms-[1rem]'><span className='text-white-0 bg-Primary-0 p-3 rounded-[100px] text-[26px]'><FaHandsHelping /></span>Respect</h2>
              <p className='text-[#5a5a5a] text-[16px] text-center mt-5 font-Mulish font-normal'>We treat all individuals with respect and dignity, regardless of their background, beliefs, or circumstances. We believe that every person deserves to be treated with compassion and kindness.</p>
            </div>
            <div className='w-[350px] bg-white-0 lg:shadow-lg xs:shadow-md xs:shadow-Primary-0 lg:shadow-Primary-0 rounded-[20px] px-5 py-[50px]'>
              <h2 className='text-Primary-0 text-[32px] font-Mulish text-center font-bold flex items-center gap-[15px] ms-[1rem]'><span className='text-white-0 bg-Primary-0 p-3 rounded-[100px] text-[26px]'><FaPeopleGroup /> </span>Teamwork</h2>
              <p className='text-[#5a5a5a] text-[16px] text-center mt-5 font-Mulish font-normal'>We believe in working collaboratively with our team members and other healthcare professionals to provide comprehensive and effective care to our patients.</p>
            </div>
          </div>
        </div>
      </center>

      <div className='mt-[10rem] lg:px-[80px] xs:px-[15px] pt-[5rem]'>
          <div className='lg:flex items-start gap-[7rem]'>
              <img src={about} className='lg:w-[50%]' />
              <div className='lg:mt-0 xs:mt-[4rem]'>
                <h2 className='text-[#19adc7] font-bold lg:text-[60px] xs:text-[48px] font-Mulish'>About Us</h2>
                <h2 className='lg:text-[24px] xs:text-[20px] font-Mulish text-Primary-0 font-bold'>CARESYNC MED</h2>
                <div className='lg:mt-[5rem] xs:mt-[2rem]'>
                  <h2 className='lg:w-[75%] text-[25px] text-[#19adc7a9] font-Mulish font-normal flex items-start gap-[1.5rem]'><span className='text-[30px] text-Primary-0 mt-1.5 animate-bounce-sideways'><FaArrowRightLong /></span> CareSync Med stands as your beacon of simplicity</h2>
                  <p className='text-[18px] text-[#19adc7a9] font-Mulish font-normal mt-[2rem]'>CareSync Med is an innovative platform designed to revolutionize healthcare by connecting patients with top medical professionals worldwide. Our mission is to make quality healthcare accessible, convenient, and efficient for everyone.</p>
                  <div className='mt-[2rem]'>
                    <h2 className='text-[20px] text-Primary-0 font-Mulish font-medium flex items-center gap-[1rem]'> 
                      <span className='bg-Primary-0 border-[2px] text-white-0 text-[25px] rounded-[100px] p-[15px]'><IoCalendarNumberSharp /></span> Browse and Book Appointment</h2>
                    <h2 className='text-[20px] text-Primary-0 font-Mulish font-medium mt-[2rem] flex items-center gap-[1rem]'><span className='bg-Primary-0 border-[2px] text-white-0 text-[25px] rounded-[100px] p-[15px]'><IoFileTrayFullSharp /></span> Manage Your Health Records</h2>
                    <h2 className='text-[20px] text-Primary-0 font-Mulish font-medium mt-[2rem] flex items-center gap-[1rem]'><span className='bg-Primary-0 border-[2px] text-white-0 text-[25px] rounded-[100px] p-[15px]'><CiMedicalCross /></span> Access Free Consultations</h2>
                  </div>
                </div>
              </div>
          </div>
      </div>
      <center>
        <div className='mt-[7rem] px-[20px]'>
          <img src={calltoaction} className='lg:w-[40%]' />
          <div className='bg-[#fff] lg:w-[85%] xs:w-[95%] lg:px-5 xs:px-[15px] py-[50px] rounded-[30px] lg:mt-[-6rem] xs:mt-[-4rem] absolute xs:left-[0.5rem] lg:left-[7rem] shadow-2xl'>
            <h1 className='text-center lg:text-[55px] xs:text-[30px] text-[#19adc7] font-Mulish font-bold lg:w-[60%] lg:leading-[60px]'>Don’t Let Your Health Take a Backseat!</h1>
            <p className='lg:text-[24px] xs:text-[20px] mt-[2rem] lg:w-[50%] text-[#19adc7a9] font-Mulish font-normal'>Join the waitlist and be the first to experience the benefits of CareSync.</p>
            <button className='bg-Primary-0 py-4 mt-[3rem] px-[50px] rounded-[10px]'><Link to='/waitlist' className='text-[20px] font-Mulish font-bold text-center text-white-0'>Join the Waitlist</Link></button>
          </div>
        </div>
      </center>

      <div className='mt-[30rem]'>
      ` <Footer />
      </div>
    </div>
  );
};

export default LandingPage;