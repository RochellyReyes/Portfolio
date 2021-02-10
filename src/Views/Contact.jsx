import React, {Component} from "react";

//add email api to pull up email to send email. 
class Contact extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:'',
            email:'',
            comment:''
        }
    }

    changeHandler = (event) => {
        let inputName = event.target.name;
        let inputEmail = event.target.email;
        let inputComment = event.target.comment;
        this.setState({inputName, inputEmail, inputComment})
        
    }

    submitHandler = (event) => {
        event.preventDefault();
        alert(`You have submitted this form. Thank you`)
    };

    render() {
        return(
            <div className="Background">
                <form onSubmit={this.submitHandler} className="Form">
                    <h1>Contact Us</h1>
                    <h2>Let us know of any questions, concerns, or comments you may have.</h2>

                    <label htmlFor="name">Name</label>
                    <input 
                        id="name"
                        type="text"
                        name="name"
                        onChange={this.changeHandler}
                        required
                    />
                    <label htmlFor="email">Email Address</label>
                    <input 
                        id="email"
                        type="text"
                        name="email"
                        onChange={this.changeHandler}
                        required
                    />

                    <label htmlFor="content">Comments</label>
                    <textarea 
                        id="content"
                        value={this.state.inputComment}   
                        type="text"
                        name="content"
                        placeholder="Add your questions, concerns or comments here."
                        required
                    />
                    <input type='submit' className="SubmitButton"/>
                </form>                
            </div>
        )
    }
};

export default Contact;
