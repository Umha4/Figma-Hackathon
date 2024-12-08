import Image from "next/image"
import { CiStopwatch } from "react-icons/ci"
import { PiGreaterThanLight } from "react-icons/pi"
const PractisePage = () => {
  return (
  <main>
    <div>
        <p className='ml-[420px] font-[14px] mt-16'>Practise Advise</p>
        <h1 className='ml-[355px] text-3xl font-bold mt-3'>Featured Posts</h1>
        <p className='ml-[320px] mt-5'>Problems trying to resolve the conflict between</p> 
       <p className='ml-[260px]'> the two major realms of Classical physics: Newtonian mechanics </p>
    </div>
    <div className="flex justify-center item-center gap-[15px] mt-16">
        <div>
        <Image
        width={250}
        height={200}
        src="/one-1.png"
        alt="nfmngkti"/>
        <div className="flex gap-3 text-[#737373] mt-3">
        <p>google</p>
        <p>trading</p>
        <p>Now</p>
        </div>
        <div>
        <p>{`Loudest a la Madison #1 `}<br /> 
        (L integral)</p>
        </div>
        <div className="flex">
        <CiStopwatch className="mt-1 text-[#23A6F0]" /><p className="text-[14px]">22 April 2021</p>
        <p className="text-[14px] ml-8">10 commints</p>
        </div>
        <div className="w-[85px] flex h-[24px] mt-2">
            <button className="text-[14px]">Learn more  </button>  <p className="mt-1"><PiGreaterThanLight /></p>
           
        </div>
        </div>

        <div>
        <Image
        width={250}
        height={200}
        src="/one-2.png"
        alt="nfmngkti"/>
        <div className="flex gap-3 text-[#737373] mt-3">
        <p>google</p>
        <p>trading</p>
        <p>Now</p>
        </div>
        <div>
        <p>Loudest a la Madison #1 <br /> 
        (Lintegral)</p>
        </div>
        <div className="flex">
        <CiStopwatch className="mt-1 text-[#23A6F0]" /><p className="text-[14px]">22 April 2021</p>
        <p className="text-[14px] ml-8">10 commints</p>
        </div>
        <div className="w-[85px] flex h-[24px] mt-2">
            <button className="text-[14px]">Learn more  </button>  <p className="mt-1"><PiGreaterThanLight /></p>
        </div>
        </div>
        
        <div>
        <Image
        width={250}
        height={200}
        src="/one-3.png"
        alt="nfmngkti"/>
        <div className="flex gap-3 text-[#737373] mt-3">
        <p>google</p>
        <p>trading</p>
        <p>Now</p>
        </div>
        <div>
        <p>Loudest a la Madison #1 <br /> 
        (Lintegral)</p>
        </div>
        <div className="flex">
        <CiStopwatch className="mt-1 text-[#23A6F0]" /><p className="text-[14px]">22 April 2021</p>
        <p className="text-[14px] ml-8">10 commints</p>
        </div>
        <div className="w-[85px] flex h-[24px] mt-2">
            <button className="text-[14px]">Learn more  </button>  <p className="mt-1"><PiGreaterThanLight /></p>
           
        </div>
        </div>
    </div>
  </main>
)
}

export default PractisePage