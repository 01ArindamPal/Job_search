import PropTypes from "prop-types";
import { useState } from "react";

const JobCard = ({ job }) => {
  const [isApplied, setIsApplied] = useState(false); // State to track application status

  const handleApplyClick = () => {
    setIsApplied(true); // Update the state to indicate that the job has been applied for
  };

  return (
    <div className="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow duration-300 mb-4 transform hover:scale-105">
      <div className="grid grid-cols-4 gap-4">
     
        <div className="col-span-4 md:col-span-3">
          <h3 className="text-lg font-semibold text-gray-800">{job.title}</h3>
          <p className="text-gray-500 mt-1">
            <strong>Company:</strong> {job.company}
          </p>
          <p className="text-gray-500">
            <strong>Location:</strong> {job.location}
          </p>
          <p className="text-gray-700 mt-3">{job.description}</p>
        </div>

        
        <div className="col-span-4 md:col-span-1 flex flex-col items-end justify-between">
          <p className="text-gray-500 font-medium">{job.type}</p>
          <button
            onClick={handleApplyClick}
            disabled={isApplied} 
            className={`mt-4 md:mt-0 px-4 py-2 ${
              isApplied ? "bg-gray-400" : "bg-blue-600"
            } text-white rounded-md hover:bg-blue-700 transition duration-200`}
          >
            {isApplied ? "Already Applied" : "Apply Now"}
          </button>
        </div>
      </div>
    </div>
  );
};

JobCard.propTypes = {
  job: PropTypes.shape({
    title: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default JobCard;
