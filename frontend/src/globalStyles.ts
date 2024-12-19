import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    #root{
        width: 50%;
    }

    @media (max-width: 1650px){
        #root{
            width: 65%;
        }
    }

    @media (max-width: 780px){
        #root{
            width: 75%;
        }
    }

    body{
        background-color: #191919;
        font-family: 'Courier New', Courier, monospace;
        color: #D3D3D3;
        line-height: 1.6;
        display: flex;
        width: 100%;
        justify-content: center;

    }

    header{
        width: 100%;
    }
    
    a {
        text-decoration: none;
        color: inherit;
    }

`

export default GlobalStyles