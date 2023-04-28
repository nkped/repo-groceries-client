import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'


const Content = ({ items, handleChecked, handleDelete }) => {

    return (
        <main>
            <ul>
                {items.map((item) => (
                    <li className='item' key={item.id} >
                        <input 
                            type='checkbox' 
                            checked={item.checked} 
                            onChange={() => handleChecked(item.id)}

                            />
                        <label>{item.item}</label>
                        <FaTrashAlt 
                            role='button' 
                            tabIndex={0}
                            onClick={() => handleDelete(item.id)} 
                            />
                    </li>
                ))}
            </ul>
    </main>
    )
}





export default Content