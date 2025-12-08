import { StrictMode } from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './routes/App.jsx'
import Bag from './Bag.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import { BsBag } from 'react-icons/bs'
import Home from './routes/Home.jsx'
import myntraStore from './store/index.js'
import {Provider} from 'react-redux'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        // loader: postLoader, // ✅ loader added
      },
      {
        path: "/bag",
        element: <Bag> </Bag> ,
        // action: CreateAction,
      },
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={myntraStore}> 
  
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
    </Provider>
  </StrictMode>,
)
