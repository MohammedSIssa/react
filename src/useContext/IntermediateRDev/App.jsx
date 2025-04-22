import Heading from "./Heading";
import Section from "./Section";

import './App.css'

export default function ProfilePage() {
  return (
    <Section>
      <Heading>My Profile</Heading>
      <Post title="Hello Traveler!" body="Read about my adventures." />
      <AllPosts />
    </Section>
  )
}

function Post({ title, body }) {
  return (
    <Section isFancy={true}>
      <Heading>{title}</Heading>
      <p>
        <i>{body}</i>
      </p>
    </Section>
  );
}

function AllPosts() {
  return (
    <Section>
      <Heading>Posts</Heading>
      <RecentPosts />
    </Section>
  )
}

function RecentPosts() {
  return (
    <Section>
      <Heading>Recent Posts</Heading>
      <Post title="Flavors of Lisbon" body="...thoses pasteis de nata!" />
      <Post title="Buenos Aires in the rythem of tango" body="I loved it!" />
    </Section>
  )
}
