import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { SearchHistoryContext } from './SearchHistoryContext';
import { CartContext} from "./CartContext";
import { Card, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Suspense } from 'react';



// This is the search component which allows users to search for movies using search term, genre or release year.
// there are many state varibales to keep track of the search params
// it has 2 contexts: SearchHistoryContext and CartContext
// the useEffect hook is used (line 29) in order to fetch the list of movie genres when the component is first rendered
// the searchMovies function is used to search for movies based on params we said before.
// if the search term is provided then it will search based off of that.
// the loadMore fun is used to load more results by calling the searchMovies func
// The component returns a form will allow the user to input searches to peform the search or clear the history
// it renders search results and search history

const MovieDetails = React.lazy(() => import('./MovieDetails'));

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [genre, setGenre] = useState('');
    const [releaseYear, setReleaseYear] = useState('');
    const [results, setResults] = useState([]);
    const [genres, setGenres] = useState([]);
    const [page, setPage] = useState(1);

    const {searchHistory, addToHistory, removeFromHistory, clearHistory} = useContext(SearchHistoryContext);
    const {addToCart} = useContext(CartContext);

    useEffect(() => {
        const fetchGenres = async () => {
            let response;
            try {
                response = await axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=9105f25af58e70e7c344ea15f36e584f');
            } catch (error) {
                console.error(`Error occurred while fetching genres: ${error}`);
                return;
            }
            setGenres(response.data.genres);
        }

        fetchGenres();
    }, []);

    const searchMovies = async (term, genre, releaseYear, page) => {
        let url;
        let params;

        if (term) {
            url = 'https://api.themoviedb.org/3/search/movie';
            params = {
                api_key: '9105f25af58e70e7c344ea15f36e584f',
                query: term,
                include_adult: false,
                page
            };
        } else {
            url = 'https://api.themoviedb.org/3/discover/movie';
            params = {
                api_key: '9105f25af58e70e7c344ea15f36e584f',
                with_genres: genre,
                primary_release_year: releaseYear,
                page
            };
        }

        let response;
        try {
            response = await axios.get(url, {params});
        } catch (error) {
            console.error(`Error occurred while searching for movies: ${error}`);
            return;
        }
        setResults([...results, ...response.data.results]);
        addToHistory(term || genre || releaseYear);
    };

    const loadMore = () => {
        const newPage = page + 1;
        setPage(newPage);
        searchMovies(searchTerm, genre, releaseYear, newPage);
    }

    const repeatSearch = (term) => {
        setSearchTerm(term);
        searchMovies(term);
    };

    const backgroundImageStyle = {
         backgroundImage: 'url(https://img.freepik.com/free-photo/movie-background-collage_23-2149876017.jpg)',
        width: '18rem',
     };

    return (
        <div>
            <input type={"text"} value={searchTerm} onChange={e => setSearchTerm(e.target.value)} placeholder={"Search term"} />
            <select value={genre} onChange={e => setGenre(e.target.value)}>
                <option value="">Select a genre</option>
                {genres.map(genre => (
                    <option key={genre.id} value={genre.id}>{genre.name}</option>
                ))}
            </select>
            <input type="text" value={releaseYear} onChange={e => setReleaseYear(e.target.value)} placeholder="Release Year" />
            <button onClick={() => searchMovies(searchTerm, genre, releaseYear)}>Search</button>
            <button onClick={clearHistory}>Clear History</button>
            <div>
                <Row>
                    {results.map(movie => (
                        <Col key={movie.id} md={3}>
                            <Card style={backgroundImageStyle}>
                                <div className="text-white">
                                    <h3>{movie.title}</h3>
                                    <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
                                    <p>Price: 3.99</p>
                                    <p>Release Date : {movie.release_date}</p>
                                    <Button variant="primary" onClick={() => addToCart(movie)}>Add to Cart</Button>
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
            {results.length > 0 && <Button variant="success" onClick={loadMore}>Load More</Button>}
            <div className="text-white">
                <h2>Search History</h2>
                {searchHistory.map((term, index) => (
                    <div key={index}>
                        <Button variant="secondary" onClick={() => repeatSearch(term)}>{term}</Button>
                        <Button variant="danger" onClick={() => removeFromHistory(term)}>Delete</Button>
                    </div>
                ))}
            </div>
            {/* Lazy Load Movie Details */}
            <Suspense fallback={<div>Loading...</div>}>
                <MovieDetails />
            </Suspense>
        </div>
    );
};

export default Search;

