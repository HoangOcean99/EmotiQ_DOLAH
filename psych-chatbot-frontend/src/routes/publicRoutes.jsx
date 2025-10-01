import React from 'react'
import Home from '../pages/Home/Home'
import AboutPage from '../pages/About/AboutPage'

export const publicRoutes = [
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/about',
        element: <AboutPage/>
    }
]
