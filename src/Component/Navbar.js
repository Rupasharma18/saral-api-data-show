import React from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';

const Nvbar =()=> {
    return (
        <Navbar color="secondary" dark expand='md'>
        <div className="container">
            <NavbarBrand className="mr-auto w3-lobster"  href='/'>
                <h3>
                   Saral
                </h3>
            </NavbarBrand>
        </div>
    </Navbar>
    );
}

export default Nvbar;