import React, { forwardRef, useImperativeHandle, useState } from 'react';
import MovieCard from '../MovieCard/MovieCard.component';
import './Photos&Videos.component.scss';
import Axios from 'axios';

function PhotosAndVideos(props, ref) {
    const apiUrl = 'https://api.themoviedb.org/3/search/movie?api_key=871af326ea42ac846f6291a42c4ab279&query=';
    const [movies, setMovies] = useState([]);

    useImperativeHandle(ref, () => ({
        cleanMoviesImages() {
            setMovies([]);
        }
    }));
    
    function getMoviesPromisse(nameMovie) {
        Axios.get(`${apiUrl}${nameMovie}`)
            .then(res => {
                setMovies(res.data.results);
            })
            .catch(err => console.error(err));
    }

    function inputChange(e) {
        if (e === '') {
            setMovies([]);
        } else {
            getMoviesPromisse(e)
        }

    }

    function getPosterPath(posterPath) {
        props.getPosterPath(posterPath);
    }

    return (
        <div>
            <div className="title-register-form mt-5 text-white">Photos & Videos</div>
            <div className="form-group col-12 col-md-4 p-0 mt-4">
                <input name="inputSearchImg" className="input form-control input-default border-0 mb-4 input-search-image" placeholder="Pesquise sua imagem aqui..." aria-describedby="search images"
                    onChange={e => inputChange(e.target.value)}
                ></input>
                {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
            </div>
            <div className="row p-0 mt-4 justify-content-center justify-content-md-start">
                {
                    movies.map((movie, index) =>
                        <div key={index} className="p-0 d-flex justify-content-center">
                            <div className="col-12 col-md-3 col-lg-2 mt-4 px-0 pb-4 d-flex justify-content-center card-area m-0 m-md-2">
                                <button type="button" className="p-0 border-0 btn-img" onClick={() => getPosterPath(movie.poster_path)}>
                                    < MovieCard logoPath={movie.poster_path} />
                                </button>
                            </div>
                        </div>

                    )
                }
            </div>
        </div>
    )
}

export default forwardRef(PhotosAndVideos);