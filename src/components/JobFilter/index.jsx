import PropTypes from "prop-types";

const JobFilter = ({ filterType, setFilterType }) => {
  return (
    <select
      className="p-2 border rounded-md focus:outline-none"
      value={filterType}
      onChange={(e) => setFilterType(e.target.value)}
    >
      <option value="">All Job Types</option>
      <option value="Full-Time">Full-Time</option>
      <option value="Part-Time">Part-Time</option>
      <option value="Remote">Remote</option>
    </select>
  );
};

JobFilter.propTypes = {
  filterType: PropTypes.string.isRequired,
  setFilterType: PropTypes.func.isRequired,
};

export default JobFilter;
