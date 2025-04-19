import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import './styles.css';

function App() {
  const [students, setStudents] = useState([]);

  // Load students from localStorage on initial render
  useEffect(() => {
    const savedStudents = localStorage.getItem('students');
    if (savedStudents) {
      setStudents(JSON.parse(savedStudents));
    }
  }, []);

  // Save students to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(students));
  }, [students]);

  const addStudent = (newStudent) => {
    setStudents([...students, newStudent]);
  };

  const deleteStudent = (id) => {
    setStudents(students.filter(student => student.id !== id));
  };

  const updateStudentFee = (id, feeStatus) => {
    setStudents(students.map(student => 
      student.id === id ? { ...student, feeStatus } : student
    ));
  };

  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={
              <Dashboard 
                students={students} 
                addStudent={addStudent} 
                deleteStudent={deleteStudent}
                updateStudentFee={updateStudentFee}
              />
            } />
            <Route path="/reports" element={<Reports students={students} />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;