import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import React, { useRef } from 'react';
import Logo from '../component/Logo';
import image1 from '../../../assets/images/image1.jpg'
gsap.registerPlugin(SplitText);
gsap.registerPlugin(useGSAP);

const Home = () => {
  

  return (
    <section className="relative w-full h-screen p-4">
      <Logo />  
      <div className="h-full p-4 flex flex-col lg:flex-row">
        <div className="w-1/2 h-full  flex justify-center items-center ">
        <div className="w-3/4 h-3/4 overflow-hidden  relative grid grid-cols-4 grid-rows-4  ">
        <img src={image1} className='absolute aspect-square object-cover -z-10'   />
        <div className="border-2 border-white ">
            <div className="w-1/2 h-full bg-white"></div>
        </div>
        <div className="border-2 border-white "></div>
        <div className="border-2 border-white "></div>
        <div className="border-2 border-white "></div>
        <div className="border-2 border-white "></div>
        <div className="border-2 border-white "></div>
        <div className="border-2 border-white "></div>
        <div className="border-2 border-white bg-white "></div>
        <div className="border-2 border-white "></div>
        <div className="border-2 border-white "></div>
        <div className="border-2 border-white "></div>
        <div className="border-2 border-white "></div>
        <div className="border-2 border-white "></div>
        <div className="border-2 border-white "></div>
        <div className="border-2 border-white "></div>
        <div className="border-2 border-white "></div>
        </div>
        </div>
        <div className="w-1/2 h-full flex flex-col justify-center border">

        </div>


        </div>    
      
    </section>
  );
};

export default Home;
