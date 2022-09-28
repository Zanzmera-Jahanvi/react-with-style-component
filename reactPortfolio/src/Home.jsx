import React from 'react'
import HeroSection from './components/HeroSection'

const Home = () => {
  const data = {
    name:"zanzmera jahanvi",
    image:"./img/Hero.svg"
  }
  return (
    <HeroSection {...data}/>
  )
}

export default Home