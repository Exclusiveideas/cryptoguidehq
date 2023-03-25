import { createSlice } from '@reduxjs/toolkit'

export const MobileNavSlice = createSlice({
  name: 'mobileNav',
  initialState: {
    openNav: false,
  },
  
  reducers: {
    updatMobileNav: (state) => {
        state.openNav = !(state.openNav)
    },
  },
})

// Action creators are generated for each case reducer function
export const { updatMobileNav } = MobileNavSlice.actions

export default MobileNavSlice.reducer