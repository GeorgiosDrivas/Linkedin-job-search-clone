import { useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Filters() {
    const [type, setType] = useState('');
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');

    const handleChange = (value) => {
        return (event) => {
            value(event.target.value);
        }
    };

    return (
        <>
            <Grid container>
                <Grid item xs={4} >{/* Search bar */}
                    <TextField id="standard-basic" label="Search" variant="standard" />
                </Grid>
                <Grid item xs={7} >{/* Filters */}
                    <Grid container justifyContent={"space-evenly"}>
                        <FormControl sx={{ minWidth: 150 }}>
                            <InputLabel id="type-select-label">Type</InputLabel>
                            <Select
                                labelId="type-select-label"
                                id="type-filter-select"
                                value={type}
                                label="Type"
                                onChange={handleChange(setType)}
                            >
                                <MenuItem value={'permanent'}>Permanent</MenuItem>
                                <MenuItem value={'part-time'}>Part-time</MenuItem>
                                <MenuItem value={'internship'}>Internship</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl sx={{ minWidth: 150 }}>
                            <InputLabel id="location-select-label">Location</InputLabel>
                            <Select
                                labelId="location-select-label"
                                id="location-filter-select"
                                value={location}
                                label="Location"
                                onChange={handleChange(setLocation)}
                            >
                                <MenuItem value={'on-site'}>On-site</MenuItem>
                                <MenuItem value={'remote'}>Remote</MenuItem>
                                <MenuItem value={'hybrid'}>Hybrid</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl sx={{ minWidth: 150 }}>
                            <InputLabel id="date-select-label">Date</InputLabel>
                            <Select
                                labelId="date-select-label"
                                id="date-filter-select"
                                value={date}
                                label="date"
                                onChange={handleChange(setDate)}
                            >
                                <MenuItem value={'week'}>Week</MenuItem>
                                <MenuItem value={'month'}>Month</MenuItem>
                                <MenuItem value={'three-months'}>3 months</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            </Grid >
        </>
    )
};

export { Filters };