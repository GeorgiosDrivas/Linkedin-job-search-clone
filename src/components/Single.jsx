function Single({ job }) { // Get selected job from list
    return (
        <>
            <h1>{job.title}</h1>
            <div>
                <p style={{ textAlign: 'left' }}>{job.companyName}</p>
            </div>
            <p>{job.description}</p>
        </>
    )
};

export { Single };