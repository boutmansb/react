/*** @jsx React.DOM ***/
var React = require('react');
var Bill = require('./Bill');
var Controls = require('./Controls');
var CashRegisterStore = require('../stores/CashRegisterStore');

var CashRegister = React.createClass({
    getInitialState: function(){
        return CashRegisterStore.getCashRegister();
    },
    componentDidMount: function() {
        CashRegisterStore.addChangeListener(this.onStateChange);
    },
    onStateChange: function() {
        this.setState(CashRegisterStore.getCashRegister());
    },
    render: function() {
        return (
            <div className="row">
                <div className="col-md-6"><Bill bill={this.state.Bill} /></div>
                <div className="col-md-6"><Controls buttons={this.state.Buttons} /></div>
            </div>
        );
    }
});

module.exports = CashRegister;
