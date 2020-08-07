var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var html = "assets/img/devicons/html.svg";
var css = "assets/img/devicons/css3.svg";
var enzyme = "assets/img/devicons/enzyme.png";
var jest = "assets/img/devicons/jest.svg";
var js = "assets/img/devicons/js.svg";
var react = "assets/img/devicons/react-native.svg";
var ror = "assets/img/devicons/ror.png";
var rspec = "assets/img/devicons/rspec.png";
var scss = "assets/img/devicons/sass.svg";
var ruby = "assets/img/devicons/ruby.svg";
var sinon = "assets/img/devicons/sinon.png";

var StackTech = function (_React$Component) {
    _inherits(StackTech, _React$Component);

    function StackTech(props) {
        _classCallCheck(this, StackTech);

        return _possibleConstructorReturn(this, (StackTech.__proto__ || Object.getPrototypeOf(StackTech)).call(this, props));
    }

    _createClass(StackTech, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "tech" },
                React.createElement("img", { src: this.props.tech, alt: this.props.name }),
                React.createElement(
                    "span",
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
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "project-tech" },
                React.createElement("img", { src: this.props.tech, alt: "" })
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
        key: "render",
        value: function render() {

            var img = this.props.img;

            var name = this.props.name;

            var techs = this.props.techs.map(function (value, i) {
                return React.createElement(ProjectTech, { tech: value });
            });

            return React.createElement(
                "div",
                { className: "project" },
                React.createElement(
                    "div",
                    { className: "project-img" },
                    React.createElement("img", { src: img, alt: "" }),
                    React.createElement("div", { className: "project-links" })
                ),
                React.createElement(
                    "h5",
                    { className: "project-title" },
                    name
                ),
                React.createElement(
                    "div",
                    { className: "project-stack" },
                    techs
                )
            );
        }
    }]);

    return Project;
}(React.Component);

var Content = function (_React$Component4) {
    _inherits(Content, _React$Component4);

    function Content(props) {
        _classCallCheck(this, Content);

        return _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).call(this, props));
    }

    _createClass(Content, [{
        key: "render",
        value: function render() {

            var clear = "\n                        .clear {\n                            clear: both;\n                        }\n                    ";

            return React.createElement(
                React.Fragment,
                null,
                React.createElement(
                    "section",
                    { className: "parallax-img parallax-img--one" },
                    React.createElement(
                        "h2",
                        null,
                        "Jan Piotrzkowski"
                    )
                ),
                React.createElement(
                    "h1",
                    { id: "link1", className: "section-title" },
                    "Who am I?"
                ),
                React.createElement(
                    "section",
                    { className: "about" },
                    React.createElement(
                        "p",
                        { className: "content-about" },
                        "I'm a young web developer looking for challenging projects that could broaden my horizons, as well as, sharpen my skillset. Energy drinks and coffee gives me power to do unachievable things. Do you want to work with a motivated young individual? Reach out to me. \uD83D\uDCE7"
                    )
                ),
                React.createElement(
                    "h1",
                    { id: "link2", className: "section-title" },
                    "What is my tech stack?"
                ),
                React.createElement(
                    "section",
                    { className: "techs" },
                    React.createElement("div", { className: "content-techs" })
                ),
                React.createElement(
                    "div",
                    { className: "clear" },
                    React.createElement(
                        "style",
                        null,
                        clear
                    )
                ),
                React.createElement(
                    "h1",
                    { id: "link3", className: "section-title" },
                    "What are my projects?"
                ),
                React.createElement(
                    "section",
                    { className: "projects" },
                    React.createElement(
                        "div",
                        { className: "content-projects" },
                        React.createElement(Project, { img: "assets/img/projects/tiptopsite.png", name: "Tiptopsite.net", techs: [html, css, js, scss] })
                    ),
                    React.createElement(
                        "h3",
                        null,
                        "Visit my ",
                        React.createElement(
                            "a",
                            { href: "" },
                            "github"
                        ),
                        " for more of my works."
                    )
                ),
                React.createElement(
                    "h1",
                    { id: "link4", "class": "section-title" },
                    "Do you want to contact me? \uD83D\uDE48"
                ),
                React.createElement(
                    "section",
                    { "class": "contact" },
                    React.createElement(
                        "div",
                        { "class": "content-contact" },
                        React.createElement(
                            "h3",
                            null,
                            "Reach out to me via email: ",
                            React.createElement(
                                "strong",
                                null,
                                "piotrzkowski.jan@gmail.com"
                            )
                        ),
                        React.createElement(
                            "h4",
                            null,
                            "Please start its title with \"[Portfolio] ...\"\u2003 or follow me on \u2003",
                            React.createElement(
                                "a",
                                { href: "" },
                                "github"
                            ),
                            "\u2003",
                            React.createElement(
                                "a",
                                { href: "" },
                                "linkedin"
                            )
                        )
                    )
                ),
                React.createElement(
                    "footer",
                    null,
                    React.createElement(
                        "span",
                        null,
                        "\xA9 Copyright 2020, Jan Piotrzkowski"
                    ),
                    " \u2003 ",
                    React.createElement(
                        "span",
                        null,
                        "Icons by ",
                        React.createElement(
                            "a",
                            { target: "_blank", href: "https://icons8.com" },
                            "Icons8"
                        )
                    ),
                    " "
                )
            );
        }
    }]);

    return Content;
}(React.Component);

ReactDOM.render(React.createElement(Content, null), document.getElementById('root'));