import { useState } from "react";
import Button from "./Button";
import styles from "./UserForm.module.css";
import Card from "./wrappers/Card";

const UserForm = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState('');

  const onFormButtonHander = (event) => {
    event.preventDefault()
    if(username.trim() && age.trim()){
        const userObject = {
            username: username,
            age: age,
            id: Math.random().toString()
        }
    
        props.onAddUserTap(userObject)
        setUsername('')
        setAge('')
    }else{
        alert('Please insert username and age')
    }
  };

  const onUsernameFieldChange = (event) => {
    setUsername(event.target.value);
  };

  const onAgeFieldChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Card>
      <form className={styles["user-form"]} onSubmit={onFormButtonHander}>
        <div>
          <label>Username</label>
          <input
            value={username}
            onChange={onUsernameFieldChange}
            type="text"
          ></input>
          <label>Age (Years)</label>
          <input value={age} onChange={onAgeFieldChange} type="number"></input>
        </div>
        <Button text="Add user"></Button>
      </form>
    </Card>
  );
};

export default UserForm;
