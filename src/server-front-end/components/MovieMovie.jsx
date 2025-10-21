export const MovieMovie = ({ movie }) => {
  return (
    <video width="720" height="480" controls>
      <source
        src={`http://localhost:3000/data/movies/${movie}.mp4`}
        type="video/mp4"
      />
      <track
        src={`http://localhost:3000/data/movies/${movie}.vtt`}
        kind="subtitles"
        srclang="ar"
        label="Arabic"
        default
      />
    </video>
  );
};
