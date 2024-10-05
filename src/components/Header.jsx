import React from "react";
import { Link } from 'react-router-dom';
import './header.css';

function Navbar(){
    function goto(site){
        window.location.assign(site);
    }
    return (
        <>
            <nav>
                <div className="logo">
                    LMUI_LabSim
                </div>
                <div className="navItems">
                    <Link to="/" className="link">Home</Link>
                    <Link to="/gallery" className="link">Simulation</Link> 
                </div>
            </nav>
        </>
    )
}

export default Navbar;