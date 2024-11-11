import styles from "./hero-example.module.css";

export default function HeroExample() {
  return (
    <section className={styles.hero}>
      <div className={styles.label}>
        <span>New</span>
        <span>Label goes here</span>
      </div>
      <h1 className={styles.title}>Add your title here</h1>
      <p className={styles.subtitle}>Add your subtitle here.</p>
      <button className={styles.button}>Primary CTA</button>
    </section>
  );
}
