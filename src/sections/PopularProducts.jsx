
import { products } from "../constants"
import PopularProductsCard from "../components/PopularProductsCard"


const PopularProducts = () => {
  return (
<section className="max-container max-sm:mt-12">
<div className="flex flex-col gap-5 justify-start">
<h2 className="text-4xl font-palanquin font-bold ">Our <span className="text-coral-red">Popular</span> Products</h2>
<p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">Discover sophistication and style with our curated collection of premium footwear, blending elegance with comfort for every occasion. From performance-driven sneakers to timeless loafers and chic heels, step into unparalleled quality and elevate your look effortlessly.</p>

</div>
<div className="grid mt-16 lg:grid-cols-4 md-grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-14 sm:gap:4">
  {products.map((product)=>(
    <PopularProductsCard key={product.name} imgUrl={product.imgURL} name={product.name} price={product.price} />
  )
  )}
</div>

</section>
  )
}

export default PopularProducts