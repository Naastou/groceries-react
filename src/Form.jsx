import { useState } from "react";
import { toast } from "react-toastify";
const Form = ({ addItem }) => {
  const [item, setItem] = useState("");
  const handleChange = (e) => {
    setItem(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!item.trim()) return toast.error("The field must be filled");
    addItem(item);
    setItem("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>Grocery Bud</h4>
      <div className="form-control">
        <input
          className="form-input"
          type="text"
          value={item}
          placeholder="Enter the items"
          onChange={handleChange}
        />
        <button className="btn" type="submit">
          ADD
        </button>
      </div>
    </form>
  );
};

export default Form;
