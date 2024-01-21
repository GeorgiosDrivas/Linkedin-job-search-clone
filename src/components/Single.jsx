function Single({ job }) { // Get selected job from list
    return (
        <>
            <div className="single_job_top_info">
                <h1 className="single_job_title">{job.title}</h1>
                <div className="single_job_details">
                    <p>{job.companyName} · {job.city} · Posted {job.posted}</p>
                    <p><span>{job.salary}</span> · <span>{job.location}</span> · <span>{job.employmentType}</span></p>
                    <p>{job.field}</p>
                </div>
            </div>
            <div className="single_job_desc">
                {job.description.split('\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>
        </>
    )
};

export { Single };