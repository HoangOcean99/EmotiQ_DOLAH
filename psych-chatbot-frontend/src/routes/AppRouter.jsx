import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { publicRoutes } from './publicRoutes'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {publicRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
