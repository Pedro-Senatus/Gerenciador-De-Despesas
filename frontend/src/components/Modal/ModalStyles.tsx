import styled from "styled-components";

export const ModalContainer = styled.div`

    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1000; 
    align-items: center;
    justify-content: center;
    font-family: 'Courier New', Courier, monospace;
    color: #d3d3d3;
    font-weight: 800;
    font-size: 1.05rem;

`

export const InputsContainer = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border: 2px solid #d3d3d3; 
    border-radius: 8px; 
    width: 40vh;
    height: 50vh;

    input { 

        width: 20vh; 
        padding: 1vh; 
        margin: 5px 0; 
        border: 2px solid #d3d3d3; 
        font-weight: 800;
        border-radius: 8px; 
        font-size: 1.05rem; 
        background-color: #191919;
        color: #d3d3d3;
        text-align: center;
        font-family: 'Courier New', Courier, monospace;


    }

    input[type="number"]::-webkit-inner-spin-button, 
    input[type="number"]::-webkit-outer-spin-button { -webkit-appearance: none; margin: 0; } ;

    
`

export const ContainerButton = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 100%;
`
export const ButtonStyled = styled.button`

    background-color: #191919;
    margin-top: 4vh;
    font-size: 1.05rem;
    font-weight: 800;
    font-family: 'Courier New', Courier, monospace;
    cursor: pointer;
    border: 3px solid ${(props)=> props.color}; 
    border-radius: 8px; 
    color: #d3d3d3;
    padding: 1vh;
    width: 15vh; 

    &:hover{

        background-color: ${(props) => props.color};
    }
`


