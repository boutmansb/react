/*** @jsx React.DOM ***/
var React = require('react');
var Product = require('./Product');
var Products = React.createClass({

    render: function() {
        var productClickHandler = this.props.onProductClick;

        var products = this.props.buttons.map(function(button){
            return <Product key={button.productId} config={button} onProductClick={productClickHandler} />
        });
        return (
            <div className="productList">{products}</div>
        );
    }
});

module.exports = Products;