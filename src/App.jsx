import "./App.css"
import IndexRouter from "./router"
import Footer from "./layout/footer/Footer"
import Header from "./layout/header/Header"
import NavBar from "./layout/navBar/NavBar"

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <IndexRouter />
      <Footer />
    </div>
  )
}

export default App
