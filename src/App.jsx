import './App.css';
import List from './components/List';
import { Filters } from './components/Filters';
import { Single } from './components/Single';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';

function App() {
  const [jobs, setJobs] = useState([]); // Get job posts from jobs.json
  const [filteredJobs, setFilteredJobs] = useState([]); // Filtered jobs based on user selection
  const [selectedJob, setSelectedJob] = useState(null); // Selected job from List component

  const handleJobClick = (job) => {
    setSelectedJob(job);
  };

  useEffect(() => {
    fetch("jobs.json").then(res => res.json()).then(data => {
      setJobs(data);
      setFilteredJobs(data); // Initialize filteredJobs with all jobs
    });
  }, []);

  const handleFilter = (locationSelectedValue, typeSelectedValue, fieldSelectedValue, searchInput) => {
    if (locationSelectedValue || typeSelectedValue || fieldSelectedValue || searchInput) {
      const newLocationValue = locationSelectedValue ? locationSelectedValue.charAt(0).toUpperCase() + locationSelectedValue.slice(1) : '';
      const newTypeValue = typeSelectedValue ? typeSelectedValue.charAt(0).toUpperCase() + typeSelectedValue.slice(1) : '';

      const newFieldValue = fieldSelectedValue ? fieldSelectedValue.split("-") : [];


      for (let i = 0; i < newFieldValue.length; i++) {
        newFieldValue[i] = newFieldValue[i] ? newFieldValue[i][0].toUpperCase() + newFieldValue[i].substr(1) : '';
      }

      const FieldValue = newFieldValue.join(" ");

      const newFilteredJobs = jobs.filter((filteredJob) => {
        return (
          (!locationSelectedValue || filteredJob.location === newLocationValue) &&
          (!typeSelectedValue || filteredJob.employmentType === newTypeValue) &&
          (!fieldSelectedValue || filteredJob.field === FieldValue) &&
          (!searchInput || filteredJob.title === searchInput)
        );
      });

      setFilteredJobs(newFilteredJobs);
    } else {
      // If no filters are applied, reset to all jobs
      setFilteredJobs([...jobs]);
    }
  };

  return (
    <>
      <Grid container textAlign={"center"}>
        <Grid item xs={12}>
          <Filters handlers={handleFilter} />
        </Grid>
        <Grid item xs={4} sx={{ borderRight: 1 }}>
          <List jobs={filteredJobs} onJobClick={handleJobClick} />
        </Grid>
        <Grid item xs={8}>
          {selectedJob && <Single job={selectedJob} />}
        </Grid>
      </Grid>
    </>
  );
}

export default App;