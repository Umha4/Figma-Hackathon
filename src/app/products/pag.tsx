import Image from "next/image"
const ProductPag = () => {
  return (
    <main>
        <div>
            <div>
                <p>Home / About</p>
            </div>
            <div>
                <Image
                width={100}
                height={100}
                src="/product-2.png"
                alt='this is a image'
                />
            </div>
        </div>
    </main>
  )
}

export default ProductPag