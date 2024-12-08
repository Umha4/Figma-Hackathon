import Image from "next/image";

const SellerPage = () => {
  return (
    <main>
      <div className="max-w-screen-lg  px-4  sm:mt-none">
        {/* Header Section */}
        <div className="text-center ">
          <p className="text-[#737373] text-xl">Featured Products</p>
          <h1 className="text-[#252B42] font-bold text-2xl">BESTSELLER PRODUCTS</h1>
          <p className="text-[#737373]">Problems trying to resolve the conflict between</p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {/* Product 1 */}
          <div className="flex flex-col items-center">
            <Image width={180} height={200} src="/sale-1.png" alt="Product 1" />
            <h2 className="mt-4">Graphic Design</h2>
            <h1 className="text-[#BDBDBD]">English Department</h1>
            <div className="flex items-center mt-2">
              <span className="text-[#BDBDBD]">$29</span>
              <span className="text-[#23856D] ml-2">$29</span>
            </div>
            <div className="flex gap-2 mt-2">
              <span className="h-[14px] w-[14px] rounded-full bg-[#23856D]"></span>
              <span className="h-[14px] w-[14px] rounded-full bg-[#23A6F0]"></span>
              <span className="h-[14px] w-[14px] rounded-full bg-[#E77C40]"></span>
              <span className="h-[14px] w-[14px] rounded-full bg-[#252B42]"></span>
            </div>
          </div>

          {/* Product 2 */}
          <div className="flex flex-col items-center">
            <Image width={180} height={200} src="/sale-2.png" alt="Product 2" />
            <h2 className="mt-4">Graphic Design</h2>
            <h1 className="text-[#BDBDBD]">English Department</h1>
            <div className="flex items-center mt-2">
              <span className="text-[#BDBDBD]">$29</span>
              <span className="text-[#23856D] ml-2">$29</span>
            </div>
            <div className="flex gap-2 mt-2">
              <span className="h-[14px] w-[14px] rounded-full bg-[#23856D]"></span>
              <span className="h-[14px] w-[14px] rounded-full bg-[#23A6F0]"></span>
              <span className="h-[14px] w-[14px] rounded-full bg-[#E77C40]"></span>
              <span className="h-[14px] w-[14px] rounded-full bg-[#252B42]"></span>
            </div>
          </div>

          {/* Product 3 */}
          <div className="flex flex-col items-center">
            <Image width={180} height={200} src="/sale-3.png" alt="Product 3" />
            <h2 className="mt-4">Graphic Design</h2>
            <h1 className="text-[#BDBDBD]">English Department</h1>
            <div className="flex items-center mt-2">
              <span className="text-[#BDBDBD]">$29</span>
              <span className="text-[#23856D] ml-2">$29</span>
            </div>
            <div className="flex gap-2 mt-2">
              <span className="h-[14px] w-[14px] rounded-full bg-[#23856D]"></span>
              <span className="h-[14px] w-[14px] rounded-full bg-[#23A6F0]"></span>
              <span className="h-[14px] w-[14px] rounded-full bg-[#E77C40]"></span>
              <span className="h-[14px] w-[14px] rounded-full bg-[#252B42]"></span>
            </div>
          </div>

          {/* Product 4 */}
          <div className="flex flex-col items-center">
            <Image width={180} height={200} src="/sale-4.png" alt="Product 4" />
            <h2 className="mt-4">Graphic Design</h2>
            <h1 className="text-[#BDBDBD]">English Department</h1>
            <div className="flex items-center mt-2">
              <span className="text-[#BDBDBD]">$29</span>
              <span className="text-[#23856D] ml-2">$29</span>
            </div>
            <div className="flex gap-2 mt-2">
              <span className="h-[14px] w-[14px] rounded-full bg-[#23856D]"></span>
              <span className="h-[14px] w-[14px] rounded-full bg-[#23A6F0]"></span>
              <span className="h-[14px] w-[14px] rounded-full bg-[#E77C40]"></span>
              <span className="h-[14px] w-[14px] rounded-full bg-[#252B42]"></span>
            </div>
          </div>
        </div>

        {/* Second Row of Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {/* Product 5 */}
          <div className="flex flex-col items-center">
            <Image width={180} height={200} src="/sal-5.png" alt="Product 5" />
            <h2 className="mt-4">Graphic Design</h2>
            <h1 className="text-[#BDBDBD]">English Department</h1>
            <div className="flex items-center mt-2">
              <span className="text-[#BDBDBD]">$29</span>
              <span className="text-[#23856D] ml-2">$29</span>
            </div>
            <div className="flex gap-2 mt-2">
              <span className="h-[14px] w-[14px] rounded-full bg-[#23856D]"></span>
              <span className="h-[14px] w-[14px] rounded-full bg-[#23A6F0]"></span>
              <span className="h-[14px] w-[14px] rounded-full bg-[#E77C40]"></span>
              <span className="h-[14px] w-[14px] rounded-full bg-[#252B42]"></span>
            </div>
          </div>

          {/* Product 6 */}
          <div className="flex flex-col items-center">
            <Image width={180} height={200} src="/sal-6.png" alt="Product 6" />
            <h2 className="mt-4">Graphic Design</h2>
            <h1 className="text-[#BDBDBD]">English Department</h1>
            <div className="flex items-center mt-2">
              <span className="text-[#BDBDBD]">$29</span>
              <span className="text-[#23856D] ml-2">$29</span>
            </div>
            <div className="flex gap-2 mt-2">
              <span className="h-[14px] w-[14px] rounded-full bg-[#23856D]"></span>
              <span className="h-[14px] w-[14px] rounded-full bg-[#23A6F0]"></span>
              <span className="h-[14px] w-[14px] rounded-full bg-[#E77C40]"></span>
              <span className="h-[14px] w-[14px] rounded-full bg-[#252B42]"></span>
            </div>
          </div>

          {/* Product 7 */}
          <div className="flex flex-col items-center">
            <Image width={180} height={200} src="/sal-7.png" alt="Product 7" />
            <h2 className="mt-4">Graphic Design</h2>
            <h1 className="text-[#BDBDBD]">English Department</h1>
            <div className="flex items-center mt-2">
              <span className="text-[#BDBDBD]">$29</span>
              <span className="text-[#23856D] ml-2">$29</span>
            </div>
            <div className="flex gap-2 mt-2">
              <span className="h-[14px] w-[14px] rounded-full bg-[#23856D]"></span>
              <span className="h-[14px] w-[14px] rounded-full bg-[#23A6F0]"></span>
              <span className="h-[14px] w-[14px] rounded-full bg-[#E77C40]"></span>
              <span className="h-[14px] w-[14px] rounded-full bg-[#252B42]"></span>
            </div>
          </div>

          {/* Product 8 */}
          <div className="flex flex-col items-center">
            <Image width={180} height={200} src="/sal-8.png" alt="Product 8" />
            <h2 className="mt-4">Graphic Design</h2>
            <h1 className="text-[#BDBDBD]">English Department</h1>
            <div className="flex items-center mt-2">
              <span className="text-[#BDBDBD]">$29</span>
              <span className="text-[#23856D] ml-2">$29</span>
            </div>
            <div className="flex gap-2 mt-2">
              <span className="h-[14px] w-[14px] rounded-full bg-[#23856D]"></span>
              <span className="h-[14px] w-[14px] rounded-full bg-[#23A6F0]"></span>
              <span className="h-[14px] w-[14px] rounded-full bg-[#E77C40]"></span>
              <span className="h-[14px] w-[14px] rounded-full bg-[#252B42]"></span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SellerPage;
