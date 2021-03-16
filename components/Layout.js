import React from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import Sidebar from './sidebar'
import Login from './login'
import Register from './register'
import CreateRole from '../pages/createform/createrole'
import CreateUser from '../pages/createform/createuser'


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

            </div>
        </div>
    )
}
