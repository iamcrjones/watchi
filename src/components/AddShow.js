import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Box } from '@mui/material';
import { useState } from "react"
import { addShow } from './services/showServices';


const AddShow = () => {
    // const initialFormData = {
    //     title: '',
    //     description: '',
    //     episodes: '',
    //     airdate: '',
    //     monday: '',
    //     tuesday: '',
    //     wednesday: '',
    //     thursday: '',
    //     friday: '',
    //     saturday: '',
    //     sunday: '',
    //     enddate: '',
    //     crunchyroll: '',
    //     funimation: '',
    //     netflix: '',
    //     picture: null
    // }

    // const [formData, setFormData] = useState(initialFormData)

    const [error, setError] = useState(null)

    // const admin = sessionStorage.getItem('admin')
    // function adminCheck() {
    //     if (admin !== 'true'){
    //     alert('Unauthorized access...')
    //     window.location.href = '/';
    // }}

    const handleSubmit = (e) =>{
        e.preventDefault()
        // console.log(formData)
        const data = new FormData()
        data.append("title", e.target.title.value)
        data.append("description", e.target.title.value)
        data.append("episodes", e.target.episodes.value)
        data.append("picture", e.target.picture.files[0])
        addShow(data)
        .then((show) => {
            if(show.error){
                setError(show.error)
            }else{
                setError(null)
                // setFormData(initialFormData)
                // formData.append({ image: e.target.files[0] })
                //window.location.href = '/';
            }
        })
        .catch(e=> {
            console.log(e.response)
            console.log(e)
            setError(e.response.data.error)
            // console.log(e.response.data)
        })

    }




    // const handleFormData = (e) => {
    //     setFormData({
    //         ...formData,
    //         [e.target.id]: e.target.value,
    //         // [e.target.id]: e.target.files[0]
    //     })
    // }
    return(
        <>
            {/* {adminCheck()} */}
            <Box>
                <Card>
                    <CardContent>
                <h1>Add Show</h1>
                {error && <h3>{error}</h3>}
                <form onSubmit={handleSubmit}>
                    <label>Title:</label>
                    <input type="text" name="title" id="title"/>
                    <label>Description:</label>
                    <input type="text" name="description" id="description" />
                    <label>Number of Episodes:</label>
                    <input type="text" name="episodes" id="episodes" />

    

                    <label>Start Date:</label>
                    <input type="date" name="day" id="day"/>
                    <label>End Date:</label>
                    <input type="date" name="enddate" id="enddate" />


                    <label>M:</label>
                    <input type="checkbox" name="monday" id="monday" />
                    <label>T:</label>
                    <input type="checkbox" name="tuesday" id="tuesday" />
                    <label>W:</label>
                    <input type="checkbox" name="wednesday" id="wednesday" />
                    <label>Th:</label>
                    <input type="checkbox" name="thursday" id="thursday" />
                    <label>F:</label>
                    <input type="checkbox" name="friday" id="friday" />
                    <label>S:</label>
                    <input type="checkbox" name="saturday" id="saturday" />
                    <label>Su:</label>
                    <input type="checkbox" name="sunday" id="sunday" />


                    <label>Crunchyroll:</label>
                    <input type="checkbox" name="crunchyroll" id="crunchyroll" />




                    <label>Funimation:</label>
                    <input type="checkbox" name="funimation" id="funimation" />
                    <label>Netflix:</label>
                    <input type="checkbox" name="netflix" id="netflix" />
                    <label htmlFor='picture'>Upload Image:</label>
                    <input type="file" name="picture" id="picture" accept="image/*" multiple={false} />
                    
                    <input type="submit" />
                    </form>
                    </CardContent>
                </Card>
            </Box>
        </>

    )
}

export default AddShow;