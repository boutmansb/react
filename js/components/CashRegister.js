/*** @jsx React.DOM ***/
var React = require('react');
var Bill = require('./Bill');
var Controls = require('./Controls');

var CashRegister = React.createClass({
    getInitialState: function(){
        return {
            bill: [
                {
                    productId: 17,
                    label: 'schel kaas',
                    price: 5,
                    amount: 2
                },
                {
                    productId: 28,
                    label: 'schoen',
                    price: 15,
                    amount: 1
                }
            ]
        }
    },
    addProduct: function(product){
        var updatedBill = this.state.bill;
        var billItem = updatedBill.reduce(function(accumulator, currentItem){
            if(accumulator !== null) return accumulator;
            if(currentItem.productId == product.productId) {  return currentItem; }
            return null;
        }, null);

        if(billItem)
        {
            billItem.amount++;
        }
        else
        {
            billItem = {
                productId: product.productId,
                label: product.label,
                price: product.price,
                amount: 1
            };
            updatedBill.push(billItem);
        }
        this.setState(updatedBill);
    },
    render: function() {
        return (
            <div className="row">
                <div className="col-md-6"><Bill bill={this.state.bill} /></div>
                <div className="col-md-6"><Controls buttons={this.props.buttons} onProductClick={this.addProduct} /></div>
            </div>
        );
    }
});

module.exports = CashRegister;
