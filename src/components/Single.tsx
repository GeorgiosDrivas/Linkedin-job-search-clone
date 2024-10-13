import React from "react";
import { Props } from "src/types/types";

export const Single: React.FC<Props> = ({ job }) => {
  return (
    <>
      <div className="single_job_top_info">
        <h1 className="single_job_title">{job.title}</h1>
        <div className="single_job_details">
          <div className="job-wrap">
            <img src={job.companyLogo} alt="" className="company-logo" />
            <div className="company-details-wrap">
              <p>
                {job.companyName} · {job.city}
              </p>
              <p>Posted {job.posted}</p>
            </div>
          </div>
          <p>
            <span>
              Salary: ${job.salary}
              <br />
            </span>
            <span>
              Location: {job.location}
              <br />
            </span>
            <span>Type: {job.employmentType}</span>
          </p>
        </div>
      </div>
      <div className="single_job_desc">
        {job.description.split("\n").map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </>
  );
};
