import React from 'react'
import Footer from '../partials/Footer'
import Header from '../partials/Header'
import AllProducts from './AllProducts'
import HomeCarousel from './HomeCarousel'

export default function Home() {


  return (
    <div>
      <Header />
      <HomeCarousel />
      <AllProducts />
      <Footer />
    </div>
  )
}
