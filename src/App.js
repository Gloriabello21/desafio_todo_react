import { useState } from 'react';
import './App.css';
import Todo from './components/Todo';

function App() {
  const defaultState = [
    { label: "comprar mantequilla" },
    { label: "comprar pan" },
    { label: "pagar la luz" },
    { label: "comprar ropa" },
    { label: "pagar el agua" }
  ]

  const [items, setItems] = useState(defaultState)
  const [newItem, setNewItem] = useState('')



  const deleteFn = (label) => {
    setItems(items.filter(item => item.label !== label))
  }
  const deleteNm = () => {
    setItems ([])
  }

  const list = items.map(item => {
    return <Todo 
      onClickfn={() => deleteFn(item.label)}>                                                         
      {item.label}
    </Todo>
  })
  const onClickfn = () => {
    setItems([...items, { label: newItem }])
  }
    const onChangeFn = (event) => {
      setNewItem(event.target.value)
    }
  
  return (
    <div className="App">
      <h1>Mi lista de cosas por hacer</h1>

      <input
        type="text"
        value={newItem}
        onChange={onChangeFn}
      />
      <button onClick={onClickfn} >Agregar</button>

      {list}

    <h2>Total de cosas en la Lista</h2>

    <br />
            
            
    <button onClick={deleteNm}>eliminar todo</button>

    </div>
  )
}




export default App;
