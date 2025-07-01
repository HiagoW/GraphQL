import React, { useEffect } from 'react';
import JobList from '../components/JobList';
import { getJobs } from '../components/queries';

function HomePage() {
  const [jobs, setJobs] = React.useState([]);
  useEffect(() => {getJobs().then(setJobs)}, []);

  return (
    <div>
      <h1 className="title">
        Job Board
      </h1>
      <JobList jobs={jobs} />
    </div>
  );
}

export default HomePage;
