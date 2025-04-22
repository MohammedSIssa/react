import { useState } from "react";
import '../styles/general.css'
import openSvg from '../assets/open.svg'
import closeSvg from '../assets/close.svg'

export default function GeneralInfo({ name, email, phoneNumber, onChange }) {

  const [showMore, setShowMore] = useState(false)
  const [isEditing, setIsEditing] = useState(false)

  return (
    <section className="general-info" style={{position: 'relative', borderBottom: '1px solid grey', padding: '10px'}}>
      <h1>General Info</h1>
      <button 
        onClick={() => {setShowMore(!showMore); setIsEditing(showMore && !isEditing)}}
        style={{width: '50px', height: '50px', borderRadius: '50%', border: '0', position: 'absolute', right: '10px', top: 0}}
        >
        {showMore ? <img src={closeSvg} /> : <img src={openSvg} />}
        </button>
      {showMore && 
      <form onSubmit={e => {e.preventDefault(); setIsEditing(!isEditing)}}>
        <p>Name:</p>
        <input 
          name="name"
          value={name}
          onChange={(e) =>onChange(e.target.value, email, phoneNumber)}
          placeholder="Name"
          disabled={!isEditing}
        />
        <p>Email: </p>
        <input 
          name="email"
          value={email}
          onChange={(e) =>onChange(name, e.target.value, phoneNumber)}
          placeholder="Email"
          disabled={!isEditing}
        />
        <p>Phone Number:</p>
        <input 
          name="phoneNumber"
          value={phoneNumber}
          onChange={(e) =>onChange(name, email, e.target.value)}
          placeholder="Phone Number"
          disabled={!isEditing}
        />
        <button type="submit"
          style={isEditing ? {backgroundColor: '#1ed760', color: 'black'} : {backgroundColor:'#1ca1f1', color: 'black'}}
          onClick={() => onChange(name, email, phoneNumber)}
        >
          {isEditing ? "Save" : "Edit"} Information
        </button>
      </form>
      }
    </section>
  )
}