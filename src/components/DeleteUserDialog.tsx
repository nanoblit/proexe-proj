import { Button, Dialog, DialogActions, DialogContent, DialogContentText } from "@mui/material";
import { useTypedSelector } from "../hooks/useTypedSelector.ts";
import { useDispatch } from "react-redux";
import { deleteUser } from "../store.ts";

interface Props {
  userId: number | null;
  onClose: () => void;
}

export default function DeleteUserDialog({ userId, onClose }: Props) {
  const name = useTypedSelector(({ users }) => users.find(({ id }) => id === userId)?.name);
  const dispatch = useDispatch();

  const handleDeleteUser = () => {
    if (userId !== null) {
      dispatch(deleteUser(userId));
    }
    onClose();
  };

  return (
    <Dialog aria-describedby="alert-dialog-description" open={userId !== null}>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure that you want to delete the user with the name {name}?
        </DialogContentText>
        <DialogActions>
          <Button variant="outlined" color="success" onClick={onClose}>Cancel</Button>
          <Button variant="contained" color="error" onClick={handleDeleteUser}>Delete</Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
}