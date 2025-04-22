import { useState } from "react";
import openSvg from '../assets/open.svg'
import closeSvg from '../assets/close.svg'

export default function EducationlExperience({ school, studyTitle, studyDate, onChange }) {

  const [isEditing, setIsEditing] = useState(false)
  const [showMore, setShowMore] = useState(false)

  return (
    <section className="educational-exp" style={{position: 'relative', borderBottom: '1px solid grey', padding: '10px'}}>
      <h1>Educational Experience</h1>
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
        <p>School Name: </p>
        <input 
          name="school"
          value={school}
          onChange={(e) => onChange(e.target.value, studyTitle, studyDate)}
          placeholder="School Name"
          disabled={!isEditing}
        />
        <p>Study Title: </p>
        <input 
          name="Study Title"
          value={studyTitle}
          onChange={(e) => onChange(school, e.target.value, studyDate)}
          placeholder="Study Title"
          disabled={!isEditing}
        />
        <p>Study Date: </p>
        <input 
          name="school"
          value={studyDate}
          type="date"
          onChange={(e) => onChange(school, studyTitle, e.target.value)}
          placeholder="School Date"
          disabled={!isEditing}
        />
        <button type="submit"
        style={isEditing ? {backgroundColor: '#1ed760', color: 'black'} : {backgroundColor:'#1ca1f1', color: 'black'}}
        onClick={() => onChange(school, studyTitle, studyDate)}
        >
          {isEditing ? "Save" : "Edit"} Information
        </button>
      </form>
      }
    </section>
  )
}