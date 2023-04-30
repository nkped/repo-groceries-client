import Content from "./Content";
import AddItem from "./AddItem";
import { useState } from "react";

function App() {

  const [ items, setItems ] = useState(JSON.parse(localStorage.getItem('groceries')) || [] )

  const [ newItem, setNewItem ] = useState('')


  const setAndSave = (newItems) => {    
    setItems(newItems)
    localStorage.setItem('groceries', JSON.stringify(newItems) )
  } 

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1
    const myNewItem = { id, checked: false, item }
    const listItems = [ ...items, myNewItem ]
    setAndSave(listItems)
  }

  const handleSubmit = (e) => {    
    e.preventDefault()
    addItem(newItem)
    setNewItem('')
  }

  const handleChecked = (id) => {
    const listItems = items.map((item) => ( item.id === id ? {...item, checked: !item.checked} : item ))
    setAndSave(listItems)
  }

  const handleDelete = (id) => {
      const listItems = items.filter((item) => item.id !== id )
      setAndSave(listItems)
  }

  return (
    <div className="App"><h1>Groceries</h1>
      <AddItem
              newItem={newItem}
              setNewItem={setNewItem}
              handleSubmit={handleSubmit}
            />
        <Content 
          items={items} 
          handleChecked={handleChecked} 
          handleDelete={handleDelete}
          />
    </div>
  );
}

export default App;


/* [ 
  {id: 1, checked: true, item: 'cookies'},
  {id: 2, checked: false, item: 'coffee'},
  {id: 3, checked: false, item: 'milk'}
  ] */