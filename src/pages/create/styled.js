import styled,{ css , keyframes} from 'styled-components';

export const Container = styled.div`
  margin: 0 auto ;
  margin-top: 50px;
  display: flex;
  flex-direction:column;
  height: 300px;
  width:450px;
  background-color: #f5f5f5;
  border: 1px solid #d6d6d6;
`;

export const Topo = styled.div`
    height:50px;
    background:#d33d16;
    text-align:center;
    
    h3{
        color:#fff;
        font-size:16px;
        margin-top:13px;
        font-family:Verdana, Geneva, Tahoma, sans-serif;
    }
`;

export const AreaCampos = styled.div`
    width:80%;
    margin: 0 auto ;
    margin-top:20px;
`;

export const DivInput = styled.div`
    display:flex ;
    flex-direction:column;
    align-content:center;
    height:50px;


    h4{
        font-size:10px;
    }

    input{
        ${({ active }) => active && `
    background: blue;
  `}
        width: 100%;
        height:50px;
        background: none ;
        background-color:#f7f7f7;
        border:none;
        border-bottom: 1px solid #e2e2e2;
        margin-bottom:5px;
        color:#000;
        font-size:14px;
        padding:2px;
        :focus{
            border-radius:10px;
            background-color:#ebebeb;   
                   
        }

       
    }    
   
`;



export const Campo = styled.input`
    

    
`;


