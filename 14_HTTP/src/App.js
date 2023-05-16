import React, { useState, useEffect, useCallback } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
	const [movies, setMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetchMoviesHandler();
	}, []);

	const BASE_URL = 'https://swapi.py4e.com/';

	const fetchMoviesHandler = useCallback(async () => {
		let dataLogged = false; // Flag variable to track if the data has been logged

		setIsLoading(true);
		setError(null);

		fetch(BASE_URL + '/api/films')
			.then((res) => res.json())
			.then((data) => {
				if (!dataLogged) {
					console.log(data.results); // Log the data only if it hasn't been logged before
					dataLogged = true; // Set the flag to true to indicate the data has been logged
				}
				setMovies(data.results);
				setIsLoading(false);
			})
			.catch((err) => setError(err.message));

		console.log(error);
	}, [error]);

	return (
		<React.Fragment>
			<section>
				<button onClick={fetchMoviesHandler}>Fetch Movies</button>
			</section>
			<section>
				{!isLoading && <MoviesList movies={movies} />}
				{isLoading && <p>Data is loading</p>}
			</section>
		</React.Fragment>
	);
}

export default App;
