import React, { Component } from 'react';

//components
import Footer from './Footer';

//styles
import '../styles/_contact.scss';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }
    render() {
        return (
            <div className="content">
            <div className="contact-container">
                <h3>Contact</h3>
                <div className="contact">
                    <form className="contact-form" method="POST">
                        <div>
                            <label for="name">Name</label>
                            <input type="text" name="name" />
                        </div>

                        <div>
                            <label for="email">Email</label>
                            <input type="email" name="email" />
                        </div>

                        <div>
                            <label for="message">Message</label>
                            <textarea name="message" rows="5"></textarea>
                        </div>

                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
            <Footer/>
            </div>
        );
    };
    onNameChange(event) {
        this.setState({name: event.target.value})
    }
    
    onEmailChange(event) {
        this.setState({email: event.target.value})
    }
    
    onMessageChange(event) {
        this.setState({message: event.target.value})
    }
};

export default Contact;