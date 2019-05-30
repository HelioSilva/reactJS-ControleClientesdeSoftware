import React,{Component} from 'react' ;
import api from '../../services/api';

import {Link} from 'react-router-dom';

import "./styles.css";

export default class Cliente extends Component {

    state = {
        dadosCliente:{
            caixas:[]
        }
    }

    async componentDidMount(){

        const {id} = this.props.match.params ;

        const response = await api.get(`/clients/${id}`);

        console.log(response);

        this.setState({dadosCliente:response.data});
    }




    render(){
        const {dadosCliente} = this.state ;

        return(
            <div className="view-info">
                <h3>Razão:{dadosCliente.razao}</h3>
                <p>Fantasia:{dadosCliente.fantasia}</p>
                <p>Cnpj:{dadosCliente.cnpj}</p>
               
                <section>
                {dadosCliente.caixas.map(caixa => (                   
                        
                            <article>
                                <h5>Série: {caixa.serie}</h5>
                            </article>

                ))}
                 </section>

                <Link to="/">Voltar</Link>
                
            </div>
        )
    }

}