/*** @jsx React.DOM ***/
var React = require('react');
var BillDetail = require('./BillDetail');

var Bill = React.createClass({
    render: function() {
        var total = this.props.bill.reduce(function(accumulator, currentBillItem){
            return accumulator + currentBillItem.price * currentBillItem.amount;
        }, 0);
        return (
            <div>
                <BillDetail bill={this.props.bill} />
                totaal: {total}
            </div>
        );
    }
});

module.exports = Bill;