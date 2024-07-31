import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    chemicals: [
        {id:1 , name: 'Hydrochloric Acid', formula: "HCl" },
        {id:2, name: 'Sodium Chloride', formula: "NaCl" },
        {id:3, name: 'Sulfuric Acid', formula: "H2SO4" },
        {id:4, name: 'Ammonia', formula: "NH3" },
        {id:5, name: 'Athanol', formula: "C2H5OH" },
    ],
    error:"",
    search:""
}

const chemicalSlice = createSlice ({
    name: "chemicals",
    initialState,
    reducers: {
        deleteItem: (state, action) => {
            state.chemicals = state.chemicals.filter(item => item.id !== action.payload)
        },
        updateName: (state, action) => {
            state.chemicals = state.chemicals.map(item => item.id === action.payload.id ?{...item,name:action.payload.name}:item)
        },
        updateFor: (state, action) => {
            state.chemicals = state.chemicals.map(item => item.id === action.payload.id ?{...item,formula:action.payload.formula}:item)
        },
        addItem: (state, action) =>{
            state.chemicals.push({id: state.chemicals.length<1?1:(Math.max(...state.chemicals.map(item => item.id)) + 1), 
                name:action.payload.name, 
                formula:action.payload.formula})
        }
    }
})

export const {deleteItem, updateName, updateFor, addItem} = chemicalSlice.actions
export default chemicalSlice.reducer