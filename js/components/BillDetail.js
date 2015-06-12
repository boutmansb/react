/*** @jsx React.DOM ***/
var React = require('react');
var BillDetail = React.createClass({
    render: function() {
        var rows = this.props.bill.map(function(billItem){
            return <tr key={billItem.productId}>
            <td>{billItem.label}</td>
            <td>{billItem.price}</td>
            <td>{billItem.amount}</td>
            <td className="price">{billItem.amount * billItem.price}</td>
            </tr>
        });
        return (
            <table className="lines">
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
});

module.exports = BillDetail;