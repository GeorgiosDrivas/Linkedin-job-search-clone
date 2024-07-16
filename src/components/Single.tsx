import React from "react";

interface DetailedJob {
  id: number;
  companyLogo: string;
  title: string;
  companyName: string;
  city: string;
  location: string;
  salary: string;
  posted: string;
  description: string;
  field?: string;
  employmentType?: string;
}

interface Props {
  job: DetailedJob;
}

export const Single: React.FC<Props> = ({ job }) => {
  return (
    <>
      <div className="single_job_top_info">
        <h1 className="single_job_title">{job.title}</h1>
        <div className="single_job_details">
          <p>
            {job.companyName} · {job.city} · Posted {job.posted}
          </p>
          <p>
            <span>{job.salary}</span> · <span>{job.location}</span> ·{" "}
            <span>{job.employmentType}</span>
          </p>
          <p>{job.field}</p>
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
