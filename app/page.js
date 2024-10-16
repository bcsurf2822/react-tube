import Image from "next/image";
import styles from "./page.module.css";

//Role: The Page component will be the topmost (parent) component that renders all other components.
//State: It will contain the main state object, including a list of videos and the selectedVideo (the currently displayed main video).

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
       
       

        <div className={styles.ctas}>
        </div>

      </main>


      <footer className={styles.footer}>
      </footer>
    </div>
  );
}
