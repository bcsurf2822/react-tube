


//Role: The search bar component will be responsible for capturing user input for video searches.
//State: It will maintain a single piece of state: term, which represents the search query.
//Interaction: This term will be passed back to the Page component, which will handle making requests to the server based on the search term.


'use client';
import { useState } from 'react';

//  a named export is different then a default export
export const SearchBar = () => {
	const [term, setTerm] = useState('');

	console.log(term); // For debugging, this will log the current search term to the console

	return (
		<div className='search-bar'>
			<input onChange={(e) => setTerm(e.target.value)} value={term} />
		</div>
	);
};