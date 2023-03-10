import { useState } from "react";

const Name = () => {
  const [name, setName] = useState("");
  return (
    <div>
      <h1 style={{ height: "50px", textAlign: 'center' }}>{name}</h1>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
        onSubmit={(e) => {
          e.preventDefault();
          setName(e.target.name.value);
          e.target.name.value = "";
        }}
      >
        <input
          style={{ height: "25px", fontStyle: "italic" }}
          id="name"
          type="text"
          placeholder="add your name"
        />
        <button
          style={{
            width: "80px",
            height: "30px",
            backgroundColor: "coral",
            border: "none",
            borderRadius: "5px",
            fontWeight: "700",
          }}
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default Name;
