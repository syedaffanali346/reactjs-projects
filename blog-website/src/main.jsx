import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/Home.jsx'
import Blog from './pages/Blog.jsx'
// import About from './pages/About.jsx'
// import Contact from './pages/Contact.jsx'
// import Services from './pages/Services.jsx'
import SingleBlog from './pages/SingleBlog.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      // {
      //   path: "/blogs",
      //   element: <Blog/>
      // },
      // {
      //   path: "/about",
      //   element: <About/>
      // },
      // {
      //   path: "/contact",
      //   element: <Contact/>
      // },
      // {
      //   path: "/services",
      //   element: <Services/>
      // },
      {
        path: "/blogs/:id",
        element: <SingleBlog/>
      }
    ]
  }
]) 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
