import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
import { AiOutlineMessage } from "react-icons/ai";
import { AiOutlineMobile } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

function ContactForm() {
  function formSubmit(event) {
    event.preventDefault();
    console.log("Name : ", event.target[0].value);
    console.log("E-Mail : ", event.target[1].value);
    console.log("Message : ", event.target[2].value);
  }
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.buttons}>
          <Button
            text="VIA Support Chat"
            icon={<AiOutlineMessage fontSize="24px" />}
          />
          <Button text="VIA Call" icon={<AiOutlineMobile fontSize="24px" />} />
        </div>
        <Button
          variant="outline"
          text="VIA Email Form"
          icon={<AiOutlineMail fontSize="24px" />}
        />

        <form onSubmit={formSubmit}>
          <div className={styles.form_container}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>

          <div className={styles.form_container}>
            <label htmlFor="email">E-Mail</label>
            <input type="email" name="email" />
          </div>

          <div className={styles.form_container}>
            <label htmlFor="text">Message</label>
            <textarea name="text" rows="8" />
          </div>
          <Button text="Submit" />
        </form>
      </div>
      <div className={styles.contactVideo}>
        <video
          autoPlay
          playsInline
          loop
          muted
          src="./contact-us.mp4"
          type="video/mp4"
        />
      </div>
    </section>
  );
}

export default ContactForm;
