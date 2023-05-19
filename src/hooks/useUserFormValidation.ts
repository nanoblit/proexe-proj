import { UserFormData } from "../types.ts";

export function useUserFormValidation(formData: UserFormData) {
  const nameError = validateName(formData.name);
  const emailError = validateEmail(formData.email);
  const isError = Boolean(nameError) || Boolean(emailError);

  return { nameError, emailError, isError };
}

const containsDigitsRegex = /\d/;

export function validateName(name: string): string {
  if (isStringEmpty(name)) {
    return "The name can't be empty";
  }

  if (containsDigitsRegex.test(name)) {
    return "The name can't contain digits";
  }

  return "";
}

const validEmailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export function validateEmail(email: string): string {
  if (isStringEmpty(email)) {
    return "The email can't be empty";
  }

  if (!validEmailRegex.test(email)) {
    return "The email is incorrect";
  }

  return "";
}

function isStringEmpty(str: string) {
  return str.trim() === "";
}