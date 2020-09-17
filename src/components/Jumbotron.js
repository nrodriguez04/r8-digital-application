import React, { Component } from 'react';

//styles
import '../styles/_jumbotron.scss';

class Jumbo extends Component {
    render() {
        return (
            <div className="jumbotron">
                    <div className="intro">
                        <h2>Advance Your Business</h2>
                            <h5>Digital Advancement Made Easy</h5>
                        <a href="mailto: management@r8digital.com"><button>Contact</button></a>
                        <a href="/portfolio"><button>Portfolio</button></a>
                    </div>
            </div>
        );
    }
};

export default Jumbo;