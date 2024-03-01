import { Box } from "@mui/material";
import React from "react";
import Navbar from "./Components/Navbar";
import UserDetails from "./Components/UserDetails";
import "./index.css";

const App = () => {
  return (
    <Box className="container section">
      <Navbar />
      <UserDetails />
    </Box>
  );
};

export default App;
