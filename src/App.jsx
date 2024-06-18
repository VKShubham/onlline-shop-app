import { useState } from 'react'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

function App() {

  const router = createBrowserRouter([
    {
      path : '/',
      element : <SignupPage />
    },
    {
      path : '/login',
      element : <LoginPage />
    },
    {
      path : '/home',
      element : <HomePage />
    }
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
