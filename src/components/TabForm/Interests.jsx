const Interests = ({ data, setData, errors }) => {
  const { interests } = data;

  const handleDataChange = (e) => {
    setData((previousState) => ({
      ...previousState,
      interests: e.target.checked
        ? [...previousState.interests, e.target.name]
        : previousState.interests.filter((i) => i !== e.target.name),
    }));
  };
  return (
    <div>
      <div>
        <label htmlFor="coding">
          <input
            type="checkbox"
            name="coding"
            id="coding"
            checked={interests.includes("coding")}
            onChange={handleDataChange}
          />
          Coding
        </label>
      </div>
      <div>
        <label htmlFor="music">
          <input
            type="checkbox"
            name="music"
            id="music"
            checked={interests.includes("music")}
            onChange={handleDataChange}
          />
          Music
        </label>
      </div>

      <div>
        <label htmlFor="video editing">
          <input
            type="checkbox"
            name="video editing"
            id="video editing"
            checked={interests.includes("video editing")}
            onChange={handleDataChange}
          />
          Video Editing
        </label>
      </div>
      {errors.interests && <span className="error"> {errors.interests} </span>}
    </div>
  );
};

export default Interests;
