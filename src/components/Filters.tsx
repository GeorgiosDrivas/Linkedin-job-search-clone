import React, { useState } from "react";
import {
  Grid,
  TextField,
  InputLabel,
  FormControl,
  Button,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import Autocomplete, {
  AutocompleteChangeReason,
  AutocompleteChangeDetails,
} from "@mui/material/Autocomplete";
import { FiltersProps, Option } from "src/types/types";

export function Filters({ handlers }: FiltersProps) {
  const [type, setType] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [field, setField] = useState<string>("");
  const [searchValue, setSearchValue] = useState<string>("");

  const handleSelectChange = (
    event: SelectChangeEvent<string>,
    valueSetter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    valueSetter(event.target.value as string);
  };

  const handleAutocompleteChange = (
    event: React.SyntheticEvent<Element, Event>,
    value: Option | null,
    reason: AutocompleteChangeReason,
    details?: AutocompleteChangeDetails<Option>
  ) => {
    if (value) {
      setSearchValue(value.label);
    }
  };

  const options: Option[] = [
    { label: "None" },
    { label: "Software Engineer" },
    { label: "Web Developer" },
    { label: "Data Scientist" },
    { label: "UI/UX Designer" },
    { label: "Frontend Developer" },
    { label: "DevOps Engineer" },
  ];

  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Autocomplete
          id="combo-box-demo"
          options={options}
          getOptionLabel={(option) => option.label}
          sx={{ width: 300 }}
          onChange={handleAutocompleteChange}
          renderInput={(params) => <TextField {...params} label="Title" />}
        />
      </Grid>
      <Grid item xs={8}>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <FormControl sx={{ minWidth: 150 }}>
              <InputLabel id="type-select-label">Type</InputLabel>
              <Select
                labelId="type-select-label"
                id="type-filter-select"
                value={type}
                onChange={(event) => handleSelectChange(event, setType)}
                label="Type"
              >
                <MenuItem value={""}>None</MenuItem>
                <MenuItem value={"full-time"}>Full-time</MenuItem>
                <MenuItem value={"part-time"}>Part-time</MenuItem>
                <MenuItem value={"internship"}>Internship</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl sx={{ minWidth: 150 }}>
              <InputLabel id="location-select-label">Location</InputLabel>
              <Select
                labelId="location-select-label"
                id="location-filter-select"
                value={location}
                onChange={(event) => handleSelectChange(event, setLocation)}
                label="Location"
              >
                <MenuItem value={""}>None</MenuItem>
                <MenuItem value={"On-site"}>On-site</MenuItem>
                <MenuItem value={"Remote"}>Remote</MenuItem>
                <MenuItem value={"Hybrid"}>Hybrid</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl sx={{ minWidth: 150 }}>
              <InputLabel id="field-select-label">Field</InputLabel>
              <Select
                labelId="field-select-label"
                id="field-filter-select"
                value={field}
                onChange={(event) => handleSelectChange(event, setField)}
                label="Field"
              >
                <MenuItem value={""}>None</MenuItem>
                <MenuItem value={"web-development"}>Web Development</MenuItem>
                <MenuItem value={"software-development"}>
                  Software Development
                </MenuItem>
                <MenuItem value={"financial-services"}>
                  Financial Services
                </MenuItem>
                <MenuItem value={"graphic-design"}>Graphic Design</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              onClick={() => handlers(location, type, field, searchValue)}
            >
              Search
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
