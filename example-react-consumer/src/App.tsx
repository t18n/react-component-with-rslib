import { useState } from 'react'
import { Button, Input } from "react-component-with-rslib";
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    setSubmitted(true)
  }

  return (
    <div className="app">
      <h1>Component Library Demo</h1>
      
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
          error={submitted && !email.includes('@')}
        />
        
        <div className="buttons">
          <Button 
            label="Cancel" 
            size="medium"
          />
          
          <Button 
            label="Submit" 
            primary 
            size="medium" 
            onClick={handleSubmit}
          />
        </div>
      </div>
      
      {submitted && (
        <div className="result">
          <h2>Form Submitted</h2>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
        </div>
      )}
    </div>
  )
}

export default App
