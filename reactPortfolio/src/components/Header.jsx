import React from 'react'
import Navbar from './Navbar'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <MainHeader>
      <NavLink to="/">
       <h3 className='logo'>LOGO</h3>
      </NavLink>
        <Navbar />
      </MainHeader>
    </>
  )
}

const MainHeader = styled.header`
padding:0 4.8rem;
height:10rem;
background-color:${({theme}) => theme.colors.bg};
display:flex;
justify-content:space-between;
align-itmes:center;

.logo{
  margin-top:3rem;
  font-size:3rem;
}
`;

export default Header