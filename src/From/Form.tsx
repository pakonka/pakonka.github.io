import { useState } from "react";
const Form = () => {
  const [user, setUser] = useState({
    fullname: "",
    email: "",
    provice: "",
  });
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(user);
        }}
      >
        <div className="font-bold text-[20pt]">Registered Form</div>
        <div>
          <label htmlFor="fullname">Full name</label>
          <input
            type="text"
            onChange={(e) => {
              setUser({ ...user, fullname: e.target.value });
            }}
          />
        </div>
        <div>
          <label htmlFor="text">Email</label>
          <input
            type="email"
            onChange={(e) => {
              setUser({ ...user, email: e.target.value });
            }}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};
export default Form;
