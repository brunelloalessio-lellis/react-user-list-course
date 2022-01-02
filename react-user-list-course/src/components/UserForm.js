import Button from "./Button";
import styles from "./UserForm.module.css";
import Card from "./wrappers/Card";

const UserForm = (props) => {
  return (
    <Card>
      <form className={styles["user-form"]}>
        <div>
          <label>Username</label>
          <input type="text"></input>
          <label>Age (Years)</label>
          <input type="number"></input>
        </div>
        <Button text="Add user"></Button>
      </form>
    </Card>
  );
};

export default UserForm;
