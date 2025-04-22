import { useState } from "react";
import GeneralInfo from "./components/General";
import EducationlExperience from "./components/EduExperience";
import WorkExperience from "./components/WorkExperience";
import CV from "./components/CV";
import './styles/general.css'

export default function CVApplication() {

  const [info, setInfo] = useState({
    general: {
      name: 'Mohamed',
      email: 'Mohammed@TheOdinProject.com',
      phoneNumber: 2315512
    },
    eduExp: {
      school: 'Azhar University of Gaza',
      studyTitle: 'Software Engineering',
      dateOfStudy: '2017-08-12'
    },
    workExp: {
      companyName: "My Company",
      positionTitle: "Sotware Engineer",
      mainRespons: "Front-end Web Developer",
      dateFrom: '2022-03-1',
      dateTo: '2024-05-12'
    }
  })

  function handleGeneralInfoChange(name, email, phoneNumber) {
    setInfo({ ...info, 
      general: {
        name: name,
        email: email,
        phoneNumber: phoneNumber
      }
    })
  }

  function handleEduExpChange(school, studyTitle, studyDate) {
    setInfo({ ...info, 
      eduExp: {
        school: school,
        studyTitle: studyTitle,
        studyDate: studyDate
      }
    })
  }

  function handleWorkExpChange(companyName, positionTitle, mainRespons, dateFrom, dateTo) {
    setInfo({ ...info, 
      workExp: {
        companyName: companyName,
        positionTitle: positionTitle,
        mainRespons: mainRespons,
        dateFrom: dateFrom,
        dateTo: dateTo
      }
    })
  }

  return (
    <div className="container">
      <GeneralInfo name={info.general.name} email={info.general.email} phoneNumber={info.general.phoneNumber} onChange={handleGeneralInfoChange}/>
      <EducationlExperience school={info.eduExp.school} studyTitle={info.eduExp.studyTitle} studyDate={info.eduExp.studyDate} onChange={handleEduExpChange} />
      <WorkExperience companyName={info.workExp.companyName} positionTitle={info.workExp.positionTitle} mainRespons={info.workExp.mainRespons} dateFrom={info.workExp.dateFrom} dateTo={info.workExp.dateTo} onChange={handleWorkExpChange} />
      <CV data={info} />
    </div>
  )
}