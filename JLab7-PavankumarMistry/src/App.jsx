import Header from "./components/Header"
import Footer from "./components/Footer"
import PetList from "./components/PetList"
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main id="main">
        <PetList />
      </main>
      <Footer />
    </>
  )
}

export default App
