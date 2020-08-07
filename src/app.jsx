const html = "assets/img/devicons/html.svg"
const css = "assets/img/devicons/css3.svg"
const enzyme = "assets/img/devicons/enzyme.png"
const jest = "assets/img/devicons/jest.svg"
const js = "assets/img/devicons/js.svg"
const react = "assets/img/devicons/react-native.svg"
const ror = "assets/img/devicons/ror.png"
const rspec = "assets/img/devicons/rpsec.png"
const scss = "assets/img/devicons/sass.svg"
const ruby = "assets/img/devicons/ruby.svg"
const sinon = "assets/img/devicons/sinon.png"
const pg = "assets/img/devicons/postgresql.svg"


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

        return  <div className="project">
                    <div className="project-img">
                        <img src={img} alt="" />
                        <div className="project-links"></div>
                    </div>
                    <h5 className="project-title">{name}</h5>

                    <div className="project-stack"> 
                        {techs}
                    </div>
                </div>
    }

}



class Content extends React.Component {

    constructor(props) {
        super(props);
    }

    
    render() {

        const clear = `
                        .clear {
                            clear: both;
                        }
                    `

        return   <React.Fragment>
                    <section className="parallax-img parallax-img--one"> 
                        <h2>Jan Piotrzkowski</h2>
                    </section>

                    <h1 id="link1" className="section-title">Who am I?</h1>

                    <section className="about">

                        <p className="content-about">I'm a young web developer looking for challenging projects that could broaden my horizons, as well as, sharpen my skillset. Energy drinks and coffee gives me power to do unachievable things. Do you want to work with a motivated young individual? Reach out to me. 📧</p>

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
                            <StackTech tech={ror} name="Rails" />
                            <StackTech tech={scss} name="Scss" />
                            <StackTech tech={rspec} name="Rspec" />
                            <StackTech tech={jest} name="Jest" />
                            <StackTech tech={enzyme} name="Enzyme" />
                            <StackTech tech={sinon} name="Sinon" />
                            <StackTech tech={pg} name="Postgresql" />

                        </div>
                    </section>

                    <div className="clear"><style>{clear}</style></div>

                    <h1 id="link3" className="section-title">What are my projects?</h1>

                    <section className="projects">

                        <div className="content-projects">

                            <Project img="assets/img/projects/tiptopsite.png" name="Tiptopsite.net" techs={[html, css, js, scss]}/>
                            <Project img="assets/img/projects/portfolio.png" name="My Portfolio" techs={[html, scss, js, react]}/>

                        </div>

                        <h3>Visit my <a href="">github</a> for more of my works.</h3>

                    </section>

                    <h1 id="link4"class="section-title">Do you want to contact me? 🙈</h1>

                    <section class="contact">

                        <div class="content-contact">

                            <h3>Reach out to me via email: <strong>piotrzkowski.jan@gmail.com</strong></h3>

                            <h4>Please start its title with "[Portfolio] ..."&emsp; or follow me on
                                &emsp;<a href="">github</a>
                                &emsp;<a href="">linkedin</a>
                            </h4>

                        </div>

                    </section>

                    <footer><span>&copy; Copyright 2020, Jan Piotrzkowski</span> &emsp; <span>Icons by <a target="_blank" href="https://icons8.com">Icons8</a></span> </footer>

                </React.Fragment>

    }
} 
 

ReactDOM.render(
    <Content />,
    document.getElementById('root')
);