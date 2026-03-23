import './App.css'
import Banner from './components/Banner/Banner'
import CTA from './components/CTA/CTA'
import Features from './components/Features/Feature'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import ShopCategory from './components/Shop/Shopcategory'
import Testimonials from './components/Testimonials/Testimonials'

function App() {

  return (
    <>
      <Header />
      <Banner />
      <ShopCategory />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  )
}

export default App
