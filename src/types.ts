export interface UserData {
  id: number,
  name: string,
  username: string,
  email: string,
  address: {
    city: string
  }
}

export interface User {
  id: number,
  name: string,
  username: string,
  email: string,
  city: string
}

export interface UserState {
  users: User[];
  status: FetchStatus;
}

export enum FetchStatus {
  IN_PROGRESS = "IN_PROGRESS",
  SUCCESS = "SUCCESS",
  ERROR = "ERROR"
}

export type UserFormData = Omit<User, "id">