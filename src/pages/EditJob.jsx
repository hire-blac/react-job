import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const EditJob = () => {
  const jobId = useParams().id
  const [job, setJob] = useState()
  const [editJob, setEditJob] = useState({
    type: "",
    title: "",
    description: "",
    salary: "",
    location: "",
    companyName: "",
    companyDescription: "",
    companyEmail: "",
    companyPhone: ""
  })

  useEffect(()=>{
    async function fetchSingleJob(){
      const res = await fetch(`http://localhost:8000/jobs/${jobId}`)
      const data = await res.json()
      setJob(data)
      setEditJob({...editJob,
        type: data.type,
        description: data.description
      })
      console.log(data);
    }
    fetchSingleJob()
  }, [jobId])
  
  // function to handle new job creation
  const handleJobSubmit = async (e) => {
    e.preventDefault()

    const jobData = {
      type: job.type,
      title: job.title,
      description: job.description,
      salary: job.salary,
      location: job.location,
      company: {
        name: job.companyName,
        description: job.companyDescription,
        contactEmail: job.companyEmail,
        contactPhone: job.companyPhone,
      }
    }
    const response = await fetch('http://localhost:8000/jobs',
      {
        method: "POST",
        body: JSON.stringify(jobData)
      }
    )

    await response.json().then(()=>{
      navigate('/')
    })
  }

  return (
    <div className='bg-blue-50 py-10'>

    {job && 
      <div>
        <form 
        onSubmit={handleJobSubmit} 
        method="post" 
        className='bg-white p-6 mx-auto w-[50%] border rounded'
      >
        <h1 className='font-bold text-xl text-center my-4'>Add New Job</h1>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="jobType">Job Type</label>
          <select 
            className="border rounded w-full py-2 px-3" 
            name="jobType" 
            id="jobType"
            value={job.type}
            onChange={(e)=>setJob({...job, type: e.target.value})}
          >
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Remote">Remote</option>
            <option value="Internship">Internship</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="title">Job Title</label>
          <input
            type="text"
            id="title"
            name="title"
            className="border rounded w-full py-2 px-3 mb-2"
            placeholder="eg. Frontend Developer"
            value={job.title}
            onChange={(e)=>setJob({...job, title: e.target.value})}
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Description</label>
          <textarea
            id="description"
            name="description"
            className="border rounded w-full py-2 px-3"
            rows="4"
            placeholder="Add any job duties, expectations, requirements, etc"
            value={job.description}
            onChange={(e)=>setJob({...job, description: e.target.value})}
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="type" className="block text-gray-700 font-bold mb-2">Salary</label>
          <select
            id="salary"
            name="salary"
            className="border rounded w-full py-2 px-3"
            onChange={(e)=>setJob({...job, salary: e.target.value})}
            required
          >
            <option value="Under $50K">Under $50K</option>
            <option value="$50K - 60K">$50K - $60K</option>
            <option value="$60K - 70K">$60K - $70K</option>
            <option value="$70K - 80K">$70K - $80K</option>
            <option value="$80K - 90K">$80K - $90K</option>
            <option value="$90K - 100K">$90K - $100K</option>
            <option value="$100K - 125K">$100K - $125K</option>
            <option value="$125K - 150K">$125K - $150K</option>
            <option value="$150K - 175K">$150K - $175K</option>
            <option value="$175K - 200K">$175K - $200K</option>
            <option value="Over $200K">Over $200K</option>
          </select>
        </div>

        <div className='mb-4'>
          <label className='block text-gray-700 font-bold mb-2'>
            Location
          </label>
          <input
            type='text'
            id='location'
            name='location'
            className='border rounded w-full py-2 px-3 mb-2'
            placeholder='Company Location'
            value={job.location}
            onChange={(e)=>setJob({...job, location: e.target.value})}
            required           
          />
        </div>

        <h3 className="text-2xl mb-5">Company Info</h3>

        <div className="mb-4">
          <label htmlFor="company" className="block text-gray-700 font-bold mb-2">Company Name</label>
          <input
            type="text"
            id="company"
            name="company"
            className="border rounded w-full py-2 px-3"
            placeholder="Company Name"
            value={job.company.name}
            onChange={(e)=>setJob({...job, companyName: e.target.value})}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="company_description" className="block text-gray-700 font-bold mb-2">Company Description</label>
          <textarea
            id="company_description"
            name="company_description"
            className="border rounded w-full py-2 px-3"
            rows="4"
            placeholder="What does your company do?"
            value={job.company.description}
            onChange={(e)=>setJob({...job, companyDescription: e.target.value})}
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="contact_email" className="block text-gray-700 font-bold mb-2">Contact Email</label>
          <input
            type="email"
            id="contact_email"
            name="contact_email"
            className="border rounded w-full py-2 px-3"
            placeholder="Email address for applicants"
            value={job.company.contactEmail}
            onChange={(e)=>setJob({...job, companyEmail: e.target.value})}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="contact_phone" className="block text-gray-700 font-bold mb-2">Contact Phone</label>
          <input
            type="tel"
            id="contact_phone"
            name="contact_phone"
            className="border rounded w-full py-2 px-3"
            placeholder="Optional phone for applicants"
            value={job.company.contactPhone}
            onChange={(e)=>setJob({...job, companyPhone: e.target.value})}
          />
        </div>

        <button 
          className='bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline'
          type="submit"
        >
          Add Job
        </button>
      </form>

      </div>
    }
    </div>
  )
}

export default EditJob