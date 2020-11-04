import React, { useRef, useState } from 'react';
import './RegisterMovieForm.component.scss'
import useForm from '../../hooks/form';
import Axios from 'axios';
import PhotosAndVideos from '../Photos&Videos/Photos&Videos.component';

function RegisterMovieForm() {
    const [{ values }, handleChange, handleSubmit] = useForm();
    const childRef = useRef();
    const [showSendSucess, setShowSendSucess] = useState(false);
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
            .then(cleanForm())
            .catch(err => console.error(err));
    }
    let posterPathSelected = '';

    function getPosterPath(path) {
        posterPathSelected = path;
    }

    function cleanForm() {
        let form = document.querySelector('#formRegister');
        let inputs = form.querySelectorAll('.input');
        inputs.forEach(element => {
            element.value = '';
        })
        childRef.current.cleanMoviesImages();
        setShowSendSucess(true);
    }


    return (
        <div className="col-12 col-md-11 offset-0 offset-md-1 p-0">
            <div className="title-register-form mt-5 text-white">Movie Details</div>
            <form id="formRegister" onSubmit={handleSubmit(sendMovie)} className="mt-5">
                <div className="row">
                    <div className="form-group col-12 col-md-4">
                        <label className="text-white label-size">Original Title</label>
                        <input onChange={handleChange} name="title" className="input form-control input-default border-0" aria-describedby="title"></input>
                    </div>
                    <div className="form-group col-12 col-md-2">
                        <label className="text-white label-size">Genre</label>
                        <input onChange={handleChange} name="genre" className="input form-control input-default border-0" aria-describedby="genre"></input>
                    </div>
                    <div className="col-12 mt-3">
                        <div className="form-group col-12 col-md-4 p-0">
                            <label className="text-white label-size">Overview</label>
                            <textarea onChange={handleChange} name="synopsis" className="input form-control input-default border-0" rows="6"></textarea>
                        </div>
                    </div>
                    <div className="d-block d-md-flex w-100 mt-3">
                        <div className="form-group col-12 col-md-2">
                            <label className="text-white label-size">Classification</label>
                            <input onChange={handleChange} name="classification" className="input form-control input-default border-0" aria-describedby="classification"></input>
                            <small className="form-text text-muted">We'll never share your email.</small>
                        </div>
                        <div className="form-group col-12 col-md-2">
                            <label className="text-white label-size">Release Date</label>
                            <input onChange={handleChange} name="releaseDate" className="input form-control input-default border-0" id="exampleInputEmail1" aria-describedby="emailHelp"></input>

                        </div>
                        <div className="form-group col-12 col-md-2">
                            <label className="text-white label-size">Producer</label>
                            <input onChange={handleChange} name="producer" className="input form-control input-default border-0" aria-describedby="producer"></input>

                        </div>
                    </div>
                    <div className="d-block d-md-flex w-100 mt-3">
                        <div className="form-group col-12 col-md-2">
                            <label className="text-white label-size">Duration</label>
                            <input onChange={handleChange} name="duration" className="input form-control input-default border-0" aria-describedby="duration"></input>
                            <small className="form-text text-muted">We'll never share your email.</small>
                        </div>
                        <div className="form-group col-12 col-md-2">
                            <label className="text-white label-size">Budget</label>
                            <input onChange={handleChange} name="budget" className="input form-control input-default border-0" aria-describedby="budget"></input>

                        </div>
                        <div className="form-group col-12 col-md-2">
                            <label className="text-white label-size">Box ffice</label>
                            <input onChange={handleChange} name="gateMoney" className="input form-control input-default border-0" aria-describedby="gateMoney"></input>
                            <input onChange={handleChange} type="hidden" value={posterPathSelected} name="posterPath" className="input form-control input-default border-0" aria-describedby="gateMoney"></input>

                        </div>
                    </div>
                </div>
                <PhotosAndVideos ref={childRef} getPosterPath={getPosterPath} />
                {
                   showSendSucess ? <div className="d-flex justify-content-center">
                        <span className="text-success send-text font-weight-bold">Enviado com Sucesso!</span>
                    </div> : ''
                }
                <div className="container-fluid text-white pb-5 mt-5 bg-terms">
                    <div className="row">
                        <div className="col-12 col-md-8 p-0">
                            <p className="label-size p-0">Termos e Condições</p>
                            <p className="p-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </div>
                        <div className="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center p-0">
                            <button type="submit" className="btn btn-submit label-size">Accept and Save</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default RegisterMovieForm;