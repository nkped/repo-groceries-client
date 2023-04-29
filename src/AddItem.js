import React from 'react'

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
  return (
    <form className='addForm' onSubmit={handleSubmit}>
      <input 
        autoFocus
        type="text" 
        placeholder='Type new grocery item here...' 
        value={newItem} 
        onChange={(e) => setNewItem(e.target.value)} 
        />
        <button 
          type='submit'>+</button>
    </form>
  )
}

export default AddItem