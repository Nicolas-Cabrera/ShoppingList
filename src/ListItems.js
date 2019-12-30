import React from 'react';

export default function ListItems(props) {

	const items = props.items;

	const listItems = items.map((item, index) => {
		return <div className='' key={index}>
			<p>{item}
				<span>
					<button onClick={() => props.deleteItem(item)}>Delete</button>
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