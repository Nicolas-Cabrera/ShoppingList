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

	return (
		<div className="App">
			<h1>Shopping List</h1>
			<form onSubmit={(e) => addItem(e)}>
				<input type='text'
					placeholder='Enter item'
					onChange={(e) => handleInput(e)}></input>
				<button type='submit'>Add Item</button>
			</form>
			<label>{items}</label>
			<ListItems/>
		</div>
	);
}

export default App;
