import React, {Component} from 'react' ;
import api from '../../services/api';
import Alerts from '../../componentes/utils/alerts/index';
import Nav from '../../componentes/Nav/index';

import {Link} from 'react-router-dom';
import {AreaItens,Item,HeaderItem,MiddlewareItem} from  "./styled";
import {connect} from 'react-redux' ;

class Main extends Component {

    componentDidMount(){
            this.load();
    } 

    load = async () =>{
        const response = await api.get('/clients');
        const clientes = response.data.clientes;
        this.props.dispatch({
            type:'GETCLIENTES',
            clientes
            
        });
    };


    render(){

        const {clientes} = this.props.dados.ReducerPrincipal ;

        return(
        <div>
            <Nav />
           
            <AreaItens>
                {clientes.map(cliente => (
                    
                    <Item key={cliente._id}>
                        <HeaderItem>
                            <strong>{cliente.razao}</strong>
                            <div><Alerts qtd={cliente.caixas.length}/></div>
                        </HeaderItem>
                        <MiddlewareItem>
                            <p>Fantasia: {cliente.fantasia}</p>
                            <p>Cpnj: {cliente.cnpj}</p>
                        </MiddlewareItem>
                        <div>
                                <Link to={`/cliente/${cliente._id}`}>Acessar Cliente</Link>
                        </div>
                    </Item>
                    ))
                }
            </AreaItens>
        </div>
            
        );
    }
}

export default connect(state => ({
    dados:state   
}))(Main);