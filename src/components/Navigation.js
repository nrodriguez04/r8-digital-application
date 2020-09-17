import React, { Component } from 'react';
import { Header, Navigation} from 'react-mdl';
import { Link } from 'react-router-dom';

//styles
import '../styles/_navigation.scss';

export default class Nav extends Component {
    render() {
        return (
            <Header className="header-color" title={<Link style={{ textDecoration: 'none', color: 'black' }} to="/"></Link>} scroll>
                <span className="logo" ><a href="/">R8Digital</a></span>
                <Navigation>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/portfolio">Portfolio</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/contact">Contact</Link>
                </Navigation>
            </Header>
        );
    }
};