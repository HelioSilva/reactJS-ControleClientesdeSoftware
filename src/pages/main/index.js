import React, {Component} from 'react' ;
import api from '../../services/api';
import Alerts from '../../componentes/utils/alerts/index';
import Nav from '../../componentes/Nav/index';

import {Link} from 'react-router-dom';
import "./style.css";

export default class Main extends Component {

    state = {
        clientes:[],
    }

    componentDidMount(){
            this.load();
    } 

    load = async () =>{
        const response = await api.get('/clients');
        this.setState({clientes:response.data.clientes});
    };


    render(){

        const {clientes} = this.state ;

        return(
           
            <div className="cliente-list">
                <Nav />
                {clientes.map(cliente => (
                    <article key={cliente._id} className={cliente.status === "1" ? "ativo" : "desativo" }>
                        <div className="header-itemList">
                            <strong>{cliente.razao}</strong>
                            <div><Alerts qtd={cliente.caixas.length}/></div>
                        </div>
                        
                        <p>{cliente.fantasia} - cnpj: {cliente.cnpj}</p>
                        <Link to={`/cliente/${cliente._id}`}>Acessar Cliente</Link>
                    </article>
                    
                ))}
            </div>
        );
    }
}