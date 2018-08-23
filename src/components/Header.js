import React from 'react';

const Header = (props) => (
        <div className = "header">
            <div className = "container">
                <h1 className = "header__title">{props.title}</h1>
                {props.subtitle && <h2 className = "header__subtitle">{props.subtitle}</h2>}
                <p>(Site Under Construction, only contains placeholder info at the moment)</p>
            </div>
        </div>
);

Header.defaultProps = {
    title: 'Default title'
};


export default Header
