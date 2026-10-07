import React from 'react'
import Card from './components/Card';

const App = () => {
const data = [
  {
    nameClass: ".Net August 2026",
    students: 7,
    data: "Aug 5, 2026 - Dec 5, 2026",
    branch: "Profsouz",
    days: "Mn Tu Wd Th Fr Sa",
    schedule: "4 months (16:00 - 18:00)",
  },
  {
    nameClass: "Computer Basics August 2026 (1)",
    students: 8,
    data: "Aug 10, 2026 - Oct 9, 2026",
    branch: "Profsouz",
    days: "Mn Wd Fr",
    schedule: "2 months (16:30 - 18:00)",
  },
  {
    nameClass: "Junior JS august 2026 (1)",
    students: 4,
    data: "Aug 10, 2026 - Nov 9, 2026",
    branch: "Profsouz",
    days: "Tu Th Sa",
    schedule: "3 months",
  },
  {
    nameClass: "Robotics September 09:00",
    students: 8,
    data: "Sep 10, 2026 - Oct 11, 2026",
    branch: "Profsouz",
    days: "Tu Th Sa",
    schedule: "1 month",
  },
  {
    nameClass: "Html - july - kids 1",
    students: 8,
    data: "Jul 10, 2026 - Nov 10, 2026",
    branch: "Profsouz",
    days: "Mn Wd Fr",
    schedule: "4 months (16:30 - 18:00)",
  },
  {
    nameClass: "Next.js",
    students: 12,
    data: "Oct 5, 2026 - Nov 5, 2026",
    branch: "Profsouz",
    days: "Mn Tu Wd Th Fr Sa",
    schedule: "1 month (18:00 - 20:00)",
  },
  {
    nameClass: "Figma September 2026",
    students: 2,
    data: "Sep 5, 2026 - Nov 4, 2026",
    branch: "Profsouz",
    days: "Mn Tu Wd Th Fr Sa",
    schedule: "2 months (14:00 - 16:00)",
  },
  {
    nameClass: "JS Junior September 16:30 - (1)",
    students: 11,
    data: "Sep 9, 2026 - Jan 9, 2027",
    branch: "Profsouz",
    days: "Mn Wd Fr",
    schedule: "4 months (16:30 - 18:00)",
  },
];
  return (
    <div className='maindiv'>
      {
        data.map((elem) => {
          return <Card key = {elem.nameClass} {...elem}/>
        })
      }
    </div>
  )
}

export default App
