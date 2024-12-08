"use client";
import React, { useState } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function ProductList() {
  // Sample Product Data
  const products = [
    { id: 5, name: "App Development", price: 69, image: "/s-five.png" },
    { id: 5, name: "App Development", price: 69, image: "/s-five.png" },
    { id: 5, name: "App Development", price: 69, image: "/s-five.png" },
    { id: 4, name: "Graphic Design", price: 59, image: "/s-four.png" },
    { id: 5, name: "App Development", price: 69, image: "/s-five.png" },
    { id: 5, name: "App Development", price: 69, image: "/s-five.png" },
    { id: 5, name: "App Development", price: 69, image: "/s-five.png" },
    { id: 5, name: "App Development", price: 69, image: "/s-five.png" },
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
    <main className="bg-gray-50 min-h-screen px-4 sm:px-6 md:px-8">
      {/* Product List Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 px-4">
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
            <h3 className="text-lg font-semibold mt-4">{product.name}</h3>
            <p className="text-gray-500 mt-2">${product.price}</p>
          </div>
        ))}
      </div>

      {/* Showing Results Section */}
      <div className="flex flex-wrap justify-between items-center mt-6 px-4 sm:px-8">
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
      </div>

      {/* Filter Button */}
      <button className="text-[#23A6F0] border-2 border-[#23A6F0] py-2 px-6 rounded-md hover:bg-[#23A6F0] hover:text-white transition-all duration-300 mx-auto mt-4">
        Filter
      </button>

      {/* Sponsors Section */}
      <div className="w-full max-w-[1054px] h-[175px] mt-[60px] mx-auto border-8 flex flex-wrap items-center justify-around px-8 gap-4">
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
      </div>

      <div className='h-auto w-full mb-[60px] mt-[60px]'>

<h2 className='text-[48px] leading-[56px] flex justify-center text-[#333333]'>Questions Looks Here</h2>
<p className='text-[16px] leading-[24px] flex justify-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </p>


<div className="h-auto w-full grid grid-cols-1 md:grid-cols-2 gap-[20px] mt-[70px] px-[10px]">
{Array(6)
.fill(null)
.map((_, index) => (
<div
key={index}
className="bg-[#F7F7F7] h-[170px] md:h-auto w-full max-w-[648px] rounded-[8px] p-[35px] mx-auto "
>
<div className="flex justify-between items-center">
<h5 className="text-[18px] leading-[26px] text-[#333333]">
What types of chairs do you offer?
</h5>
<span className="h-[24px] w-[24px] text-center cursor-pointer">+</span>
</div>
<p className="text-[16px] leading-[24px] text-[#4F4F4F] mt-[10px]">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis
modi ullam amet debitis libero veritatis enim repellat optio natus eum
delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
</p>
</div>
))}
</div>


</div>
      

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
              <span className="h-[14px] w-[14px] rounded-full bg-[#23856D]"></span>
              <span className="h-[14px] w-[14px] rounded-full bg-[#23A6F0]"></span>
              <span className="h-[14px] w-[14px] rounded-full bg-[#E77C40]"></span>
              <span className="h-[14px] w-[14px] rounded-full bg-[#252B42]"></span>
            </div>
          </div>
        ))}
      </div> */}
    </main>
  );
}
