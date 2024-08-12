import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from '../constants'; // Import experiences from your old website

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={experience.date}
      icon={
        <div
          className=" flex justify-center items-center
      w-full h-full"
        >
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%]
        object-contain"
          />
        </div>
      }
      iconStyle={{ background: experience.iconBg }}
    >
      <div>
        <h3
          className="text-white text-[24px]
    font-bold"
        >
          {experience.title}
        </h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2">

        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 
        tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
};

const Experience = () => {
  return (
    <div className="experiance-container">
      <div className='experiance'>
        <h1>What i've done so far</h1>
        <section className=''>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} />
            ))}
          </VerticalTimeline>
        </section>
      </div>
    </div>
  );
};

export default Experience;