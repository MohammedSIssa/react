// has waterfall problem..

import { useEffect, useState } from 'react'

const App = () => {
  const { data } = useData('/get-sidebar-url')

  if(!data) return <p>loading..</p>

  return (
    <>
      <SideBar data={data} />
      <Issue />
    </>
  )
}

const SideBar = (data) => {
  return data.map((element) => <div>{element}</div>)
}

const Issue = () => {
  const { data } = useData('/get-issues-url')

  if(!data) return <p>loading..</p>

  return (
    <div>
      <h4>{data.title}</h4>
      <p>{data.description}</p>
      <Comments />
    </div>
  )
}

const Comments = () => {
  const { data } = useData('/get-comments-url')

  if(!data) return <p>loading..</p>

  return data.map((comment) => <div>{comment.title}</div>)
}

const useData = (url) => {
  const [state, setState] = useState()

  useEffect(() => {
    const dataFetch = async () => {
      const data = await (await fetch(url)).json()

      setState(data)
    }

    dataFetch()
  }, [url])

  return { data: state }
}

export default App