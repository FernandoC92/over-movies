import Axios from 'axios';
import React, { forwardRef, useImperativeHandle, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../MovieCard/MovieCard.component'
import './MainHall.component.scss'

const MainHall = forwardRef((props, ref) => {
    const apiUrl = 'http://localhost:5000/api/movies';
    const apiUrlSearch = 'http://localhost:5000/api/query';

    const [movies, setMovies] = useState([]);
    // eslint-disable-next-line no-unused-vars
    const memoizedValue = useMemo(() => getAllMovies(), []);

    useImperativeHandle(ref, () => ({

        getMoviesByName(searchString) {
            if (searchString === '') {
                getAllMovies();
            } else {
                Axios.get(`${apiUrlSearch}/${searchString}`)
                    .then(res => {
                        setMovies(res.data);
                    })
                    .catch(err => console.error(err));
            }
        }

    }));

    function getAllMovies() {
        Axios.get(apiUrl)
            .then(res => {
                setMovies(res.data);
            })
            .catch(err => console.error(err));
    }

    return (
        <div className="container-fluid main-hall">
            <div className="row">
                <div className="col-12 col-md-11 offset-0 offset-md-1 mt-5">
                    <h1 className="color-title text-center text-md-left">Os Mais Populares</h1>
                    <div className="row p-0 d-flex justify-content-start mt-4">
                        {
                            movies.map((movie, index) =>
                                <div key={index} className="p-0 d-flex justify-content-center">
                                    <div className="col-12 col-md-3 col-lg-2 mt-4 px-0 pb-4 d-flex justify-content-center card-area m-0 m-md-2">
                                        <Link to={`/details/${movie.id}`}>
                                            < MovieCard logoPath={movie.posterPath} />
                                        </Link>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
)
export default MainHall;