import { Link } from "react-router";

const Home = () => {
  return (
    <nav style={{ display: "grid", gap: "10px", marginBottom: "20px" }}>
      <Link to="/accordion">Accordion</Link>
      <Link to="/tab-form">Tab Form</Link>
    </nav>
  );
};

export default Home;
