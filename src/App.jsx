import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './FoodSerach/Navbar'
import SearchBar from './FoodSerach/SearchBar'
import ProductCard from './FoodSerach/ProductCard'
import { BrowserRouter as Router, Route, Routes,   } from 'react-router-dom';
import FoodDetails from './FoodSerach/FoodDetails';
import Footer from './FoodSerach/Footer';
import Cart from './FoodSerach/Cart';
 
 

// import './App.css'
// import Board from './Tic-Toe-Game/Board'

function App() {
  const [allFood, setAllFood] = useState([]);
  const [search, setSearch] = useState('jam');
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState([])

 

  
 
 

  const APP_ID = "b3972793"
  const APP_KEY = "91d4d909be31b7f05b7997fb6f2380b0"

  useEffect(() => {
    fetchFood()
    
  }, [ ])
  

  const fetchFood = async () => {
    try {
      setLoading(true)
      const res = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      const data = await res.json();
      setAllFood(data.hits);

      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }


  //add to cart fn 
  const addCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
    toast.success('Item added to cart!');
   

  };

  //remove form cart fn
  const remove =(ind)=>{
    setCart(cart.filter((item ,i )=>i !== ind))
    toast.error('Item remove from cart')
  }

  //remove All 

  const removeAll =()=>{
    setCart([])
    toast.warn('Your cart is Clean 🧹')
  }


  






  return (
    <>
      <Router>
      <Navbar cart={cart}/> 
        <ToastContainer />


        <Routes>
          <Route path="/" element={
            <>
              <SearchBar search={search} setSearch={setSearch}  allFood={allFood} fetchFood={fetchFood} />
              <ProductCard allFood={allFood} loading={loading} addCart={addCart} />

            </>

          } />
          <Route path="/product/:id" element={
            <>
              <FoodDetails allFood={allFood} loading={loading} addCart={addCart} />
              <Footer />

            </>
          } />

          <Route path='/cart' element={<Cart cart={cart} removeFromCart={remove} removeAll={removeAll} />} />
        </Routes>
      </Router>


      {/* <Board/> */}





    </>
  )
}

export default App



// for qr generate code 


// import React, { useState } from 'react'
 

// function App() {

//   const [inputValue, setInputValue] = useState('')
//   const [QR, setQR] = useState('')

//   const createQr = () => {
//    if (!inputValue) {
//     return alert('Your content is empty. Input something.')
//    }
//    setQR(`http://api.qrserver.com/v1/create-qr-code/?data=${inputValue}&size=[200]x[200]`)
//   }
//   return (
//     <div>
//       {/* Navbar  */}
       

//       {/* Main Content  */}
//       <div className=" container mx-auto">
//         {/* Top content */}
//         <div className="">
//           {/* Qr code title  */}
//           <h1 className='text-center text-white text-4xl mt-6 mb-2 font-bold'>
//             QR Code Generator
//           </h1>

//           {/* paragraph  */}
//           <p className='text-center text-white text-xl mb-3'>An instant creation of a QR code with any content.
//           </p>
//         </div>

//         {/* Search Input And Button  */}
//         <div className="flex justify-center">
//           <div className="input flex justify-center mt-5 mb-7 px-5 lg:px-0">
//             {/* Search Input  */}
//             <input
//               type="text"
//               value={inputValue}
//               onChange={e => setInputValue(e.target.value)}
//               placeholder='Write the content (link or text)'
//               className=' shadow-md text-white bg-[#2f3542] placeholder-gray-400 
//               rounded-l-lg px-2 py-2 w-64 lg:w-[30em] outline-none border-2 border-gray-600'
//             />

//             {/* Button  */}
//             <button
//             onClick={createQr}
//               className='bg-[#222f3e] px-4 rounded-r-lg text-white 
//               shadow-md border-b-2 border-r-2 border-t-2 border-gray-600 '>
//               Create
//             </button>
//           </div>
//         </div>

//         {/* Title And QR Code Image */}
//         {QR && <div className='qr-container'>
//           {/* title  */}
//           <h2 className="qr-title text-center text-2xl text-white font-semibold mb-5">
//             Here is your QR!
//           </h2>

//           {/* anchor tag and img tag  */}
//           <a className='flex justify-center'>
//             <img className='qr-image' src={QR} alt="QR code" />
//           </a>
//         </div>}
//       </div>
//     </div>
//   )
// }

// export default App