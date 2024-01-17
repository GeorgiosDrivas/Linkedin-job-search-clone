function Single({ job }) { // Get selected job from list
    return (
        <>
            <div className="single_job_top_info">
                <h1 className="single_job_title">{job.title}</h1>
                <div className="single_job_details">
                    <p>{job.companyName} · {job.jobLocation} · {job.postingDate}</p>
                    <p>{job.salary} · {job.employmentType} · {job.experienceLevel}</p>
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