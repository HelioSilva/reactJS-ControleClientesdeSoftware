import React from 'react' ;
import {Link} from 'react-router-dom';

import "./styles.css";

function Nav(){

    return(
        <div className="styleNav">
            <Link to="/createCliente">Novo</Link>
        </div>        
    )

}

export default Nav;