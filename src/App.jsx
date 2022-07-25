import "./App.scss"
import IndexRouter from "./router"
import Footer from "./components/layout/footer/Footer"
import Header from "./components/layout/header/Header"
import NavBar from "./components/layout/navBar/NavBar"
// import Swiper from "./components/layout/swiper/Swiper"

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      {/* <Swiper /> */}
      <main className="main_container">
        <IndexRouter />
      </main>
      <Footer />
    </div>
  )
}

export default App
