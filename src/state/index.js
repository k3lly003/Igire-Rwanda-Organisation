import { createSlice, PayloadAction } from "@reduxjs/toolkit";


// INITIALIZING STATES
const initialState = {
    isSidebarCollapsed: false,
}

// CREATING SLICE
export const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setIsSidebarCollapsed: (state,action) => {
        state.isSidebarCollapsed = action.payload;
    },
}
})

export const { setIsSidebarCollapsed } = globalSlice.actions;

export default globalSlice.reducer;