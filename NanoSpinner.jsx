import React from 'react';

export default class NanoSpinner extends React.Component {
    componentDidMount () {
        this.initStyles();
    }

    initStyles () {
        let styleSheet = document.styleSheets[0];

        let animationName = `nano-spinner-rotate`;

        let keyframes =
            `@-webkit-keyframes ${animationName} {
                0% {-webkit-transform: rotate(0deg)} 
                100% {-webkit-transform: rotate(360deg)}
            }`;

        let display_spinner =
            `.nano-spinner {
                display: none;
            }`;

        let only_child =
            `.nano-spinner:only-child {
                display: block;
            }`;

        styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
        styleSheet.insertRule(display_spinner, styleSheet.cssRules.length);
        styleSheet.insertRule(only_child, styleSheet.cssRules.length);
    }

    renderSpinner () {
        let style = {
            animationName: 'nano-spinner-rotate',
            animationTimingFunction: 'linear',
            animationDuration: '0.6s',
            animationDelay: '0.0s',
            animationIterationCount: 55,
            animationDirection: 'normal',
            animationFillMode: 'forwards'
        };
        
        return (
            <div className="nano-spinner-wrapper">
                <div style={ style } className="nano-spinner">
                    spinner...
                </div>

                { this.props.children }
            </div>
        );
    }

    render () {
        return this.renderSpinner();
    }
}