import React ,{Component} from 'react';
import api from '../../services/api';

import "./bootstrap.min.css";
import "./styles.css";

export default class CreateCliente extends Component{

    constructor(props){
        super(props);
        this.state = {
            cnpj:"",
            razao:"",
            fantasia:"",
            email:"",
            diasLiberacao:0,            
        }

        this.handleChange = this.handleChange.bind(this);
        this.enviar = this.enviar.bind(this);
    }

    async enviar(){
        const state = this.state ;

        if(state.razao == ''){
          alert("Campo razão social não pode ficar em branco.s");
          return 0;
        }

        const response = await api.post('/clients',{cnpj:state.cnpj,razao:state.razao,fantasia:state.fantasia,email:state.email,diasLiberacao:state.diasLiberacao});
        this.props.history.push(`/`);
    }


    handleChange(event) {
        const target = event.target ;
        this.setState({[target.name]:target.value});
    }

        render(){
            return(
              <div className="content">
                  <div class="form-group">
                    <label>Razão Social</label>
                    <input class="form-control" name="razao" type="text" value={this.state.razao} onChange={this.handleChange} />                  
                  </div>
                  
                  <div class="form-group">
                    <label>CNPJ</label>
                    <input class="form-control" name="cnpj" type="text" value={this.state.cnpj} onChange={this.handleChange} />
                  </div>

                  <div class="form-group">
                    <label>Fantasia</label>
                    <input class="form-control" name="fantasia" type="text" value={this.state.fantasia} onChange={this.handleChange} />
                  </div>

                  <div class="form-group">
                    <label>Email</label>
                    <input class="form-control" name="email" type="text" value={this.state.email} onChange={this.handleChange} />
                  </div>

                  <div class="form-group">
                    <label>Dias liberação</label>
                    <input class="form-control" name="diasLiberacao" type="text" value={this.state.diasLiberacao} onChange={this.handleChange} />
                  </div>

                  <button class="btn btn-primary" onClick={this.enviar} >Cadastrar</button>
                  
              </div>  
            );
        }
}