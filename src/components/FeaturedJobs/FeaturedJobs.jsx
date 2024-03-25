import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);

    // This is the not best way
    const [dataLength, setdataLength] = useState([4]);


    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data));
    }, [])


    return (
        <div>
            <div>
                <h2 className="text-3xl text-center mt-10 font-bold">Featured Jobs: {jobs.length} </h2>
                <p className="text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 gap-28 mt-10">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={dataLength === jobs.length && 'hidden'}>
                <button className="btn btn-primary mt-10 text-white font-bold py-2 px-4 rounded-lg"
                 onClick={() => setdataLength(jobs.length)}>Load More</button>
            </div>
        </div>

    );
};

export default FeaturedJobs;