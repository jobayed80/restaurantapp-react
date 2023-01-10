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

          <main className='mt-24 w-full p-8'>
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