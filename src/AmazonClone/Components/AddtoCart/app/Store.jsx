import  {configureStore} from "@reduxjs/toolkit"
import cartSlice from "../features/CreateSlice"
export default configureStore({
    reducer: {
        app:cartSlice
    },
})