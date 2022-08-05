import * as React from 'react';
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
                    alert('Show deleted successfully')
                    window.location.href = '/'

                }
        })
        .catch(e=> {
            setError(e.response.data.error)
        })}}

    return(
            // sessionStorage.getItem('admin') !== 'true' ? (
            //     <></>
            // ):(<div className="delete-outline">
            //         {error && alert(error)}
            //         <DeleteOutlineIcon  onClick={handleDelete}>
            //         Remove
            //         </DeleteOutlineIcon>
            //     /div>)
        <>
            {sessionStorage.getItem('admin') !== 'true' ? (
                <></>
            ): (
                <div className="delete-outline">
                    {error && alert(error)}
                    <DeleteOutlineIcon  onClick={handleDelete}>
                    Remove
                    </DeleteOutlineIcon>
                </div>
            )}
        </>
    )
}
export default RemoveShow;