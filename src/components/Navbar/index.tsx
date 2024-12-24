import "./index.scss";
const styles = {
  listStyle: {
    listStyle: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 20,
    backgroundColor: "red",
  },
  liStyle: {
    padding: 10,
  },
  aStyle: {
    color: "#eee",
  },
};
interface INavbar {
  Mylogo: string;
  contact: string;
  isRegistered: boolean;
  setIsRegistered: (val: boolean) => void;
}
const Navbar = ({
  Mylogo,
  contact,
  isRegistered,
  setIsRegistered,
}: INavbar) => {
  return (
    <>
      <ul className="list-style" style={{ ...styles.listStyle }}>
        <li style={styles.liStyle}>
          <a style={styles.aStyle} href="#">
            {Mylogo}
          </a>
        </li>
        <li style={styles.liStyle}>
          <a style={styles.aStyle} href="#">
            Home
          </a>
        </li>
        <li style={styles.liStyle}>
          <a style={styles.aStyle} href="#">
            About Us
          </a>
        </li>
        <li style={styles.liStyle}>
          <a style={styles.aStyle} href="#">
            {contact}
          </a>
        </li>
        <li>
          <button onClick={() => setIsRegistered(!isRegistered)}>
            {isRegistered ? "LogOut" : "Login"}
          </button>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
