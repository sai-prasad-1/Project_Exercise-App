import React from 'react';

const HeroBanner:React.FC = () => {

  const sendMail=():void=>{
    console.log("hii")  
  }

  return (
    <div className='w-[100vw] h-[100vh]'>
      <div className='w-full h-full herobg flex flex-col justify-center items-center'></div>
      <div className='w-full h-full  top-0 absolute flex justify-center items-center md:flex-row flex-col'>
      <div className='w-full h-full bg-overlay'></div>

      <div className='w-full h-full bg-[#111213ea] shadow-2xl flex items-center justify-center flex-col md:mb-0 mb-[-15%]'>
        <div className='md:w-[75%] w-[90%]  h-full flex flex-col justify-center '>
        <h1 className=" text-white md:text-6xl text-3xl font-black">You Only Fail <br /> When you Stop <br />Trying </h1>

        <h4 className='text-gray-300 mt-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi officia modi sint voluptatibus libero maiores.</h4>
        
        <div className="mt-7 space-x-5">

        <button className='button--gradient p-3' onClick={()=>sendMail()}>Get Started Now</button>
        <button className='text-orange-400 p-3'>Get Started Now</button>

        </div>
        
        </div>

      </div>

      </div>
    </div>
  )
}

export default HeroBanner