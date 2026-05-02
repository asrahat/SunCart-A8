'use client'
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

const ProductCard = ({product}) => {
    // console.log(product,'product');

    return (
  
      <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 relative group"
    >
  
      <div className="relative h-90 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          sizes="300"
          fill
          className="object-cover group-hover:scale-110 transition duration-500"
        />

      </div>

   
      <div className="p-5">
        <h2 className="font-bold text-lg line-clamp-1">
          {product.name}
        </h2>

     
        <div className="flex items-center gap-1 mt-2">
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
          <span className="text-sm text-gray-500 ml-2">
            {product.rating}
          </span>
        </div>

      
        <div className="mt-3 flex justify-between items-center">
          <p className="text-xl font-extrabold text-[#FF9F1C]">
            ${product.price}
          </p>

          <span className="text-sm text-gray-500">
            Stock: {product.stock}
          </span>
        </div>

        <div className="mt-5 flex gap-2">
          <Link href={`/products/${product.id}`} className="w-full ">
            <button className="w-full cursor-pointer bg-[#0F172A] text-white py-2 rounded-xl hover:bg-[#FF9F1C] transition duration-300">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
    );
};

export default ProductCard;