import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Collection from './pages/Collection.jsx'
import Home from './pages/home.jsx'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Product from './pages/Product.jsx'
import { store } from './redux/store/store.js'
import { Provider } from 'react-redux'
import Orderpage from './pages/orderpage/MainOrderpage.jsx'




  const router=createBrowserRouter([
    {
        path:'/',
        element:(<App/>),
        children:[
            {
                path:'',
                element:(<Home />)
            },
            {
                path:'collection',
                element:(<Collection />)
            },
            {
                path:'login',
                element:(<Login />)
            },
            {
                path:'signup',
                element:(<><Signup /></>)

            },
            {
                path:'product/:productId',
                element:(<><Product /></>)

            },
            {
                path:'orderpage',
                element:(<><Orderpage /></>)
            }
        ]
    }
  ])

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
    </>

)
