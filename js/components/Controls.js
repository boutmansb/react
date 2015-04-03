/*** @jsx React.DOM ***/
var React = require('react');
var Products = require('./Products');
var Controls = React.createClass({
    render: function() {
        return (
            <div>
                <ul className="nav nav-tabs">
                    <li role="presentation" className="active"><a href="products">Products</a></li>
                    <li role="presentation"><a href="#">Clients</a></li>
                    <li role="presentation"><a href="#">History</a></li>
                </ul>
                <div id="my-tab-content" className="tab-content">
                    <div className="tab-pane active" id="products">
                        <Products buttons={this.props.buttons} />
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Controls;