import { useState, useEffect } from "react";
import JobCard from "../JobCard/";
import JobFilter from "../JobFilter";
import SearchBar from "../SearchBar";

const initialJobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Tech Corp",
    location: "Agartala, India",
    type: "Full-Time",
    description: "Develop UI components and ensure design consistency...",
  },
  {
    id: 2,
    title: "Backend Engineer",
    company: "InnovateX",
    location: "San Francisco, CA",
    type: "Part-Time",
    description: "Build and maintain scalable server applications...",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "Creative Labs",
    location: "New York, NY",
    type: "Remote",
    description: "Design user interfaces with a focus on usability...",
  },
  {
    id: 4,
    title: "Frontend Developer",
    company: "Tech Corp",
    location: "Agartala, India",
    type: "Full-Time",
    description: "Develop UI components and ensure design consistency...",
  },
  {
    id: 5,
    title: "Backend Engineer",
    company: "InnovateX",
    location: "San Francisco, CA",
    type: "Part-Time",
    description: "Build and maintain scalable server applications...",
  },
  {
    id: 6,
    title: "UI/UX Designer",
    company: "Creative Labs",
    location: "New York, NY",
    type: "Remote",
    description: "Design user interfaces with a focus on usability...",
  },
  // Add more job data as needed
];

const JobList = () => {
  const [jobs] = useState(initialJobs); // Remove `setJobs` if it's unused
  const [filteredJobs, setFilteredJobs] = useState(initialJobs);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("");

  useEffect(() => {
    const filterAndSearchJobs = () => {
      let updatedJobs = [...jobs];
      if (filterType) {
        updatedJobs = updatedJobs.filter((job) => job.type === filterType);
      }
      if (searchQuery) {
        updatedJobs = updatedJobs.filter((job) =>
          job.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }
      setFilteredJobs(updatedJobs);
    };
    filterAndSearchJobs();
  }, [searchQuery, filterType, jobs]);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row md:justify-between mb-4">
        <SearchBar searchTerm={searchQuery} onSearch={setSearchQuery} />
        <JobFilter filterType={filterType} setFilterType={setFilterType} />
      </div>
      <div>
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job, index) => <JobCard key={index} job={job} />)
        ) : (
          <p className="text-center text-gray-600">No jobs match your criteria.</p>
        )}
      </div>
    </div>
  );
};

export default JobList;
