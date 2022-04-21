import React from 'react'
import Navbar from './components/Navbar.jsx'
import MainContent from './components/MainContent.jsx'
import Card from './components/Card.jsx'

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainContent />
      <Card 
        img='katie-zaferes.png'
        rating='5.0'
        reviewCount={6}
        country='USA'
        title='Life lessons with Katie Zaferes'
        price={136}
      />
    </div>
  )
}

export default App
