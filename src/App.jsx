import React from 'react'
import Header from './Header'

import Content from './Content'
import Footer from './Footer'
import { useState } from 'react'
import AddItem from './AddItem'
const App = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: true,
      item: "Item 1"
    },
    {
      id: 2,
      checked: false,
      item: "Item 2"
    },
    {
      id: 3,
      checked: false,
      item: "Item 3"
    },
  ]);

  const [newItem, setNewItem] =useState('')

  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setItems(listItems);
    localStorage.setItem('shoppinglist', JSON.stringify(listItems));
  }
  // What happens inside map()?
  // If the id matches (meaning this is the item that was clicked), we create a new object for that item by copying its current data ({...item}) and then flipping its checked value (checked: !item.checked).
  // !item.checked means:
  // If it was true (checked), it becomes false (unchecked).
  // If it was false (unchecked), it becomes true (checked).
  // If the id doesn’t match, the item stays the same, untouched.

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem('shoppinglist', JSON.stringify(listItems));
  }

  const handleSubmit = () =>{
    console.log("Submitted Successfully")
  }

  return (
 
    <div className='App'>
      <Header />
      <AddItem
        newItem = {newItem}
        setNewItem = {setNewItem}
        handleSubmit = {handleSubmit}
      />
      <Content 
        items={items} 
        handleCheck={handleCheck} 
        handleDelete={handleDelete} 
      />
      <Footer 
        length={items.length}/
      >
    </div>
  )
}

export default App