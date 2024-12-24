import { useState } from "react";
import "./App.css";
import NavbarItem from "./components/Navbar";
import FormItem from "./components/FormItem";
import UserDetails from "./components/UserDetails";
import { IUserData } from "./interfaces";

function App() {
  const [isRegistered, setIsRegistered] = useState<boolean>(false);
  const [userData, setUserData] = useState<IUserData>({
    username: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });
  const Mylogo = "ENG:ELnaggar";
  return (
    <>
      <NavbarItem
        Mylogo={Mylogo}
        contact="Contact Us"
        isRegistered={isRegistered}
        setIsRegistered={setIsRegistered}
      />
      {isRegistered ? (
        <UserDetails user={userData} />
      ) : (
        <FormItem
          setIsRegistered={setIsRegistered}
          userData={userData}
          setUserData={setUserData}
        />
      )}
    </>
  );
}

export default App;
