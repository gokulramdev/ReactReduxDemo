import React from 'react'
import { Provider } from 'react-redux'
import './App.css'
import store from './redux/store'
import UsersContainer from './components/UsersContainer'
import User from './components/User'
import Temp from './components/Temp'

function App () {
  return (
    <Provider store={store}>
      <div className='App'>
        {/* <UsersContainer /> */}
        <User/>
        <Temp/>
      </div>
    </Provider>
  )
}

export default App
