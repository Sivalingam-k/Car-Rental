import React from 'react'
import { Fragment } from 'react'
import { Outlet } from 'react-router-dom';
import AdminDashboardComp from '../layout/AdminDashboardComp';
import FooterComp from '../layout/FooterComp'
import NavComp from '../layout/NavComp';

const Dashboard = () => {
    return (
        <div className="container-fluid mt-2" >
        {/* <h2>This is MainDashboardComp Component</h2>   */}
        
        <div className='card border-primary'>
          <div className='card-header border-primary'> 
            <NavComp></NavComp>
      
          </div>
          <div className='card-body border-primary'> 
         <AdminDashboardComp></AdminDashboardComp>
          </div>
          <div className='card-footer border-primary'> 
           <FooterComp></FooterComp>
          </div>
        </div>
      </div>
    )
}

export default Dashboard
