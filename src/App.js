
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Nlplogin from "./Nlplogin"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Nlplogin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App