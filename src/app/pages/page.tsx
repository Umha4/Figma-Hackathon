"use client";
import Image from "next/image";
import { useState } from "react";
import { CiFacebook } from "react-icons/ci";

const Page = () => {
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
      : products.filter((product) =>
          product.name.toLowerCase().includes(selectedCategory.toLowerCase())
        );

  return (
    <main>
      <div className="h-[280px] w-full flex flex-col justify-center">
        <h3 className="text-[#737373] font-bold text-[16px] leading-[24px] flex justify-center">
          WHAT WE DO
        </h3>
        <h2 className="text-[#252B42] font-bold text-[58px] leading-[80px] flex justify-center">
          Innovation tailored for you
        </h2>
        <div className="flex item-center justify-center gap-5">
          <span className="text-[#252B42]">Home</span>
          <span className="text-[#737373]">{`>`}</span>
          <span className="text-[#737373]">Team</span>
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
              {/* If you need the icon with the price */}
              <p className="text-gray-500 mt-2">{product.price}</p>
              <p className="text-gray-500 mt-2">{product.price}</p>
              <p className="text-gray-500 mt-2">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Page;
