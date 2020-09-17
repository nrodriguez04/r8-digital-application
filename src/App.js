import React, { Component } from 'react';
import './App.css';
import { Layout, Content } from 'react-mdl';
import Main from './routes/Routes';


//components
import Nav from './components/Navigation';

//styles
import './styles/_app.scss';


class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Nav />
    <Layout>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>

    );
  }
}

export default App;