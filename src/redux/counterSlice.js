import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    query: '',
    weather:{},
    location: 'Tashkent'
  },
  reducers: {
    search: state => {
      if(state.key==='Enter'){
          setLocation(query)
      }
    },
    
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer