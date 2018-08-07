import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import postReducer from './reducers/reducer'
import App from './App'


const store = createStore(postReducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'),
)
