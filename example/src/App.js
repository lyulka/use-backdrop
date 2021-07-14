import React from 'react'
import { BackdropProvider } from 'use-backdrop';

import ExampleComponent from './ExampleComponent'

const App = () => (
  <BackdropProvider>
    <ExampleComponent />
  </BackdropProvider>
)

export default App
