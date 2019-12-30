import React, {useState} from 'react';
import './App.css';
import ListItems from './ListItems';

function App() {

	const [items, setItems] = useState([]);
	const [currentItem, setCurrentItem] = useState('');
	
	function handleInput(e) {
		setCurrentItem(e.target.value);
	}

	function addItem(e) {
		e.preventDefault();
		const newItem = currentItem;
		if(newItem !== '') {
			const newItems = [...items, newItem]; 
			setItems(newItems);
			setCurrentItem('');
		}
	}

	function deleteItem(index) {
		const filteredItems = items.filter(item => item!== index);
		setItems(filteredItems);
	}

	return (
		<div className="App">
			<h1>Shopping List</h1>
			<form onSubmit={(e) => addItem(e)}>
				<input type='text'
					placeholder='Enter item'
					value={currentItem}
					onChange={(e) => handleInput(e)}></input>
				<button type='submit'>Add Item</button>
			</form>
			<ListItems items = {items}
				deleteItem = {deleteItem}/>
		</div>
	);
}

export default App;
