import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Box } from '@mui/material';
import { useState } from "react"
import { addShow } from './services/showServices';



const AddShow = () => {
    const initialFormData = {
        title: '',
        description: '',
        episodes: '',
        airdate: '',
        enddate: '',
        crunchyroll: '',
        funimation: '',
        netflix: '',
        image: null,
    }

    const [formData, setFormData] = useState(initialFormData)
    const [error, setError] = useState(null)

    // const admin = sessionStorage.getItem('admin')
    // function adminCheck() {
    //     if (admin !== 'true'){
    //     alert('Unauthorized access...')
    //     window.location.href = '/';
    // }}


    // const onImageChange = (e) => { 
    //     e.preventDefault()
    //     initialFormData.append({ image: e.target.files[0] });
    //   };


    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(formData)
        addShow(formData)
        .then((show) => {
            console.log(show)
            if(show.error){
                setError(show.error)
            }else{
                setError(null)
                setFormData(initialFormData)
                formData.append('image', this.state.image)
                this.props.handleUploadImage(formData)
                window.location.href = '/';
            }

        })
        .catch(e=> {
            setError(e.response.data.error)
            console.log(e.response.data)
        })

    }





    const handleFormData = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
            [e.target.id]: e.target.files[0]

        })
    }
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
                    <input type="text" name="title" id="title"onChange={handleFormData}/>
                    <label>Description:</label>
                    <input type="text" name="description" id="description" onChange={handleFormData}/>
                    <label>Number of Episodes:</label>
                    <input type="text" name="episodes" id="episodes" onChange={handleFormData}/>
                    <label>Start Date:</label>
                    <input type="date" name="airdate" id="airdate"onChange={handleFormData}/>

                    <label>End Date:</label>
                    <input type="date" name="enddate" id="enddate" onChange={handleFormData}/>
                    <label>Crunchyroll:</label>
                    <input type="checkbox" name="crunchyroll" id="crunchyroll" onChange={handleFormData}/>
                    <label>Funimation:</label>
                    <input type="checkbox" name="funimation" id="funimation" onChange={handleFormData}/>
                    <label>Netflix:</label>
                    <input type="checkbox" name="netflix" id="netflix" onChange={handleFormData}/>
                    <label>Upload Image:</label>
                    <input type="file" name="image" id="image" accept="image/*" multiple={false} onChange={handleFormData}/>
                    
                    <input type="submit" />
                    </form>
                    </CardContent>
                </Card>
            </Box>
        </>

    )
}

export default AddShow;