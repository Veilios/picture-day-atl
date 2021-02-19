import React from "react";

const Form = (props) => {
  return (
    <form className="form" onSubmit={props.handleSubmit}>
      <input
        onChange={props.handleChanges}
        name="tax"
        type="text"
        placeholder="Sales Tax Percatage"
      />
      <button>Enter</button>
    </form>
  );
};

export default Form;