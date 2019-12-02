import React from 'react';
import {Link} from 'react-router-dom';
const Nav =()=>{
    return(        
        <div>            
             <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/rooms/">rooms</Link></li>
                <li><Link to="/rooms/:slug">single-room</Link></li>
                <li><Link to="/Error">Error</Link></li>
                </ul>                
            </div>            
    )
}
export default Nav;
