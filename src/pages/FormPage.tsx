import Panel from "../components/Panel.tsx";
import { Box, Button } from "@mui/material";
import { useState } from "react";
import { FormState, User } from "../helpers/types.ts";
import { useNavigate, useParams } from "react-router";
import { useTypedSelector } from "../hooks/useTypedSelector.ts";
import { useDispatch } from "react-redux";
import PageNotFound from "./PageNotFound.tsx";
import { addUser, editUser } from "../store.ts";
import { Link } from "react-router-dom";
import UserForm from "../components/UserForm.tsx";

export default function FormPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const user = useTypedSelector(({ users }) => users.find((user) => user.id === Number(id)));
  const dispatch = useDispatch();

  const [formData, setFormData] = useState<Omit<User, "id"> | null>(null);
  const [showValidation, setShowValidation] = useState(false);
  const [isError, setIsError] = useState(false);

  const formState =
    id === undefined
      ? FormState.NEW_USER
      : user
        ? FormState.EDITING_USER
        : FormState.ERROR;

  const handleSubmit = () => {
    if (!formData) {
      return;
    }

    if (isError) {
      return setShowValidation(true);
    }

    if (formState === FormState.NEW_USER) {
      dispatch(addUser(formData));
    } else if (formState === FormState.EDITING_USER && user) {
      dispatch(editUser({ ...formData, id: user.id }));
    }

    navigate("/");
  };

  if (formState === FormState.ERROR) {
    return <PageNotFound/>;
  }

  const handleFormDataChanged = (formData: Omit<User, "id">, error: boolean) => {
    setFormData(formData);
    setIsError(error);
  };

  return (
    <Panel header="FormPage">
      <Box className="flex flex-col gap-y-5">
        <UserForm showValidation={showValidation} defaultData={user} onFormDataChanged={handleFormDataChanged}/>
        <Box className="flex justify-end gap-x-2">
          <Link to="/">
            <Button variant="outlined" color="error">Cancel</Button>
          </Link>
          <Button variant="contained" color="success" onClick={handleSubmit}>Submit</Button>
        </Box>
      </Box>
    </Panel>
  );
}