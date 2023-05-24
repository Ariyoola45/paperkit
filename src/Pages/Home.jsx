import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Hero from '../Components/Hero/Hero'
import Product from '../Components/Product/Product'
import Card from '../Components/Card/CradPage'
import Contact from '../Components/Contact/Contact'
import Footer from '../Components/Footer/Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Product/>
        <Card/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home