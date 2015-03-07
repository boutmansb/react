/*** @jsx React.DOM ***/
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