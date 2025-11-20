import PostBody from "./PostBody";
import PostUser from "./PostUser";
import PostBottom from "./PostBottom";

const Post = ({ body, user, likes, numberOfComments }) => {
  return (
    <div>
      <PostUser user={user} />
      <PostBody body={body} />
      <PostBottom likes={likes} numberOfComments={numberOfComments} />
    </div>
  );
};

export default Post;
