import React, { useState } from "react";
import "./App.css";

import Form from "./components/Form";
import Packages from "./components/Packages";

const App = () => {
  const prices = [
    {
      packageA: 45,
      packageB: 35,
      packageC: 80,
      packageD: 110,
      packageE: 140,
      multiA: 100,
      multiB: 140,
      multiC: 185,
      Ausb: 65,
      Busb: 55,
      Cusb: 100,
      Dusb: 130,
      Eusb: 170,
      MAusb: 120,
      MBusb: 165,
      MCusb: 215
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