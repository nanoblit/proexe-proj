import { TextField } from "@mui/material";
import { User } from "../helpers/types.ts";
import { useState } from "react";
import { validateEmail, validateName } from "../helpers/inputValidators.ts";

interface Props {
  showValidation: boolean,
  defaultData: Omit<User, "id"> | undefined,
  onFormDataChanged: (formData: Omit<User, "id">, error: boolean) => void
}

export default function UserForm({ showValidation, defaultData, onFormDataChanged }: Props) {
  const [formData, setFormData] = useState<Omit<User, "id">>(() => {
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

  const nameError = validateName(formData.name);
  const emailError = validateEmail(formData.email);
  const isError = Boolean(nameError) || Boolean(emailError);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFormData = {
      ...formData,
      [event.target.name]: event.target.value.trim(),
    };

    setFormData(newFormData);
    onFormDataChanged(newFormData, isError);
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
    </>
  );
}