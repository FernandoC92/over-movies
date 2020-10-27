import React, { useState } from 'react';
import MovieCard from '../MovieCard/MovieCard.component';
import axios from 'axios';

function PhotosAndVideos() {
    const apiUrl = 'https://api.themoviedb.org/3/search/movie?api_key=871af326ea42ac846f6291a42c4ab279&query=';
    let nameMovie = 'avengers';
    const [movies, setMovies] = useState([]);
    console.log('movies', movies)

    axios.get(`${apiUrl}${nameMovie}`)
    .then( response => {
        setMovies(response.data.results);
    })
    .catch(error => console.error(error))

    // axios.get(`${apiUrl}${nameMovie}`)
    // .then(response => {
    //     setMovies(response.data.results)
    //     console.log('response.data.results', response.data.results)
    // })
    // .catch(error => {
    //     console.error(error);
    // })

    return (
        <div>
            <div className="title-register-form mt-5 text-white">Fotos & Videos</div>
            <div className="form-group col-12 col-md-4 p-0 mt-4">
                <input type="email" className="form-control input-default border-0 mb-4" placeholder="Pesquise sua imagem aqui..." aria-describedby="search images"></input>
                {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                {   
                   (movies > 0)  ? <MovieCard logoPath = { movies[0].poster_path } /> : <h1>Sem filmes..</h1>
                }   
            </div>
        </div>
    )
}

export default PhotosAndVideos;