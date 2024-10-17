


//Role: The search bar component will be responsible for capturing user input for video searches.
//State: It will maintain a single piece of state: term, which represents the search query.
//Interaction: This term will be passed back to the Page component, which will handle making requests to the server based on the search term.
'use client';
import { useState } from 'react';

export const SearchBar = ({ onSearchTermChange }) => {
	const [term, setTerm] = useState('');

	return (
		<div className='search-bar'>
			<input
				value={term}
				onChange={(event) => {
					setTerm(event.target.value);
					onSearchTermChange(event.target.value);
				}}
			/>
		</div>
	);
};