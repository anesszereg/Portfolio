import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Services from './components/Services/Services'
import Portfolio from './components/Portfolio/Portfolio'
import TestM from './components/TestM/TestM'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Experience from './components/Experience/Experience'




function App() {


  return (
    <div className="App">
      <Header />
      <Navbar />
      <About />
      <Experience/>
      <Services />
      <Portfolio />
      {/* <TestM/> */}
      <Contact />
      <Footer/>






    
      
   
      
    </div>
  )
}

export default App
