import React from 'react'

const SearchItem = ({ search, setSearch }) => {
  return (
    <form className='searchForm'>
        <label htmlFor='search'></label>
        <input 
            id='search' 
            placeholder='Search item here...' 
            type='text' 
            role='searchbox' 
            value={search} 
            onChange={(e) => setSearch(e.target.value)} 
            />
    </form>
  )
}

export default SearchItem