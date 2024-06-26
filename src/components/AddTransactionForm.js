import React, {useState} from "react";

function AddTransactionForm({addedData}) {
const [formInput, setFormInput] = useState({
  date:"",
  description:"",
  category:"",
  amount:"",
});

function handleSubmit(e) {
  e.preventDefault();

  fetch("https://bank-of-flatiron-m53s.onrender.com/transactions",{

  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(formInput),
})
  .then(response => response.json())
  .then(data => addedData(data))
  }

  function handleChange(e){
    const key = e.target.name
    const value = e.target.value;
    setFormInput({...formInput,[key]: value})
    console.log(formInput)
  }


  return (
    <div className="ui segment">
      <form onSubmit = {handleSubmit}className="ui form">
        <div className="inline fields">
          <input onChange={handleChange} type="date" name="date" />
          <input  onChange={handleChange} type="text" name="description" placeholder="Description" />
          <input  onChange={handleChange} type="text" name="category" placeholder="Category" />
          <input  onChange={handleChange} type="number" name="amount" placeholder="Amount" step="0.01" />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;