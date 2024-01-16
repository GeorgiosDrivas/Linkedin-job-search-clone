import React from 'react';

const List = ({ jobs, onJobClick }) => { // on jobCLick, pass it's content to Single component
    return (
        <div className='list_wrapper'>
            {jobs.map((job) => (
                <div className="job_wrapper" key={job.id} onClick={() => onJobClick(job)}>
                    <img src={job.companyLogo} alt="" />
                    <div style={{ paddingLeft: '10px' }}>
                        <h2 style={{ margin: '0', padding: '0' }}>{job.title}</h2>
                        <p>{job.companyName}</p>
                        <p className='job_location'>{job.jobLocation}</p>
                        <p>Posted {job.postingDate}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default List;