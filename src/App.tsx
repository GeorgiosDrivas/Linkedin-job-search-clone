import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import List from "./components/List";
import { Filters } from "./components/Filters";
import { Single } from "./components/Single";
import { Job } from "./types/types";

function App() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data: Job[]) => {
        setJobs(data);
        setFilteredJobs(data);
      });
  }, []);

  const handleJobClick = (job: Job) => {
    const detailedJob: Job = {
      ...job,
    };
    setSelectedJob(detailedJob);
  };

  const handleFilter = (
    locationSelectedValue: string,
    typeSelectedValue: string,
    fieldSelectedValue: string,
    searchInput: string
  ) => {
    const newFilteredJobs = jobs.filter((job) => {
      return (
        (!locationSelectedValue || job.location === locationSelectedValue) &&
        (!typeSelectedValue || job.employmentType === typeSelectedValue) &&
        (!fieldSelectedValue || job.field === fieldSelectedValue) &&
        (searchInput === "None" || job.title.includes(searchInput))
      );
    });

    setFilteredJobs(newFilteredJobs);
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
