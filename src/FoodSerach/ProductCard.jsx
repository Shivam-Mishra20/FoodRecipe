import React from 'react'
import { Link, } from 'react-router-dom';

function ProductCard({ allFood, loading, addCart }) {




    return (
        <>
            {loading ?
                <div className='flex justify-center '>
                    <img className=' w-16 py-20' src="https://i.gifer.com/ZZ5H.gif" alt="" />
                </div>
                :
                <>
                    <div className='flex flex-wrap px-4 lg:px-10 '>
                        {allFood.map((item, index) => {
                            const { image, label, calories, dishType, cuisineType, ingredientLines
                            } = item.recipe
                            return (
                                <div className="p-2 md:w-1/3 w-full" key={index}  >
                                    <Link to={`/product/${index}`} className="block">
                                        <div className="bg-[#5841a1]  min-h-[550px]  h-full  p-3 rounded-2xl shadow-lg hover:-translate-y-1 border-2 border-gray-600">
                                            <img className='rounded-lg max-w-[200px]  mx-auto w-full mb-2' src={image} alt="" />
                                            <h2 className='text-xl text-black font-bold'>{label.substr(0, 25)}</h2>
                                            <h2 className='text-lg text-black'><span className="font-bold">Calories:</span> {calories}</h2>
                                            <h2 className='text-lg text-black'><span className='font-bold'>DishType:</span> {dishType}</h2>
                                            <h2 className='text-lg text-black mb-2'><span className='font-bold'>CuisineType:</span> {cuisineType}</h2>
                                            <h2 >ingredient USe</h2>
                                            {ingredientLines.slice(0, 5).map((line, i) => {
                                                return <p  className=' mt-2' style={{ fontFamily: "monospace" }} key={i}>{line }</p>
                                            })}
                                            <div className=" flex mt-3  space-x-2 justify-between">

                                                <button className='bg-[#706fd3] px-5 py-1.5 text-white rounded-lg' onClick={(e) => {
                                                    e.preventDefault();
                                                    console.log('Adding to cart:', item);
                                                    addCart(item);
                                                }}>Add to card</button>
                                                <button className='bg-[#ff4757] px-5 py-1.5 text-white rounded-lg'>Buy Now</button>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                </>
            }
        </>
    )
}

export default ProductCard