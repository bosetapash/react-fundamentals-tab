import { useEffect, useState } from 'react'
import BtnContainer from './BtnContainer'
import JobInfo from './JobInfo'

const url = 'https://course-api.com/react-tabs-project'

const App = () => {
      const [loading, setLoading] = useState(true)
      const [jobs, setJobs] = useState([])
      const [currentIndex, setCurrentIndex] = useState(0)

      const fetchJobs = async () => {
            try {
                  const response = await fetch(url)
                  const data = await response.json()
                  setJobs(data)
                  setLoading(false)
            } catch (error) {
                  console.log(error)
            }
      }

      useEffect(() => {
            fetchJobs()
      }, [])

      if (loading) {
            return (
                  <section className="jobs-center">
                        <div className="loading"></div>
                  </section>
            )
      }
      console.log(jobs)

      return (
            <section className="jobs-center">
                  <BtnContainer jobs={jobs} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
                  <JobInfo jobs={jobs} currentIndex={currentIndex} />
            </section>
      )
}

export default App
