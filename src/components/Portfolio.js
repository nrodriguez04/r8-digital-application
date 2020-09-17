import React, { Component } from 'react';


//components
import Footer from './Footer';
import Quote from './QuoteCarousel';

//styles
import '../styles/_portfolio.scss';

class Portfolio extends Component {
    render() {
        return (
            <div className="main-content">
                <div className="client-content">
                    <h3>Our Work</h3>
                    <div className="client-1">
                        <img alt="" />
                        <h5>DaMuiLab</h5>
                        <p>here are many variations of passages of Lorem Ipsum available, but the majority have
                        suffered alteration in some form, by injected humour, or randomised words which don't
                        look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need
                        to be sure there isn't anything embarrassing hidden in the middle of text.
                        All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as
                        necessary, making this the first true generator on the Internet. It uses a dictionary of
                        over 200 Latin words, combined with a handful of model sentence structures, to generate
                        Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free
                        from repetition, injected humour, or non-characteristic words etc.</p>
                    </div>

                    <div className="client-2">
                        <img alt="" />
                        <h5>Ohana Mortuary Services</h5>
                        <p>here are many variations of passages of Lorem Ipsum available, but the majority have
                        suffered alteration in some form, by injected humour, or randomised words which don't
                        look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need
                        to be sure there isn't anything embarrassing hidden in the middle of text.
                        All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as
                        necessary, making this the first true generator on the Internet. It uses a dictionary of
                        over 200 Latin words, combined with a handful of model sentence structures, to generate
                        Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free
                        from repetition, injected humour, or non-characteristic words etc.</p>
                    </div>

                    <div className="client-3">
                        <img alt="" />
                        <h5>Latinas Kitchen</h5>
                        <p>here are many variations of passages of Lorem Ipsum available, but the majority have
                        suffered alteration in some form, by injected humour, or randomised words which don't
                        look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need
                        to be sure there isn't anything embarrassing hidden in the middle of text.
                        All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as
                        necessary, making this the first true generator on the Internet. It uses a dictionary of
                        over 200 Latin words, combined with a handful of model sentence structures, to generate
                        Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free
                        from repetition, injected humour, or non-characteristic words etc.</p>
                    </div>


                    <div className="client-4">
                        <img alt="" />
                        <h5>JDMHiro</h5>
                        <p>here are many variations of passages of Lorem Ipsum available, but the majority have
                        suffered alteration in some form, by injected humour, or randomised words which don't
                        look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need
                        to be sure there isn't anything embarrassing hidden in the middle of text.
                        All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as
                        necessary, making this the first true generator on the Internet. It uses a dictionary of
                        over 200 Latin words, combined with a handful of model sentence structures, to generate
                        Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free
                        from repetition, injected humour, or non-characteristic words etc.</p>
                    </div>

                    <div className="testimonials">
                        <div>
                            <h4>Testimonials</h4>
                            <Quote />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    };
};

export default Portfolio;