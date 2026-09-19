import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Apartments from "./pages/Apartments"
import PropertiesLands from "./pages/PropertiesLands"
import WhyUs from "./pages/WhyUs"
import Contact from "./pages/Contact"

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/apartments" element={<Apartments />}/>
      <Route path="/propertieslands" element={<PropertiesLands/>} />
      <Route path="/whyus" element={<WhyUs />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
