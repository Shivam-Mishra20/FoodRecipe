import React from 'react'

function SearchBar({ allFood, search, setSearch, fetchFood }) {

  const handleKey = (e) => {
    if (e.key === "Enter") {
      fetchFood()
    }
  }




  return (
    <div>
      <div className="input flex justify-center  mt-10 mb-7 px-5 lg:px-0">
        <input
          type="text"
          value={search}
          placeholder='Search your recipe'
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKey}
          className=' shadow-md bg-gray-200 placeholder-gray-500 rounded-l-lg px-2 py-2 w-80 outline-none border-2 border-gray-600 ' />



        <button
          onClick={fetchFood}

          className='bg-[#F8EFBA] px-4 rounded-r-lg text-black shadow-md border-b-2 border-r-2 border-t-2 border-gray-600 '>
          Search
        </button>
      </div>
      {allFood ? "" : <h2 className=' font-extrabold focus-within:first-letter: text-center text-purple-600 text-lg font-mono '>For any receipe search easily on foodZilla 🍔</h2>}

    </div>
  )
}

export default SearchBar