import React, { useState } from "react";

function Fullname() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  let fullName = firstName + " " + lastName;

  const handleSubmit = (event) => {
    event.preventDefault();  // to prevent the default behaviour of any element like button, form, anchor tag, etc
    // console.log(fullName);
    setIsSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Full Name Display</h1>
      <label htmlFor="firstName">First Name:</label>  {/* To display 'First Name:' near input box and don't use <p> tag for this */}
      <input type="text" id="firstName" value={firstName} onChange={(e) => {setFirstName(e.target.value)}} required/> {/* */}
      <br/>
      <label htmlFor="lastName">Last Name:</label> {/* The htmlFor prop in JSX is the same as the for attribute in HTML */}
      <input type="text" id="lastName" value={lastName} onChange={(e) => {setLastName(e.target.value)}} required/>
      <br/>
      <button type="submit">Submit</button> {/* The <input type="submit"> defines a submit button which submits all form values to a form-handler. The form-handler is typically a server page with a script for processing the input data. The form-handler is specified in the form's action attribute */}
      {/* <p>{isSubmitted && {fullName}}</p> */}
      {isSubmitted && <p>Full Name: {fullName}</p>}
    </form>
  )
}

export default Fullname;

// The htmlFor is used to associate a label with a form control. When a user clicks on a label, the associated form control will receive focus. Here, when we click on the First Name: or Last Name: or, it will focus on the input box i.e., the insertion point will go into the box. 
// The for/htmlFor attribute of <label> must be equal to the id attribute of the related element to bind them together 
// This is especially useful for checkboxes and radio buttons, where the label text is often next to the control itself.