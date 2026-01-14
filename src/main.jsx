import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App'
import Product from './pages/Product'
import NotionParaEmpresas from './pages/NotionParaEmpresas'
const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/productos/:slug', element: <Product /> },
  { path: '/notion-para-empresas', element: <NotionParaEmpresas /> }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
