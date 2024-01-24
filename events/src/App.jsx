import './App.css'
import Cards from './components/Cards'
import Cart from './components/Cart'
import Landing from './components/Landing'

import "@fontsource/jetbrains-mono"; // Defaults to weight 400
import "@fontsource/jetbrains-mono/400.css"; // Specify weight
import "@fontsource/jetbrains-mono/400-italic.css"; // Specify weight and style

function App() {

  return (
    <>
    <Landing/>
      <Cards />
      <Cart/>
    </>
  )
}

export default App
