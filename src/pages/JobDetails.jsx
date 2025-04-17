import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const JobDetails = () => {
  const jobId = useParams().id
  
  const [job, setJob] = useState()

  useEffect(()=>{
    async function fetchSingleJob(){
      const res = await fetch(`http://localhost:8000/jobs/${jobId}`)
      const data = await res.json()
      setJob(data)
    }
    fetchSingleJob()
  }, [])

  return (
    <div>
      JobDetails for {jobId}
      {job && 
      <div>
        <h1>{job.title}</h1>

        <Link to={`/jobs/${jobId}/edit`} className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600">
          Edit Job
        </Link>

        <h2>Booooo</h2>

      </div>
      }
    </div>
  )
}

export default JobDetails