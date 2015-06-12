/*** @jsx React.DOM ***/
var React = require('react');
var BillDetail = require('./BillDetail');

var Bill = React.createClass({
    render: function() {
        var total = this.props.bill.reduce(function(accumulator, currentBillItem){
            return accumulator + currentBillItem.price * currentBillItem.amount;
        }, 0);
        return (
            <section className="bill">
                <div className="button power"><i className="fa fa-power-off"></i></div>
                <div className="button history last"><i className="fa fa-history"></i> <p>History</p></div>

                <div className="list">
                    <div className="billTop">
                        <h1>ticket #999999</h1>
                        <span className="customer">Benjamin Boutmans</span>
                        <div className="addCustomer"><i className="fa fa-plus"></i></div>
                    </div>

                    <div className="ticketLines">
                        <BillDetail bill={this.props.bill} />
                    </div>

                    <div className="endTotal">
                        <h2>TOTAAL <span>{total}</span></h2>
                    </div>
                </div>

                <div className="button clear"><p>Clear</p></div>
                <div className="button checkout last"><i className="fa fa-eur"></i><p>Afrekenen</p></div>
            </section>
        );
    }
});

module.exports = Bill;