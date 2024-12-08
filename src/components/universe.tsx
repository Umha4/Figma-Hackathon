import Image from "next/image"

const UniversePage = () => {
  return (
    <main>
        {/* this is a main */}
        <div className="flex ">
            {/* tis ima */}
            <div className="w-[50%]">
            <Image
            className="pl-6 ml-20"
            width={425}
            height={474}
           src="/div-2.png" 
            alt="tisdi"
            />          
            </div>
            {/* text */}
            <div className="mt-[100px] w-[50%] ml-[130px]">
            <p className="mt-3">summer 2022</p>
          <h1 className="text-5xl font-bold mt-4 ">Part of the Neural 
          Universe</h1>
          <p className="mt-10">We know how large objects will act, <br />
          but things on a small scale.</p>
          <div className="mt-8">
          <button className="w-[136px] h-[45px] bg-[#2DC071] text-white">umar</button>
          <button className="w-[136px] h-[45px] ml-3 bg-[#2DC071] text-white">umar</button>
          </div>

            </div>
        </div>
    </main>
  )
}

export default UniversePage