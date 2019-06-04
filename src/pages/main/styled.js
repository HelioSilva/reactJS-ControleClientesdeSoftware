import styled,{keyframes} from 'styled-components';

export const AreaItens = styled.div`
    max-width: 80%;
    margin: 20px auto 0; 
    padding: 0 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;


export const Item = styled.article`
    display: flex;
    height: 180px;
    flex-direction: column;
    width: 250px;
    
    background: #fff;
    border: 1px solid #ddd;
    padding: 20px;
    border-radius: 5px;
    margin: 10px;   

    a {
    height: 42px;
    border-radius: 5px;
    border: 2px solid #da552f;
    background: none;
    margin-top: 10px;
    color: #da552f;
    font-weight: bold;
    font-size: 16px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s;
    cursor: pointer;
    }
    a:hover{
        background: #da552f;
    color: #fff;
    }
    a:active{
        background: #bd3a16;
    color: #fff;
    }
`;

export const HeaderItem = styled.div`
     display: flex ;
    justify-content: space-between;
    height: 50px;

`;

export const MiddlewareItem = styled.p`
    font-size:11px;
    height:35px;
`;
