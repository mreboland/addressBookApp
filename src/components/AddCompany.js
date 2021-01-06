import React, { useState } from "react";

import Field from "./Field";
import AddressEditor from "./AddressEditor";

function AddCompany(props) {
  // By default, name will be an empty string
  const [name, setName] = useState("");
  // Address will be stored in an object due to multiple data points per address
  const [address, setAddress] = useState({});
  
  const updateAddressField = (e) => {
    const addressState = {...address};
    addressState[e.target.name] = e.target.value;
    setAddress(addressState);
  }

  const updateField = e => {
    setName(e.target.value);
  };

  const addRecord = async e => {
    e.preventDefault();
    try {
      const response = await fetch("/api/companies", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // things below will be passed into the backend. Address was missing so it wasn't  being stored in the backend properly.
        body: JSON.stringify({ name, address })
      });
      if (response.ok) {
        props.onAdd();
      } else {
        console.log("Error saving record");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <form onSubmit={addRecord}>
        <Field label="Name" value={name} name="name" onChange={updateField} />
        <AddressEditor address={address} onChange={updateAddressField}/>
        <input type="submit" value="Save" />
      </form>
    </div>
  );
}

export default AddCompany;
