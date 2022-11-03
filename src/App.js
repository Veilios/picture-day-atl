import React, { useState } from "react";
import "./App.css";

import Form from "./components/Form";
import Packages from "./components/Packages";

const App = () => {
  const prices = [
    {
      packageA: 50,
      packageB: 40,
      packageC: 95,
      packageD: 130,
      packageE: 160,
      packageF: 185,
      multiA: 115,
      multiB: 145,
      multiC: 165,
      Ausb: 70,
      Busb: 60,
      Cusb: 115,
      Dusb: 150,
      Eusb: 190,
      Fusb: 215,
      usb1: 40,
      usb2: 125
    }
  ];

  let tax = {tax: 0}

  const [taxRate, setTaxRate] = useState(tax);

  const handleChanges = (e) => {
    console.log("form field changed:", e.target.name, e.target.value);
    setTaxRate({ ...taxRate, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taxRate);
  };

  return (
    <div className="app">
      <div className="header">
        <h1>Package Price List</h1>
      </div>
      <Form handleChanges={handleChanges} handleSubmit={handleSubmit} />
      <Packages taxRate={taxRate} price={prices[0]} />
    </div>
  );
};

export default App;