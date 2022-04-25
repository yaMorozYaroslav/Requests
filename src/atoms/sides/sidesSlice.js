 import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
 import axios from 'axios'

const initialState = {
sides: [],
status: 'idle',
error: null}

export const fetchSides = createAsyncThunk('sides/fetchSides', async()=>{
	const response = await axios.get('https://back-elevators.herokuapp.com/elevators')
	return response.data
})

const sidesSlice = createSlice({
	name: 'sides',
	initialState,
	reducers:{},
extraReducers(builder){
    builder
        .addCase(fetchSides.pending, (state, action)=>{
          state.status = 'loading'
        })
        .addCase(fetchSides.fulfilled, (state, action)=>{
          state.status = 'succeeded'
          state.sides = state.sides.concat(action.payload)
        })
        .addCase(fetchSides.rejected, (state, action)=>{
          state.status = 'failed'
          state.error = action.error.message
        })
      }
  })
export default sidesSlice.reducer

export  const selectAllSides = state => state.sides.sides