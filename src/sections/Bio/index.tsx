import Section from "../../components/Section";
import { MY_BIO } from "../../constants/texts";
import styles from "./Bio.module.scss";

const Bio = () => {
  return (
    <Section className="flex flex-col space-y-8">
      <div className={styles.heading}>
        <div className={styles.name}>
          <hr />
          <div>I’m Shadmehr Vasighi</div>
        </div>
        <div className={styles.role}>
          <span>
            Frontend developer
            <img src="/flash.svg" alt="flash" />
            <br />
          </span>
          <span>Ex-Backend developer</span>
        </div>
      </div>
      <div>
        <p className={styles.brief}>{MY_BIO}</p>
      </div>
    </Section>
  );
};
export default Bio;
