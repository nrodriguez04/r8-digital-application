import React, { Component } from 'react';
// import { Grid, Cell } from 'react-mdl';

//components
import Footer from './Footer';
import Jumbo from './Jumbotron';

//styles
import '../styles/_landing.scss';

//images
import '../images/abstract.gif';

import company from '../images/company.jpg';
import coding from '../images/undraw_code_inspection_bdl7.svg';
import homescreen from '../images/undraw_home_screen_4n7s.svg';
import ecommerce from '../images/undraw_online_learning_ao11.svg';
import business from '../images/undraw_business_decisions_gjwy.svg';
import data from '../images/undraw_app_data_516s.svg';
import auto from '../images/undraw_progress_data_4ebj.svg';
import search from '../images/undraw_web_search_eetr.svg';
import creative from '../images/undraw_work_in_progress_uhmv.svg';

import mui from '../images/dml.jpg';



class Landing extends Component {
  render() {
    return(
      <div>
        <Jumbo />
        <section className="header-bar">
          <div>
            <ul>
              <li>Web Design &#38; Development</li>
              <li>Mobile Development</li>
              <li>Ecommerce</li>
              <li>Search Engine Optimization</li>
              <li>Business Consulting</li>
            </ul>
          </div>
        </section>

        <div className="main-content">
        <section className="mission-statement">
          <div> 
            <img src={company} alt={"company"}className="stock"/>
            <div className="statement">
              <span>Our Mission</span>
              <h5>Advancing companies in the digital age</h5>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
                  sunt explicabo.
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                  magni dolores eos qui ratione voluptatem sequi nesciunt.
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
                  quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                  Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
                  ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
                  molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                </p>
            </div>
          </div>
        </section>

        <section className="capabilities">
          <div> 
            <span>What We Do</span>
              <div>
                <ul>
                  <li><img src={coding} alt={"coding"} /><a href="/">Web Design & Development</a></li>
                  <li><img src={homescreen} alt={"homescreen"} /><a href="/">Mobile Application Development</a></li>
                  <li><img src={ecommerce} alt={"ecommerce"} /><a href="/">Ecommerce Development & Management</a></li>
                  <li><img src={auto} alt={"auto"} /><a href="/">Marketing Automation</a></li>
                  <li><img src={business} alt={"business"} /><a href="/">Consulting & Strategy</a></li>
                  <li><img src={search} alt={"search"} /><a href="/">Search Engine Optimization</a></li>
                  <li><img src={creative} alt={"creative"} /><a href="/">Creative Services</a></li>
                  <li><img src={data} alt={"data"} /><a href="/">Tracking & Analtics</a></li>
                </ul>
              </div>
          </div>
        </section>

        <section className="about-short">
          <div> 
            <img src="" alt="" />
            <h2>About</h2>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
              totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta 
              sunt explicabo. 
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur 
              magni dolores eos qui ratione voluptatem sequi nesciunt. 
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed 
              quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid 
              ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil 
              molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
          </div>
        </section>

        <section className="portfolio">
          <div> 
            <h2 className="work">Our Work</h2>
            <div className="client-1">
              <img src={mui} alt={"damuilab"} />
              <div className="client-1-info">
                <h4>DaMui Lab</h4>
                <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta 
                  sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
                  consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui 
                  dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora 
                  incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum 
                  exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem 
                  vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui 
                  dolorem eum fugiat quo voluptas nulla pariatur?"</p>
              </div>
            </div>
            <div className="client-2">
              <h4>Ohana Mortuary Services</h4>
              <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta 
                sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
                consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui 
                dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora 
                incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum 
                exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem 
                vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui 
                dolorem eum fugiat quo voluptas nulla pariatur?"</p>
            </div>
            <div className="client-3">
              <h4>Latinas Kitchen</h4>
              <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta 
                sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
                consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui 
                dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora 
                incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum 
                exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem 
                vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui 
                dolorem eum fugiat quo voluptas nulla pariatur?"</p>
            </div>
          </div>
        </section>

        <section className="grow-container">
          <div style={{width: '100%', margin: 'auto'}}>
              <div className="grow-title">
                <h4>Ready to grow your business?</h4>
              </div>

              <div className="signup">
                <button className="consult">Free Consultation</button> 
                <p>or</p>
                <button className="call">Call (972) 469 5269</button>
              </div>
          </div>
        </section>
        </div>
          <Footer/>
      </div>
    );
  }
}

export default Landing;
