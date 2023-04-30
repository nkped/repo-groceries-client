import React from 'react'

const SearchItem = () => {
  return (
    <form className='searchForm'>
        <label htmlFor='search'></label>
        <input 
            id='search' 
            type='text' 
            placeholder='Search item here...' />
    </form>
  )
}

export default SearchItem