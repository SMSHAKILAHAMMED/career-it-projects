import { CiLocationOn } from "react-icons/ci";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
    const { logo, id, job_title, company_name, remote_or_onsite, location, job_type, salary, job_description, job_responsibility, educational_requirements, experiences, contact_information } = job;
    return (
        <div className="card bg-base-100 shadow-2xl">
            <figure><img className="w-48 mt-5" src={logo} alt="image" /></figure>
            <div className="card-body">
                <h1 className="card-title">{job_title}</h1>
                <h2 className="company_name">{company_name}</h2>

                <div className="flex gap-5">
                    <button className="px-5 py-2 font-extrabold border rounded">{remote_or_onsite}</button>
                    <button className="px-5 py-2 font-extrabold border rounded">{job_type}</button>
                </div>
                <div className="flex gap-5">
                    <h2 className="flex items-center gap-2"><CiLocationOn></CiLocationOn> {location}</h2>
                    <h2 className="flex items-center gap-2"><AiOutlineDollar></AiOutlineDollar> Salary : {salary}</h2>
                </div>
                {/* <p className="job_description">{job_description}</p>
                <p className="job_responsibility">{job_responsibility}</p>
                <p className="educational_requirements">{educational_requirements}</p>
                <p className="experiences">{experiences}</p>
                <p className="phone">{contact_information.phone}</p>
                <p className="email">{contact_information.email}</p>
                <p className="address">{contact_information.address}</p> */}
                <div className="card-actions justify-end">
                    <Link to={`/job/${id}`}>
                        <button className="btn btn-primary">Buy Now</button>
                    </Link>
                </div>
            </div>
        </div>
        // <div className="w-40 bg-[#9E90FE]">
        //     <img src={logo} alt="" />
        // </div>

    );
};

export default Job;