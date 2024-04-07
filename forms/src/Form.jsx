import { useState } from "react";

export default function Form() {
  let [formData, setFormData] = useState({
    fullName: "",
    username: "",
  });

  let handleFormInput = (event) => {
    let fieldName = event.target.name;
    let newValue = event.target.value;
    setFormData((currData) => {
      currData[fieldName] = newValue;
      return { ...currData };
    });
  };
  let handleOnSubmit = (event) => {
    event.preventDefault();
    setFormData({
      fullName: "",
      username: "",
    });
  };
  return (
    <form onSubmit={handleOnSubmit}>
      <label htmlFor="fullName">Full Name:</label>
      <input
        type="text"
        placeholder="enter name"
        value={formData.fullName}
        onChange={handleFormInput}
        id="fullName"
        name="fullName"
      />
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        placeholder="enter username"
        value={formData.username}
        onChange={handleFormInput}
        id="username"
        name="username"
      />
      <button>submit</button>
    </form>
  );
}
