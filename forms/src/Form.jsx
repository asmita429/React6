import { useState } from "react";

export default function Form() {
  let [fullName, setFullName] = useState("");

  let handleNameChange = (event) => {
    setFullName(event.target.value);
  };
  return (
    <form>
      <label htmlFor="username">Full Name:</label>
      <input
        type="text"
        placeholder="enter name"
        value={fullName}
        onChange={handleNameChange}
        id="username"
      />
      <button>submit</button>
    </form>
  );
}
