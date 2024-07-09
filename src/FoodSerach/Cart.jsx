import React from 'react';
import { Link } from 'react-router-dom';

function Cart({ cart, removeFromCart, removeAll }) {

    console.log('Cart items:', cart); // Debug log
    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {cart.map((item, index) => {
                        const { image, label, calories, dishType, cuisineType } = item;
                        return (
                            <Link to={`/product/${index}`}>
                                <div key={index} className="bg-[#5f518e] p-3 rounded-2xl shadow-lg border-2 border-gray-600">
                                    <img className="rounded-lg w-full mb-2" src={image} alt={label} />
                                    <h2 className="text-xl text-black font-bold">{label}</h2>
                                    <h2 className="text-lg text-black"><span className="font-bold">Calories:</span> {calories}</h2>
                                    <h2 className="text-lg text-black"><span className="font-bold">Dish Type:</span> {dishType}</h2>

                                    <h2 className="text-lg text-black mb-2"><span className="font-bold">Cuisine Type:</span> {cuisineType}</h2>

                                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between ", padding: "6px" }}>
                                        <Link to={'/cart'}>
                                            <button className='bg-[#706fd3] px-5 py-1.5 text-white rounded-lg' onClick={() => removeFromCart(index)}>Remove </button></Link>
                                        <input type="text" value={1} style={{ width: "18px", textAlign: "center" }} />
                                        <Link to={'/'}>
                                            <button className='bg-[#706fd3] px-5 py-1.5 text-white rounded-lg'>Buy More</button>
                                        </Link>

                                    </div>


                                </div>

                            </Link>
                        );
                    })}




                </div>


            )}



            {cart.length === 0 ? <Link to={'/'}> <button className='bg-[#ff4757] mt-6 px-5 py-1.5 text-white rounded-lg'>Add More</button></Link> :<button className='bg-[#ff4757] px-5 py-1.5 mt-6 text-white rounded-lg' onClick={removeAll}>
                Remove All
            </button>}
        </div>
    );
}

export default Cart;
