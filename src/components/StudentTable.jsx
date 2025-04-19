import { motion } from 'framer-motion';
import FeeStatusButtons from './FeeStatusButtons';

const StudentTable = ({ students, handleDelete, updateStudentFee }) => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Admission No.</th>
            <th>Grade</th>
            <th>Fee Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <motion.tr
              key={student.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="student-row"
            >
              <td>{student.name}</td>
              <td>{student.admissionNumber}</td>
              <td>{student.grade}</td>
              <td>
                <FeeStatusButtons 
                  student={student} 
                  updateStudentFee={updateStudentFee}
                />
              </td>
              <td>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleDelete(student)}
                  className="delete-button"
                >
                  Delete
                </motion.button>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;