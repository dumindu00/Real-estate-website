import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Apartments from "./pages/Apartments"

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/apartments" element={<Apartments />}/>
      <Route />
      <Route />
      <Route />
      <Route />
      <Route />
    </Routes>
    </BrowserRouter>
  )
}

export default App
