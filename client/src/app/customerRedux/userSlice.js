import { createSlice } from '@reduxjs/toolkit'
import { actionRegisterCustomer } from './userAction'

const initialState = {
    loading: false,
    token: JSON.parse(localStorage.getItem('tshop_access_token')) ?? '',
    customer: JSON.parse(localStorage.getItem('tshop_customer')) ?? '',
    error: '',
    message: ''
}

const customer = createSlice({
    name: 'customer',
    initialState,
    reducers: {},
    extraReducers: {
        // --------------------- login auth ---------------------- //
		[actionRegisterCustomer.pending]: (state) => {
			state.loading = true
			state.error = ''
		},
		[actionRegisterCustomer.fulfilled]: (state, { payload }) => {
			state.loading = false
			state.message = payload.message
			state.error = ''
		},
		[actionRegisterCustomer.rejected]: (state, { payload }) => {
			state.loading = false
			state.error = payload
		},
    }
})

export default customer.reducer