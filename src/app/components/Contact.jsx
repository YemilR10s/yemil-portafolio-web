import React from 'react'
import PhoneImage from '../assets/phone.png'
import EmailImage from '../assets/mail.png'
import Image from 'next/image'

const Contact = () => {
  return (
        <div className="bg-black ">
         <div className="flex flex-col items-center justify-center lg:flex-row md:max-w-[1200px] m-auto">
           <div className="flex flex-col max-w-[500px] border-gray-600/30 rounded-xl md:border-4  md:gap-6 md:w-1/2">
               <div className="flex  justify-center items-center gap-6 p-4 md:mr-14 ">
                    <Image alt='Telefono Phone' src={PhoneImage} width={100} height={100}/>
                    <p className='text-white/60 text-xl'>+57 1382589287</p>
                </div>
                <div className="flex justify-center items-center gap-6 p-4 ">
                <Image alt='Telefono Phone' src={EmailImage} width={100} height={100}/>
                <p className='text-white/60 text-sm'>Info.devr10s@gmail.com</p>
                </div>
            </div> 


            <form action="https://getform.io/f/awngzlwb" method='POST' className=' max-w-[500px] md:w-1/2 text-white flex flex-col justify-center items-center gap-12 bg-gray-600/30 rounded-xl p-4 m-6'>
                <div className="">
                <h1 className='text-4xl text-orange-600 font-bold mt-5'>Les´t connect</h1>
                <p className='mt-3'>Send me a message and les´t schudule a call!</p>
                </div>
                 
                <div className="flex flex-wrap items-center justify-center gap-16">
                    <input name='name' type="text" required placeholder='Write your name' className='bg-transparent w-full outline-white/10 px-2 py-3 border border-white/20 rounded-md text-sm'/>
                    <input name='lastName' type="text" required placeholder='Write your lastName' className='bg-transparent w-full outline-white/10 px-2 py-3 border border-white/20 rounded-md text-sm'/>
                </div>
                
                <div className="flex flex-wrap items-center justify-center gap-16">
                    <input name='email' type="email" required placeholder='Write your email' className='bg-transparent w-full outline-white/10 px-2 py-3 border border-white/20 rounded-md  text-sm'/>
                    <input name='phone' type="tel" required placeholder='Write your phone' className='bg-transparent w-full outline-white/10 px-2 py-3 border border-white/20 rounded-md  text-sm'/>
                </div>
                <textarea name="message" id="" className='bg-transparent border-2 border-gray-400/20 w-full p-4 mx-4 rounded-xl' required placeholder='Write your massage'></textarea>
                <button className='bg-orange-600 w-[90%] mb-4 px-4 py-2 rounded-xl hover:bg-orange-400'>Send</button>
           
            </form> 
        </div>
        </div>
  )
}

export default Contact