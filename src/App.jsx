import './App.css'
import List from './components/List';
import { Filters } from './components/Filters';
import { Single } from './components/Single';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';

function App() {
  const [jobs, setJobs] = useState([]); // Get job posts from jobs.json
  const [selectedJob, setSelectedJob] = useState(null); // selected job from List component

  const handleJobClick = (job) => { // When click on a job from List component
    setSelectedJob(job);
  }
  useEffect(() => {
    fetch("jobs.json").then(res => res.json()).then(data => { // Get data from jobs.json
      setJobs(data);
    })
  }, []);

  return (
    <>
      <Grid container textAlign={"center"}> {/* Main Container */}
        <Grid item xs={12}>{/* Filters Column */}
          <Filters />
        </Grid>
        <Grid item xs={4} sx={{ borderRight: 1 }}>{/* List Column */}
          <List jobs={jobs} onJobClick={handleJobClick} />
        </Grid>
        <Grid item xs={8}>{/* Single Job Column */}
          {selectedJob && <Single job={selectedJob} />}
        </Grid>
      </Grid>
    </>
  )
}

export default App
