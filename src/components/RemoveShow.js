import * as React from 'react';
//import { removeShow } from './services/showServices';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { removeShow } from './services/showServices';
import { useState } from 'react'



const RemoveShow = ({id}) => {

    const [error, setError] = useState(null)


    const handleDelete = (e) =>{
        const confirmBox = window.confirm('Are you sure you want to delete this show?')
        if (confirmBox === true) {
            removeShow(id)
            .then((show) => {
                if(show.error){
                    setError(show.error)
                }else{
                    setError(null)
                }
        })
        .catch(e=> {
            console.log(e.response)
            console.log(e)
            setError(e.response.data.error)
        })}}

    return(
        <div className="delete-outline">
            {error && alert(error)}
            <DeleteOutlineIcon  onClick={handleDelete}>
            Remove
            </DeleteOutlineIcon>
        </div>
    )
}
export default RemoveShow;