import React from 'react';

export default function ListItems(props) {

	const items = props.items;

	const listItems = items.map((item, index) => {
		return <div className='list' key={index}>
			<p className='item-section'>
				<input className='checkbox' type='checkbox'/>
				<span className='list-item'>{item}</span>
				<span>
					<button className='delete-button' onClick={() => props.deleteItem(item)}>Delete</button>
				</span>
			</p>
		</div>
	})

	return (
		<div>
			{listItems}
		</div>
	)
}