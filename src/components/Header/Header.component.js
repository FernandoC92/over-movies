import React from 'react';
import '../Header/Header.component.scss'
import magnifyingGlass from '../../assets/icons/search.svg'
import plus from '../../assets/icons/plus.svg'
import { Link } from "react-router-dom";


function Header() {
    return (
        <header className="container-fluid header-custom bg-default">
            <div className="row h-100">
                <div className="col-12 offset-0 offset-md-1 col-md-3 d-flex h-100 align-items-center">
                    <Link to="/" className="app-name text-uppercase">Over Movies</Link>
                </div>
                <div className="col-12 col-md-4 d-flex justify-content-center align-items-center">
                    <div className="input-group d-flex justify-content-center">
                        <input type="text" className="form-control input-search border-0" placeholder="Find your favorite movies..." aria-label="Find your favorite movies" aria-describedby="button-addon2"></input>
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary btn-search border-left-0 border-0" type="button" id="button-addon2"><img className="img-fluid mr-2" src={magnifyingGlass} alt="magnifying glass"></img></button>
                        </div>
                    </div>
                </div>
                <div className="col-12 offset-0 offset-md-1 col-md-3 d-flex justify-content-start align-items-center">
                    <Link to="/createmovie"><img src={plus} alt="plus icon"></img></Link>
                </div>
            </div>
        </header>
    )
}

export default Header;
