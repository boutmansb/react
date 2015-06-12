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
            <div className="holder">
                <div className="container">
                    <Bill bill={this.state.Bill} />
                    <Controls buttons={this.state.Buttons} />
                </div>
            </div>
        );
    }
});

module.exports = CashRegister;
