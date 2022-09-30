import React,{useEffect} from 'react'
import { useGlobalContext } from './components/Context'
import HeroSection from './components/HeroSection'

const Home = () => {
  // const data = {
  //   name:"zanzmera jahanvi",
  //   image:"./images/Hero.svg"
  // }
  const { updateHomePage } = useGlobalContext();

  useEffect(() => {
    updateHomePage()
  }, [])

  return (
    <>
      <HeroSection />
      {/* <HeroSection {...data}/> */}
    </>
  )
}

export default Home