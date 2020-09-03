import React from 'react'

// Setup redux
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import ReduxThunk from 'redux-thunk'
import { composeWithDevTools} from 'redux-devtools-extension'
import allReducers from "./src/reducer"

// create global store
const globalStore = createStore(
  allReducers, {}, composeWithDevTools(applyMiddleware(ReduxThunk))
)

// import screen
import Home from "./src/screen/home"


// import main navigation
import MainNavigation from "./src/navigation/mainNav"
const App = ()=>{
  
  return(
    <Provider store={globalStore}>
      <MainNavigation/>
    </Provider>
  )
}

export default App