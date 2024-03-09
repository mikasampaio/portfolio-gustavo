import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        border: none;
        font-family: 'Poppins', sans-serif;
    }
    
    body {
        background-color: #000000;
        padding: 15px;
        overflow-x: hidden;
    }
`
