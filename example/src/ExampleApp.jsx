import React from 'react'
import { BackdropProvider } from 'use-backdrop';

import ExampleComponent from './ExampleComponent'

const renderCustomBackdropSurface = (children) => (
  <div style={{
    // Style your own backdrop surface!
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100vh',
    width: '100vw',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  }}>
    {children}
  </div>
)

const App = () => (
  <BackdropProvider 
    // Override default backdrop surface.
    backdropSurface={renderCustomBackdropSurface}
  >
    <ExampleComponent />
  </BackdropProvider>
)

export default App
