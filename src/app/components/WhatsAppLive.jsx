import Image from 'next/image'
import React from 'react'
import whatsApp from "../assets/whatsapp.png"
import Link from 'next/link'

const WhatsAppLive = () => {
  return (
    
        <Link href='https://wa.me/message/HOFBU64X7I4EF1' className='cursor-pointer'>
            <Image alt='WhatsApp' src={whatsApp} className='w-[50px] h-[50px] object-cover animate-bounce '/>
        </Link>
    
  )
}

export default WhatsAppLive