import { useState } from 'react';
import AddStudent from '../components/AddStudent';
import FilterStudents from '../components/FilterStudents';
import StudentList from '../components/StudentList';
import { motion } from 'framer-motion';

const Dashboard = ({ students, addStudent, deleteStudent, updateStudentFee }) => {
  const [filter, setFilter] = useState({
    admissionNumber: '',
    grade: '',
    feeStatus: ''
  });

  const filteredStudents = students.filter(student => {
    return (
      (filter.admissionNumber === '' || 
       student.admissionNumber.includes(filter.admissionNumber)) &&
      (filter.grade === '' || 
       student.grade === filter.grade) &&
      (filter.feeStatus === '' || 
       student.feeStatus === filter.feeStatus)
    );
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="dashboard"
    >
      <h1>Student Fee Management</h1>
      
      <div className="dashboard-grid">
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="card add-student-card"
        >
          <AddStudent addStudent={addStudent} />
        </motion.div>
        
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="card filter-card"
        >
          <FilterStudents filter={filter} setFilter={setFilter} />
        </motion.div>
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="card student-list-card"
        >
          <StudentList 
            students={filteredStudents} 
            deleteStudent={deleteStudent}
            updateStudentFee={updateStudentFee}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Dashboard;