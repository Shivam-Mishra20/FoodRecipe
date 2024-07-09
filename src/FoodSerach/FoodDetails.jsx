import React from 'react'


import { Link, useParams } from 'react-router-dom';

function FoodDetails({ allFood, loading, addCart }) {
    const { id } = useParams();
    console.log(id)
    const product = allFood[id].recipe;

    // Fetch product details using the id
    // For demonstration, we'll just display the id
    return (
        <div className="p-10 flex  items-center w-full bg-purple-500  justify-center">
            <div className='  h-auto  m-auto'>
                <h1 className="text-3xl font-bold">{product.label}</h1>
                <img className="w-[250px] max-w-md rounded-lg my-4" src={product.image} alt={product.label} />
                <h2 className="text-xl">Calories: {product.calories}</h2>
                <h2 className="text-xl">Dish Type: {product.dishType}</h2>
                <h2 className="text-xl">Cuisine Type: {product.cuisineType}</h2>
                <div>
                    <div className=' flex items-center justify-between mt-3'>
                        <Link to={'/cart'} >
                            <div className=' px-4 py-3 bg-gray-400 text-white  rounded-3xl font-extrabold' onClick={(e) => {
                                e.preventDefault()
                                addCart(product)
                            }} >Add cart</div>
                        </Link>
                        <Link to={'/'}>
                            <div className=' px-4 py-3 bg-gray-400 text-white  rounded-3xl font-extrabold' >Back</div>
                        </Link>
                    </div>
                </div>
            </div>
            {/* Add more product details as needed */}
        </div>
    );
}


export default FoodDetails