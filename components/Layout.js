import React from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import Login from './login'
import Register from './register'
import Sidebar from './sidebar'
import CreateUser from './createform/createuser'

export default function Layout({}) {
    return (
        
        <div className="bg-white-300">
              <Navbar>
                 </Navbar>
            <Head> 
           
            <Sidebar>
           
              </Sidebar> 
              </Head>
           <div className="container mx-64">

            <CreateUser> 

             </CreateUser>
             </div>
        </div>
    )
}
