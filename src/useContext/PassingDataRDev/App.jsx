import Section from "./Section";
import Heading from "./Heading";

import "./app.css";

export default function Page() {
  return (
    // <Section level={1}>
    //   <Heading>Title</Heading>
    //   <Section level={2}>
    //     <Heading>Heading</Heading>
    //     <Heading>Heading</Heading>
    //     <Heading>Heading</Heading>
    //     <Section level={3}>
    //       <Heading>Sub-heading</Heading>
    //       <Heading>Sub-heading</Heading>
    //       <Heading>Sub-heading</Heading>
    //       <Section level={4}>
    //         <Heading>Sub-sub-heading</Heading>
    //         <Heading>Sub-sub-heading</Heading>
    //         <Heading>Sub-sub-heading</Heading>
    //       </Section>
    //     </Section>
    //   </Section>
    // </Section> // OLD
    <Section>
      <Heading>Title</Heading>
      <Section>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Section>
          <Heading>Sub-heading</Heading>
          <Heading>Sub-heading</Heading>
          <Heading>Sub-heading</Heading>
          <Section>
            <Heading>Sub-sub-heading</Heading>
            <Heading>Sub-sub-heading</Heading>
            <Heading>Sub-sub-heading</Heading>
          </Section>
        </Section>
      </Section>
    </Section> // NEW: DONT NEED TO PASS LEVEL TO EACH SECTION. IT STARTS FROM 0 (LevelContext.jsx) AND INCREMENT BY 1 ON EACH SECTION NESTED
    // FEELS LIKE I AM USING RECURSION..
  );
}
