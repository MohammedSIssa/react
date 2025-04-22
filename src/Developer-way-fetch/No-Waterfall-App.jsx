// Promise.all solution..

import { useState, useEffect } from "react";

const useAllData = () => {
  const [sidebar, setSidebar] = useState();
  const [issue, setIssue] = useState();
  const [comments, setComments] = useState();

  useEffect(() => {
    const dataFetch = async () => {
      const result = (
        await Promise.all([
          fetch("sidebarUrl"),
          fetch("issueURL"),
          fetch("commentsURL"),
        ])
      ).map((result) => result.json());

      const [sideBarResult, issueResult, commentsResult] = await Promise.all(result)

      setSidebar(sideBarResult)
      setIssue(issueResult)
      setComments(commentsResult)
    };

    dataFetch()
  }, []);

  return { sidebar, issue, comments }
};

const App = () => {
  const { sidebar, issue, comments } = useAllData()

  if(!sidebar || !issue || !comments ) return <p>loading..</p>

  return (
    <>
      <Sidebar data={sidebar} />
      <Issue comments={comments} issue={issue} />
    </>
  )
}

const Sidebar = (data) => {
  return data.map((element) => <div>{element}</div>)
}

const Issue = (comments, issue) => {
  return (
    <>
    <h4>{issue}</h4>
    <Comments comments={comments} />
    </>
  )
}

const Comments = (comments) => {
  return (
    <ul>
      {comments.map((comment) => <li key={comment.id}>{comment.title}</li>)}
    </ul>
  )
}

export default App