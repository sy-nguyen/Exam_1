import { Button, Input } from 'reactstrap'
import React, {useState}from 'react'


export default function ChemicalItem(props) {
    const {item, handle_del, handle_upN, handle_upF} = props
    const [textName, setTextName] = useState(item.name)
    const [textFor, setTextFor] = useState(item.formula)
    const [isEdit1, setIsEdit1] = useState(false)
    const [isEdit2, setIsEdit2] = useState(false)
  return (
            <tr>
                <td>
                {
                isEdit1?<Input 
                    value={textName} 
                    onChange={(e) => setTextName(e.target.value)} 
                    onKeyDown={(e) => {
                        if(e.key==="Enter"){
                            setIsEdit1(false)
                            handle_upN({id:item.id,name:textName})
                        }
                    }}/>:
                <p onDoubleClick={ () => setIsEdit1(true)}>{item.name}</p>  
                }
                </td>
                <td>
                    {
                    isEdit2?<Input 
                        value={textFor} 
                        onChange={(e) => setTextFor(e.target.value)} 
                        onKeyDown={(e) => {
                            if(e.key==="Enter"){
                                setIsEdit2(false)
                                handle_upF({id:item.id,formula:textFor})
                            }
                        }}/>:
                    <p onDoubleClick={ () => setIsEdit2(true)}>{item.formula}</p>  
                    }
                </td>
                <td>
                    <Button className='btn btn-danger' onClick={() => handle_del(item.id)}>Delete</Button>
                </td>
            </tr>
  )
}
