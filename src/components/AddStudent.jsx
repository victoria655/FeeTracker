import { useState } from 'react';
import { motion } from 'framer-motion';

const AddStudent = ({ addStudent }) => {
  const [newStudent, setNewStudent] = useState({
    name: '',
    admissionNumber: '',
    grade: '',
    feeStatus: 'pending'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newStudent.name || !newStudent.admissionNumber || !newStudent.grade) {
      alert('Please fill all fields');
      return;
    }
    
    const studentWithId = {
      ...newStudent,
      id: Date.now().toString()
    };
    
    addStudent(studentWithId);
    setNewStudent({
      name: '',
      admissionNumber: '',
      grade: '',
      feeStatus: 'pending'
    });
  };

  return (
    <div className="add-student">
      <h2>Add New Student</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={newStudent.name}
            onChange={(e) => setNewStudent({...newStudent, name: e.target.value})}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Admission Number:</label>
          <input
            type="text"
            value={newStudent.admissionNumber}
            onChange={(e) => setNewStudent({...newStudent, admissionNumber: e.target.value})}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Grade:</label>
          <select
            value={newStudent.grade}
            onChange={(e) => setNewStudent({...newStudent, grade: e.target.value})}
            required
          >
            <option value="">Select Grade</option>
            {Array.from({length: 12}, (_, i) => i + 1).map(grade => (
              <option key={grade} value={`Grade ${grade}`}>Grade {grade}</option>
            ))}
          </select>
        </div>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="add-button"
        >
          Add Student
        </motion.button>
      </form>
    </div>
  );
};

export default AddStudent;