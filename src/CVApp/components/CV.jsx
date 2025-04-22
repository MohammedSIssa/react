export default function CV({ data }) {
  return (
    <div className="cv">
      <h1>Hello, {data.general.name}.. Here's your CV.. kinda o.0</h1>
      <section className="cv-general-info">
        <h4>My name is {data.general.name} and I studied {data.eduExp.studyTitle} at the {data.eduExp.school} from {data.eduExp.dateOfStudy}
          <br />
          I worked at {data.workExp.companyName} as a {data.workExp.mainRespons} from {data.workExp.dateFrom} to {data.workExp.dateTo} 
          <br />
          My position title was {data.workExp.positionTitle}
        </h4>
        <br />
        <br />
        <br />
        <br />
        <h2>This looks bad, but it's alright for my current skill level in React ://</h2>
      </section>
    </div>
  )
}