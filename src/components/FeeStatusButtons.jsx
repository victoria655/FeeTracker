import { motion } from 'framer-motion';

const FeeStatusButtons = ({ student, updateStudentFee }) => {
  const statuses = ['paid', 'pending', 'partial'];
  const colors = {
    paid: '#4CAF50',
    pending: '#F44336',
    partial: '#FFC107'
  };

  return (
    <div className="fee-status-buttons">
      {statuses.map(status => (
        <motion.button
          key={status}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`status-button ${student.feeStatus === status ? 'active' : ''}`}
          style={{ backgroundColor: student.feeStatus === status ? colors[status] : '#f0f0f0' }}
          onClick={() => updateStudentFee(student.id, status)}
        >
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </motion.button>
      ))}
    </div>
  );
};

export default FeeStatusButtons;