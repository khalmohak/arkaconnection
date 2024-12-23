import React from 'react'

function SingleCourse( {courseImage, courseName}: {courseImage: string, courseName: string} ){

    return (
        <div className='
        h-40 w-40 flex flex-col justify-center items-center rounded-lg text-black transition-all delay-75 ease-linear hover:cursor-pointer hover:-translate-y-2
        sm:h-64 sm:w-64 sm:flex sm:flex-col sm:justify-center sm:items-center sm:rounded-lg sm:transition-all sm:delay-75 sm:ease-linear sm:hover:cursor-pointer sm:hover:-translate-y-2
        md:h-52 md:w-52 md:flex md:flex-col md:justify-center md:items-center md:rounded-lg md:transition-all md:delay-75 md:ease-linear md:hover:cursor-pointer md:hover:-translate-y-2
        lg:h-72 lg:w-72 lg:flex lg:flex-col lg:justify-center lg:items-center lg:rounded-lg lg:transition-all lg:delay-75 lg:ease-linear lg:hover:cursor-pointer lg:hover:-translate-y-2
        xl:h-96 xl:w-96 xl:flex xl:flex-col xl:justify-center xl:items-center xl:rounded-lg xl:transition-all xl:delay-75 xl:ease-linear xl:hover:cursor-pointer xl:hover:-translate-y-2
        2xl:h-96 2xl:w-96 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center 2xl:rounded-lg 2xl:transition-all 2xl:delay-75 2xl:ease-linear 2xl:hover:cursor-pointer 2xl:hover:-translate-y-2'>
                
                {/* IMAGE */}
                <div className=' 
                  shadow-lg
                  rounded-lg
                h-2/3 w-full flex justify-center items-center font-bold
                sm:h-2/3 sm:w-full sm:flex sm:justify-center sm:items-center sm:font-bold
                md:h-2/3 md:w-full md:flex md:justify-center md:items-center md:font-bold
                lg:h-2/3 lg:w-full lg:flex lg:justify-center lg:items-center lg:font-bold
                xl:h-2/3 xl:w-full xl:flex xl:justify-center xl:items-center xl:font-bold
                2xl:h-2/3 2xl:w-full 2xl:flex 2xl:justify-center 2xl:items-center 2xl:font-bold
                '>
                    <img src={courseImage} alt="" 
                    className='
                    h-full w-full rounded-lg border-2
                    sm:h-full sm:w-full sm:rounded-lg
                    md:h-full md:w-full md:rounded-lg
                    lg:h-full lg:w-full lg:rounded-lg
                    xl:h-full xl:w-full xl:rounded-lg
                    2xl:h-full 2xl:w-full 2xl:rounded-lg' />
                </div>

                {/* COURSE DETAILS */}
                <div className=' 
                h-1/3 w-full text-center flex justify-center items-start text-xs
                sm:h-1/3 sm:w-full sm:text-center sm:flex sm:justify-center sm:items-start sm:text-base
                md:h-1/3 md:w-full md:text-center md:flex md:justify-center md:items-start 
                lg:h-1/3 lg:w-full lg:text-center lg:flex lg:justify-center lg:items-start 
                xl:h-1/3 xl:w-full xl:text-center xl:flex xl:justify-center xl:items-start 
                2xl:h-1/3 2xl:w-full 2xl:text-center 2xl:flex 2xl:justify-center 2xl:items-start mt-4
                
                font-bold 
                ' >
                    {courseName}
                </div>

        </div>        
    )
}

function Courses() {

    const images = [ "./astrokapi.webp", "./vedantkapi.webp", "./bhava-lords.webp" ];
    const courseName = ["AstroKapi Live online Course", "VedantKapi - Gita Certificate Course", "Bhava Lords in Different Bhavas"]

  return (

    <div className='
    h-full max-w-[70rem] my-10 flex flex-col gap-y-10 justify-center items-center
    sm:h-full sm:max-w-[70rem] sm:my-10 sm:flex sm:flex-col sm:gap-y-10 sm:justify-center sm:items-center
    md:h-full md:max-w-[70rem] md:my-10 md:flex md:flex-col md:gap-y-10 md:justify-center md:items-center
    lg:h-full lg:max-w-[70rem] lg:my-10 lg:flex lg:flex-col lg:gap-y-10 lg:justify-center lg:items-center
    xl:h-full xl:max-w-[70rem] xl:my-10 xl:flex xl:flex-col xl:gap-y-10 xl:justify-center xl:items-center
    2xl:h-full 2xl:max-w-[70rem] 2xl:my-10 2xl:flex 2xl:flex-col 2xl:gap-y-10 2xl:justify-center 2xl:items-center '>

        <div className=' 
        text-2xl font-extrabold
        sm:text-3xl sm:font-extrabold
        md:text-3xl md:font-extrabold
        lg:text-3xl lg:font-extrabold
        xl:text-3xl xl:font-extrabold
        2xl:text-3xl 2xl:font-extrabold 
        
        text-[#344e41] ' >
            Our Courses and Offerings
        </div>

        <div className='
        h-full w-full grid grid-cols-2 gap-x-4 gap-y-5 place-content-center place-items-center
        sm:h-full sm:w-full sm:grid sm:grid-cols-2 sm:gap-x-10 sm:gap-y-10 sm:place-content-center sm:place-items-center
        md:h-full md:w-full md:grid md:grid-cols-3 md:gap-x-10 md:place-content-center md:place-items-center
        lg:h-full lg:w-full lg:grid lg:grid-cols-3 lg:gap-x-10 lg:place-content-center lg:place-items-center
        xl:h-full xl:w-full xl:grid xl:grid-cols-3 xl:gap-x-36 xl:place-content-center xl:place-items-center
        2xl:h-full 2xl:w-full 2xl:grid 2xl:grid-cols-3 2xl:gap-x-36 2xl:place-content-center 2xl:place-items-center'>
            
        {Array.from({ length: 3 }).map((_, index) => (
                <SingleCourse key={index} courseImage={images[index]} courseName={courseName[index]} />
            ))}

        </div>
    </div>
  )
}

export default Courses
