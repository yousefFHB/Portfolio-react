import React from 'react'
import Nav from './Components/Nav'
import Footer from './Components/Footer'
import Home from "./Pages/Home"
import About from './Pages/About'
import Projects from "./Pages/Projects"
import PageWrapper from "./Components/PageWrapper"
import { AnimatePresence } from 'framer-motion'
import { Toaster } from 'react-hot-toast'
import { Route, Routes, useLocation } from 'react-router-dom'
export default function App() {
  const location = useLocation();

  return (
    <>




      <main className="min-h-screen relative z-0">
        {/* No fixed background color here if you want the navbar to blur the page content */}
        <Nav />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
            <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </main>

      <Footer />
      <Toaster />




    </>
  )
}
