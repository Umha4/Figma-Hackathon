import Image from "next/image"

const ProductPage = () => {
  return (
    <main>
        <div className='relative w-[1010px] mt-24 bg-[#23856D] '>     
        <div className="absolute top-0 justify-center item-center left-0 right-0 bottom-0 w-[60%] mt-[150px] ml-[170px] h-[250px]  bg-opacity-50 text-white">
          <p>summer 2022</p>
          <h1 className="text-5xl font-bold mt-10">Vita Classic <br /> Product</h1>
          <p className="mt-10">We know how large objects will act, <br />
          but things on a small scale.</p>
          <div className="flex items-center gap-8 mt-8">
  <p className="text-xl font-semibold">$16.48</p>
  <button className="w-[184px]  h-[52px] bg-[#2DC071] text-white text-lg font-bold rounded-[5px]">
    Shop Now
  </button>
</div>

      </div>
      <div className=" w-[40%] ml-[570px] pt-44 ">
        <Image
          className="object-cover w-[300px] h-[485px]"
          width={300}
          height={485}
          src="/c-product.png"
          alt="This is a hero image"
        />
         </div>

            </div>
    
    </main>
  )
}

export default ProductPage