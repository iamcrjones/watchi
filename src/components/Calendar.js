import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Box } from '@mui/material';

const Calendar = () => {
    // NOT MVP FEATURE!
    // In the future this component will pull a user's watchlist and fill out the calendar to give them a schedule for the week of what shows are coming up.
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    return(
        <div className="calendar">
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Box className="calendarTitle">
                        <h4> Your Week : </h4>
                    </Box>
                    <Box className="weekBoxes">
                        {days.map(day =>
                            <div key={days.indexOf(day)}>
                                <div className="dayBox"/>
                                <p>{day}</p>
                            </div>
                        )}
                    </Box>
                </CardContent>
            </Card>
        </div>
    )
}

export default Calendar;