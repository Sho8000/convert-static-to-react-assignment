import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/layout/Layout.tsx'

const router = createBrowserRouter([
  {
   path:"/",
   element:<Layout/>
   ,
   errorElement:<h1>404 Not Found</h1>,
   children:[
    {
      path:"/",
      element:<App/>
    },
   ]
  }
])


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <RouterProvider router={router}/>
  </BrowserRouter>
)
