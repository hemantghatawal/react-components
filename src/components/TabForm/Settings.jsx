const Settings = ({ data, setData }) => {
  const { theme } = data;

  const handleChangeData = (e) => {
    setData((previousState) => ({
      ...previousState,
      theme: e.target.value,
    }));
  };
  return (
    <div>
      <div>
        <label>
          <input
            type="radio"
            name="theme"
            value="dark"
            checked={theme === "dark"}
            onChange={handleChangeData}
          />
          Dark
        </label>
      </div>

      <div>
        <label>
          <input
            type="radio"
            name="theme"
            value="light"
            checked={theme === "light"}
            onChange={handleChangeData}
          />
          Light
        </label>
      </div>
    </div>
  );
};

export default Settings;
