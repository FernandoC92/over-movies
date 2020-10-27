import React from 'react';
import './CreateMovie.component.scss'
import bgImage from '../../assets/add-movie-text.png';
import RegisterMovieForm from '../RegisterMovieForm/RegisterMovieForm.component';
function CreateMovie() {
    return (
        <div className="container-fluid p-0 bg-default">
            <div className="card w-100 bg-dark text-white rounded-0">
                <img src={bgImage} className="card-img" alt="..."></img>
                <div className="card-img-overlay col-12 col-md-7 offset-1 d-flex flex-column justify-content-center p-0 mb-5">
                    <h5 className="card-title add-title mb-3">Adicionar um novo filme</h5>
                    <p className="card-text text-content p-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat, nulla in ultricies hendrerit, enim dui efficitur lectus, nec convallis eros arcu nec diam. Etiam justo arcu, tincidunt sed urna eget, viverra sollicitudin quam. Nam ultricies lobortis sem, sed elementum ligula elementum et.</p>
                </div>
            </div>
            <RegisterMovieForm />
        </div>
    )
}

export default CreateMovie;