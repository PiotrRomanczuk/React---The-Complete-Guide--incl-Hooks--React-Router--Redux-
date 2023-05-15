import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
	const BASE_URL = 'https://swapi.py4e.com/';
	const [movies, setMovies] = useState([]);

	const fetchMoviesHandler = () => {
		fetch(BASE_URL + '/api/films')
			.then((res) => {
				return res.json();
			})
			.then((data) => setMovies(data.results));
		// .catch((err) => console.error(err));
	};

	fetchMoviesHandler();

	return (
		<React.Fragment>
			<section>
				<button>Fetch Movies</button>
			</section>
			<section>
				<MoviesList movies={movies} />
			</section>
		</React.Fragment>
	);
}

export default App;
