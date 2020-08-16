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


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StackTech = function (_React$Component) {
    _inherits(StackTech, _React$Component);

    function StackTech(props) {
        _classCallCheck(this, StackTech);

        return _possibleConstructorReturn(this, (StackTech.__proto__ || Object.getPrototypeOf(StackTech)).call(this, props));
    }

    _createClass(StackTech, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'tech' },
                React.createElement('img', { src: this.props.tech, alt: this.props.name }),
                React.createElement(
                    'span',
                    null,
                    this.props.name
                )
            );
        }
    }]);

    return StackTech;
}(React.Component);

var ProjectTech = function (_React$Component2) {
    _inherits(ProjectTech, _React$Component2);

    function ProjectTech(props) {
        _classCallCheck(this, ProjectTech);

        return _possibleConstructorReturn(this, (ProjectTech.__proto__ || Object.getPrototypeOf(ProjectTech)).call(this, props));
    }

    _createClass(ProjectTech, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'project-tech' },
                React.createElement('img', { src: this.props.tech, alt: '' })
            );
        }
    }]);

    return ProjectTech;
}(React.Component);

var Project = function (_React$Component3) {
    _inherits(Project, _React$Component3);

    function Project(props) {
        _classCallCheck(this, Project);

        return _possibleConstructorReturn(this, (Project.__proto__ || Object.getPrototypeOf(Project)).call(this, props));
    }

    _createClass(Project, [{
        key: 'render',
        value: function render() {

            var img = this.props.img;

            var name = this.props.name;

            var techs = this.props.techs.map(function (value, i) {
                return React.createElement(ProjectTech, { tech: value });
            });

            var hrefs = this.props.links;
            var links = void 0;

            if (this.props.links.length === 2) {
                if (hrefs[0] === '#' && hrefs[1] === '#') links = React.createElement('div', null);else if (hrefs[0] === '#') links = React.createElement(
                    'div',
                    { className: 'links links--one' },
                    React.createElement(
                        'a',
                        { target: '_blank', href: hrefs[1] },
                        React.createElement(
                            'span',
                            null,
                            'github'
                        ),
                        ' ',
                        React.createElement('img', { src: github })
                    )
                );else if (hrefs[1] === '#') links = React.createElement(
                    'div',
                    { className: 'links links--one' },
                    React.createElement(
                        'a',
                        { target: '_blank', href: hrefs[0] },
                        React.createElement(
                            'span',
                            null,
                            'demo'
                        ),
                        ' ',
                        React.createElement('img', { src: play })
                    )
                );else links = React.createElement(
                    'div',
                    { className: 'links links--two' },
                    React.createElement(
                        'a',
                        { target: '_blank', href: hrefs[0] },
                        React.createElement(
                            'span',
                            null,
                            'demo'
                        ),
                        ' ',
                        React.createElement('img', { src: play })
                    ),
                    React.createElement(
                        'a',
                        { target: '_blank', href: hrefs[1] },
                        React.createElement(
                            'span',
                            null,
                            'github'
                        ),
                        ' ',
                        React.createElement('img', { src: github })
                    )
                );
            } else if (this.props.links.length === 1) links = React.createElement(
                'div',
                { className: 'links links--one' },
                React.createElement(
                    'a',
                    { target: '_blank', href: hrefs[0] },
                    React.createElement(
                        'span',
                        null,
                        'demo'
                    ),
                    ' ',
                    React.createElement('img', { src: play })
                )
            );

            return React.createElement(
                'div',
                { className: 'project' },
                React.createElement(
                    'div',
                    { className: 'project-img' },
                    React.createElement('img', { src: img, alt: '' }),
                    React.createElement(
                        'div',
                        { className: 'project-links' },
                        links
                    )
                ),
                React.createElement(
                    'h5',
                    { className: 'project-title' },
                    name
                ),
                React.createElement(
                    'div',
                    { className: 'project-stack' },
                    techs
                )
            );
        }
    }]);

    return Project;
}(React.Component);

