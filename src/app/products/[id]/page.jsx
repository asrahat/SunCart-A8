
import Image from "next/image";
import { FaStar, FaShoppingCart } from "react-icons/fa";

const ProductDetailsPage = async({params}) => {
    const {id} = await params;
    // console.log(id,'id');
     const res = await fetch('https://sun-cart-a8-ez2o.vercel.app/data.json');
    const products = await res.json();
    const product = products.find(p=>p.id == id);
    console.log(product,'product');
    return (
           <div className="min-h-screen bg-[#FFF7E8] flex items-center justify-center p-6">

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 bg-white rounded-3xl shadow-2xl overflow-hidden">

   
        <div className="relative group bg-gray-50">

          <Image
            src={product.image}
            alt={product.name}
            width={700}
            height={700}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />


          <div className="absolute top-4 left-4 bg-[#FF9F1C] text-white px-4 py-1 rounded-full text-sm font-semibold">
            {product.category}
          </div>

          
        </div>

   
        <div className="p-8 flex flex-col justify-center">

 
          <p className="text-sm text-gray-500 uppercase tracking-widest">
            {product.brand}
          </p>


          <h1 className="text-3xl font-extrabold text-gray-800 mt-2">
            {product.name}
          </h1>

          <div className="flex items-center gap-2 mt-3">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={
                  i < Math.round(product.rating)
                    ? "text-yellow-400"
                    : "text-gray-300"
                }
              />
            ))}
            <span className="text-gray-500 ml-2">
              {product.rating}
            </span>
          </div>

          <p className="text-4xl font-extrabold text-[#FF9F1C] mt-5">
            ${product.price}
          </p>

 
          <p className="mt-2 text-sm text-gray-500">
            {product.stock > 0
              ? `In Stock (${product.stock} items)`
              : "Out of Stock"}
          </p>

   
          <p className="mt-5 text-gray-600 leading-relaxed">
            {product.description}
          </p>

   
          <div className="flex gap-4 mt-8">

            <button className="flex-1 flex items-center justify-center gap-2 cursor-pointer bg-[#0F172A] text-white py-3 rounded-xl hover:bg-[#FF9F1C] transition">
              <FaShoppingCart />
              Add to Cart
            </button>

            <button className="px-6 py-3 border cursor-pointer border-[#FF9F1C] text-[#FF9F1C] rounded-xl hover:bg-gray-100 transition">
              Buy Now
            </button>

          </div>

      
          <div className="mt-6 flex gap-3">
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              Free Delivery
            </span>

            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              7 Days Return
            </span>

            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              100% Original
            </span>
          </div>
        </div>
      </div>
    </div>
    );
};

export default ProductDetailsPage;