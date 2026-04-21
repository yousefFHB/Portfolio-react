import React from 'react'
import About from '../Pages/About'
import Home from '../Pages/Home'
import Projects from '../Pages/Projects'
import PageWrapper from '../Components/PageWrapper'
import { createBrowserRouter } from 'react-router-dom'
const router = createBrowserRouter([
  {
    path:'/Home',
    element:<PageWrapper><Home/></PageWrapper>
  },
  {
    path:'/Projects',
    element:<PageWrapper><Projects/></PageWrapper>
  },
  {
    path:'/About',
    element:<PageWrapper><About/></PageWrapper>
  }
])
export default router