import { useState } from "react";

export default function Form() {
  let [formData, setFormData] = useState({
    fullName: "",
    username: "",
    password: "",
  });

  let handleFormInput = (event) => {
    // let fieldName = event.target.name;
    // let newValue = event.target.value;

    setFormData((currData) => {
      //   currData[fieldName] = newValue;
      //   return { ...currData, [fieldName]: newValue };

      return { ...currData, [event.target.name]: event.target.value };
    });
  };
  let handleOnSubmit = (event) => {
    console.log(formData);
    event.preventDefault();
    setFormData({
      fullName: "",
      username: "",
      password: "",
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
      <br />
      <br />
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        placeholder="enter username"
        value={formData.username}
        onChange={handleFormInput}
        id="username"
        name="username"
      />
      <br />
      <br />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        placeholder="enter password"
        value={formData.password}
        onChange={handleFormInput}
        id="password"
        name="password"
      />
      <button>submit</button>
    </form>
  );
}
