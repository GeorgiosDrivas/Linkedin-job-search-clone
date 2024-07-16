import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import List from "./components/List";
import { Filters } from "./components/Filters";
import { Single } from "./components/Single"; // Ensure correct import

interface Job {
  id: number;
  companyLogo: string;
  title: string;
  companyName: string;
  city: string;
  location: string;
  field?: string;
  employmentType?: string;
}

interface DetailedJob extends Job {
  salary: string;
  posted: string;
  description: string;
}

function App() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [selectedJob, setSelectedJob] = useState<DetailedJob | null>(null); // Use DetailedJob here

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data: Job[]) => {
        setJobs(data);
        setFilteredJobs(data); // Initialize filteredJobs with all jobs
      });
  }, []);

  const handleJobClick = (job: Job) => {
    // Assuming you have a way to retrieve detailed job information, possibly from another API call or data structure
    const detailedJob: DetailedJob = {
      ...job,
      salary: "1000", // Example salary
      posted: "2024-07-11", // Example posted date
      description: "Lorem ipsum dolor sit amet", // Example description
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
