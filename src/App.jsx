import { useState } from 'react'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import CartPage from './pages/CartPage'
import CheckOutPage from './pages/CheckOutPage'

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
    },
    {
      path : '/cart',
      element : <CartPage />
    },
    {
      path : '/checkout',
      element : <CheckOutPage />
    }
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
