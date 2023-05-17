export interface User {
  id: number,
  name: string,
  username: string,
  email: string,
  city: string
}

export interface UserState {
  users: User[];
}