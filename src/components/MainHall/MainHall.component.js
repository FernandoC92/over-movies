import React from 'react';
import MovieCard from '../MovieCard/MovieCard.component'
import './MainHall.component.scss'

function MainHall() {
    return (
        <div className="container-fluid main-hall">
            <div className="row">
                <div className="col-12 mt-5">
                    <h1 className="color-title ml-0 ml-md-4 text-center text-md-left">Os Mais Populares</h1>
                    <div className="row p-0 d-flex justify-content-center">
                    <div className="col-12 col-md-3 col-lg-2 mt-4 px-0 pb-5 d-flex justify-content-center card-area">
                    <MovieCard />
                    </div>
                    </div>
                </div>        
            </div>
        </div>
    )
}

export default MainHall;