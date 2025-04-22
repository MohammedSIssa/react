import { useState } from "react";
import openSvg from '../assets/open.svg'
import closeSvg from '../assets/close.svg'


export default function WorkExperience({ companyName, positionTitle, mainRespons, dateFrom, dateTo, onChange }) {
  const [showMore, setShowMore] = useState(false)
  const [isEditing, setIsEditing] = useState(false)

  return (
    <section className="work-exp"
    style={{position: 'relative', borderBottom: '1px solid grey', padding: '10px'}}
    >
      <h1>Work Experience</h1>
    <button 
      onClick={() => {setShowMore(!showMore); setIsEditing(showMore && !isEditing)}}
      style={{width: '50px', height: '50px', borderRadius: '50%', border: '0', position: 'absolute', right: '10px', top: '10px'}}
      >
      {showMore ? <img src={closeSvg} /> : <img src={openSvg} />}
      </button>  
      {showMore && 
      <form onSubmit={e => {
        e.preventDefault();
        setIsEditing(!isEditing)
      }}>
        <p>Company Name: </p>
        <input 
          name="Company Name"
          value={companyName}
          onChange={(e) => onChange(e.target.value, positionTitle, mainRespons, dateFrom, dateTo)}
          placeholder="Company's Name"
          disabled={!isEditing}
        />
        <p>Position Title: </p>
        <input 
          name="Position Title"
          value={positionTitle}
          onChange={(e) => onChange(companyName, e.target.value, mainRespons, dateFrom, dateTo)}
          placeholder="Position Title"
          disabled={!isEditing}
        />
        <p>Main Responsibilites/Job: </p>
        <input 
          name="Main Job"
          value={mainRespons}
          onChange={(e) => onChange(companyName, positionTitle, e.target.value, dateFrom, dateTo)}
          placeholder="Main Responsibilites at the job"
          disabled={!isEditing}
        />
        <p>Date From: </p>
        <input 
          name="Date From"
          value={dateFrom}
          type="date"
          onChange={(e) => onChange(companyName, positionTitle, mainRespons, e.target.value, dateTo)}
          placeholder="Main Responsibilites at the job"
          disabled={!isEditing}
        />
        <p>Date To: </p>
        <input 
          name="Date To"
          value={dateTo}
          type="date"
          onChange={(e) => onChange(companyName, positionTitle, mainRespons, dateFrom, e.target.value)}
          placeholder="Main Responsibilites at the job"
          disabled={!isEditing}
        />
        <button type="submit"
        style={isEditing ? {backgroundColor: '#1ed760', color: 'black'} : {backgroundColor:'#1ca1f1', color: 'black'}}
        onClick={() => onChange(companyName, positionTitle, mainRespons, dateFrom, dateTo)}
        >
          {isEditing ? "Save" : "Edit"} Information
        </button>
      </form>
      }
    </section>
  )
}