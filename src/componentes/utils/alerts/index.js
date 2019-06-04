import React from 'react' ;
import {BackgroundAlerta} from "./styled";

function Alerts(props){
    return(
        <BackgroundAlerta>
            <h3>Caixas</h3>
            <h3>{props.qtd}</h3>
        </BackgroundAlerta>
    );
}


export default Alerts;