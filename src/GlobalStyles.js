import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
html{
    background-color: #111111;
    overflow: hidden;
}
body{
    padding:0;
    margin:0;
    font-family: 'IBM Plex Sans', sans-serif;
}

h1{
    color: #fff;
}


`;


export default GlobalStyle;