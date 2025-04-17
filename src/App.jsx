import {useState} from "react";
import {
  Router, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider,
  Route
} from 'react-router-dom'
import Homepage from "./pages/Homepage";
import MainLayout from "./layout/MainLayout";
import JobsPage from "./pages/JobsPage";
import { AboutUs } from "./pages/AboutUs";
import JobDetails from "./pages/JobDetails";
import AddJob from "./pages/AddJob";
import EditJob from "./pages/EditJob";

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />} >

        <Route index element={<Homepage />}/>
        <Route path='/jobs' element={<JobsPage />}/>
        <Route path='/jobs/new-job' element={<AddJob />}/>
        <Route path='/jobs/:id' element={<JobDetails />}/>
        <Route path='/jobs/:id/edit' element={<EditJob />}/>
        <Route path='/about-us' element={<AboutUs />}/>
        
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App;