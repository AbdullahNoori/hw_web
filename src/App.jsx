import Form from './form.jsx'
import Nav from './navbar.jsx'
import Card from './cards.jsx'
import './App.css'
import Deals from './Deals.jsx'
import Categories from './Categories.jsx'
import GameCard from './Game_Card.jsx'
import Footer from './footer.jsx'
import SignUp from './signup.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return(
    <>
    
          <Nav />
          <Categories />
          <h1 className="text-xl pl-4 mt-3 bg-gradient-to-t from-stone-500 to-stone-400 w-52 rounded-sm">Hottest deals🔥</h1>
          <Card />
          <Deals />
          <GameCard />
          <Footer />
          {/* <SignUp /> */}

    </>
  )
}

export default App



{/* <Routes>
<Route path="/" element={<LandingPage />} />
<Route path="/signup" element={<SignupPage />} />
</Routes> */}