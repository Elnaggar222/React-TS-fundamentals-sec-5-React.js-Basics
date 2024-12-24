import { ChangeEvent, useState } from "react";
import styles from "./index.module.scss";
import { IFormList, IUserData } from "../../interfaces";
import { formInputList } from "../../data";

interface IISRegUser {
  setIsRegistered: (value: boolean) => void;
  userData: IUserData;
  setUserData: (user: IUserData) => void;
}

const Index = ({ setIsRegistered, userData, setUserData }: IISRegUser) => {
  const [inputList, setInputList] = useState<IFormList[]>(formInputList);
  const handleDelete = (deletedName: string) => {
    const filteredList = inputList.filter((item) => item.name !== deletedName);
    setInputList(filteredList);
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  //Renders
  const renderFormInputList = inputList.map((input) => (
    <div key={input.name} style={{ display: "flex", alignItems: "center" }}>
      <div className={styles.inputWrapper}>
        <label htmlFor={input.id}>{input.label}</label>
        <input
          id={input.id}
          name={input.name}
          type={input.type}
          value={userData[input.name]}
          onChange={onChangeHandler}
        />
      </div>
      <button
        onClick={() => handleDelete(input.name)}
        style={{ marginLeft: 10 }}
      >
        ❌
      </button>
    </div>
  ));

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className={styles.formWrapper}>
        {renderFormInputList}
        <button
          type="submit"
          onClick={() => {
            setIsRegistered(true);
          }}
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default Index;
