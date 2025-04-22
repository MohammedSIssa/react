// parallel Promises solution

import { useState, useEffect } from "react";

const useAllData = () => {
  const [sidebar, setSidebar] = useState();
  const [issue, setIssue] = useState();
  const [comments, setComments] = useState();

  useEffect(() => {
    const dataFetch = () => {
      fetch("/get-sidebar")
        .then((data) => data.json())
        .then((data) => setSidebar(data));
      fetch("/get-issue")
        .then((data) => data.json())
        .then((data) => setIssue(data));
      fetch("/get-comments")
        .then((data) => data.json())
        .then((data) => setComments(data));
    };

    dataFetch();
  }, []);

  return { sidebar, issue, comments };
};

const App = () => {
  const { sidebar, issue, comments } = useAllData();

  if(!sidebar) return <p>loading..</p>

  return (
    <>
      <Sidebar data={sidebar} />
      {issue ? <Issue comments={comments} issue={issue} /> : <p>loading..</p>}
    </>
  );
};

const Sidebar = (data) => {
  return data.map((element) => <div>{element}</div>);
};

const Issue = (comments, issue) => {
  return (
    <>
      <h4>{issue}</h4>
      <Comments comments={comments} />
    </>
  );
};

const Comments = (comments) => {
  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment.id}>{comment.title}</li>
      ))}
    </ul>
  );
};

export default App;
