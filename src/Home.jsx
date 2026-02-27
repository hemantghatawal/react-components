import { Link } from "react-router";

const Home = () => {
  return (
    <nav style={{ display: "grid", gap: "10px", marginBottom: "20px" }}>
      <Link to="/progress-bar">Progress Bar</Link>
      <Link to="/progress-bars">Progress Bars</Link>
      <Link to="/accordion">Accordion</Link>
      <Link to="/tab-form">Tab Form</Link>
      <Link to="/pagination">Pagination</Link>
      <Link to="/chips-input">Chips Input</Link>
      <Link to="/auto-complete-search-bar">Auto Complete Search Bar</Link>
      <Link to="/file-explorer">File Explorer</Link>
      <Link to="/nested-checkbox">Nested Checkbox</Link>
      <Link to="/todo-list">Todo List</Link>
    </nav>
  );
};

export default Home;
