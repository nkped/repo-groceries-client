import Content from "./Content";
import { useState } from "react";

function App() {

  const [ items, setItems ] = useState([ 
    {id: 1, checked: true, item: 'cookies'},
    {id: 2, checked: false, item: 'coffee'},
    {id: 3, checked: false, item: 'milk'}
    ])



  return (
    <div className="App"><h1>Hello!</h1>
  <Content 
    items={items} 
    setItems={setItems}
  />
    </div>
  );
}

export default App;
