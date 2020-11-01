import React from 'react';
// import CardMovie from '../../assets/GridItem.png';

function MovieCard(props) {
    return (
        <div>
            <img src={`https://image.tmdb.org/t/p/w500/${props.logoPath}`} width="250" height="376" alt="Movie Card"></img>
        </div>
    )
}

export default MovieCard;
// height="250" width="376"