import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchValue, setSearchValue] = useState('');
  const [goods, setGoods] = useState(items)

  // function updateItems(item){
  //   setGoods([...goods, item])
  // }

  console.log(goods)

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  }).filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()));


  function handleNameSearch(event){
    setSearchValue(event.target.value)
    console.log(searchValue)
  }


  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleNameSearch}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} search={searchValue} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
