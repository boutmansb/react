/*** @jsx React.DOM ***/
var React = require('react');
var Products = require('./Products');
var Controls = React.createClass({
    render: function() {
        return (
            <section className="terminal">
                <div className="button tab active"><i className="fa fa-ticket"></i><p>Tickets</p></div>
                <div className="button tab last"><i className="fa fa-life-ring"></i><p>Stuff</p></div>

                <Products buttons={this.props.buttons} />
            </section>
        );
    }
});

module.exports = Controls;