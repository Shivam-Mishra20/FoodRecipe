import React from 'react'
import { Link } from 'react-router-dom'

function Navbar({cart}) {
    return (
        <div className='main   lg:flex md:flex flex-wrap justify-between items-center 
     px-4  bg-[#5f518e]    py-4 shadow-md'>
            <div className="left">
                <div className="logo font-bold text-2xl text-black text-center">
                    Food App</div>
            </div>
            <div className="right">
                <ul className='   flex space-x-4 text-black justify-center'>
                    <Link to={'/'}><li className='  cursor-pointer'>Home</li></Link>
                    
                    <li className='  cursor-pointer'>About</li>
                    <li className='  cursor-pointer'>Contact</li>
                    <li className='  cursor-pointer'>Services</li>
                    <Link to={'/cart'}>
                    <li className='' style={{cursor:"pointer"}}>🛒{cart.length ==0 ? "":cart.length }</li></Link>
                </ul>
            </div>
        </div>
    )
}

export default Navbar