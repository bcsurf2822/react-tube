'use client';
import { SearchBar } from './components/searchBar';
const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

//.env info Most of the time we have 2 sets of keys - one set for each environment. So one set for "development" (to use to test your app while you're building it) and another for "production" (for you app to use once it's deployed for the world to see).


export default function Home() {
	const videoSearch = (term) => {

		console.log(term);
	};

	return (
		<div className='row justify-content-center'>
			<SearchBar onSearchTermChange={videoSearch} />
		</div>
	);
}