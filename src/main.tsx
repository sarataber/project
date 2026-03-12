import { createRoot } from 'react-dom/client'
import './index.css'
import ColorProvider from './context/colorContext'
import {  RouterProvider } from 'react-router-dom'
import routes from './routes'



createRoot(document.getElementById('root')!).render(

        <RouterProvider router={routes}></RouterProvider>

)
