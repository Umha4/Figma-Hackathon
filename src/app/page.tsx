import EditorPage from "@/components/editor";
import PractisePage from "@/components/practise";
import ProductPage from "@/components/product";
import SellerPage from "@/components/seller";
import UniversePage from "@/components/universe";
import Image from "next/image";
import ProductPag from "./products/pag";

export default function Home() {
  return (
    <main>
      <div className="relative w-full">
  <Image
    className="object-cover w-full h-[516px] sm:h-[400px] md:h-[500px] lg:h-[516px]"
    width={1030}
    height={716}
    src="/hero-1.jpg"
    alt="This is a hero image"
  />
  <div className="absolute top-0 left-0 right-0 bottom-0 sm:mt-[100px] sm:ml-[50px] md:mt-[150px] md:ml-[170px] w-[80%] sm:w-[90%] md:w-[450px] lg:w-[450px] h-[250px] bg-opacity-50 text-white p-4 sm:p-6">
    <p className="text-xs sm:text-sm">Summer 2022</p>
    <h1 className="text-4xl sm:text-3xl md:text-5xl font-bold mt-4 sm:mt-6">NEW COLLECTION</h1>
    <p className="mt-4 sm:mt-6 text-xs sm:text-sm">
      We know how large objects will act, <br />
      but things on a small scale.
    </p>
    <button className="w-[201px] h-[60px] bg-[#2DC071] mt-8 text-sm sm:text-base">
      Shop Now
    </button>
  </div>
</div>

      <EditorPage/>
      <SellerPage/>
      <ProductPage/>
      <UniversePage/>
      <PractisePage/>
      
    </main>
  );
}
