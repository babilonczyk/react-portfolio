import React from 'react';
import './static/css/main.css';

import html from "./static/img/devicons/html.svg";
import css from "./static/img/devicons/css3.svg";   
import enzyme from "./static/img/devicons/enzyme.png";
import jest from "./static/img/devicons/jest.svg";
import js from "./static/img/devicons/js.svg";
import react from "./static/img/devicons/react-native.svg";
import ror from "./static/img/devicons/ror.png";
import rspec from "./static/img/devicons/rpsec.png";
import scss from "./static/img/devicons/sass.svg";
import ruby from "./static/img/devicons/ruby.svg"; 
import sinon from "./static/img/devicons/sinon.png"; 
import pg from "./static/img/devicons/postgresql.svg";
import redux from "./static/img/devicons/redux.svg";
import github from "./static/img/devicons/github.svg";
import play from "./static/img/play.png";

import p_tiptop from "./static/img/projects/tiptopsite.png";
import p_portfolio from "./static/img/projects/portfolio.png";
import p_blackjack from "./static/img/projects/blackjack.png";
import p_planned from "./static/img/projects/planned.png";
 
import background_img from "./static/img/img1.jpg";
 


class StackTech extends React.Component { 
    
    constructor(props) {
        super(props);
    }

    render() {
       return    <div className="tech">
                    <img src={this.props.tech} alt={this.props.name} />
                    <span>{this.props.name}</span>
                </div>
    }

}

class ProjectTech extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return  <div className="project-tech">
                    <img src={this.props.tech} alt="" />
                </div>
    }

}


class Project extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
    
        let img = this.props.img;

        let name = this.props.name;

        let techs = this.props.techs.map(function(value, i){
            return (
                <ProjectTech tech={value}/>
            );
        });

        let hrefs = this.props.links;
        let links;

        if(this.props.links.length === 2)
            if(hrefs[0] === '#' && hrefs[1] === '#')
                links = <div></div> 
            else if(hrefs[0] === '#' )
                links = <div className="links links--one"> 
                            <a target="_blank"  href={hrefs[1]}><span>github</span> <img src={github}/></a>
                        </div>  
            else if(hrefs[1] === '#')
                links = <div className="links links--one"> 
                            <a target="_blank"  href={hrefs[0]}><span>demo</span> <img src={play}/></a>
                        </div>  
            else
                links = <div className="links links--two"> 
                            <a target="_blank"  href={hrefs[0]}><span>demo</span> <img src={play}/></a>
                            <a target="_blank"  href={hrefs[1]}><span>github</span> <img src={github}/></a>
                        </div>
        else if (this.props.links.length === 1)
            links = <div className="links links--one"> 
                        <a target="_blank"  href={hrefs[0]}><span>demo</span> <img src={play}/></a>
                    </div>
         
         
        return  <div className="project"> 
                    <div className="project-img">
                        <img src={img} alt="" />
                        <div className="project-links">{links}</div>
                    </div>
                    <h5 className="project-title">{name}</h5>

                    <div className="project-stack"> 
                        {techs}
                    </div>
                </div> 
    }

}



class App extends React.Component {

    constructor(props) {
        super(props);
    }

    
    render() {
 
        const clear = `
                        .clear {
                            clear: both;
                        }
                    `
      
        var parallax = {
            backgroundImage: `url(${background_img})`
        };
 
        return   <React.Fragment>
                    <section style={parallax} className="parallax-img parallax-img--one"> 
                        <h2>Jan Piotrzkowski</h2>
                    </section>

                    <h1 id="link1" className="section-title">Who am I?</h1>

                    <section className="about">

                        <p className="content-about">I'm a web developer looking for challenging projects that could broaden my horizons, as well as, sharpen my skillset. Energy drinks and coffee gives me power to do unachievable things. Do you want to work with a motivated young individual? Reach out to me. 📧</p>

                    </section>

                    <h1  id="link2" className="section-title">What is my tech stack?</h1>
                    
                    <section className="techs">

                        <p>This is the technological stack I want to work in and keep improving.</p>

                        <div className="content-techs">

                            <StackTech tech={html} name="Html" />
                            <StackTech tech={css} name="Css3" />
                            <StackTech tech={js} name="Javascript" />
                            <StackTech tech={ruby} name="Ruby" />
                            <StackTech tech={react} name="React" />
                            <StackTech tech={redux} name="Redux" />
                            <StackTech tech={ror} name="Rails" />
                            <StackTech tech={scss} name="Scss" />  
                            <StackTech tech={rspec} name="Rspec" />
                            <StackTech tech={jest} name="Jest" />
                            <StackTech tech={enzyme} name="Enzyme" /> 
                            <StackTech tech={pg} name="Postgresql" />

                        </div>
                    </section>

                    <div className="clear"><style>{clear}</style></div>

                    <h1 id="link3" className="section-title">What are my projects?</h1>

                    <section className="projects">

                        <div className="content-projects">
 
                            <Project links={["https://tiptopsite.net/", "#"]} img={p_tiptop} name="Tiptopsite.net" techs={[html, css, js, scss]}/>
                            <Project links={["https://babilonczyk.github.io/react-portfolio/", "https://github.com/babilonczyk/react-portfolio"]} img={p_portfolio} name="My Portfolio" techs={[html, scss, js, react]}/>
                            <Project links={["#", "https://github.com/babilonczyk/ruby-blackjack"]} img={p_blackjack} name="Ruby Blackjack" techs={[ ruby, rspec]}/>
                            <Project links={["#", "https://github.com/babilonczyk/react-flashcards"]} img={p_planned} name="React Flashcards" techs={[react, redux, jest, enzyme]}/> 
                            <Project links={["https://justjoin.space/", "#"]} img={p_planned} name="justjoin.space" techs={[ruby, ror]}/> 

                        </div>
 
                        <h3>Visit my <a target="_blank" href="https://github.com/babilonczyk">github</a> for more of my works.</h3>

                    </section>

                    <h1 id="link4"class="section-title">Do you want to contact me? 🙈</h1>

                    <section class="contact"> 

                        <div class="content-contact">

                            <h3>Reach out to me via email: <strong>piotrzkowski.jan@gmail.com</strong></h3>

                            <h4>Please start its title with "[Portfolio] ..."&emsp; or follow me on
                                &emsp;<a target="_blank" href="https://github.com/babilonczyk">github</a>
                                &emsp;<a target="_blank" href="https://pl.linkedin.com/public-profile/in/jan-piotrzkowski-3a8789158">linkedin</a>
                            </h4>

                        </div>

                    </section>

                    <footer><span>&copy; Copyright 2020, Jan Piotrzkowski</span> &emsp; <span>Icons by <a target="_blank" href="https://icons8.com">Icons8</a></span> </footer>

                </React.Fragment>

    }
} 
 
export default App;