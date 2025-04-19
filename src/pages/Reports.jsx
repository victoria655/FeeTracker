import { motion } from 'framer-motion';

const Reports = ({ students }) => {
  const paidCount = students.filter(s => s.feeStatus === 'paid').length;
  const pendingCount = students.filter(s => s.feeStatus === 'pending').length;
  const partialCount = students.filter(s => s.feeStatus === 'partial').length;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="reports"
    >
      <h1>Fee Reports</h1>
      
      <div className="stats-grid">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="stat-card total"
        >
          <h3>Total Students</h3>
          <p>{students.length}</p>
        </motion.div>
        
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="stat-card paid"
        >
          <h3>Fees Paid</h3>
          <p>{paidCount}</p>
        </motion.div>
        
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="stat-card pending"
        >
          <h3>Fees Pending</h3>
          <p>{pendingCount}</p>
        </motion.div>
        
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="stat-card partial"
        >
          <h3>Partial Payments</h3>
          <p>{partialCount}</p>
        </motion.div>
      </div>
      
      <div className="chart-placeholder">
        <h3>Fee Status Distribution</h3>
        <div className="chart">
          <div 
            className="chart-bar paid-bar" 
            style={{ width: `${(paidCount / students.length) * 100 || 0}%` }}
          ></div>
          <div 
            className="chart-bar partial-bar" 
            style={{ width: `${(partialCount / students.length) * 100 || 0}%` }}
          ></div>
          <div 
            className="chart-bar pending-bar" 
            style={{ width: `${(pendingCount / students.length) * 100 || 0}%` }}
          ></div>
        </div>
        <div className="chart-legend">
          <div className="legend-item paid">Paid</div>
          <div className="legend-item partial">Partial</div>
          <div className="legend-item pending">Pending</div>
        </div>
      </div>
    </motion.div>
  );
};

export default Reports;