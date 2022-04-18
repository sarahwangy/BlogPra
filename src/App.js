
import React, { Component, lazy, Suspense } from 'react'

import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import store from './redux/store'
import Header from './components/header'
// import Detail from './pages/detail'
// import Home from './pages/home'
// import Login from './pages/login'
// import Write from './pages/write'



const Home = lazy(() => import('./pages/home'))
const Write = lazy(() => import('./pages/write'))
const Login = lazy(() => import('./pages/login'))
const Detail = lazy(() => import('./pages/detail'))



export default function App() {
    return (
        <Suspense fallback={<h1>Loading.....</h1>}>

            <Provider store={store}>
                <BrowserRouter>
                    <Header href='/' />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/write" element={<Write />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/detail/:id" element={<Detail />} />
                    </Routes>
                </BrowserRouter>


            </Provider>
        </Suspense>
    )
}
