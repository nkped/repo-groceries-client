import Content from "./Content";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
import { useEffect, useState } from "react";

function App() {

  const [ items, setItems ] = useState( [] )

  //JSON.parse(localStorage.getItem('groceries')) ||

  const [ newItem, setNewItem ] = useState('')

  const [ search, setSearch ] = useState('')

  const API_URL = 'http://localhost:3500/items'


  const setAndSave = (newItems) => {    
    setItems(newItems)
    //localStorage.setItem('groceries', JSON.stringify(newItems) )
  } 


  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL)
        if(!response.ok) throw Error('Did not receive todo-list data from json-server')
        const listItems = await response.json()
        setItems(listItems)        
      } catch (err) {
        console.error(err.message)        
        }
    } 
    (async () => await fetchItems())()      
  }, [])

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
      <SearchItem 
        search={search} 
        setSearch={setSearch} 
        />
      <Content 
        items={items.filter((item) => ((item.item).toLowerCase()).includes(search.toLowerCase()))} 
        handleChecked={handleChecked} 
        handleDelete={handleDelete}
        />
    </div>
  );
}

export default App;