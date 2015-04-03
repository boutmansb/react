/*** @jsx React.DOM ***/
var React = require('react');
var Product = React.createClass({
    buildClassNames: function() {
        return 'square row-' +
            this.props.config.row + ' col-' +
            this.props.config.col + ' size-' +
            this.props.config.width + 'x' +
            this.props.config.height;
    },
    handleClick: function(){
        this.props.onProductClick(this.props.config);
    },
    render: function() {
        var style = {
            backgroundColor: this.props.config.color
        };
        return (
            <div className={this.buildClassNames()}>
                <div style={style}>
                    <div className="buttonContent" onClick={this.handleClick}>
                        {this.props.config.label}<br />
                        € {this.props.config.price}
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Product;