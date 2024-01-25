import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Services from './components/Services'
import './global.css'

const items = [
  {
      id: "#carPlates",
      label: "CAR Plates"
  },
  {
      id: "#ourServices",
      label: "Our Services"
  },
  {
      id: "#ourContact",
      label: "OUR CONTACT"
  },
]

const Homepage = () => {
  return (
    <div>
      <Header items={items}/>
      <Services/>
      <Contact/>
      <Footer />
    </div>
  )
}

export default Homepage
