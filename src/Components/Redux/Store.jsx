import {configureStore} from '@reduxjs/toolkit'
import Mainslice from './Mainslice'

const Store = configureStore({
    reducer: {
        addvalue:Mainslice
    }
})
export default Store;  