import * as React from 'react';
//import { removeShow } from './services/showServices';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';



const RemoveShow = (id) => {

    const handleSubmit = (e) =>{


    }

    return(
        <div className="delete-outline">

            <DeleteOutlineIcon  onClick={handleSubmit}>
            Remove
            </DeleteOutlineIcon>
        </div>
    )
}
export default RemoveShow;