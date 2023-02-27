import {combineReducers} from 'redux'

import timeReducer from "../times/reducer"

const rootReduce = combineReducers({ timeReducer })

export default rootReduce;
