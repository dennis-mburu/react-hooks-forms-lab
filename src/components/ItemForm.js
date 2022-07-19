import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm(props) {
  
  const [newName, setNewName] = useState('')
  const [newCategory, setNewCategory] = useState('Produce')
  
  function handleNameChange(e){
    setNewName(e.target.value)
  }
  function handleCategoryChange(e){
    setNewCategory(e.target.value)
  }
  function handleSubmit(e){
    e.preventDefault()
    const newItem = {
      id: uuid(),
      name: newName,
      category: newCategory
    }
    props.onItemFormSubmit(newItem)
    // console.log(newItem) 
  }

 
  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleNameChange}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" >Add to List</button>
    </form>
  );
}

export default ItemForm;
