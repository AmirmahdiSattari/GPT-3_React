import React from 'react'

import './App.css'

import {
  Article, Brand, Cta,
  feature, Navbar
} from './components'


import Features from './containers/features/Features';

import {
  Footer, Header, Blog,
  Possibility, WhatGPT3,
  
} from './containers'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  )
}

export default App