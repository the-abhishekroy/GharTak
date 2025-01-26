import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './WorkerDashboard.css';

function WorkerDashboard() {
  const [jobs, setJobs] = useState([]);
  const [earnings, setEarnings] = useState(0);
  const user = useSelector(state => state.auth.user);

  useEffect(() => {
    // Fetch worker's jobs and earnings
    fetchWorkerData();
  }, []);

  const fetchWorkerData = async () => {
    try {
      const response = await fetch(`/api/worker/${user.id}/jobs`);
      const data = await response.json();
      setJobs(data.jobs);
      setEarnings(data.earnings);
    } catch (error) {
      console.error('Error fetching worker data:', error);
    }
  };

  return (
    <div className="dashboard-container">
      <h1>Welcome, {user?.name}</h1>
      <div className="dashboard-stats">
        <div className="stat-card">
          <h3>Total Earnings</h3>
          <p>₹{earnings}</p>
        </div>
        <div className="stat-card">
          <h3>Jobs Completed</h3>
          <p>{jobs.filter(job => job.status === 'completed').length}</p>
        </div>
      </div>
      <div className="jobs-list">
        <h2>Recent Jobs</h2>
        {jobs.map(job => (
          <div key={job.id} className="job-card">
            <h3>{job.title}</h3>
            <p>{job.description}</p>
            <span className={`status ${job.status}`}>{job.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkerDashboard; 