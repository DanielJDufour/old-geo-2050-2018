import React from 'react';
import './Navbar.css';

const go_to = id => {
    document.getElementById(id)
        .scrollIntoView({block: 'start',  behaviour: 'instant'});
}

const links = [

];

const Navbar = () => (
    <header id='navbar'>
        <span>Geography 2050</span>
        <ul>
            {
                links.map(link => {
                    return (
                        <li key={link.name}>
                            <div onClick={() => go_to(link.id)}>
                                {link.name}
                            </div>
                        </li>
                    );
                })
            }
        </ul>
    </header>
);

export default Navbar;