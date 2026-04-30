import React from 'react';

const ProductsPage = async() => {
    const res=  await fetch('http://localhost:3000/data.json')
    const products = await res.json();
    console.log(products,'products');
    return (
        <div>
            {
                products.map(product=><p key={product.id}>{product.name}</p>)
            }
        </div>
    );
};

export default ProductsPage;