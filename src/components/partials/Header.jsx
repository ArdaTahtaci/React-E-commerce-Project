import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CategoryDropdown from './CategoryDropdown';


function Header() {

    const navigate = useNavigate()

    return (
        <div className='pt-4'>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand nav-link mx-2" to="/"><h3>Reactify</h3></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto ">
                            <li className="nav-item my-auto">
                                <Link className="nav-link " aria-current="page" to="/">Home</Link>
                            </li>


                            <li className="nav-item">
                                <Link className="nav-link " ><CategoryDropdown navigate={navigate} /></Link>
                            </li>
                            <li className="nav-item my-auto">
                                <Link className="nav-link  " to="/buy-chart">Buy Chart</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>

        </div>
    );
}

export default Header;