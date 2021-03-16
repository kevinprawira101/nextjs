import React from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import Login from '../pages/auth/login'
import Register from '../pages/auth/register'
import Sidebar from './sidebar'
import CreateUser from '../pages/createform/createuser'
import TabelPajak from '../pages/pajak/tabelpajak'

export default function Layout({ }) {
    return (

        <div className="bg-white-300">
            <Navbar>
            </Navbar>
            <Head>

                <Sidebar>

            </Sidebar>
         </Head>
         <div className="container mx-64">
 <TabelPajak> 

             </TabelPajak>
</div>
           
             </div>
    )
}
