export const MovieTrailer = ({ video }) => {
  return (
    <video width="720" height="480" controls>
      <source
        src={"http://localhost:3000/data/movies/trailers/" + video + ".mp4"}
        type="video/mp4"
      />
    </video>
  );
};
