import Button from "../../components/Button";
import Section from "../../components/Section";
import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <Section
      title={
        <>
          I’m Open to Hiring ️
          <img className="mb-2 ml-2 inline" src="/flash.svg" alt="flash" />
        </>
      }
    >
      <div className={styles.wrapper}>
        <div className={styles.description}>
          <div className={styles["hyphens-text"]} lang="en">
            I am interested in companies that provide a dynamic and progressive
            working environment, and offer challenging opportunities in my field
            of expertise.
          </div>
          <div className={styles["list-text"]}>
            I am available for both
            <div className={styles.list}>
              <img src="/wavy.svg" aria-hidden="true" />
              <ul>
                <li>remote</li>
                <li>in-office</li>
              </ul>
            </div>
            work and relocation is not a concern for me.
          </div>
        </div>
        <Button tag="a" href="mailto:shadmehr.vasighi99@gmail.com">
          👋🏼 say me hello
        </Button>
      </div>
    </Section>
  );
};

export default Contact;
