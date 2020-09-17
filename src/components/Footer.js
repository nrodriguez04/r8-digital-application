import React, { Component } from 'react';

//components


//styles
import '../styles/_footer.scss';

class Footer extends Component {
    render() {
        return (
            <div className="main-footer">
                <div className="container">
                    <div className="row">
                        {/* Column 1 */}
                        <div className="col">
                            <h4 className="company">R8 DIGITAL</h4>
                            <ul className="address">
                                <li>1910 Pacific Ave.</li>
                                <li>Dallas, Texas, USA</li>
                                <li><a href="tel:+19724695269">1 (972)-469-5269</a></li>
                                <li><a href="mailto:management@r8digital.com">management@r8digital.com</a></li>
                            </ul>
                        </div>
                        {/* Column 2 */}
                        <div className="col">
                            <h4>Helping businesses advance</h4>
                            <h5>All around the world</h5>
                            <div className="row">
                                <p> 
                                    R8 Digital is a Dallas, Texas based digital marketing, 
                                    advertising and business development agency established in 2019.
                                </p>
                            </div>
                        </div>
                        {/* Column 3 */}
                        <div className="col">
                            <p>Join our newsletter</p>
                            <input type="email" id="email" pattern=".+@gmail.com" required></input>
                            <button className="submit">Submit</button>
                            <ul className="socials">
                                <li>Twitter</li>
                                <li>Instagram</li>
                                <li>LinkedIn</li>
                                <li>Email</li>
                            </ul>
                        </div>
                        </div>
                        <hr />
                        <div className="row">
                            <p className="col-sm">
                                &copy;{new Date().getFullYear()} R8 Digital | All rights reserved | Terms of service | Privacy
                        </p>
                        </div>
                </div>
            </div>
        );
    }
};

export default Footer;