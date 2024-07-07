import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Video from './pages/Video.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import Posts from './pages/Posts.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/video',
        element: <Video />
      },
      {
        path: '/posts',
        element: <Posts />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
