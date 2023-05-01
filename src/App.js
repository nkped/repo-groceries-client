import Content from "./Content";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
import apiRequest from "./apiRequest";
import { useEffect, useState } from "react";

function App() {

  const [ items, setItems ] = useState( [] )
  const [ newItem, setNewItem ] = useState('')
  const [ search, setSearch ] = useState('')
  const [ fetchError, setFetchError ] = useState(null)
  const [ isLoading, setIsloading ] = useState(true)

  const API_URL = 'http://localhost:3500/items'

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL)
        if(!response.ok) throw Error('Did not receive todo-list data from json-server')
        const listItems = await response.json()
        setItems(listItems)        
      } catch (err) {
        setFetchError(err.message)        
      } finally {
        setIsloading(false)
      }
    } 
    
    setTimeout(() => fetchItems(), 2000)

  }, [])

  const addItem = async (item) => {
    const id = items[items.length - 1].id + 1
    const myNewItem = { id, checked: false, item }
    const listItems = [...items, myNewItem ]
    setItems(listItems)

    const postOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(myNewItem)
    }
    const result = await apiRequest(API_URL, postOptions);
    if (result) setFetchError(result);
  }

  const handleSubmit = (e) => {    
    e.preventDefault()
    addItem(newItem)
    setNewItem('')
  }

  const handleChecked = async (id) => {
    const listItems = items.map((item) => ( item.id === id ? {...item, checked: !item.checked} : item ))
    setItems(listItems)

    const myItem = listItems.filter((item) => item.id === id)

    const updateOptions = {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({checked: myItem[0].checked})
    }

    const reqUrl = `${API_URL}/${id}`

    const result = await apiRequest(reqUrl, updateOptions)
    if (result) setFetchError(result)

  }

  const handleDelete = (id) => {
      const listItems = items.filter((item) => item.id !== id )
//      setAndSave(listItems)
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
      <main>
        { isLoading && <p>Loading items...</p> }
        { fetchError && !isLoading && <p style={{ color: 'red', margin: '10px'}} >{`${fetchError}`}</p>}
        <Content 
          items={items.filter((item) => ((item.item).toLowerCase()).includes(search.toLowerCase()))} 
          handleChecked={handleChecked} 
          handleDelete={handleDelete}
          />
      </main>
    </div>
  );
}

export default App;