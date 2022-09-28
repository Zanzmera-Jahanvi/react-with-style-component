import React from 'react'
import HeroSection from './components/HeroSection'

const About = () => {
  const data = {
    name:"Zanzmera Jahanvi",
    image:"./img/about.svg"
  }
  return (
    
    <HeroSection {...data}/>
  )
}

export default About