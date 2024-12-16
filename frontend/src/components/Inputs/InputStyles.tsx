import styled from "styled-components";

export const InputContainer = styled.div`

    display: flex;
    flex-direction: column;
    text-align: center;
    font-family: 'Courier New', Courier, monospace;
    color: #d3d3d3;
    font-weight: 800;
    font-size: 1.25rem;

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
    input[type="number"]::-webkit-outer-spin-button { -webkit-appearance: none; margin: 0; } 

    

`

export const Cointainer = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5vh;
    gap: 4rem;

    button{
        margin-top: 28px;
        width: 20vh; 
        padding: 1vh; 
        border: 3px solid #CA9849; 
        background-color: #191919;
        color: #CA9849;
        border-radius: 8px; 
        font-size: 1.25rem;
        font-weight: 800;
        font-family: 'Courier New', Courier, monospace;
        cursor: pointer;
    }

    button:hover{

        background-color:#CA9849;
        color: #191919;
    }

`