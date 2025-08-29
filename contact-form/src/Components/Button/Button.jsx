import styles from "./Button.module.css";

function Button({ variant = "primary", icon, text, ...rest }) {
  return (
    <button {...rest} className={styles[`${variant}_btn`]}>
      {icon}
      {text}
    </button>
  );
}

export default Button;
