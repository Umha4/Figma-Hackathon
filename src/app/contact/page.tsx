import MyContact from '@/components/MyContact'
import React from 'react'
import { CiLocationOn } from 'react-icons/ci'
import { IoCallOutline } from 'react-icons/io5'
import { TfiEmail } from 'react-icons/tfi'

const ContactPage = () => {
  return (
   <> <main>
     <div className="w-full h-auto px-6 py-8">
  {/* Header Section */}
  <div className="text-center">
    <p className="text-[14px] font-bold text-gray-700">VISIT OUR OFFICE</p>
    <h1 className="text-[32px] md:text-[40px] font-bold">We help small businesses</h1>
    <p className="text-[32px] md:text-[40px] font-bold">with big ideas</p>
  </div>

  {/* Cards Section */}
  <div className="w-full mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {/* Card 1 */}
    <div className="bg-[#737373] text-white p-8 rounded-lg text-center">
      <IoCallOutline className="text-6xl text-[#23A6F0] mx-auto" />
      <p className="mt-8">umarumarumaru@gmail.com</p>
      <p>umarumarumar@gmail.com</p>
      <h1 className="mt-6 font-bold">Get Started</h1>
      <button className="w-[193px] h-[54px] mt-8 border-2 border-[#23A6F0] rounded-full">
        Submit Request
      </button>
    </div>

    {/* Card 2 */}
    <div className="bg-[#252B42] text-white p-8 rounded-lg text-center">
      <CiLocationOn className="text-6xl text-[#23A6F0] mx-auto" />
      <p className="mt-8">umarumarumarumar@gmail.com</p>
      <p>umarumarumar@gmail.com</p>
      <h1 className="mt-6 font-bold">Get Started</h1>
      <button className="w-[193px] h-[54px] mt-8 border-2 border-[#23A6F0] rounded-full">
        Submit Request
      </button>
    </div>

    {/* Card 3 */}
    <div className="bg-[#737373] text-white p-8 rounded-lg text-center">
      <TfiEmail className="text-6xl text-[#23A6F0] mx-auto" />
      <p className="mt-8">umarumarumarumar@gmail.com</p>
      <p>umarumarumar@gmail.com</p>
      <h1 className="mt-6 font-bold">Get Started</h1>
      <div>
        <button className="w-[193px] h-[54px] mt-8 border-2 border-[#23A6F0] rounded-full">
        Submit Request
      </button>
      </div>
    </div>
  </div>
</div>


      
    </main>
    <MyContact/></>
  )
}

export default ContactPage