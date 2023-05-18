import { Box, Button, TextField } from "@mui/material";
import { User, UserFormData } from "../types.ts";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addUser, editUser } from "../store.ts";
import { useDispatch } from "react-redux";
import { useUserFormValidation } from "../hooks/useUserFormValidation.ts";

interface Props {
  defaultData: User | undefined,
}

export default function UserForm({ defaultData }: Props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState<UserFormData>(() => {
    if (defaultData) {
      return defaultData;
    }

    return {
      name: "",
      username: "",
      email: "",
      city: "",
    };
  });
  const [showValidation, setShowValidation] = useState(false);

  const { nameError, emailError, isError } = useUserFormValidation(formData);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value.trim(),
    }));
  };

  const handleSubmit = () => {
    if (!formData) {
      return;
    }

    if (isError) {
      return setShowValidation(true);
    }

    const newUser = defaultData === undefined;
    if (newUser) {
      dispatch(addUser(formData));
    } else {
      dispatch(editUser({ ...formData, id: defaultData.id }));
    }

    navigate("/");
  };

  return (
    <>
      <TextField
        error={showValidation && Boolean(nameError)}
        helperText={showValidation && nameError}
        required
        name="name"
        label="Name"
        value={formData.name}
        onChange={handleChange}
      />
      <TextField
        name="username"
        label="Username"
        value={formData.username}
        onChange={handleChange}
      />
      <TextField
        error={showValidation && Boolean(emailError)}
        helperText={showValidation && emailError}
        required
        name="email"
        label="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <TextField
        name="city"
        label="City"
        value={formData.city}
        onChange={handleChange}
      />
      <Box className="flex justify-end gap-x-2">
        <Link to="/">
          <Button variant="outlined" color="error">Cancel</Button>
        </Link>
        <Button variant="contained" color="success" onClick={handleSubmit}>Submit</Button>
      </Box>
    </>
  );
}