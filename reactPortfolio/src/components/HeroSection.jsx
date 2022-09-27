import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../styles/Button';

const HeroSection = () => {
    return (
        <Wrapper>
            <div className="container grid grid-two-column">
                <div className="section-hero-data">
                    <p className='hero-top-data'>THIS IS ME</p>
                    <h1 className='hero-heading'>ZANZMERA JAHANVI</h1>
                    <p className='hero-para'>I'm Jahanvi.A Front-End Developer,Youtuber And Student</p>
                </div>
                <Button className="btn hireme-btn!!">
                    <NavLink to="/contact">Hire Me</NavLink>
                </Button>
                <div className="section-hero-image"></div>
            </div>
        </Wrapper>
    )
};

const Wrapper = styled.section``;

export default HeroSection