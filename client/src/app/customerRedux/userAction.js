import { createAsyncThunk } from '@reduxjs/toolkit'
import sendRequest from '~/utils/sendRequest'

export const actionRegisterCustomer = createAsyncThunk('CUSTOMER_REGISTER', async(data, {rejectWithValue}) => {
    // const { username, email, phone, address, password } = data
    try {

        const res = await sendRequest.post('/auth/register', data,)

        console.log(res);

        if(res.success){
            return res
        }else{
            return rejectWithValue(res.message)
        }
        
    } catch (error) {
        if (error.response && error.response.data.message) {
			return rejectWithValue(error.response.data.message)
		} else {
			return rejectWithValue(error.message)
		}
    }
})