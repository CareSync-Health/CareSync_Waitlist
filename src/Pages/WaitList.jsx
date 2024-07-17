import React, { useState } from 'react';
import logo from '../assets/logo.png'
import img from '../assets/image.jpg'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter.png'
import linkedin from '../assets/LinkedIn.png'
import { Link, useNavigate } from 'react-router-dom';
import img2 from '../assets/img.jpg'
import { useDispatch, useSelector } from 'react-redux';
import { user_register } from '../redux/actions/userAction';

const WaitList = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo } = userRegister;

  console.log(userInfo);

  const submitHandler = (e) => {
    e.preventDefault();
    const body = {
      firstName,
      email,
    };
    dispatch(user_register(body, navigate));
  };


  return (
    <div className='w-full lg:h-screen xs:h-[1300px] flex justify-center items-center lg:px-0 xs:px-[10px]' style={{ backgroundImage: `linear-gradient(rgb(0,0,0,0.6), rgb(0,0,0,0.7)), url(${img2})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      <div className='bg-[#fff] lg:h-[95%] lg:w-[70%] lg:px-[20px] xs:px-[10px] lg:py-[10px] xs:py-[20px] lg:flex items-center justify-between'>
          <div className='lg:w-[40%] lg:-mt-4'>
            <img src={logo} className='w-40' />
            <h2 className='text-[29px] font-Mulish font-bold text-[#000] lg:ms-5 mt-[0.5rem]'>We are launching soon!!!</h2>
            <h3 className='text-[14px] lg:ms-6 mt-1 font-Mulish font-normal'>Get Early Access to Experience Personalized and Efficient Healthcare without any constraint</h3>
            <form className='lg:ms-6 mt-[1rem]' onSubmit={submitHandler}>
                <label 
                    htmlFor='name' 
                    className='text-md text-[#3b3b3b] font-Inter font-medium'>
                        Fullname
                </label><br/>

                <input 
                    type='text' 
                    placeholder='E.g John Doe' 
                    name='fullName'
                    className='bg-[#F8F8F8] mt-2 mb-[1rem] w-full px-[10px] py-[12px] rounded-[5px] outline-none font-Mulish text-[15px]' 
                    value={firstName} 
                    onChange={(e) => setFirstName(e.target.value)}
                /><br/>

                <label 
                    htmlFor='email' 
                    className='text-md text-[#3b3b3b] font-Inter font-medium'>
                        Email address
                </label><br/>

                <input 
                    type='email' 
                    placeholder='E.g Johndoe@gmail.com' 
                    name='email'
                    className='bg-[#F8F8F8] mt-2 mb-[1rem] w-full px-[10px] py-[12px] rounded-[5px] outline-none font-Mulish text-[15px]' 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <button 
                    type='submit' 
                    className='bg-Primary-0 w-full px-[10px] py-[12px] rounded-[5px] text-[#fff] text-md font-bold font-Inter'>
                        Join Waitlist
                </button>
              <div>
                <h1 className='text-[12px] font-medium font-Inter text-center mt-[2rem]'>For more information</h1>
                <div className='flex items-center justify-center gap-[1.5rem] mt-5 -ms-2'>
                    <Link to='https://www.facebook.com/profile.php?id=61560119206001&mibextid=ZbWKwL' target='_blank'><img src={facebook} className='rounded-[100px] w-[27px]' /></Link>
                    <Link to='https://www.instagram.com/caresync_health/' target='_blank'><img src={instagram} className='rounded-[100px] w-[27px]' /></Link>
                    <Link to='https://x.com/_CareSync' target='_blank'><img src={twitter} className='rounded-[100px] w-[27px] ' /></Link>
                    <Link to='https://www.linkedin.com/company/caresync-health/' target='_blank'><img src={linkedin} className='rounded-[100px] w-[27px]' /></Link>
                </div>
              </div>
            </form>
          </div>
          <div className='lg:mt-0 mt-[4rem]'>
            <img src={img} className='lg:h-[85vh] xs:h-[70vh] rounded-[20px] ' />
          </div>
      </div>
    </div>
  );
};

export default WaitList;