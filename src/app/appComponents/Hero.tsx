import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
// import { useRouter } from 'next/navigation';

function Hero() {

  return (
    <div className="bg-white my-10 relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="./kalachakra.png"
          alt="Kalachakra background"
          className="w-full h-full object-contain object-center filter blur"
        />
        <div className="absolute inset-0 "></div>
      </div>
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 text-black">
          Connecting Modern Minds with Ancient Wisdom
        </h1>
        {/* <p className="text-lg sm:text-xl md:text-2xl text-white mb-8">
          The spiritual and healing research work and service of the last nine generations of my family are my spiritual roots.
        </p> */}
        <Button
          asChild
          className="h-14 w-44 bg-black text-[#e6ccb2] font-bold rounded-full text-base hover:bg-gray-900 transition-colors duration-200"
        >
          <a href="https://calendly.com/arkaconnection" target="_blank">
            Chat Now
          </a>
        </Button>
      </div>
    </div>
  )
}

export default Hero

// <div className='
    // h-full w-full flex flex-col justify-center items-center gap-y-20
    // sm:h-full sm:w-full sm:flex sm:flex-row sm:justify-between sm:items-center sm:gap-x-10
    // md:h-full md:w-full md:flex md:justify-between md:items-center md:gap-x-6
    // lg:h-full lg:w-full lg:flex lg:justify-between lg:items-center lg:gap-x-10
    // xl:h-full xl:w-full xl:flex xl:justify-between xl:items-center xl:gap-x-10
    // 2xl:h-full 2xl:w-full my-20 2xl:flex 2xl:justify-between 2xl:items-center 2xl:gap-x-10
    
    // bg-white 
    // '
    // id='heroDiv'
    // >
        
    //     <div className='
    //     ml-0 h-[15rem] w-[70%] flex justify-center items-center rounded-xl
    //     sm:ml-7 sm:h-[20rem] sm:w-[50%] sm:flex sm:justify-center sm:items-center sm:rounded-xl
    //     md:ml-10 md:h-[25rem] md:w-[60%] md:flex md:justify-center md:items-center md:rounded-xl
    //     lg:ml-14 lg:h-[30rem] lg:w-[50%] lg:flex lg:justify-center lg:items-center lg:rounded-xl
    //     xl:ml-20 xl:h-[33rem] xl:w-[50%] xl:flex xl:justify-center xl:items-center xl:rounded-xl
    //     2xl:ml-20 2xl:h-[38rem] 2xl:w-[50%] 2xl:flex 2xl:justify-center 2xl:items-center 2xl:rounded-xl'
        
    //     id='heroImageDiv'
    //     >
    //         <img src="https://arkaconnection.in/wp-content/uploads/2023/10/kalachakra-final.png" alt=""  className='h-full w-full' />
    //     </div>
        
    //     <div className=' 
    //     w-[80%] flex flex-col justify-center items-center gap-y-3
    //     sm:mr-5 sm:w-[50%] sm:flex sm:flex-col sm:justify-center sm:items-center sm:gap-y-3
    //     md:w-[40%] md:flex md:flex-col md:justify-center md:items-center md:gap-y-3
    //     lg:w-[50%] lg:flex lg:flex-col lg:justify-center lg:items-center lg:gap-y-3
    //     xl:w-[50%] xl:flex xl:flex-col xl:justify-center xl:items-center xl:gap-y-3
    //     2xl:w-[50%] 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center 2xl:gap-y-3  '>

    //         <div className='
    //         max-w-xl flex justify-center items-center text-center text-xl font-extrabold
    //         sm:max-w-xl sm:flex sm:justify-center sm:items-center sm:text-center   sm:text-lg sm:font-extrabold
    //         md:max-w-xl md:flex md:justify-center md:items-center md:text-center md:text-2xl md:font-extrabold
    //         lg:max-w-2xl lg:flex lg:justify-center lg:items-center lg:text-center lg:text-3xl lg:font-extrabold
    //         xl:max-w-2xl xl:flex xl:justify-center xl:items-center xl:text-center xl:text-5xl xl:font-extrabold
    //         2xl:max-w-2xl 2xl:flex 2xl:justify-center 2xl:items-center 2xl:text-center 2xl:text-5xl 2xl:font-extrabold
            
    //         text-black 
    //         '>
    //             Connecting Modern Minds with Ancient Wisdom
    //         </div>
    //         <div className='
    //         max-w-xl text-base text-center
    //         sm:max-w-xl sm:text-xs sm:text-center
    //         md:max-w-xl md:text-sm md:text-center
    //         lg:max-w-xl lg:text-base lg:text-center
    //         xl:max-w-xl xl:text-lg xl:text-center
    //         2xl:max-w-xl 2xl:text-lg 2xl:text-center 
            
    //         text-[#525e71] font-bold'>
    //             The spiritual and healing research work and service of the last nine generations of my family are my spiritual roots.
    //         </div>
    //         <Button className='
    //         mt-3 h-12 w-36 text-base
    //         sm:mt-3 sm:h-12 sm:w-36 sm:text-base
    //         md:mt-3 md:h-12 md:w-36 md:text-base
    //         lg:mt-3 lg:h-12 lg:w-36 lg:text-base
    //         xl:mt-3 xl:h-12 xl:w-36 xl:text-base
    //         2xl:mt-3 2xl:h-12 2xl:w-36 2xl:text-base 
            
    //         bg-black text-[#e6ccb2] font-bold rounded-full
    //         '
    //         >
    //             <a href="https://calendly.com/arkaconnection" target="_blank">Chat Now</a>
                
    //         </Button>
    //     </div>

    // </div>
