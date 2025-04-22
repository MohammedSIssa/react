import Story from "./Story";

export default function StoryContainer({ stories }) {
  {stories.map((story) => { return (<Story data={story} />) })}
}