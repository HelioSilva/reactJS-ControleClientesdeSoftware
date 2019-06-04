import React,{Component} from 'react' ;
import {Link} from 'react-router-dom';

import {New,Area} from './styled';

function Nav(){

    return(
        <Area> 
              <Link to={`/createCliente`}>           
                    <New>+</New>
              </Link>          
                
        </Area>        
    )

}

export default Nav;