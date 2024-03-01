import { Box } from "@mui/material";

const Navbar = () => {
  return (
    <Box>
      <h1 style={{ textAlign: "center" }}>ADMIN TABLE</h1>
      <nav className="menu--list">
        <li className="navbar--link">
          <a href="#">Home</a>
        </li>
        <li className="navbar--link">
          <a href="#">About</a>
        </li>
        <li className="navbar--link">
          <a href="#">Products</a>
        </li>
        <li className="navbar--link">
          <a href="#">Services</a>
        </li>
        <li className="navbar--link">
          <a href="#">Contact</a>
        </li>
      </nav>
    </Box>
  );
};

export default Navbar;
