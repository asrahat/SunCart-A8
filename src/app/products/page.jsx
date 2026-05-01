import ProductCard from '@/components/ui/ProductCard';
import React from 'react';

const ProductsPage = async() => {
    const res=  await fetch(`${process.env.BETTER_AUTH_URL}/data.json`)
    const products = await res.json();
    console.log(products,'products');
    return (
        <div className='container mx-auto mt-10'>
            <h2 className='text-3xl font-bold mb-10'>All Summer Essential Products </h2>
            <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-3'>
                {
                products.map(product=><ProductCard key={product.id} product={product}></ProductCard>)
            }
            </div>
        </div>
    );
};

export default ProductsPage;