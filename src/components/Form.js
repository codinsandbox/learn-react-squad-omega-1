import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({});
  console.log(formData);
  const getData = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, age } = e.target.elements;
    setFormData({
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      age: age.value
    });
  };
  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        gap: "10px",
        marginTop: "50px"
      }}
      onSubmit={getData}
    >
      <input id="firstName" type="text" placeholder="first name" />
      <input id="lastName" type="text" placeholder="last name" />
      <input id="email" type="email" placeholder="email" />
      <input id="age" type="number" placeholder="age" /> <button>Submit</button>
      <div>
        <p>{formData.firstName}</p> <p>{formData.lastName}</p>
        <p>{formData.email}</p> <p>{formData.age}</p>
      </div>
    </form>
  );
};
export default Form;
