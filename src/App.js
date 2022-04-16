import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import Header from './components/header'


export default function App() {
    return (
        <Provider store={store}>
            <Header href='/' />


        </Provider>
    )
}
