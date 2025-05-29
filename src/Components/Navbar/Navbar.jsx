import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

const Navbar = (()=>{
    return(
        <div className='Navbar'>
            <h1>Rafi Info Tech</h1>

            <div className='Nav_Links'> 
                <Link to="/About"><span>About</span></Link>
                <Link to="/Services"><span>Services</span></Link>
                <Link to="/Contact"><span>Contact</span></Link>
            </div>
        </div>
    )
})

export default Navbar;