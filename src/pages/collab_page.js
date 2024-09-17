import React from 'react'
import Header from '../components/header'
import Collab from '../components/collab'
import WordCloud from '../components/wordCloud'; // Import the WordCloud component

const collab_page = () => {
  return (
    <div>
      <Header />
      <Collab />
      <WordCloud />
      
    </div>
  )
}

export default collab_page