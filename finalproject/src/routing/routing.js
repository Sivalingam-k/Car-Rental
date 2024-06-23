import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import AdminDashboardComp from '../CRUD/AdminDashboardComp'
import PageNotFound from '../components/PageNotFound'
import AddCarComp from '../CRUD/AddCarComp'
import UpdateCarComp from '../CRUD/UpdateCarComp'


const router = createBrowserRouter([

    {path:"addCar",element:<AddCarComp></AddCarComp>},
    {path:"updateCar/:id",element:<UpdateCarComp></UpdateCarComp>},
   
  
    {path:"adminDashboard",element:<AdminDashboardComp></AdminDashboardComp>,children:[
        {path:"addCar",element:<AddCarComp></AddCarComp>},

       ]},
    {path:"*",element:<PageNotFound></PageNotFound>}
])


export default router
