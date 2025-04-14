import { useState } from "react";
import { Button, Input, Card } from "react-component-with-rslib";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="app">
      <h1>Example React Consumer</h1>

      <div className="form">
        <Input
          label="Name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          label="Email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={submitted && !email.includes("@")}
        />

        <div className="buttons">
          <Button label="Cancel" size="medium" />

          <Button label="Submit" primary size="medium" onClick={handleSubmit} />
        </div>

        {submitted && (
          <div className="result">
            <h2>Form Submitted</h2>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
          </div>
        )}
      </div>

      <div className="cards-container">
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
  );
}

export default App;
