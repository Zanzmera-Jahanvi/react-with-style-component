import React,{useEffect} from 'react'
import HeroSection from './components/HeroSection'
import { useGlobalContext } from './components/Context'

const About = () => {
  // const data = {
  //   name:"Zanzmera Jahanvi",
  //   image:"./images/about.svg"
  // }
  const { updateAboutPage } = useGlobalContext();

  useEffect(() => {
    updateAboutPage()
  }, [])
  return (
    
    <HeroSection />
  )
}

export default About