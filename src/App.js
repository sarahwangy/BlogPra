import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import store from './redux/store'
import Header from './components/header'
import Detail from './pages/detail'
import Home from './pages/home'


export default function App() {
    return (
        <Provider store={store}>

            <BrowserRouter>
                <Header href='/' />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/detail" element={<Detail />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    )
}
