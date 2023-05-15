import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
	const BASE_URL = 'https://swapi.py4e.com/';
	const [movies, setMovies] = useState([]);

	const fetchMoviesHandler = () => {
		let dataLogged = false; // Flag variable to track if the data has been logged

		fetch(BASE_URL + '/api/films')
			.then((res) => res.json())
			.then((data) => {
				if (!dataLogged) {
					console.log(data.results); // Log the data only if it hasn't been logged before
					dataLogged = true; // Set the flag to true to indicate the data has been logged
				}
				setMovies(data.results);
			});
	};

	return (
		<React.Fragment>
			<section>
				<button onClick={fetchMoviesHandler}>Fetch Movies</button>
			</section>
			<section>
				<MoviesList movies={movies} />
			</section>
		</React.Fragment>
	);
}

export default App;
