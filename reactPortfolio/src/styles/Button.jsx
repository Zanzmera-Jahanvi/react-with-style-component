import styled from "styled-components";

const Button = styled.button`
text-decoration:none;
max-width:auto;
background-color:rgb(98 84 244);
color:#fff;
padding:1.4rem 2.4rem;
border:none;
text-transform:upparcase;
text-align:center;
cursor:poiner;
transition:all 0.3s ease;

&:hover,
&:active{
    box-shadow:0 2rem 2rem 0 rgb(132 144 255/30%);
    box-shadow:${({theme}) => theme.colors.shadowSupport};
    transform:scale(0.96);
}

a{
    text-decoration:none;
    color:#fff;
    font-size:1.8rem;
}

`;

export default Button;