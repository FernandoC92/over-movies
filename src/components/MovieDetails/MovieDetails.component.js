import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import './MovieDetails.componente.scss';

function MovieDetails(props) {
    const apiUrl = 'http://localhost:5000/api/movies';
    let id = props.match.params.movieId;
    const [movie, setMovie] = useState({});

    // eslint-disable-next-line no-unused-vars
    // const memoizedValue = useMemo(() => getMovie(), []);

    useEffect(() => {
        function getMovie() {
            Axios.get(`${apiUrl}/${id}`)
                .then(res => {
                    setMovie(res.data);
                })
                .catch(err => console.error(err));
        }
        getMovie();
    }, [id]);



    return (
        <div className="container-fluid main-hall pt-5 vh-custom">
            <div className="row">
                <div className="col-12 offset-0 col-md-11 offset-md-1 mt-5">
                    <div className="row p-0">
                        <div className="col-12 col-md-4">
                            <img src={`https://image.tmdb.org/t/p/w500/${movie.posterPath}`} className="img-fluid img-movie" alt=""></img>
                        </div>
                        <div className="col-12 col-md-8 mt-0 pt-0 pr-5 d-flex align-items-center">
                            <div className="w-100">
                                <p className="movie-name text-white font-weight-bold">{movie.title}</p>
                                <p className="sub text-white font-weight-bold">Sinopsys & Details</p>
                                <p className="content font-gray w-85">{movie.synopsis}</p>
                                <div className="row mt-5">
                                    <div className="col-12 col-md-3">
                                        <p className="text-white content font-weight-bold mb-0">Producer</p>
                                        <p className="font-gray content text-truncate" style={{maxWidth: '200px'}}>{movie.producer}</p>
                                        <p className="text-white content mt-4 font-weight-bold  mb-0">Classification</p>
                                        <p className="font-gray content">{movie.classification}</p>
                                    </div>
                                    <div className="col-12 col-md-3">
                                        <p className="text-white content font-weight-bold mb-0">Genre</p>
                                        <p className="font-gray content">{movie.genre}</p>
                                        <p className="text-white content mt-4 font-weight-bold  mb-0">Gate Money</p>
                                        <p className="font-gray content">{movie.gateMoney}</p>
                                    </div>
                                    <div className="col-12 col-md-3">
                                        <p className="text-white content font-weight-bold mb-0">Duration</p>
                                        <p className="font-gray content">{movie.duration}</p>
                                        <p className="text-white content mt-4 font-weight-bold  mb-0">Release</p>
                                        <p className="font-gray content">{movie.releaseDate}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieDetails;