var React = require('react');
var CashRegister = require('./components/CashRegister');
var buttons = [
    {
        productId: 1,
        label: 'schoen',
        price: 10,
        color: 'red',
        height: 1,
        width: 1,
        col: 0,
        row: 1
    },
    {
        productId: 2,
        label: 'sok',
        price: 10,
        color: 'blue',
        height: 1,
        width: 1,
        col: 1,
        row: 1
    },
    {
        productId: 3,
        label: 'broek',
        price: 10,
        color: 'green',
        height: 1,
        width: 1,
        col: 0,
        row: 2
    },
    {
        productId: 4,
        label: 'schel kaas',
        price: 10,
        color: 'yellow',
        height: 2,
        width: 2,
        col: 3,
        row: 2
    }
];

React.render(<CashRegister buttons={buttons} />, document.body);