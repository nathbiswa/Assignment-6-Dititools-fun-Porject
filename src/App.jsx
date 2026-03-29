
import './App.css'
import Footer from './Components/Footer/Footer'
import GetStart from './Components/GetStart/GetStart'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navebar/Navbar'
import Pricing from './Components/Pricing/Pricing'
import Trail from './Components/Trail/Trail'
import User from './Components/User/User'

function App() {
 
  return (
    <>
     <Navbar />
     <Hero />
     <User />
     <GetStart />
     <Pricing />
     <Trail />
     <Footer />
     
    </>
  )
}

export default App
