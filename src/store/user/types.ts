export interface UserState {
  username: string,
  email: string,
  lastLogin: Date,
  permission: UserStatePermissionMenu,
}

export interface UserStatePermissionMenu {
  menuA: boolean,
  menuB: boolean,
  menuC: boolean,
  menuD: boolean,
}