import { useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

export function Filters({ handlers }) {
    const [type, setType] = useState('');
    const [location, setLocation] = useState('');
    const [field, setField] = useState('');

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
                        <FormControl sx={{ minWidth: 150 }}> {/* Job type select */}
                            <InputLabel id="type-select-label">Type</InputLabel>
                            <Select
                                labelId="type-select-label"
                                id="type-filter-select"
                                value={type}
                                label="Type"
                                onChange={handleChange(setType)}
                            >
                                <MenuItem value={''}>None</MenuItem>
                                <MenuItem value={'full-time'}>Full-time</MenuItem>
                                <MenuItem value={'part-time'}>Part-time</MenuItem>
                                <MenuItem value={'internship'}>Internship</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl sx={{ minWidth: 150 }}>{/* Location select */}
                            <InputLabel id="location-select-label">Location</InputLabel>
                            <Select
                                labelId="location-select-label"
                                id="location-filter-select"
                                value={location}
                                label="Location"
                                onChange={handleChange(setLocation)}
                            >
                                <MenuItem value={''}>None</MenuItem>
                                <MenuItem value={'on-site'}>On-site</MenuItem>
                                <MenuItem value={'remote'}>Remote</MenuItem>
                                <MenuItem value={'hybrid'}>Hybrid</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl sx={{ minWidth: 150 }}>{/* field select */}
                            <InputLabel id="field-select-label">Field</InputLabel>
                            <Select
                                labelId="field-select-label"
                                id="field-filter-select"
                                value={field}
                                label="field"
                                onChange={handleChange(setField)}
                            >
                                <MenuItem value={''}>None</MenuItem>
                                <MenuItem value={'web-development'}>Web Development</MenuItem>
                                <MenuItem value={'software-development'}>Software Development</MenuItem>
                                <MenuItem value={'financial-services'}>Financial Services</MenuItem>
                                <MenuItem value={'graphic-design'}>Graphic Design</MenuItem>
                            </Select>
                        </FormControl>
                        <Button variant="contained" id="filters_search_btn" onClick={() => handlers(location, type, field)}>Search</Button>
                    </Grid>
                </Grid>
            </Grid >
        </>
    )
};
