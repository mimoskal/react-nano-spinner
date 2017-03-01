import React from 'react';

export default class NanoSpinner extends React.Component {
    constructor(props) {
        super(props);

        let colors = this.props.colors;
        let width = this.props.width;
        let size = this.props.size;

        this.CONST_STYLES = {
            boxSizing:      'border-box',
            margin:         '1em auto',
            width:          `${ this.emify(size) }`,
            height:         `${ this.emify(size) }`,
            borderRadius:   '50%',
            borderTop:      `${ this.emify(width) } solid ${ colors[1] }`,
            borderLeft:     `${ this.emify(width) } solid ${ colors[1] }`,
            borderRight:    `${ this.emify(width) } solid ${ colors[1] }`,
            borderBottom:   `${ this.emify(width) } solid ${ colors[0] }`,
            animation:      'nano-spinner-rotate 0.8s infinite linear'
        };
        
        console.log(this.props);

        this.defaultStyles = {

        };
    }

    componentDidMount () {
        this.initStyles();
    }

    emify (value) {
        if (typeof value === 'string') {
            return value;
        }

        return value + 'em';
    }

    initStyles () {
        let styleSheet = document.styleSheets[0];

        let keyframes = `@-webkit-keyframes nano-spinner-rotate { 0% {-webkit-transform: rotate(0deg)} 100% {-webkit-transform: rotate(360deg)} }`;
        let display_spinner = `.nano-spinner { display: none; }`;
        let only_child = `.nano-spinner:only-child { display: block; }`;

        styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
        styleSheet.insertRule(display_spinner, styleSheet.cssRules.length);
        styleSheet.insertRule(only_child, styleSheet.cssRules.length);
    }

    renderSpinner () {

        
        return (
            <div className="nano-spinner-wrapper">
                <span style={ this.CONST_STYLES } className="nano-spinner" />

                { this.props.children }
            </div>
        );
    }

    render () {
        return this.renderSpinner();
    }
}

NanoSpinner.defaultProps = {
    useDefaultStyles:   true,
    colors:             ['rgba(0, 0, 0, 0.7', 'rgba(0, 0, 0, 0.2)'],
    width:              0.25,
    size:               2
};

NanoSpinner.propTypes = {
    useDefaultStyles:   React.PropTypes.bool.isRequired,
    colors:             React.PropTypes.arrayOf(React.PropTypes.string),
    size:               React.PropTypes.oneOfType([
                            React.PropTypes.string,
                            React.PropTypes.number
                        ]),
    width:              React.PropTypes.oneOfType([
                            React.PropTypes.string,
                            React.PropTypes.number
                        ]),
    animationDuration:  React.PropTypes.number
};