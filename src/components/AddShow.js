import * as React from 'react';
import { useState } from "react"
import { addShow } from './services/showServices';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';


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
        data.append("description", e.target.description.value)
        data.append("episodes", e.target.episodes.value)
        data.append("monday", e.target.monday.checked)
        data.append("tuesday", e.target.tuesday.checked)
        data.append("wednesday", e.target.wednesday.checked)
        data.append("thursday", e.target.thursday.checked)
        data.append("friday", e.target.friday.checked)
        data.append("saturday", e.target.saturday.checked)
        data.append("sunday", e.target.sunday.checked)
        data.append("enddate", e.target.enddate.value)
        data.append("crunchyroll", e.target.crunchyroll.checked)
        data.append("funimation", e.target.funimation.checked)
        data.append("netflix", e.target.netflix.checked)
        data.append("picture", e.target.picture.files[0])

        addShow(data)
        .then((show) => {
            if(show.error){
                setError(show.error)
            }else{
                setError(null)
                // setFormData(initialFormData)
                // formData.append({ image: e.target.files[0] })
                window.location.href = '/';
            }
        })
        .catch(e=> {
            console.log(e.response)
            console.log(e)
            setError(e.response.data.error)

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

        <Container maxWidth="l">
        {error && <h3>{error}</h3>}
        <Grid container spacing={2} sx={{ 
            height: '100vh',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            }}>
    
          <Grid item xs={6}>
            <Box component="form" onSubmit={handleSubmit}  sx={{ mt: 1 }}>  
            <h1>Login</h1>
            <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="title"
                    label="Title"
                    name="title"
                    autoFocus
                  />

            <TextField 
                    margin="normal"
                    required
                    fullWidth
                    id="description"
                    label="Description"
                    name="description"
                    autoFocus
                    />

            <TextField

                    margin="normal"
                    required
                    fullWidth
                    id="episodes"
                    label="Episodes (numbers only)"
                    name="episodes"
                    autoFocus
                    />

                    <label>Start Date:</label>
                    <input 
                    type="date" 
                    name="airdate" 
                    id="airdate"
                    />

                
                    <label>End Date:</label>
                    <input 
                    type="date" 
                    name="enddate" 
                    id="enddate"
                    />

                    

                    <FormControlLabel
                        control={
                        <Checkbox 
                        name="monday" id="monday" />
                        }
                        label="M"
                    />
                    
                    <FormControlLabel
                        control={
                        <Checkbox 
                        name="tuesday" id="tuesday" />
                        }
                        label="T"
                    />

                    <FormControlLabel

                        control={
                        <Checkbox
                        name="wednesday" id="wednesday" />
                        }
                        label="W"
                        />

                    <FormControlLabel
                        control={
                        <Checkbox
                        name="thursday" id="thursday" />
                        }
                        label="Th"
                        />

                    <FormControlLabel
                        control={
                        <Checkbox
                        name="friday" id="friday" />
                        }
                        label="F"
                        />

                    <FormControlLabel
                        control={
                        <Checkbox
                        name="saturday" id="saturday" />
                        }
                        label="Sa"
                        />

                    <FormControlLabel

                        control={   
                        <Checkbox
                        name="sunday" id="sunday" />
                        }
                        label="Su"
                        />


                    <FormControlLabel   
                        control={   
                        <Checkbox
                        name="crunchyroll" id="crunchyroll" />
                        }
                        label="Crunchyroll"
                        />

                    <FormControlLabel
                        control={
                        <Checkbox
                        name="funimation" id="funimation" />
                        }
                        label="Funimation"
                        />

                    <FormControlLabel
                        control={
                        <Checkbox
                        name="netflix" id="netflix" />
                        }
                        label="Netflix"
                        />


                        <label htmlFor='picture'>Upload Image:</label>
                        <input type="file" name="picture" id="picture" accept="image/*" multiple={false} /> 



                  <Grid container  
                  sx={{ 
                    justifyContent: 'space-between',
                    textAlign: 'center',
                    alignItems: 'center',
                    }}>
                  
    
                    <Grid item >
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                        >
                            Add Show
                        </Button>
                        </Grid>
                  </Grid>
            </Box>
            
        </Grid>

        </Grid>
        </Container>









       


       

    )
}

export default AddShow;