var App = function (_React$Component4) {
    _inherits(App, _React$Component4);

    function App(props) {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {

            var clear = '\n                        .clear {\n                            clear: both;\n                        }\n                    ';

            var parallax = {
                backgroundImage: 'url(' + background_img + ')'
            };

            return React.createElement(
                React.Fragment,
                null,
                React.createElement(
                    'section',
                    { style: parallax, className: 'parallax-img parallax-img--one' },
                    React.createElement(
                        'h2',
                        null,
                        'Jan Piotrzkowski'
                    )
                ),
                React.createElement(
                    'h1',
                    { id: 'link1', className: 'section-title' },
                    'Who am I?'
                ),
                React.createElement(
                    'section',
                    { className: 'about' },
                    React.createElement(
                        'p',
                        { className: 'content-about' },
                        'I\'m a web developer looking for challenging projects that could broaden my horizons, as well as, sharpen my skillset. Energy drinks and coffee gives me power to do unachievable things. Do you want to work with a motivated young individual? Reach out to me. \uD83D\uDCE7'
                    )
                ),
                React.createElement(
                    'h1',
                    { id: 'link2', className: 'section-title' },
                    'What is my tech stack?'
                ),
                React.createElement(
                    'section',
                    { className: 'techs' },
                    React.createElement(
                        'p',
                        null,
                        'This is the technological stack I want to work in and keep improving.'
                    ),
                    React.createElement(
                        'div',
                        { className: 'content-techs' },
                        React.createElement(StackTech, { tech: html, name: 'Html' }),
                        React.createElement(StackTech, { tech: css, name: 'Css3' }),
                        React.createElement(StackTech, { tech: js, name: 'Javascript' }),
                        React.createElement(StackTech, { tech: ruby, name: 'Ruby' }),
                        React.createElement(StackTech, { tech: react, name: 'React' }),
                        React.createElement(StackTech, { tech: redux, name: 'Redux' }),
                        React.createElement(StackTech, { tech: ror, name: 'Rails' }),
                        React.createElement(StackTech, { tech: scss, name: 'Scss' }),
                        React.createElement(StackTech, { tech: rspec, name: 'Rspec' }),
                        React.createElement(StackTech, { tech: jest, name: 'Jest' }),
                        React.createElement(StackTech, { tech: enzyme, name: 'Enzyme' }),
                        React.createElement(StackTech, { tech: pg, name: 'Postgresql' })
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'clear' },
                    React.createElement(
                        'style',
                        null,
                        clear
                    )
                ),
                React.createElement(
                    'h1',
                    { id: 'link3', className: 'section-title' },
                    'What are my projects?'
                ),
                React.createElement(
                    'section',
                    { className: 'projects' },
                    React.createElement(
                        'div',
                        { className: 'content-projects' },
                        React.createElement(Project, { links: ["https://tiptopsite.net/", "#"], img: p_tiptop, name: 'Tiptopsite.net', techs: [html, css, js, scss] }),
                        React.createElement(Project, { links: ["https://babilonczyk.github.io/react-portfolio/", "https://github.com/babilonczyk/react-portfolio"], img: p_portfolio, name: 'My Portfolio', techs: [html, scss, js, react] }),
                        React.createElement(Project, { links: ["#", "https://github.com/babilonczyk/ruby-blackjack"], img: p_blackjack, name: 'Ruby Blackjack', techs: [ruby, rspec] }),
                        React.createElement(Project, { links: ["#", "https://github.com/babilonczyk/react-flashcards"], img: p_planned, name: 'React Flashcards', techs: [react, redux, jest, enzyme] })
                    ),
                    React.createElement(
                        'h3',
                        null,
                        'Visit my ',
                        React.createElement(
                            'a',
                            { target: '_blank', href: 'https://github.com/babilonczyk' },
                            'github'
                        ),
                        ' for more of my works.'
                    )
                ),
                React.createElement(
                    'h1',
                    { id: 'link4', 'class': 'section-title' },
                    'Do you want to contact me? \uD83D\uDE48'
                ),
                React.createElement(
                    'section',
                    { 'class': 'contact' },
                    React.createElement(
                        'div',
                        { 'class': 'content-contact' },
                        React.createElement(
                            'h3',
                            null,
                            'Reach out to me via email: ',
                            React.createElement(
                                'strong',
                                null,
                                'piotrzkowski.jan@gmail.com'
                            )
                        ),
                        React.createElement(
                            'h4',
                            null,
                            'Please start its title with "[Portfolio] ..."\u2003 or follow me on \u2003',
                            React.createElement(
                                'a',
                                { target: '_blank', href: 'https://github.com/babilonczyk' },
                                'github'
                            ),
                            '\u2003',
                            React.createElement(
                                'a',
                                { target: '_blank', href: 'https://pl.linkedin.com/public-profile/in/jan-piotrzkowski-3a8789158' },
                                'linkedin'
                            )
                        )
                    )
                ),
                React.createElement(
                    'footer',
                    null,
                    React.createElement(
                        'span',
                        null,
                        '\xA9 Copyright 2020, Jan Piotrzkowski'
                    ),
                    ' \u2003 ',
                    React.createElement(
                        'span',
                        null,
                        'Icons by ',
                        React.createElement(
                            'a',
                            { target: '_blank', href: 'https://icons8.com' },
                            'Icons8'
                        )
                    ),
                    ' '
                )
            );
        }
    }]);

    return App;
}(React.Component);

export default App;