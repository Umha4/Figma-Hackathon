"use client"
import Image from "next/image"
import { useState } from "react";
import { CiFacebook } from "react-icons/ci";




const page = () => {
  const products = [
    { id: 5, name: "UserName", price: <CiFacebook />, image: "/s-five.png" },
    { id: 5, name: "UserName", price: <CiFacebook />, image: "/s-five.png" },
    { id: 5, name: "UserName", price: <CiFacebook />, image: "/s-five.png" },
    { id: 4, name: "UserNamen", price: <CiFacebook />, image: "/s-four.png" },
    { id: 5, name: "UserName", price: <CiFacebook />, image: "/s-five.png" },
    { id: 5, name: "UserName", price: <CiFacebook />, image: "/s-five.png" },
    { id: 5, name: "UserName", price: <CiFacebook />, image: "/s-five.png" },
    { id: 5, name: "UserName", price: <CiFacebook />, image: "/s-five.png" },
  ];
  
  // Filter state
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const categories = ["All", "Design", "Development", "Marketing"];
  
  // Filter products based on category
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.name.toLowerCase().includes(selectedCategory.toLowerCase()));
  return (
    <main>
      <div className='h-[280px] w-full flex flex-col justify-center'>
       <h3 className='text-[#737373] font-bold text-[16px] leading-[24px] flex justify-center'>WHAT WE DO</h3>
       <h2 className='text-[#252B42] font-bold text-[58px] leading-[80px] flex justify-center'>Innovation tailored for you</h2>
       <div className='flex item-center justify-center gap-5'>
        <span className='text-[#252B42]'>Home</span>
        <span className='text-[#737373]'>{`>`}</span>
        <span className='text-[#737373]'>Team</span>
       </div>
      </div>

      <main className="max-w-screen-2xl mx-auto px-4 lg:px-8 h-auto mt-[100px] mb-[80px] flex flex-col lg:flex-row gap-[15px]">
      {/* Left Section */}
      <div className="left w-full lg:w-[50%]">
        <Image
          className="w-full h-auto lg:h-[648px] object-cover rounded-[10px]"
          height={100}
          width={100}
          src="/sale-1.png"
          alt="img"
        />
      </div>

      {/* Right Section */}
      <div className="right w-full lg:w-[50%] grid grid-cols-1 sm:grid-cols-2 gap-[15px]">
        {/* Top Images */}
        <div>
          <Image
            className="w-full h-auto sm:h-[300px] lg:h-[312px] object-cover rounded-[10px]"
            height={100}
            width={100}
            src="/sale-2.png"
            alt="img"
          />
        </div>
        <div>
          <Image
            className="w-full h-auto sm:h-[300px] lg:h-[312px] object-cover rounded-[10px]"
            height={100}
            width={100}
            src="/sale-3.png"
            alt="img"
          />
        </div>

        {/* Bottom Images */}
        <div>
          <Image
            className="w-full h-auto sm:h-[300px] lg:h-[312px] object-cover rounded-[10px]"
            height={100}
            width={100}
            src="/sale-4.png"
            alt="img"
          />
        </div>
        <div>
          <Image
            className="w-full h-auto sm:h-[300px] lg:h-[312px] object-cover rounded-[10px]"
            height={100}
            width={100}
            src="/sale-1.png"
            alt="img"
          />
        </div>
      </div>
    </main>

      {/* <main className="bg-gray-50 min-h-screen px-4 sm:px-6 md:px-8"> */}
      {/* Product List Section */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 px-4">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md p-4 rounded-md hover:scale-105 transform transition-all duration-300 ease-in-out"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={150}
              height={120}
              className="rounded-md object-cover w-full h-auto"
            />
            <h3 className="text-lg font-semibold mt-4 flex justify-center">{product.name}</h3>
            <div className="flex justify-center items-center gap-3">
            <p className="text-gray-500 mt-2">{product.price}</p>
            <p className="text-gray-500 mt-2">{product.price}</p>
            <p className="text-gray-500 mt-2">{product.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Showing Results Section */}
      {/* <div className="flex flex-wrap justify-between items-center mt-6 px-4 sm:px-8">
        <p className="text-sm font-bold">Showing All {filteredProducts.length} Results</p>
        <p className="flex items-center gap-2 text-sm">
          Views:
          <Image
            src="/Vector-1.png"
            alt="views icon"
            width={10}
            height={10}
            className="bg-blue-500"
          />
        </p>
      </div> */}

      {/* Filter Button */}
      {/* <button className="text-[#23A6F0] border-2 border-[#23A6F0] py-2 px-6 rounded-md hover:bg-[#23A6F0] hover:text-white transition-all duration-300 mx-auto mt-4">
        Filter
      </button> */}

      {/* Sponsors Section */}
      {/* <div className="w-full max-w-[1054px] h-[175px] mt-[60px] mx-auto border-8 flex flex-wrap items-center justify-around px-8 gap-4">
        {[
          "/v-1.png", "/v-2.png", "/v-3.png",
          "/v-4.png", "/v-5.png", "/v-6.png"
        ].map((src, index) => (
          <Image
            key={index}
            width={80}
            height={60}
            src={src}
            alt={`Sponsor ${index + 1}`}
            className="mx-2"
          />
        ))}
      </div> */}

     

      {/* Responsive Product Cards Section */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 mt-8">
        {[
          "/sale-1.png", "/sale-2.png", "/sale-3.png", "/sale-4.png",
          "/sal-5.png", "/sal-6.png", "/sal-7.png", "/sal-8.png",
          "/sale-3.png", "/sale-4.png", "/sale-1.png", "/sale-2.png",
        ].map((src, index) => (
          <div key={index} className="bg-white p-4 rounded-md shadow-md hover:scale-105 transition-all duration-300">
            <Image
              width={180}
              height={200}
              src={src}
              alt="Product Image"
              className="w-full h-auto object-cover"
            />
            <h2 className="ml-5 mt-5 text-lg font-semibold">Graphic Design</h2>
            <h1 className="text-[#BDBDBD] ml-5">English Department</h1>
            <div className="flex justify-between items-center ml-5 mt-2">
              <span className="text-[#BDBDBD]">$29</span>
              <span className="text-[#23856D]">$29</span>
            </div>
            <div className="flex gap-2 ml-5 mt-2">
              <span className="h-[14px] w-[14px] rounded-full bg-[#23856D]"></span> */}
              {/* <span className="h-[14px] w-[14px] rounded-full bg-[#23A6F0]"></span>
              <span className="h-[14px] w-[14px] rounded-full bg-[#E77C40]"></span>
              <span className="h-[14px] w-[14px] rounded-full bg-[#252B42]"></span>
            </div> */}
          {/* </div> */}
        {/* ))} */}
      {/* </div> */}
    {/* </main> */}
    </main>
  )
}

export default page