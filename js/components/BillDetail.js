/*** @jsx React.DOM ***/
var React = require('react');
var BillDetail = React.createClass({
    render: function() {
        var rows = this.props.bill.map(function(billItem){
            return <tr key={billItem.productId}>
            <td>{billItem.amount}</td>
            <td>{billItem.label}</td>
            <td>{billItem.price}</td>
            <td>{billItem.amount * billItem.price}</td>
            </tr>
        });
        return (
            <table className="table">
                <thead><tr><th>Amount</th><th>Label</th><th>price</th><th>Subtotal</th></tr></thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
});

module.exports = BillDetail;