import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
        <h5>My Experiences</h5>
        <h2>What Skills I Have</h2>

        <div className='container experience_container'>

        <div className='cse'>
        <h3>CS Fundamentals</h3>
              <div className='experience_content'>

                <article className='experience_details'>
                    <BsFillPatchCheckFill className="experience_details-icon"/>
                    <div>
                    <h4>C++</h4>
                    <small className='text-light'>Intermediate</small>
                    </div>
                </article>

                <article className='experience_details'>
                    <BsFillPatchCheckFill className="experience_details-icon"/>
                    <div>
                    <h4>OOPs</h4>
                    <small className='text-light'>Intermediate</small>
                    </div>
                </article>

                <article className='experience_details'>
                    <BsFillPatchCheckFill className="experience_details-icon"/>
                    <div>
                    <h4>DBMS</h4>
                    <small className='text-light'>Intermediate</small>
                    </div>
                </article>

                <article className='experience_details'>
                    <BsFillPatchCheckFill className="experience_details-icon"/>
                    <div>
                    <h4>OS</h4>
                    <small className='text-light'>Intermediate</small>
                    </div>
                </article>

                <article className='experience_details'>
                    <BsFillPatchCheckFill className="experience_details-icon"/>
                    <div>
                    <h4>CN</h4>
                    <small className='text-light'>Intermediate</small>
                    </div>
                </article>

                <article className='experience_details'>
                    <BsFillPatchCheckFill className="experience_details-icon"/>
                    <div>
                    <h4>Low Level Design</h4>
                    <small className='text-light'>Beginner</small>
                    </div>
                </article>

              </div>
            
        </div>

          <div className='experience_frontend'>
              <h3>FrontEnd Development</h3>
              <div className='experience_content'>

                <article className='experience_details'>
                    <BsFillPatchCheckFill className="experience_details-icon"/>
                    <div>
                    <h4>HTML</h4>
                    <small className='text-light'>Experienced</small>
                    </div>
                </article>

                <article className='experience_details'>
                    <BsFillPatchCheckFill className="experience_details-icon"/>
                    <div>
                    <h4>CSS</h4>
                    <small className='text-light'>Intermediate</small>
                    </div>
                </article>

                <article className='experience_details'>
                    <BsFillPatchCheckFill className="experience_details-icon"/>
                    <div>
                    <h4>JavaScript</h4>
                    <small className='text-light'>Intermediate</small>
                    </div>
                </article>

                <article className='experience_details'>
                    <BsFillPatchCheckFill className="experience_details-icon"/>
                    <div>
                    <h4>BootStrap</h4>
                    <small className='text-light'>Experienced</small>
                    </div>
                </article>

                <article className='experience_details'>
                    <BsFillPatchCheckFill className="experience_details-icon"/>
                    <div>
                    <h4>React</h4>
                    <small className='text-light'>Intermediate</small>
                    </div>
                </article>

              </div>
          </div>

          <div className='experience_frontend'>

          <h3>BackEnd Development</h3>
              <div className='experience_content'>

                <article className='experience_details'>
                    <BsFillPatchCheckFill className="experience_details-icon"/>
                   <div>
                   <h4>NodeJs</h4>
                    <small className='text-light'>Beginner</small>
                   </div>
                </article>

                <article className='experience_details'>
                    <BsFillPatchCheckFill className="experience_details-icon"/>
                    <div>
                    <h4>ExpressJs</h4>
                    <small className='text-light'>Beginner</small>
                    </div>
                </article>

                <article className='experience_details'>
                    <BsFillPatchCheckFill className="experience_details-icon"/>
                   <div>
                   <h4>MongoDB</h4>
                    <small className='text-light'>Intermediate</small>
                   </div>
                </article>

                <article className='experience_details'>
                    <BsFillPatchCheckFill className="experience_details-icon"/>
                    <div>
                    <h4>MySql</h4>
                    <small className='text-light'>Intermediate</small>
                    </div>
                </article>

                <article className='experience_details'>
                    <BsFillPatchCheckFill className="experience_details-icon"/>
                    <div>
                    <h4>Git</h4>
                    <small className='text-light'>Beginner</small>
                    </div>
                </article>


              </div>
            
          </div>
        </div>
     
    </section>
  )
}

export default Experience