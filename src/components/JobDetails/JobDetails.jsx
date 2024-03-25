import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
    const jobs = useLoaderData();
        const {id} = useParams();
        const idInt = parseInt(id);
        const job = jobs.find(job => job.id === idInt);
        console.log(job);

    return (
        <div>
            <div className="grid gap-4 md:grid-cols-4">
                <div className="border md:col-span-3">
                <h3>Job Title : {job.job_title}</h3>
                <h3>Company Name : {job.company_name}</h3>
                <h3>Remote or Onsite : {job.remote_or_onsite}</h3>
                <h3>Location : {job.location}</h3>
                <h3>Job Type : {job.job_type}</h3>
                <h3>Salary : {job.salary}</h3>
                <h3>Job Description : {job.job_description}</h3>
                <h3>Job Responsibility : {job.job_responsibility}</h3>
                <h3>Educational Requirements : {job.educational_requirements}</h3>
                <h3>Experiences : {job.experiences}</h3>
                </div>
                <div className="border-2">
                    <h2 className="text-3xl">Side thinks</h2>
                    <button className="btn btn-primary w-full">Click Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;