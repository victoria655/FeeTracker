const FilterStudents = ({ filter, setFilter }) => {
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFilter(prev => ({ ...prev, [name]: value }));
    };
  
    const clearFilters = () => {
      setFilter({
        admissionNumber: '',
        grade: '',
        feeStatus: ''
      });
    };
  
    return (
      <div className="filter-students">
        <h2>Filter Students</h2>
        <div className="filter-group">
          <label>Admission Number:</label>
          <input
            type="text"
            name="admissionNumber"
            value={filter.admissionNumber}
            onChange={handleChange}
            placeholder="Search by admission number"
          />
        </div>
        
        <div className="filter-group">
          <label>Grade:</label>
          <select
            name="grade"
            value={filter.grade}
            onChange={handleChange}
          >
            <option value="">All Grades</option>
            {Array.from({length: 12}, (_, i) => i + 1).map(grade => (
              <option key={grade} value={`Grade ${grade}`}>Grade {grade}</option>
            ))}
          </select>
        </div>
        
        <div className="filter-group">
          <label>Fee Status:</label>
          <select
            name="feeStatus"
            value={filter.feeStatus}
            onChange={handleChange}
          >
            <option value="">All Statuses</option>
            <option value="paid">Paid</option>
            <option value="pending">Pending</option>
            <option value="partial">Partial</option>
          </select>
        </div>
        
        <button onClick={clearFilters} className="clear-filters">
          Clear Filters
        </button>
      </div>
    );
  };
  
  export default FilterStudents;