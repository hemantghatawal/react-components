import { Link, Outlet } from "react-router";

const Layout = () => {
  return (
    <div>
      {/* Global Navigation */}
      <nav style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <Link to="/">Home</Link>
      </nav>

      {/* Routed pages render here */}
      <Outlet />
    </div>
  );
};

export default Layout;
