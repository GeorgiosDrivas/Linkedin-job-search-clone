import React from "react";
import { ListProps } from "src/types/types";

const List = ({ jobs, onJobClick }: ListProps) => {
  return (
    <div className="list_wrapper">
      {jobs.map((job) => (
        <div
          className="job_wrapper"
          key={job.id}
          onClick={() => onJobClick(job)}
        >
          <img src={job.companyLogo} alt="" />
          <div style={{ paddingLeft: "10px" }}>
            <h2 style={{ margin: "0", padding: "0" }}>{job.title}</h2>
            <p>{job.companyName}</p>
            <p className="job_location">
              {job.city} ({job.location})
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
