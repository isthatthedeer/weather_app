import React from "react";
import { NavLink } from "react-router-dom";
import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Welcome = () => (
        <div className="container">
            <CSSTransition
                in={true}
                appear={true}
                timeout={450}
                classNames="fade"
                >
                <div className="welcome">
                    <h1>Welcome to WeatherApp</h1>
                    <p>To check the weather click the search button below</p>
                    <NavLink to="/main"><FontAwesomeIcon icon={faSearch} /></NavLink>
                </div>
            </CSSTransition>
        </div>
);


export default Welcome;