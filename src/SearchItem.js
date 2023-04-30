import React from 'react'

const SearchItem = ({ search, setSearch }) => {
  return (
    <form className='searchForm'>
        <label htmlFor='search'></label>
        <input 
            id='search' 
            type='text' 
            placeholder='Search item here...' 
            value={search} 
            onChange={(e) => setSearch(e.target.value)} 
            />
    </form>
  )
}

export default SearchItem