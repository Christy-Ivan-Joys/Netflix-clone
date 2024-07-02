import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { action,horror,originals } from './urls'
import NavBar from './components/Navbar/NavBar'
import Banner from './components/Banner/Banner'
import Rowcard from './components/RowCards/Rowcard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <NavBar />
     <Banner />
     <Rowcard url={originals} title='Netflix originals' />
     <Rowcard url={action} title='Action' isSmall />
     <Rowcard url={horror} title='Horror' isSmall />
    </>
  )
}

export default App
