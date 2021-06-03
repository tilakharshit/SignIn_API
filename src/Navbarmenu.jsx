import React from 'react';
import {NavLink} from 'react-router-dom';
import  './index.css';
import './Table.css';

const Navbarmenu = () => {
    return (
        <>
        <div className='mein_menu'>
        <NavLink exact activeClassName="active_class" to ="/">Sign-in</NavLink>
        {/* <NavLink exact activeClassName ="active_class" to ='/Table'></NavLink> */}
         
        </div>
        </>
    )
}

export default Navbarmenu;
