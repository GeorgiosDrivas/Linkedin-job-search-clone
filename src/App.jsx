import './App.css'
import List from './components/List';
import { Filters } from './components/Filters';
import { Single } from './components/Single';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';

function App() {
  { /* const apiKey = import.meta.env.VITE_API_KEY; */ }
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);

  const handleJobClick = (job) => {
    setSelectedJob(job);
  }
  useEffect(() => {
    fetch("jobs.json").then(res => res.json()).then(data => {
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
