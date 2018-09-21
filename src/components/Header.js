import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = (props) => (
        <div className = "header">
            <div className = "container">
                <h1 className = "header__title">{props.title}</h1>
                {props.subtitle && <h2 className = "header__subtitle">{props.subtitle}</h2>}
                <NavLink to = "/" activeClassName = "is-active" exact = "true">Bikes</NavLink>
                <NavLink to = "/skis" activeClassName = "is-active">Skis</NavLink>
                <NavLink to = "/about" activeClassName = "is-active">About</NavLink>
            </div>
        </div>
);

Header.defaultProps = {
    title: 'Default title'
};


export default Header
