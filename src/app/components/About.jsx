 import React from 'react'
import book from '../assets/book.png'
import card from '../assets/card.png'
import finance from '../assets/finance.png'
import pc from '../assets/pc.png'
import Image from 'next/image'

const About = () => {
  return (
    <>
      <div className="h-[100vh] flex items-center justify-center bg-[linear-gradient(to_bottom,#DBAF6E,#2B1942_80%,#000_90%)]">
        <div className="max-w-[1200px] grid grid-cols-8 gap-6">

          <div className="flex p-6 col-span-5 bg-white/10 rounded-lg border border-white/20 relative">
            <div className="absolute bg-gradient-to-r from-orange-500 via-purple-700 to-black inset-0 opacity-30 animation-gradient"></div>
            <Image alt='' src={book} className='w-[150px] h-[150px]'/>
            <div className="flex flex-col p-4 mt-4">
              <h2 className='text-xl text-white/80 font-bold'>Book Store</h2>
              <p className='text-xl text-white/80 font-bold mt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam quis nostrum recusandae est molestias consequatur quae aliquid corrupti liber</p>
            </div>
          </div>

          <div className="flex p-6 col-span-3 bg-white/10 rounded-lg border border-white/20 relative">
            <div className="absolute bg-gradient-to-r from-orange-500 via-purple-700 to-black inset-0 opacity-30 animation-gradient"></div>
            <Image alt='' src={card} className='w-[150px] h-[150px]'/>
            <div className="flex flex-col p-4 mt-4">
              <h2 className='text-xl text-white/80 font-bold'>Card Store</h2>
              <p className='text-xl text-white/80 font-bold mt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div>
          </div>

          <div className="flex p-6 col-span-3 bg-white/10 rounded-lg border border-white/20 relative">
            <div className="absolute bg-gradient-to-r from-orange-500 via-purple-700 to-black inset-0 opacity-30 animation-gradient"></div>
            <Image alt='' src={finance} className='w-[150px] h-[150px]'/>
            <div className="flex flex-col p-4 mt-4">
              <h2 className='text-xl text-white/80 font-bold'>Finance Store</h2>
              <p className='text-xl text-white/80 font-bold mt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div>
          </div>

          <div className="flex p-6 col-span-5 bg-white/10 rounded-lg border border-white/20  relative">
            <div className="absolute bg-gradient-to-r from-orange-500 via-purple-700 to-black inset-0 opacity-30 animation-gradient"></div>
            <Image alt='' src={pc} className='w-[150px] h-[150px]'/>
            <div className="flex flex-col p-4 mt-4">
              <h2 className='text-xl text-white/80 font-bold'>Computer Store</h2>
              <p className='text-xl text-white/80 font-bold mt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam quis nostrum recusandae est molestias consequatur quae aliquid corrupti liber</p>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default About 
















{/* <div className="h-[100vh] bg-[linear-gradient(to_bottom,#DBAF6E,#2B1942_80%,#000_90%)]">
<div className="max-w-[1200px] mx-auto grid grid-cols-8 gap-8 place-items-center">
  <div className="w-full col-span-5 bg-white/10 rounded-xl border border-white/20 relative">
   <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradiant-xy"></div>
    <div className="flex flex-row p-6">
      <Image alt='' src={book} className='w-auto h-[130px]'/>
      <div className="flex flex-col mt-4">
        <h2 className='text-2xl font-bold text-white/80'>Education</h2>
        <p className='text-lg text-white/70 mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi neque ea ex quaerat sit, voluptatem accusantium iste veniam? Dolores, inventore aliquam placeat</p>
      </div>
    </div>
  </div>

  <div className="w-full col-span-3 bg-white/10 rounded-xl border border-white/20 relative">
    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradiant-xy"></div>
    <div className="flex flex-row p-6">
      <Image alt='' src={card} className='w-auto h-[130px]'/>
      <div className="flex flex-col mt-4">
        <h2 className='text-2xl font-bold text-white/80'>Experience</h2>
        <p className='text-lg text-white/70 mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus hic maiores </p>
      </div>
    </div>
  </div>

  <div className="w-full col-span-3 bg-white/10 rounded-xl border border-white/20 relative ">
  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradiant-xy"></div>
    <div className="flex flex-row p-6">
      <Image alt='' src={finance} className='w-auto h-[130px]'/>
      <div className="flex flex-col mt-4">
        <h2 className='text-2xl font-bold text-white/80'>Problem-solving</h2>
        <p className='text-lg text-white/70 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid perspiciatis</p>
      </div>
    </div>
  </div>

  <div className="w-full col-span-5 bg-white/10 rounded-xl border border-white/20 relative">
  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradiant-xy"></div>
    <div className="flex flex-row p-6">
      <Image alt='' src={pc} className='w-auto h-[130px]'/>
      <div className="flex flex-col mt-4">
        <h2 className='text-2xl font-bold text-white/80'>Technical Skills</h2>
        <p className='text-lg text-white/70 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ipsum officia, harum fugiat officiis soluta, commodi dolores alias beatae maiores</p>
      </div>
    </div>
  </div>
</div>
</div> */}