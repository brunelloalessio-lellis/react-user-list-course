import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button className={styles["form-button"]} onClick={props.onClickHandler}>
        {props.text}
    </button>
  );
};

export default Button;
