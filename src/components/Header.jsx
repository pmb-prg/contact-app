import React from 'react';
import style from './Header.module.css'
function Header() {
    return (
        <div className={style.container}>
            <h1>Contact App</h1>
            <p>Created By <span>PMBPG</span></p>
        </div>
    );
};

export default Header;