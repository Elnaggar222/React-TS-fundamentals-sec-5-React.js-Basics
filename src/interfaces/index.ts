export interface IUserData {
  username: string;
  email: string;
  password: string;
  phone: string;
  address:string
}
export interface IFormList {
  label: string;
  type: string;
  id: string;
  name: keyof IUserData;
}
