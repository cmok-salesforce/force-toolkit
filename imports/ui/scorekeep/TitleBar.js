import React from 'react';
import PropTypes from 'prop-types'; // ES6
//var PropTypes = require('prop-types'); // ES5 with npm

export default class TitleBar extends React.Component {
    renderSubtitle() {
        if ( this.props.subtitle ) {
            return <h2 className="title-bar__subtitle"> {this.props.subtitle} </h2>
        } //explicitly returned 'undefined' or 'null', hence not rendered
    }
    render() {
        return (
            <div className="title-bar">
                <div className="wrapper">                
                    <h1> {this.props.title} </h1>
                    {this.renderSubtitle()}
                </div>

            </div>
        );
    }
}

TitleBar.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string
}

TitleBar.defaultProps = {
    title: 'Default TitleBar properties',
    subtitle: 'Default SubTitleBar properties'
}