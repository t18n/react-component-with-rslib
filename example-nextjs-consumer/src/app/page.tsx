import styles from "./page.module.css";
import { Button, Input } from "rslib-project-example";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Component Examples</h1>
      <div className={styles.componentContainer}>
        <h2>Button Component</h2>
        <Button
          primary
          label="Click me"
          onClick={() => alert("Button clicked!")}
        />
        <Button
          label="Secondary Button"
          size="small"
          onClick={() => alert("Secondary button clicked!")}
        />
      </div>
      <div className={styles.componentContainer}>
        <h2>Input Component</h2>
        <Input placeholder="Type something..." />
      </div>
    </div>
  );
}
