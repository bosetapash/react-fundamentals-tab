import React from 'react'

const BtnContainer = ({ jobs, currentIndex, setCurrentIndex }) => {
      return (
            <div className="btn-container">
                  {jobs.map((job, index) => {
                        return (
                              <button key={job.id} onClick={() => setCurrentIndex(index)} className={currentIndex === index ? 'job-btn active-btn' : 'job-btn'}>
                                    {job.company}
                              </button>
                        )
                  })}
            </div>
      )
}

export default BtnContainer
