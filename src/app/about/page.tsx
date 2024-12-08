import Image from "next/image"
import { CiFacebook, CiTwitter } from "react-icons/ci"
import { LuInstagram } from "react-icons/lu"
const AboutPage = () => {
  return (
    <main className="max-w-screen-2xl mx-auto px-6 py-10 space-y-16">

    {/* About Company Section */}
    <div className="flex flex-wrap lg:flex-nowrap lg:w-[950px] lg:h-[545px] mx-auto">
      <div className="flex-1 space-y-6">
        <h1 className="text-[#252B42] text-xl font-bold">About Company</h1>
        <h2 className="text-[#252B42] text-4xl lg:text-5xl font-bold">About Us</h2>
        <p className="text-[#252B42]">We know how large objects will act, but things on a small scale.</p>
        <button className="w-[195px] h-[52px] bg-[#23A6F0] text-white font-bold">Get Quote Now</button>
      </div>
  
      <div className="flex justify-center items-center mt-8 lg:mt-0">
        <Image
          width={415}
          height={285}
          src="/umarr.png"
          alt="Company Image"
          className="object-cover"
        />
      </div>
    </div>
  
    {/* Problem Solving Section */}
    <div className="lg:w-[950px] mx-auto space-y-6">
      <h3 className="text-[#E74040] font-bold">Problems Solving</h3>
      <div className="flex flex-wrap lg:flex-nowrap gap-8">
        <p className="lg:w-1/2 text-[#252B42]">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
        </p>
        <p className="lg:w-1/2 text-[#737373]">
          Problems trying to resolve the conflict between the two major realms of Classical physics Newtonian mechanics.
        </p>
      </div>
    </div>
  
    {/* Company Stats Section */}
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:w-[950px] mx-auto">
      {[
        { label: "Happy Customers", value: "15K" },
        { label: "Monthly Visitors", value: "150K" },
        { label: "Countries Worldwide", value: "15" },
        { label: "Top Partners", value: "100+" },
      ].map((stat, index) => (
        <div key={index} className="text-center space-y-2">
          <h1 className="text-5xl font-bold">{stat.value}</h1>
          <p className="text-[#737373] text-[12px]">{stat.label}</p>
        </div>
      ))}
    </div>
  
    {/* Meet Our Team Section */}
    <div className="text-center space-y-6">
      <h1 className="text-3xl font-bold">Meet Our Team</h1>
      <p className="text-[#737373]">Problems trying to resolve the conflict between the two major realms of Classical physics Newtonian mechanics.</p>
  
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {["/o-1.jpg", "/o-2.png", "/o-1.jpg"].map((src, index) => (
          <div key={index} className="w-80 h-60 overflow-hidden">
            <Image
              width={300}
              height={210}
              src={src}
              alt="Team Member"
              className="w-full h-full object-cover"
            />
            <p className="text-center mt-2">UserName</p>
            <div className="flex justify-center gap-4 text-blue-700 mt-2">
              <CiFacebook />
              <CiTwitter />
              <LuInstagram />
            </div>
          </div>
        ))}
      </div>
    </div>
  
    {/* Sponsors Section */}
    <div className="text-center space-y-4">
      <h1 className="text-2xl font-bold">Big Companies Are Here</h1>
      <p className="text-[#737373]">Problems trying to resolve the conflict between the two major realms of Classical physics Newtonian mechanics.</p>
  
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-[1054px] mx-auto">
        {["/v-1.png", "/v-2.png", "/v-3.png", "/v-4.png", "/v-5.png", "/v-6.png"].map((src, index) => (
          <Image
            key={index}
            width={80}
            height={60}
            src={src}
            alt={`Sponsor ${index + 1}`}
            className="mx-auto"
          />
        ))}
      </div>
    </div>
  
    {/* Work With Us Section */}
    <div className="flex flex-wrap lg:flex-nowrap w-full lg:w-[950px] mx-auto rounded-lg overflow-hidden">
      <div className="flex-1 bg-[#2A7CC7] text-white p-10 space-y-6">
        <p className="text-xl font-bold">WORK WITH US</p>
        <h1 className="text-3xl font-bold">Now Lets Grow Yours</h1>
        <p className="text-sm">The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th century.</p>
        <button className="w-[132px] h-[42px] border-2 border-white">Button</button>
      </div>
  
      <div className="flex-1 bg-red-900">
        <Image
          width={600}
          height={737}
          src="/oonee.png"
          alt="Work With Us"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  
  </main>
  


  )
}

export default AboutPage