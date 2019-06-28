// @flow
export type UserType = {
  id: number | string,
  name: string,
  department: string,
};

export type InitialStateType = {
  isFetching: boolean,
  isError: boolean,
  list: Array<UserType>
};