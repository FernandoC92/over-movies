import React from 'react';
import './RegisterMovieForm.component.scss'
import PhotosAndVideos from '../Photos&Videos/Photos&Videos.component';

function RegisterMovieForm() {
    return (
        <div className="col-12 col-md-11 offset-0 offset-md-1 p-0">
            <div className="title-register-form mt-5 text-white">Detalhes do filme</div>
            <form className="mt-5">
                <div className="row">
                    <div className="form-group col-12 col-md-4">
                        <label className="text-white label-size" for="exampleInputEmail1">Título original</label>
                        <input type="email" className="form-control input-default border-0" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group col-12 col-md-1">
                        <label className="text-white label-size" for="exampleInputEmail1">Gênero</label>
                        <input type="email" className="form-control input-default border-0" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                        <small id="emailHelp" className="form-text text-muted">We'll never share.</small>
                    </div>
                    <div className="col-12 mt-3">
                        <div className="form-group col-12 col-md-4 p-0">
                            <label className="text-white label-size" for="exampleFormControlTextarea1">Resumo do filme</label>
                            <textarea className="form-control input-default border-0" id="exampleFormControlTextarea1" rows="6"></textarea>
                        </div>
                    </div>
                    <div className="d-flex w-100 mt-3">
                    <div className="form-group col-12 col-md-2">
                        <label className="text-white label-size" for="exampleInputEmail1">Classificação</label>
                        <input type="email" className="form-control input-default border-0" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email.</small>
                    </div>
                    <div className="form-group col-12 col-md-2">
                        <label className="text-white label-size" for="exampleInputEmail1">Ano de produção</label>
                        <input type="email" className="form-control input-default border-0" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                        <small id="emailHelp" className="form-text text-muted">We'll never share.</small>
                    </div>
                    <div className="form-group col-12 col-md-2">
                        <label className="text-white label-size" for="exampleInputEmail1">Distribuidor</label>
                        <input type="email" className="form-control input-default border-0" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                        <small id="emailHelp" className="form-text text-muted">We'll never share.</small>
                    </div>
                    </div>
                    <div className="d-flex w-100 mt-3">
                    <div className="form-group col-12 col-md-2">
                        <label className="text-white label-size" for="exampleInputEmail1">Duração</label>
                        <input type="email" className="form-control input-default border-0" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email.</small>
                    </div>
                    <div className="form-group col-12 col-md-2">
                        <label className="text-white label-size" for="exampleInputEmail1">Orçamento</label>
                        <input type="email" className="form-control input-default border-0" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                        <small id="emailHelp" className="form-text text-muted">We'll never share.</small>
                    </div>
                    <div className="form-group col-12 col-md-2">
                        <label className="text-white label-size" for="exampleInputEmail1">Bilheteria</label>
                        <input type="email" className="form-control input-default border-0" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                        <small id="emailHelp" className="form-text text-muted">We'll never share.</small>
                    </div>
                    </div>
                </div>
                <PhotosAndVideos />
            </form>
        </div>
    )
}

export default RegisterMovieForm;