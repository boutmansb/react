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
        var style = {
            backgroundColor: this.props.config.color
        };
        return (
            <div className={this.buildClassNames()}>
                <div className={style}>
                    <div className="buttonContent" data-productid={this.props.config.productId} onClick={this.handleClick}>
                        {this.props.config.label}<br />
                        € {this.props.config.price}
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Product;