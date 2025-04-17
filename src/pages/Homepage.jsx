import React, { useEffect, useState } from 'react'
import Hero from '../components/Hero';
import JobCard from '../components/JobCard';
import { Link } from 'react-router-dom';

const Homepage = () => {
  const [jobs, setJobs] = useState([])
  useEffect(()=>{
    // declare async function
    async function fetchJobs(){
      // fetch jobs from server
      const response = await fetch('http://localhost:8000/jobs')
      const data = await response.json()
      // assign data to jobs using setJobs()
      setJobs(data)
    }
    fetchJobs()
  }, [])
  
  return (
    <div>
      <Hero />

      <div className="flex flex-cols-2 gap-2 justify-between p-10">

        <div className="bg-grey-200 border w-[45%] p-5">
          <p className="font-bold text-3xl">For Developers</p>
          <p className='my-4'>Browse our React jobs and start your career today</p>
          <button className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700">
            Browse Jobs
          </button>
        </div>

        <div className="bg-grey-200 border w-[45%] p-5">
          <p className="font-bold text-3xl">For Employers</p>
          <p className='my-4'>List your job to find the perfect developer for the role</p>
          <Link 
            to="/jobs/new-job"
            className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
          >
            Add Job
          </Link>
        </div>

      </div>

      <div className="bg-blue-50 px-4 py-10">
        <h2 className="font-bold text-3xl text-center">Browse Jobs</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {jobs.map((job) => {
            return (
              <JobCard job={job}/>
            )
          })}
        </div>

      </div>
  </div>
  )
}

export default Homepage;