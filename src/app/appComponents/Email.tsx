'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useToast } from "@/hooks/use-toast"
import React, { useState } from 'react'

function Email() {

    const { toast } = useToast();
    const [userEmail, setUserEmail] = useState<string>('');

    const addToNewsletter = () => {

        if( userEmail === '' ){
            toast({
                title: "No email entered",
            })
        }
        else{
            toast({
                title: "You have been added to the newsletter",
            })
        }

    }

  return (
    <div className='
    h-56 w-[90%] my-20 bg-[#edf6f9] flex flex-col justify-between items-center rounded-lg 
    sm:h-32 sm:w-[80%] sm:my-20 sm:bg-[#edf2f4] sm:flex sm:flex-row sm:justify-between sm:items-center sm:rounded-lg 
    md:h-32 md:w-[80%] md:my-20 md:bg-[#edf2f4] md:flex md:justify-between md:items-center md:rounded-lg
    lg:h-32 lg:w-[80%] lg:my-20 lg:bg-[#edf2f4] lg:flex lg:justify-between lg:items-center lg:rounded-lg
    xl:h-32 xl:w-[90%] xl:my-20 xl:bg-[#edf2f4] xl:flex xl:justify-between xl:items-center xl:rounded-lg
    2xl:h-32 2xl:w-[90%] 2xl:my-20 2xl:bg-[#edf2f4] 2xl:flex 2xl:justify-between 2xl:items-center 2xl:rounded-lg ' >    

    {/* LEFT PART */}
    <div className='
    h-full w-full ml-0 flex flex-col gap-y-1 justify-center items-center
    sm:h-full sm:w-1/2 sm:ml-7 sm:flex sm:flex-col sm:gap-y-1 sm:justify-center sm:items-start
    md:h-full md:w-1/2 md:ml-7 md:flex md:flex-col md:gap-y-1 md:justify-center md:items-start
    lg:h-full lg:w-1/2 lg:ml-10 lg:flex lg:flex-col lg:gap-y-1 lg:justify-center lg:items-start
    xl:h-full xl:w-1/2 xl:ml-10 xl:flex xl:flex-col xl:gap-y-1 xl:justify-center xl:items-start
    2xl:h-full 2xl:w-1/2 2xl:ml-10 2xl:flex 2xl:flex-col 2xl:gap-y-1 2xl:justify-center 2xl:items-start '>
        <div className='
        text-xl font-extrabold text-black
        sm:text-xl sm:font-extrabold
        md:text-2xl md:font-extrabold
        lg:text-3xl lg:font-extrabold
        xl:text-3xl xl:font-extrabold
        2xl:text-3xl 2xl:font-extrabold'>
            Want to join us?
        </div>
        <div className='
        text-sm font-bold text-[#8d99ae]
        sm:text-sm sm:font-bold sm:text-[#8d99ae]
        md:text-base md:font-bold md:text-[#8d99ae]
        lg:text-base lg:font-bold lg:text-[#8d99ae]
        xl:text-base xl:font-bold xl:text-[#8d99ae]
        2xl:text-base 2xl:font-bold 2xl:text-[#8d99ae]'
        
        id='emailDivSmallText'
        >
            Subscribe to our email and get the latest notifications
        </div>
    </div>

    {/* RIGHT PART */}
    <div className='
    h-full w-full mr-0 flex justify-center items-center
    sm:h-full sm:w-1/2 sm:mr-7 sm:flex sm:justify-end sm:items-center
    md:h-full md:w-1/2 md:mr-7 md:flex md:justify-end md:items-center
    lg:h-full lg:w-1/2 lg:mr-10 lg:flex lg:justify-end lg:items-center
    xl:h-full xl:w-1/2 xl:mr-10 xl:flex xl:justify-end xl:items-center
    2xl:h-full 2xl:w-1/2 2xl:mr-10 2xl:flex 2xl:justify-end 2xl:items-center '>

        <div className='
        h-16 w-[70%] p-1 flex justify-center items-center bg-[#8d99ae] rounded-full
        sm:h-16 sm:w-[70%] sm:p-1 sm:flex sm:justify-center sm:items-center sm:bg-[#8d99ae]  sm:rounded-full
        md:h-16 md:w-[70%] md:p-1 md:flex md:justify-center md:items-center md:bg-[#8d99ae]  md:rounded-full
        lg:h-16 lg:w-[70%] lg:p-1 lg:flex lg:justify-center lg:items-center lg:bg-[#8d99ae]  lg:rounded-full
        xl:h-16 xl:w-[70%] xl:p-1 xl:flex xl:justify-center xl:items-center xl:bg-[#8d99ae]  xl:rounded-full
        2xl:h-16 2xl:w-[80%] 2xl:p-1 2xl:flex 2xl:justify-center 2xl:items-center 2xl:bg-[#8d99ae] 2xl:rounded-full' >

            <Input className=' 
            h-full w-[80%] text-black text-sm font-bold rounded-l-full bg-slate-200
            sm:h-full sm:w-[80%] sm:text-black sm:text-sm sm:font-bold sm:rounded-l-full sm:bg-slate-200
            md:h-full md:w-[70%] md:text-black md:text-sm md:font-bold md:rounded-l-full md:bg-slate-200
            lg:h-full lg:w-[70%] lg:text-black lg:text-lg lg:font-bold lg:rounded-l-full lg:bg-slate-200
            xl:h-full xl:w-[70%] xl:text-black xl:text-lg xl:font-bold xl:rounded-l-full xl:bg-slate-200
            2xl:h-full 2xl:w-[70%] 2xl:text-black 2xl:text-lg 2xl:font-bold 2xl:rounded-l-full 2xl:bg-slate-200'
            placeholder='Enter your email'
            value={userEmail}
            onChange={ (e) => setUserEmail(e.target.value) }
            >
            </Input>
            <Button className='
             transition-all
            duration-300 
            h-full w-[30%] text-sm font-bold rounded-r-full bg-[#8d99ae] hover:bg-[#9facc1]
            sm:h-full sm:w-[30%] sm:text-sm sm:font-bold sm:rounded-r-full sm:bg-[#8d99ae] sm:hover:bg-[#9facc1]
            md:h-full md:w-[30%] md:text-sm md:font-bold md:rounded-r-full md:bg-[#8d99ae] md:hover:bg-[#9facc1]
            lg:h-full lg:w-[30%] lg:text-lg lg:font-bold lg:rounded-r-full lg:bg-[#8d99ae] lg:hover:bg-[#9facc1]
            xl:h-full xl:w-[30%] xl:text-lg xl:font-bold xl:rounded-r-full xl:bg-[#8d99ae] xl:hover:bg-[#9facc1]
            2xl:h-full 2xl:w-[30%] 2xl:text-lg 2xl:font-bold 2xl:rounded-r-full 2xl:bg-[#8d99ae] 2xl:hover:bg-[#9facc1] '
            
            onClick={addToNewsletter}
            >
                Join
            </Button>

        </div>

    </div>

    </div>
  )
}

export default Email
