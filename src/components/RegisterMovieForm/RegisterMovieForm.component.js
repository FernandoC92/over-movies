import React, { useState } from 'react';
import './RegisterMovieForm.component.scss'
import useForm from '../../hooks/form';
import MovieCard from '../MovieCard/MovieCard.component';
import Axios from 'axios';

function RegisterMovieForm() {
    const [{ values }, handleChange, handleSubmit] = useForm();
    const apiUrl = 'https://api.themoviedb.org/3/search/movie?api_key=871af326ea42ac846f6291a42c4ab279&query=';
    const [movies, setMovies] = useState([]);
    const sendMovie = () => {
        values.posterPath = posterPathSelected;
        Axios.post('http://localhost:5000/api/movies', {
            title: values.title,
            genre: values.genre,
            posterPath: values.posterPath,
            synopsis: values.synopsis,
            releaseDate: values.releaseDate,
            classification: values.classification,
            producer: values.producer,
            duration: values.duration,
            budget: values.budget,
            gateMoney: values.gateMoney
        }
        )
        .catch(err => console.error(err));
    }
    let posterPathSelected = '';

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
        posterPathSelected = posterPath;
    }

    return (
        <div className="col-12 col-md-11 offset-0 offset-md-1 p-0">
            <div className="title-register-form mt-5 text-white">Detalhes do filme</div>
            <form onSubmit={handleSubmit(sendMovie)} className="mt-5">
                <div className="row">
                    <div className="form-group col-12 col-md-4">
                        <label className="text-white label-size">Título original</label>
                        <input onChange={handleChange} name="title" className="form-control input-default border-0" aria-describedby="title"></input>
                        <small className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group col-12 col-md-2">
                        <label className="text-white label-size">Gênero</label>
                        <input onChange={handleChange} name="genre" className="form-control input-default border-0" aria-describedby="genre"></input>
                        <small className="form-text text-muted">We'll never share.</small>
                    </div>
                    <div className="col-12 mt-3">
                        <div className="form-group col-12 col-md-4 p-0">
                            <label className="text-white label-size">Resumo do filme</label>
                            <textarea onChange={handleChange} name="synopsis" className="form-control input-default border-0" rows="6"></textarea>
                        </div>
                    </div>
                    <div className="d-flex w-100 mt-3">
                        <div className="form-group col-12 col-md-2">
                            <label className="text-white label-size">Classificação</label>
                            <input onChange={handleChange} name="classification" className="form-control input-default border-0" aria-describedby="classification"></input>
                            <small className="form-text text-muted">We'll never share your email.</small>
                        </div>
                        <div className="form-group col-12 col-md-2">
                            <label className="text-white label-size">Ano de produção</label>
                            <input onChange={handleChange} name="releaseDate" className="form-control input-default border-0" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                            <small className="form-text text-muted">We'll never share.</small>
                        </div>
                        <div className="form-group col-12 col-md-2">
                            <label className="text-white label-size">Distribuidor</label>
                            <input onChange={handleChange} name="producer" className="form-control input-default border-0" aria-describedby="producer"></input>
                            <small className="form-text text-muted">We'll never share.</small>
                        </div>
                    </div>
                    <div className="d-flex w-100 mt-3">
                        <div className="form-group col-12 col-md-2">
                            <label className="text-white label-size">Duração</label>
                            <input onChange={handleChange} name="duration" className="form-control input-default border-0" aria-describedby="duration"></input>
                            <small className="form-text text-muted">We'll never share your email.</small>
                        </div>
                        <div className="form-group col-12 col-md-2">
                            <label className="text-white label-size">Orçamento</label>
                            <input onChange={handleChange} name="budget" className="form-control input-default border-0" aria-describedby="budget"></input>
                            <small className="form-text text-muted">We'll never share.</small>
                        </div>
                        <div className="form-group col-12 col-md-2">
                            <label className="text-white label-size">Bilheteria</label>
                            <input onChange={handleChange} name="gateMoney" className="form-control input-default border-0" aria-describedby="gateMoney"></input>
                            <input onChange={handleChange} type="hidden" value={posterPathSelected} name="posterPath" className="form-control input-default border-0" aria-describedby="gateMoney"></input>
                            <small className="form-text text-muted">We'll never share.</small>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="title-register-form mt-5 text-white">Fotos & Videos</div>
                    <div className="form-group col-12 col-md-4 p-0 mt-4">
                        <input name="inputSearchImg" className="form-control input-default border-0 mb-4 input-search-image" placeholder="Pesquise sua imagem aqui..." aria-describedby="search images"
                            onChange={e => inputChange(e.target.value)}
                        ></input>
                        {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                    </div>
                    <div className="row p-0 mt-4 justify-content-center justify-content-md-start">
                        {
                            movies.map((movie, index) =>
                                <div key={index} className="p-0 d-flex justify-content-center">
                                    <div className="col-12 col-md-3 col-lg-2 mt-4 px-0 pb-4 d-flex justify-content-center card-area m-0 m-md-2">
                                        <button type="button" className="p-0 border-0" onClick={() => getPosterPath(movie.poster_path)}>
                                            < MovieCard logoPath={movie.poster_path} />
                                        </button> 
                                    </div>
                                </div>

                            )
                        }
                    </div>
                </div>
                <div className="container-fluid text-white pb-5 mt-5 bg-terms">
                    <div className="row">
                        <div className="col-12 col-md-8 p-0">
                            <p className="label-size p-0">Termos e Condições</p>
                            <p className="p-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </div>
                        <div className="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center p-0">
                            <button type="submit" className="btn btn-submit label-size">Aceitar e Salvar</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default RegisterMovieForm;