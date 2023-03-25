import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
html{
    background-color: #111111;
    overflow: hidden;
}
body{
    padding:0;
    margin:0;
}

h1{
    font-family: 'Lobster', cursive;
    color: #fff;
}

label{
    font-family: 'Open Sans', sans-serif;
}

h3{
    font-family: 'Open Sans', sans-serif;
}

button{
    font-family: 'Open Sans', sans-serif;
}
`;


export default GlobalStyle;