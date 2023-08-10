import styles from "./sidebar.module.scss";

const Sidebar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.name}>
            Shadmehr
            <br />
            Vasighi
          </div>
          <div className={styles.role}>
            frontend <br />
            developer
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.first}>
            <hr />
            <div>
              <span>5</span>
              projects
            </div>
          </div>
          <div className={styles.second}>
            <div>Whatsapp</div>
            <hr />
          </div>
          <div className={styles.third}>
            <div>LinkedIn</div>
            <hr />
          </div>
          <div className={styles.fourth}>
            <div>Github</div>
            <hr />
          </div>
          <div className={styles.fifth}>
            <div>
              <span>+2</span>
              years of
              <br />
              Experience
            </div>
            <hr />
          </div>
        </div>
        <div className={styles["inner_bottom_bg"]}></div>
      </div>

      <div className={styles.picture}>
        <div className={styles.pill}></div>
        <img src="/profile.png" />
      </div>
    </div>
  );
};
export default Sidebar;
