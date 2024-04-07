import { useState } from "react";

export default function CommentForm() {
  let [formData, setFormData] = useState({
    username: "",
    remarks: "",
    ratings: "",
  });

  let handleInputChange = (event) => {
    // let formField = event.target.name;
    // let formValue = event.target.value;
    setFormData((currValue) => {
      //   currValue[formField] = formValue;
      return { ...currValue, [event.target.name]: event.target.value };
    });
  };
  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      username: "",
      ratings: "",
      remarks: "",
    });
  };
  return (
    <div>
      <h3>Leave a Comment!</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          placeholder="enter username"
          id="username"
          //   name must match with corresponding key of state variable
          name="username"
          value={formData.username}
          onChange={handleInputChange}
        />
        <br />
        <br />
        <label htmlFor="remarks">Remarks: </label>
        <textarea
          name="remarks"
          id="remarks"
          value={formData.remarks}
          onChange={handleInputChange}
        ></textarea>
        <br />
        <br />

        <label htmlFor="ratings">Ratings: </label>
        <input
          type="number"
          id="ratings"
          min={1}
          max={5}
          name="ratings"
          value={formData.ratings}
          onChange={handleInputChange}
        />
        <br />
        <br />

        <button>Submit</button>
      </form>
    </div>
  );
}
