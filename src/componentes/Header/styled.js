import styled,{keyframes} from 'styled-components';

export const Topo = styled.div`
    width: 100% ;
    padding:5px;
    background: #da552f;

    @media (max-width:500px) {

      background: #bf4522;
      
    }
`;

export const Content = styled.div`
    max-width: 900px;
    height:100%;
    display: flex;
    flex-wrap:wrap;
    justify-content: space-between;
    align-items: center;
    margin: auto ;  
    padding: 5px 5px 5px 5px ;
`;

export const Titulo = styled.h3`
    font-size: 18px;
    font-weight: bold;
    color: #fff;
`;

export const Busca = styled.div`
  background: #cc4a24;  
  width:400px;
  height:40px;
  display:flex;
  align-items:center;
  justify-content:center;

 
`;


export const CampoInput = styled.input`
  width:88%;
  padding: 0.5em;
 
  background: #cc4a24;
  border: none;
  border-radius: 3px;
  color:#fff;
  :focus{
    border: 2px solid rgba(255,255,255,0.3) ;
  }

`;

export const Logo = styled.img`
    width:10%;

    :hover{
      opacity:0.5;
      transform: rotate(90deg);
    }
`;



