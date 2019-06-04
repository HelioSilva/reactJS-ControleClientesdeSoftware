import React , {useState} from 'react' ;
import api from '../../services/api';

import {Topo,Titulo,CampoInput,Content,Busca,Logo} from "./styled";
import img from "../../icons/lupa.png";

import {connect} from 'react-redux' ;


async function filtro(dispatch,txt){
    if(txt==''){
        const response = await api.get('/clients') ;
     
        const clientes = response.data.clientes;  
        dispatch(
            {
                type:'GETCLIENTES', 
                clientes
            }
        )  
    }else{
        const response = await api.get('/clients/busca/'+txt) ;
     
        const clientes = response.data.clientes;  
        dispatch(
            {
                type:'GETCLIENTES', 
                clientes
            }
        )   
    }

      
}


function Header({dados,gatilho}) {
    const [texto, setTexto] = useState(0);
    
    function capturaTeclas(event){
        console.log(event.target.value);
        setTexto(event.target.value);
    }

   

    return(
        <Topo>
            <Content>
                <Titulo>Sistema CPTK</Titulo>                 
                <Busca><CampoInput onChange={capturaTeclas} /> <Logo src={img} onClick={()=>{gatilho(texto)}}  /></Busca>               
            </Content>            
        </Topo> 
    );
}

 

const mapStateToProps = state => ({
    
});

const mapDispatchToProps = dispatch => ({
      // dispatching plain actions
      gatilho:(txt) => {filtro(dispatch,txt)} 
});


export default connect(mapStateToProps,mapDispatchToProps)(Header) ;

