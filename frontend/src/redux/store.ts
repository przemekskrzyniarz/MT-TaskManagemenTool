import {applyMiddleware, createStore, Store} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly'
import thunk from 'redux-thunk'

import reducers from '../redux/reducers'
import {Reducers} from '../redux/typings'

const composeEnhancers = composeWithDevTools({trace: true})

export const makeStore = (): Store<Reducers> => {
  return createStore(reducers, composeEnhancers(applyMiddleware(thunk)))
}

export default makeStore()
