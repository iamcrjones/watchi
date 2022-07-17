import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Box } from '@mui/material';

const Calendar = () => {
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