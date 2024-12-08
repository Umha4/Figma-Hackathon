import Image from "next/image"

const EditorPage = () => {
  return (
<main>
  <div className="w-[1000px] h-[580px]  ">

<div className='w-[550px] h-[40px]  ml-[350px]'>
  <h1 className='text-[#252B42] ml-24 '>EDITORS PICk</h1>
  <p className='text-[#737373] '>Problems trying to resolve the conflict between </p>
</div>
<div className='w-[1050px] lg:h-[500px] lg:flex gap-6'>
  <div className="flex">
    <Image
    className="w-[509px] h-[500px]"
    width={525}
    height={250}
    src="/edt-1.png"
    alt="this a img"
    />
  </div>
  <div>
    <Image
    width={240}
    height={500}
    src="/edt-2.png"
    alt="ths s a imagee"
  />
  </div>
  <div className="flex  gap-4 flex-col w-[240px] h-[500px]">
  <Image
  width={240}
  height={242}
  src="/edt-3.png"
  alt="this is amh"
  />
  <Image
  width={240}
  height={242}
  src="/edt-4.png"
  alt="this is amh"
  />
  </div>

</div>
  </div>
</main>
  )
}

export default EditorPage