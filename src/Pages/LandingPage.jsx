import React, { useState } from 'react';
import Navbar from './Navbar';
import home from '../assets/home_img.png';
import { IoCalendarNumberSharp, IoFileTrayFullSharp } from "react-icons/io5";
import { FaHandsHoldingChild, FaPlay, FaPeopleGroup, FaArrowRightLong, FaUserDoctor } from "react-icons/fa6";
import { FaTimes, FaHandsHelping, FaRegFolderOpen } from 'react-icons/fa'
import { HiOutlineLightBulb } from "react-icons/hi";
import { TbPuzzle2 } from "react-icons/tb";
import about from '../assets/about.png'
import { CiMedicalCross } from "react-icons/ci";
import { PiCalendarCheckBold } from "react-icons/pi";
import { MdOutlineHealthAndSafety, MdManageAccounts } from "react-icons/md";
import { AiOutlineAreaChart } from "react-icons/ai";
import { RiSecurePaymentLine, RiCalendarScheduleLine } from "react-icons/ri";
import calltoaction from '../assets/call-to-action.png'
import { Link } from 'react-router-dom';
import Footer from './Footer';



const LandingPage = () => {

  const [showVideo, setShowVideo] = useState(false);
  const [activeTab, setActiveTab] = useState('patient');
  const [hoveredSection, setHoveredSection] = useState(null);

  return (
    <div className='bg-[#19adc709] w-full'>
      <Navbar />
      <div className='flex justify-center items-center'>
        <div className='w-[97%] lg:-mt-4 rounded-[30px] bg-Accent-0'>
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
                  <div className='lg:ps-[4rem] xs:px-[1rem] lg:relative lg:top-[2.5rem] xs:fixed xs:top-[4rem] bottom-0'>
                    <iframe
                      src="https://www.youtube.com/embed/AU9jIjAXCdY?si=Bqh690fY7VEu9R88"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                      referrerPolicy="strict-origin-when-cross-origin"
                      className="lg:w-[1200px] xs:w-[125%] lg:h-[550px] xs:h-[640px]"
                      allowFullScreen
                    ></iframe>
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

      <div className='flex items-center justify-center'>
        <div>
          <div>
            <h1 className='lg:text-[60px] xs:text-[40px] text-[#19adc7] font-Mulish font-bold text-center mt-[10rem]'>Our Solutions</h1>
            <div className='flex items-center justify-center gap-[4rem] mt-[3rem]'>
              <h2 className={`text-[22px] text-Primary-0 font-Mulish font-bold cursor-pointer ${activeTab === 'patient' ? 'border-b-2 border-Primary-0' : ''}`} onClick={() => setActiveTab('patient')}>Patient</h2>
              <h2 className={`text-[22px] text-Primary-0 font-Mulish font-bold cursor-pointer ${activeTab === 'doctor' ? 'border-b-2 border-Primary-0' : ''}`} onClick={() => setActiveTab('doctor')}>Doctor</h2>
            </div>
            {/* Patient Side */}
            {activeTab === 'patient' && (
              <div className='flex lg:gap-[6rem] lg:px-[80px] xs:px-[10px] mt-[5rem]'>
                <div>
                  <div className='bg-[#19adc73f] p-8 text-[70px] rounded-full w-[28%] ms-[20rem] lg:block xs:hidden'>
                    <PiCalendarCheckBold className='text-[#ffffffbe]' />
                  </div>
                  <div className='lg:mt-[16rem] xs:mt-[26rem] lg:w-auto xs:w-[200%]'>
                  <div className='bg-[#19adc73f] lg:p-8 xs:p-4 lg:text-[70px] xs:text-[45px] rounded-full mt-[4rem] w-[20%] lg:hidden xs:block'>
                    <FaUserDoctor className='text-[#ffffffbe]' />
                  </div>
                    <div className='flex gap-[2rem]'>
                      <h1 className='text-[80px] text-[#19adc721] font-Mulish font-bold lg:block xs:hidden'>02</h1>
                      <div className='lg:mt-[2.3rem] xs:mt-[1.4rem]'>
                        <h1 className='text-[#19adc7] text-[28px] font-bold font-Mulish'>Access to Top Doctors</h1>
                      </div>
                    </div>
                    <p className='text-[#19adc78c] lg:text-[16px] xs:text-[15px] font-normal font-Mulish lg:mt-1 xs:mt-2'>CareSync opens the doors to a world of medical expertise. Our platform connects you with highly qualified healthcare professionals from around the globe, giving you access to top-tier medical advice and treatment no matter where you are. Whether you need a specialist consultation or regular check-ups, CareSync ensures you can find and connect with the best doctors in their fields. Experience the peace of mind that comes with knowing you have access to the highest quality care available, right at your fingertips.</p>
                  </div>
                  <div className='bg-[#19adc73f] p-8 text-[70px] rounded-full mt-[4rem] w-[28%] ms-[20rem] lg:block xs:hidden'>
                    <FaRegFolderOpen className='text-[#ffffffbe]' />
                  </div>
                  <div className='lg:mt-[16rem] xs:mt-[31rem] lg:w-auto xs:w-[200%]'>
                  <div className='bg-[#19adc73f] lg:p-6 xs:p-4 lg:text-[90px] xs:text-[50px] rounded-full mt-[4rem] w-[21%] lg:hidden xs:block'>
                    <MdOutlineHealthAndSafety className='text-[#ffffffbe]' />
                  </div>
                    <div className='flex gap-[2rem]'>
                      <h1 className='text-[80px] text-[#19adc721] font-Mulish font-bold lg:block xs:hidden'>04</h1>
                      <div className='lg:mt-[2.3rem] xs:mt-[1.4rem]'>
                        <h1 className='text-[#19adc7] text-[28px] font-bold font-Mulish'>Free Consultations</h1>
                      </div>
                    </div>
                    <p className='text-[#19adc78c] lg:text-[16px] xs:text-[15px] font-normal font-Mulish lg:mt-1 xs:mt-2'>Stay informed and proactive about your health with CareSync's free consultations. Our platform provides access to medical advice from qualified professionals without any cost, helping you make informed decisions about your health and wellness. Whether you have a quick question or need guidance on a health concern, our free consultation service ensures you have the support you need. Empower yourself with the knowledge and advice to manage your health effectively, all for free with CareSync.</p>
                  </div>
                </div>

                <hr className='w-[2px] h-[1560px] bg-black-0 lg:block xs:hidden' />

                <div>
                  <div className='lg:ms-0 xs:ms-[-12.3rem]'>
                  <div className='bg-[#19adc73f] lg:p-8 xs:p-4 lg:text-[70px] xs:text-[50px] rounded-full w-[21%] lg:hidden xs:block'>
                    <PiCalendarCheckBold className='text-[#ffffffbe]' />
                  </div>
                    <div className='flex gap-[2rem]'>
                      <h1 className='text-[80px] text-[#19adc721] font-Mulish font-bold lg:block xs:hidden'>01</h1>
                      <div className='lg:mt-[2.3rem] xs:mt-[1.4rem]'>
                        <h1 className='text-[#19adc7] text-[28px] font-bold font-Mulish'>Book Appointment</h1>
                      </div>
                    </div>
                    <p className='text-[#19adc78c] lg:text-[16px] xs:text-[15px] font-normal font-Mulish lg:mt-1 xs:mt-2'>CareSync brings unparalleled convenience to your healthcare experience. No more long waits at the clinic or trying to find a doctor with immediate availability. With CareSync, you can book appointments from the comfort of your home, at a time that suits you best. Our intuitive platform allows you to easily find and schedule appointments with top doctors, ensuring you receive the care you need promptly and efficiently. Say goodbye to the hassles of traditional healthcare and embrace a more convenient, streamlined process with CareSync.</p>
                  </div>
                  <div className='bg-[#19adc73f] p-8 text-[70px] rounded-full mt-[4rem] w-[26.5%] lg:block xs:hidden'>
                    <FaUserDoctor className='text-[#ffffffbe]' />
                  </div>
                  <div className='lg:mt-[16rem] xs:mt-[29rem] lg:ms-0 xs:ms-[-12.3rem]'>
                  <div className='bg-[#19adc73f] lg:p-8 xs:p-4 lg:text-[70px] xs:text-[50px] rounded-full w-[21%] lg:hidden xs:block'>
                    <FaRegFolderOpen className='text-[#ffffffbe]' />
                  </div>
                    <div className='flex gap-[1.5rem]'>
                      <h1 className='text-[80px] text-[#19adc721] font-Mulish font-bold lg:block xs:hidden'>03</h1>
                      <div className='lg:mt-[2.3rem] xs:mt-[1.4rem]'>
                        <h1 className='text-[#19adc7] lg:text-[28px] xs:text-[27px] font-bold font-Mulish'>Health Records Management</h1>
                      </div>
                    </div>
                    <p className='text-[#19adc78c] lg:text-[16px] xs:text-[15px] font-normal font-Mulish lg:mt-1 xs:mt-2'>Managing your health records has never been easier or more secure. CareSync offers a centralized platform where you can store and access all your health information in one place. From past medical histories and lab results to ongoing treatment plans, everything is securely stored and easily accessible whenever you need it. This ensures that both you and your healthcare providers have up-to-date information, leading to better, more coordinated care. Take control of your health with CareSync's comprehensive health records management system.</p>
                  </div>
                  <div className='bg-[#19adc73f] p-6 text-[90px] rounded-full mt-[4rem] w-[27%] lg:block xs:hidden'>
                    <MdOutlineHealthAndSafety className='text-[#ffffffbe]' />
                  </div>
                </div>
              </div>
            )}

            {/* Doctor Side */}
            {activeTab === 'doctor' && (
              <div className='flex lg:gap-[6rem] lg:px-[80px] xs:px-[10px] mt-[5rem]'>
                <div>
                  <div className='bg-[#19adc73f] p-8 text-[70px] rounded-full w-[28%] ms-[20rem] lg:block xs:hidden'>
                    <AiOutlineAreaChart className='text-[#ffffffbe]' />
                  </div>
                  <div className='lg:mt-[16rem] xs:mt-[25rem] lg:w-auto xs:w-[190%]'>
                  <div className='bg-[#19adc73f] lg:p-7 xs:p-4 lg:text-[80px] xs:text-[50px] rounded-full w-[22%] lg:hidden xs:block'>
                    <RiSecurePaymentLine className='text-[#ffffffbe]' />
                  </div>
                    <div className='flex gap-[2rem]'>
                      <h1 className='text-[80px] text-[#19adc721] font-Mulish font-bold lg:block xs:hidden'>02</h1>
                      <div className='lg:mt-[2.3rem] xs:mt-[1.4rem]'>
                        <h1 className='text-[#19adc7] text-[28px] font-bold font-Mulish'>Secure Payments</h1>
                      </div>
                    </div>
                    <p className='text-[#19adc78c] lg:text-[16px] xs:text-[15px] font-normal font-Mulish lg:mt-1 xs:mt-2'>At CareSync, we understand the importance of reliable and secure payment systems for healthcare professionals. Our platform ensures that you receive timely and secure payments for your services, allowing you to focus on providing excellent care without worrying about financial transactions. With our streamlined payment process, you can trust that your earnings are handled with the utmost security and efficiency, providing peace of mind and financial stability.</p>
                  </div>
                  <div className='bg-[#19adc73f] p-8 text-[70px] rounded-full mt-[5rem] w-[28%] ms-[20rem] lg:block xs:hidden'>
                    <RiCalendarScheduleLine className='text-[#ffffffbe]' />
                  </div>
                  <div className='lg:mt-[16rem] xs:mt-[27rem] lg:w-auto xs:w-[190%]'>
                  <div className='bg-[#19adc73f] lg:p-7 xs:p-4 lg:text-[80px] xs:text-[50px] rounded-full w-[21%] lg:hidden xs:block'>
                    <MdManageAccounts className='text-[#ffffffbe]' />
                  </div>
                    <div className='flex gap-[2rem]'>
                      <h1 className='text-[80px] text-[#19adc721] font-Mulish font-bold lg:block xs:hidden'>04</h1>
                      <div className='lg:mt-[2.3rem] xs:mt-[1.4rem]'>
                        <h1 className='text-[#19adc7] text-[28px] font-bold font-Mulish'>Patient Management</h1>
                      </div>
                    </div>
                    <p className='text-[#19adc78c] lg:text-[16px] xs:text-[15px] font-normal font-Mulish lg:mt-1 xs:mt-2'>Providing personalized care has never been easier with CareSync's comprehensive patient management system. Access complete and up-to-date health records for each patient, allowing you to deliver tailored treatment plans and informed medical advice. Our platform ensures that all necessary information is at your fingertips, enabling you to offer the highest quality care. By streamlining patient management, CareSync helps you focus more on what you do best—caring for your patients.</p>
                  </div>
                </div>

                <hr className='w-[2px] h-[1540px] bg-black-0 lg:block xs:hidden' />

                <div>
                  <div className='lg:ms-0 xs:ms-[-12.5rem]'>
                  <div className='bg-[#19adc73f] lg:p-8 xs:p-4 lg:text-[70px] xs:text-[50px] rounded-full w-[21%] lg:hidden xs:block'>
                    <AiOutlineAreaChart className='text-[#ffffffbe]' />
                  </div>
                    <div className='flex gap-[2rem]'>
                      <h1 className='text-[80px] text-[#19adc721] font-Mulish font-bold lg:block xs:hidden'>01</h1>
                      <div className='lg:mt-[2.3rem] xs:mt-[1.4rem]'>
                        <h1 className='text-[#19adc7] text-[28px] font-bold font-Mulish'>Expand Your Reach</h1>
                      </div>
                    </div>
                    <p className='text-[#19adc78c] lg:text-[16px] xs:text-[15px] font-normal font-Mulish lg:mt-1 xs:mt-2'>CareSync provides doctors with the unique opportunity to expand their reach beyond geographical boundaries. By joining our platform, you can offer your services to a global patient base, attracting new patients from different regions and diversifying your practice. This not only helps you grow your professional network but also allows you to make a significant impact on patients' lives worldwide. With CareSync, your expertise can reach those who need it the most, regardless of location.</p>
                  </div>
                  <div className='bg-[#19adc73f] p-7 text-[80px] rounded-full mt-[5rem] w-[27%] lg:block xs:hidden'>
                    <RiSecurePaymentLine className='text-[#ffffffbe]' />
                  </div>
                  <div className='lg:mt-[16rem] xs:mt-[29rem] lg:ms-0 xs:ms-[-12.5rem]'>
                  <div className='bg-[#19adc73f] lg:p-8 xs:p-4 lg:text-[70px] xs:text-[50px] rounded-full w-[22%] lg:hidden xs:block'>
                    <RiCalendarScheduleLine className='text-[#ffffffbe]' />
                  </div>
                    <div className='flex gap-[1.5rem]'>
                      <h1 className='text-[80px] text-[#19adc721] font-Mulish font-bold lg:block xs:hidden'>03</h1>
                      <div className='lg:mt-[2.3rem] xs:mt-[1.4rem]'>
                        <h1 className='text-[#19adc7] text-[28px] font-bold font-Mulish'>Flexible Scheduling</h1>
                      </div>
                    </div>
                    <p className='text-[#19adc78c] lg:text-[16px] xs:text-[15px] font-normal font-Mulish lg:mt-1 xs:mt-2'>CareSync offers an intuitive platform that simplifies the management of your appointments and availability. With flexible scheduling options, you can easily set your availability, manage bookings, and adjust your schedule as needed. This flexibility ensures that you can maintain a healthy work-life balance while providing top-notch care to your patients. Our user-friendly interface makes it effortless to keep your calendar organized and up to date.</p>
                  </div>
                  <div className='bg-[#19adc73f] p-7 text-[80px] rounded-full mt-[5rem] w-[27%] lg:block xs:hidden'>
                    <MdManageAccounts className='text-[#ffffffbe]' />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <center>
        <div className='mt-[10rem] px-[20px]'>
          <img src={calltoaction} className='lg:w-[40%]' />
          <div className='bg-[#fff] lg:w-[85%] xs:w-[95%] lg:px-5 xs:px-[15px] py-[50px] rounded-[30px] lg:mt-[-6rem] xs:mt-[-4rem] absolute xs:left-[0.5rem] lg:left-[7rem] shadow-2xl'>
            <h1 className='text-center lg:text-[55px] xs:text-[30px] text-[#19adc7] font-Mulish font-bold lg:w-[60%] lg:leading-[60px]'>Don’t Let Your Health Take a Backseat!</h1>
            <p className='lg:text-[24px] xs:text-[20px] mt-[2rem] lg:w-[50%] text-[#19adc7a9] font-Mulish font-normal'>Join the waitlist and be the first to experience the benefits of CareSync.</p>
            <button className='bg-Primary-0 py-4 mt-[3rem] px-[50px] rounded-[10px]'><Link to='/waitlist' className='text-[20px] font-Mulish font-bold text-center text-white-0'>Join the Waitlist</Link></button>
          </div>
        </div>
      </center>

      <div className='mt-[30rem]'>
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;