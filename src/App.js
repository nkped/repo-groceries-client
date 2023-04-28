import Content from "./Content";
import AddItem from "./AddItem";
import { useState } from "react";

function App() {

  const [ items, setItems ] = useState([ 
    {id: 1, checked: true, item: 'cookies'},
    {id: 2, checked: false, item: 'coffee'},
    {id: 3, checked: false, item: 'milk'}
    ])

  const [ newItem, setNewItem ] = useState('')

  const handleChecked = (id) => {
    const listItems = items.map((item) => ( item.id === id ? {...item, checked: !item.checked} : item ))
    setItems(listItems)
  }

  const handleDelete = (id) => {
      const listItems = items.filter((item) => item.id !== id )
      setItems(listItems)
  }

  return (
    <div className="App"><h1>Hello!</h1>
  <AddItem 
    newItem={newItem} 
    setNewItem={setNewItem} />
  <Content 
    items={items} 
    handleChecked={handleChecked} 
    handleDelete={handleDelete}
    />
    </div>
  );
}

export default App;
