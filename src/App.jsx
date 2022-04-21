import React from 'react'
import Navbar from './components/Navbar.jsx'
import MainContent from './components/MainContent.jsx'
import Card from './components/Card.jsx'

import cardData from './components/cardData'

function App() {
  const cardElements = cardData.map(item => {
    return(
      <Card 
        item={item}
      />
    )
  })

  return (
    <div className="App">
      <Navbar />
      <MainContent />
      <section className="card-container">
        {cardElements}
      </section>
    </div>
  )
}

export default App
