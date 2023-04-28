import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { useState } from 'react'


const Content = () => {
    
    const [ items, setItems ] = useState([ 
        {id: 1, checked: true, item: 'cookies'},
        {id: 2, checked: false, item: 'coffee'},
        {id: 3, checked: false, item: 'milk'}
        ])

    const handleChecked = (id) => {
        const listItems = items.map((item) => ( item.id === id ? {...item, checked: !item.checked} : item ))
        setItems(listItems)
    }

    const handleDelete = (id) => {
        const listItems = items.filter((item) => item.id !== id )
        setItems(listItems)
    }

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
                            onClick={() => handleDelete(item.id)} />
                    </li>
                ))}
            </ul>
    </main>
    )
}





export default Content