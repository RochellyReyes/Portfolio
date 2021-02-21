import React from "react";
import "../../styling/formAPI.css"

//https://help.formspree.io/hc/en-us/articles/360055613373-The-Formspree-React-library
//https://formspree.io/forms/mleokapv/integration
//https://help.formspree.io/hc/en-us/articles/360055613373-The-Formspree-React-library
//npm install @formspree/react

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/f/mleokapv"
        method="POST">

        <label>Name:</label>
        <input 
            type="name" 
            name="name" 
            required/>

        <label>Email:</label>
        <input 
            type="email" 
            name="email" 
            required/>

        <label>Message:</label>
        <textarea 
            type="text" 
            name="message" 
            required/>

        {status === "SUCCESS" ? <p className="formRes">Thanks!</p> : <button>Submit</button>}
        {status === "ERROR" && <p className="formRes">Ooops! There was an error.</p>}
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}

