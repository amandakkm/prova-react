import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import PaginaInicial from "./Pages/PaginaInicial/PaginaInicial"
import "./App.css"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaginaInicial/>}></Route>
      </Routes>
    </Router>
  )
}


export default App
