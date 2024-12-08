import React from 'react'
import Image from 'next/image'
import { SlSocialInstagram } from 'react-icons/sl'
import { IoLogoFacebook } from 'react-icons/io'
import { FaLinkedin, FaTwitter } from 'react-icons/fa'

const MyContact = () => {
  return (
    <main className="max-w-screen-2xl mx-auto px-6 py-10">
    {/* Contact Us Section */}
    <div className="w-full h-auto lg:flex">
      {/* Left Section */}
      <div className="one w-full lg:w-[50%] pt-10 lg:pt-[130px] lg:pl-[30px] space-y-6">
        <h3 className="text-[#252B42] font-bold text-[16px] leading-[24px]">
          CONTACT US
        </h3>
        <h2 className="text-[#252B42] font-bold text-[40px] lg:text-[58px] leading-[50px] lg:leading-[80px]">
          Get in touch today
        </h2>
        <p className="text-[#737373] text-[18px] lg:text-[20px] leading-[30px] font-medium">
          We know how large objects will act, but things on a small scale.
        </p>
        <p className="text-[#252B42] font-bold text-[20px] lg:text-[24px] leading-[32px]">
          Phone: +451 215 215
        </p>
        <p className="text-[#252B42] font-bold text-[20px] lg:text-[24px] leading-[32px]">
          Fax: +451 215 215
        </p>
  
        {/* Social Media Icons */}
        <div className="flex gap-5 mt-5">
          <SlSocialInstagram className="w-8 h-8 text-[#252B42]" />
          <IoLogoFacebook className="w-8 h-8 text-[#252B42]" />
          <FaTwitter className="w-8 h-8 text-[#252B42]" />
          <FaLinkedin className="w-8 h-8 text-[#252B42]" />
        </div>
      </div>
  
      {/* Right Section - Image */}
      <div className="two w-full lg:w-[50%] flex justify-center items-center mt-10 lg:mt-0">
        <Image
          className="h-[400px] lg:h-[700px] object-cover"
          height={700}
          width={800}
          src="/technology.png"
          alt="Image"
        />
      </div>
    </div>
  
    {/* Footer Section */}
    <div className="mt-20 text-center space-y-6">
      <h3 className="font-bold text-[16px] text-[#252B42] leading-[24px]">
        WE CANT WAIT TO MEET YOU
      </h3>
      <h2 className="text-[40px] lg:text-[58px] leading-[50px] lg:leading-[80px] font-bold text-[#252B42]">
        Lets Talk
      </h2>
      <div className='flex justify-center'>
        <button className="h-[52px] rounded-[10px] w-[189px] text-white bg-[#23a6f0] flex justify-center items-center">
          Try it free now!
        </button>
      </div>
    </div>
  </main>
  
    )
}

export default MyContact