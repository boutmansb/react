/*** @jsx React.DOM ***/
var React = require('react');
var ProductActions = require('../actions/ProductActions');

var Product = React.createClass({
    buildClassNames: function() {
        return 'square row-' +
            this.props.config.row + ' col-' +
            this.props.config.col + ' size-' +
            this.props.config.width + 'x' +
            this.props.config.height;
    },
    handleClick: function(e){
        ProductActions.handleProductClicked(jQuery(e.target).data('productid'));
    },
    render: function() {
        return (
            <div className={this.buildClassNames()}>
                <div className={this.props.config.color}>
                    <div className="buttonContent" data-productid={this.props.config.productId} onClick={this.handleClick}>
                        <p className="title">{this.props.config.label}</p>
                        <p className="price">€ {this.props.config.price}</p>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Product;