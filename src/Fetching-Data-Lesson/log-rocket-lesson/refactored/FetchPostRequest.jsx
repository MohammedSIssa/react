import { useEffect } from "react";
import { postRequestNativeFetch } from "./nativeFetch";

function FetchPostRequest() {
  useEffect(() => {
    const fetchDataForPosts = async () => {
      try {
        const postsData = await postRequestNativeFetch({
          useId: 11,
          id: 101,
          title: "New Post Title",
          body: "The Post Body Content",
        })
      } catch (error) {console.error(error)}
    };

    fetchDataForPosts()
  }, []);

  return <div>FetchPostRequest</div>;
}

export default FetchPostRequest;
