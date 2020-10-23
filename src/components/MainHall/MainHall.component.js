import React from 'react';
import MovieCard from '../MovieCard/MovieCard.component'

function MainHall() {
    
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <MovieCard />
                </div>        
            </div>
        </div>
    )
}

export default MainHall;