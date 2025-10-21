export const MoviePoster = ({ poster, ext }) => {
  return (
    <img
      src={"http://localhost:3000/data/movies/posters/" + poster + "." + ext}
    />
  );
};
