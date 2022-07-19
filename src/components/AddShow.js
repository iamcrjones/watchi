import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Box } from '@mui/material';

const AddShow = () => {
    return(
        <Box>
            <Card>
                <CardContent>
            <h1>Add Show</h1>
            <form>
                <label>Title:</label>
                <input type="text" name="Title" />
                <label>Description:</label>
                <input type="text" name="Description" />
                <label>Number of Episodes:</label>
                <input type="text" name="Number of Episodes" />
                <label>Start Date:</label> 
                <input type="date" name="Start Date" />

                <label>End Date:</label>
                <input type="date" name="End Date" />
                <label>Crunchyroll:</label>
                <input type="checkbox" name="Crunchyroll" />
                <label>Funimation:</label>
                <input type="checkbox" name="Funimation" />
                <label>Netflix:</label>
                <input type="checkbox" name="Netflix" />
                <label>Upload Image:</label>
                <input type="file" name="Image" />
                <input type="submit" value="Add Show" />
                </form>
                </CardContent>
            </Card>
        </Box>

    )
}

export default AddShow;