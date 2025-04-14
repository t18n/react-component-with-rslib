"use client";

import styles from "./page.module.css";
import { Button, Input, Card } from "react-component-with-rslib";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Kitchen sink</h1>
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
      <div className={styles.componentContainer}>
        <h2>Card Component</h2>
        <div className={styles.cardExamples}>
          <Card
            title="Basic Card"
            description="This is a basic card with title and description"
            onClick={() => alert("Card clicked!")}
          />

          <Card
            title="Card with Image"
            description="This card includes an image"
            imageUrl="https://picsum.photos/384/200"
            onClick={() => alert("Image card clicked!")}
          />

          <Card
            title="Card with Content"
            description="This card has additional content"
            onClick={() => alert("Content card clicked!")}
          >
            <p>This is some additional content inside the card.</p>
            <ul>
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}
