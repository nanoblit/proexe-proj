import { UserFormData } from "../types.ts";

export function useUserFormValidation(formData: UserFormData) {
  const nameError = validateName(formData.name);
  const emailError = validateEmail(formData.email);
  const isError = Boolean(nameError) || Boolean(emailError);

  return { nameError, emailError, isError };
}

const containsNumbersRegex = /\d/;

export function validateName(name: string): string {
  if (isStringEmpty(name)) {
    return "Name can't be empty";
  }

  if (containsNumbersRegex.test(name)) {
    return "Name can't contain numbers";
  }

  return "";
}

const validEmailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export function validateEmail(email: string): string {
  if (isStringEmpty(email)) {
    return "Email can't be empty";
  }

  if (!validEmailRegex.test(email)) {
    return "Email is incorrect";
  }

  return "";
}

function isStringEmpty(str: string) {
  return str.trim() === "";
}