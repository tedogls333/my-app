import { useState } from "react";

export default function Login() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    console.log(
      "User email: " + enteredEmail,
      "User password: " + enteredPassword
    );
  }

  function handleEmailChange(e) {
    setEnteredEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setEnteredPassword(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={enteredEmail}
            onChange={handleEmailChange}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={enteredPassword}
            onChange={handlePasswordChange}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
