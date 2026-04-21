import React from 'react'
import Nav from './Components/Nav'
import Footer from './Components/Footer'
import { AnimatePresence } from 'framer-motion'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import router from './Router'
export default function App() {
  return (
    <>
      <Nav />
      <main>
        <AnimatePresence mode='wait'>
          <RouterProvider router={router} />
        </AnimatePresence>

      </main>
      <Footer/>
      <Toaster/>



    </>
  )
}
