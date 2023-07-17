import React from 'react'
import './schooling.css'
import { VerticalTimeline,VerticalTimelineElement} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';
import {MdOutlineSchool} from 'react-icons/md'
import {FaUniversity} from 'react-icons/fa'

const Schooling = () => {
  return (
    <section id='schooling'>
      <h5>My Schooling</h5>
      <h2>About Me</h2>
    <div className='container schooling'>
        <VerticalTimeline linecolor="var(--color-primary)">

            <VerticalTimelineElement className='react-vertical-timeline-component--education'
            date="2017-2018"
            iconStyle={{background:"var(--color-primary)",color:"var(color-light"}}
                icon={<MdOutlineSchool></MdOutlineSchool>}>
                <article className='design'>
                 <h3 className='react-vertical-timeline-element-title'>
               <b> Class X -- Kestrel High School,Jammu , J&K</b>
                </h3>
                <p><b>Grade -- 97.6 %</b></p>
            </article>
               
            </VerticalTimelineElement>

            <VerticalTimelineElement className='react-vertical-timeline-component--education'
            date="2019-2020"
            iconStyle={{background:"var(--color-primary)",color:"var(color-light"}}
                icon={<MdOutlineSchool></MdOutlineSchool>}>

            <article className='design'>
                <h3 className='react-vertical-timeline-element-title'>
                <b> CLass XII -- S.P Smart Senior Higher Secondary School,Jammu , J&K</b>
                </h3>
                <p><b>Grade -- 98 %</b></p>
            </article>
                
            </VerticalTimelineElement>

            <VerticalTimelineElement className='react-vertical-timeline-component--education'
            date="2020-2024"
            iconStyle={{background:"red",color:"var(color-primary"}}
                icon={<FaUniversity></FaUniversity>}>

                <article  className='design'>
                <h3 className='react-vertical-timeline-element-title'>
                  <b id='deg'>Computer Engineering -- Delhi Technological University,New Delhi </b>
                </h3>
                <p><b>CGPA -- 9.04</b></p>
                </article>
            </VerticalTimelineElement>

        </VerticalTimeline>
    </div>
    </section>
  )
}

export default Schooling