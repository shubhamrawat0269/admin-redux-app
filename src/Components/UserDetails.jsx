import { Box, Button, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { randomNameGen } from "../dummy/randomName";
import { useDispatch, useSelector } from "react-redux";
import {
  addUser,
  deleteAllUsers,
  deleteUser,
} from "../store/features/userSlice";
const UserDetails = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.userData);
  const addName = (name) => {
    dispatch(addUser(name));
  };

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  return (
    <Box>
      <div className="primary--container">
        <h3>List of User details</h3>
        <Button
          variant="contained"
          size="large"
          endIcon={<AddIcon />}
          onClick={() => addName(randomNameGen())}
        >
          ADD USER
        </Button>
      </div>
      <div className="info--container">
        {data.map((cur, id) => {
          return (
            <div key={id} className="user--detail">
              <h4>{cur}</h4>
              <div className="del--btn">
                <IconButton
                  aria-label="delete"
                  size="large"
                  onClick={() => handleDelete(id)}
                >
                  <DeleteIcon fontSize="inherit" color="error" />
                </IconButton>
              </div>
            </div>
          );
        })}
      </div>
      <div className="secondary--container section">
        <Button
          variant="outlined"
          color="error"
          size="large"
          endIcon={<DeleteIcon />}
          onClick={() => dispatch(deleteAllUsers())}
        >
          DELETE USERS
        </Button>
      </div>
    </Box>
  );
};

export default UserDetails;
