import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background-color: #191919;
        font-family: 'Courier New', Courier, monospace;
        color: #D3D3D3;
        line-height: 1.6;
        display: flex;
        justify-content: center;

    }
    
    a {
        text-decoration: none;
        color: inherit;
    }

`

export default GlobalStyles