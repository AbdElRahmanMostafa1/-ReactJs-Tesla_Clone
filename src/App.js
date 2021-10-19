import React from 'react';
import './App.css';

import Nav from './Nav';
import Screen from './Screen';

import model3 from './assets/Desktop-Model3.jpeg';
import models from './assets/Desktop-ModelS.jpeg';
import modelx from './assets/Desktop-ModelX.jpeg';
import modely from './assets/Desktop-ModelY.jpeg';
import solarpanels from './assets/Desktop-SolarPanels.jpeg';
import solarroof from './assets/Desktop-SolarRoof.jpeg';

const App = () => {
  return (
    <main className='app'>
      <Nav />
      <Screen
        modelName={`Model 3`}
        bgi={`${model3}`}
        firstScreen={true} 
      />

      <Screen 
        modelName={`Model s`}
        bgi={models} 
      />

      <Screen 
        modelName={`Model x`} 
        bgi={modelx} 
      />

      <Screen 
        modelName={`Model y`} 
        bgi={modely} 
      />

      <Screen 
        modelName={`solar panels`}
        bgi={solarpanels} 
        paragraph={`Lowest Cost Solar Panels in America`}
      />

      <Screen 
        modelName={`solar roof`}
        bgi={solarroof}
        paragraph={`Produce Clean Energy From Your Roof`}
      />
    </main>
  )
}

export default App;