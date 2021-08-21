import React, { useState } from 'react';
import MovieAppDisplay from './MovieAppDisplay';

const MovieApp = () => {
    const [result, setResult] = useState();
    const [query, setQuery] = useState('');

    const fetcher = () => {

        let api_key = '29b70d95a85cb998fa335f41be3c2bc0'

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}&page=1`)
            .then(res => {
                if (res.status !== 200) {
                    throw new Error('fetch error');
                } else {
                    return res.json();
                }
            })
            .then(data => {
                if (data.results.length === 0) {
                    throw new Error('no error')
                } else {
                    const movieNum = Math.floor(Math.random() * data.results.length);
                    setResult(data.results[movieNum]);
                    console.log(data.results[movieNum])
                }
            })
            .catch(error => console.error(error))
    }

    return (
        <div className='main'>
            <div className='mainDiv'>
                <input value={query} onChange={(e) => setQuery(e.target.value)} />
                <button onClick={fetcher}>Click for Movie Pic Search</button>
                {!result || !result.poster_path ? null : <MovieAppDisplay movie={result}/>}
            </div>
        </div>
    )
}

export default MovieApp;

