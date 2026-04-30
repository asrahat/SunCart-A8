'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaStar } from 'react-icons/fa';

const ProductCard = ({product}) => {
    console.log(product,'product');
    return (
  
        <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">

   
      <div className="relative overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          width={500}
          height={500}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
      </div>


      <div className="p-5">


        <h2 className="text-lg font-bold text-gray-800 line-clamp-1">
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
              size={14}
            />
          ))}

          <span className="text-sm text-gray-500 ml-2">
            ({product.rating})
          </span>
        </div>

 
        <div className="mt-3 flex items-center justify-between">
          <p className="text-xl font-extrabold text-[#FF9F1C]">
            ${product.price}
          </p>

          <p className="text-sm text-gray-500">
            Stock: {product.stock}
          </p>
        </div>

  
        <Link href={`/products/${product.id}`}>
          <button className="mt-5 w-full bg-[#0F172A] text-white py-2 rounded-xl font-semibold hover:bg-[#FF9F1C] transition-all duration-300">
            View Details
          </button>
        </Link>
      </div>
    </div>
    );
};

export default ProductCard;