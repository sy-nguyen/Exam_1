import React from 'react'
import {useDispatch, useSelector}  from 'react-redux'
import {Container, Table} from "reactstrap"
import ChemicalItem from '../chemicalItem/ChemicalItem'
import { addItem, deleteItem, updateFor, updateName } from '../../redux/chemicalSlice'
import "./chemicalApp.css"
import AddChemical from '../add/AddChemical'

export default function ChemicalApp() {
    const {chemicals} = useSelector(state => state.chemicals)
    const dispatch = useDispatch()
    const handle_del = (id) =>{
        dispatch(deleteItem(id))
    }
    const handle_upN = (text) => {
        dispatch(updateName(text))
    }
    const handle_upF = (text) => {
        dispatch(updateFor(text))
    }
    const handle_add = (text) => {
        dispatch(addItem(text))
    }

  return (
    <div>
        <Container>
            <div className='title'>
                <h1 >Chemical List</h1>
                <AddChemical handle_add={handle_add}/>
            </div>
            <Table hover>
                <thead>
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                            Formula
                        </th>
                        <th>
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        chemicals.map((item, index) => (<ChemicalItem key={index} item={item} handle_del={handle_del} handle_upN={handle_upN} handle_upF={handle_upF}/>))
                    }
                </tbody>
            </Table>
        </Container>
    </div>
  )
}
