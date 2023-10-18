
import './App.css'
import { About } from './components/AboutMe/About'

import { Home } from './components/Home/Home'
import { NavComponent } from './components/Navbar/NavComponent'
import { Projects } from './components/Projects/Projects'

function App() {
  

  return (
    <div className='App'>
    
  <NavComponent/>
    <Home/>
    <About/>
    <Projects/>
    


    </div>
  )
}

export default App
