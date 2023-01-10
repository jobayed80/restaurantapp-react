import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Header, MainContainer, CreateContainer } from './components'

const App = () => {
  return (
    // <div className='w-screen h-screen flex items-center justify-center text-blue-600'>App</div>
    <AnimatePresence>
      <>
      {/* jobayed jobayed */}

        <div className='w-screen h-auto flex flex-col bg-primary'>
          <Header></Header>

          {/* md:mt-24  (mt-16 that means for mobile view..ekhane samll hole mt 16 hbe,,,md hole 24 hbe for desktop or tablet) */}
          <main className='mt-16 md:mt-20 md:px-16 py-4 px-4 w-full p-8'> 
            <Routes>
              <Route path='/*' element={<MainContainer />} />
              <Route path='/createContainer' element={<CreateContainer />} />
            </Routes>
          </main>
        </div>

      </>
    </AnimatePresence>

  )
}

export default App