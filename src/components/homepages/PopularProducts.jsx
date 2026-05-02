
import ProductCard from '../ui/ProductCard';

const PopularProducts = async() => {
    const res = await fetch('https://sun-cart-a8-ez2o.vercel.app/data.json');
    const products = await res.json();
    const popularProducts =  products.slice(0,3)
    // console.log(popularProducts,'products');
    return (
        <div className='container mx-auto my-10'> 
            <h2 className='text-3xl font-bold text-center mb-5'>Popular Products</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    popularProducts.map(product=><ProductCard key={product.id} product={product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default PopularProducts;