import { IUserData } from "../../interfaces";

interface IUserDetails {
  user: IUserData;
}

const index = ({ user }: IUserDetails) => {
  return (
    <div style={{ margin: 10 }}>
      <h3>Username: {user.username}</h3>
      <h3>Email: {user.email}</h3>
      <h3>Password: {user.password}</h3>
      <h3>Phone: {user.phone}</h3>
    </div>
  );
};

export default index;
