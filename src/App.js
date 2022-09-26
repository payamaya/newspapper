import Header from './components/Header'
import NavBar from './components/NavBar'
import Main from './components/Main'
import Sidebar from './components/Sidebar'
function App() {
  return (
    /* import Footer from './components/Footer' */
    <div className='container'>
      <Header />
    <NavBar/>
      <Main />
      <Sidebar />
     {/*  <Footer /> */}
    </div>
  )
}

export default App
