import React from 'react';

// Stateless Functional Component
// since its a sfc it cannot use lifecycle hooks
const NavBar = ({ totalCounters }) => {
    console.log("NavBar - Rendered");

    return (// eslint-disable-next-line jsx-a11y/anchor-is-valid
        <nav className="navbar navbar-light bg-light"><a className="navbar-brand" href="#">
            Navbar <span className="badge badge-pill badge-secondary">
                {totalCounters}
            </span>
        </a>
        </nav>
    );
}

export default NavBar;