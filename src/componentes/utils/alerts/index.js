import React from 'react' ;
import "./styles.css";

function Alerts(props){
    return(
        <alert>
            <h3>Caixas</h3>
            <h3>{props.qtd}</h3>
        </alert>
    );
}


export default Alerts;