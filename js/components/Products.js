/*** @jsx React.DOM ***/
var React = require('react');
var Product = require('./Product');
var Products = React.createClass({

    render: function() {
        var products = this.props.buttons.map(function(button){
            if(this.props.activeTab == button.tab) return <Product key={button.productId} config={button} />
        }, this);
        return (
            <div className="main">{products}</div>
        );
    }
});

module.exports = Products;