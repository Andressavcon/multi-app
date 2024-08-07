import axios from 'axios';
import { useState } from 'react';
import styled from 'styled-components';

const CardMovie = styled.div`
  width: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 10rem;
  }
`;

export const MovieSearchEngine = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  const searchMovies = async () => {
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?s=${query}&apikey=d7bc9df7`
      );
      setMovies(response.data.Search);
    } catch (error) {
      console.error('Erro: ', error);
    }
  };
  return (
    <section>
      <h2>Movie Search Engine</h2>
      <input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <button onClick={searchMovies}>Search</button>
      <div className="movies">
        {movies &&
          movies.map((movie, index) => (
            <CardMovie key={index}>
              <img src={movie.Poster} alt="img-movie" />
              <p>{movie.Title}</p>
              <p>{movie.Year}</p>
            </CardMovie>
          ))}
      </div>
    </section>
  );
};
