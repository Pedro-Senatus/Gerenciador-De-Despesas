import styled from "styled-components";

export const TableContainer = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 28px;
`

export const TableStyled = styled.table`
    width: 100%;
    border: solid 2px #d3d3d3;
    border-radius: 8px;
    text-align: left;
    font-family: 'Courier New', Courier, monospace;
    color: #d3d3d3;
    font-size: 1.05rem;
    padding: 8px;
    border-collapse: separate; 

    td { 
        width: 28vh;
        border: 1px solid #d3d3d3; 
        padding: 8px;
        border-radius: 8px;
        font-weight: 800;
        text-align: center;
    }

    th{
        font-size: 1.1rem;
    }
    tr{
        text-align: center;
        width: auto;
    }

    .buttons{
        display: flex;
        gap: 20px;
        align-items: center;
        justify-content: center;
        margin-left: 0.5rem;
        margin-top: 0.5rem;
    }

    .buttons button{

        background-color: transparent;
        border: none;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
    }
 
`