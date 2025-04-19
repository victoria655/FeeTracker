import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DeleteConfirmation from './DeleteConfirmation';
import StudentTable from './StudentTable';

const StudentList = ({ students, deleteStudent, updateStudentFee }) => {
  const [studentToDelete, setStudentToDelete] = useState(null);

  const handleDelete = (student) => {
    setStudentToDelete(student);
  };

  const confirmDelete = () => {
    deleteStudent(studentToDelete.id);
    setStudentToDelete(null);
  };

  const cancelDelete = () => {
    setStudentToDelete(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="student-list"
    >
      <motion.h2 
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        Student Records ({students.length})
      </motion.h2>
      
      <AnimatePresence>
        {students.length === 0 ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="no-students"
          >
            No students found. Add some students to get started.
          </motion.p>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <StudentTable 
              students={students} 
              handleDelete={handleDelete}
              updateStudentFee={updateStudentFee}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {studentToDelete && (
          <DeleteConfirmation
            student={studentToDelete}
            onConfirm={confirmDelete}
            onCancel={cancelDelete}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default StudentList;