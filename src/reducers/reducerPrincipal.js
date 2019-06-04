const initialState = {
    qtdCliques: 9,
    clientes:[]
}

const ReducerPrincipal = (state = initialState , action) => {
    console.log(action);

    switch(action.type){
        case "INC" :
            return {...state,qtdCliques:state.qtdCliques+1};
            break;
        
        case "GETCLIENTES":
            return {...state,clientes:action.clientes};

        default:
            return state;
            break;
    }

}

export default ReducerPrincipal ;