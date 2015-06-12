var EventEmitter = require('events').EventEmitter;
var CashRegisterDispatcher = require('../dispatcher/CashRegisterDispatcher');
var CashRegisterConstants = require('../constants/CashRegisterConstants');
var assign = require('object-assign');

var CashRegister = {
    Bill: [],
    Buttons: [
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
            color: 'darkred',
            height: 1,
            width: 1,
            col: 1,
            row: 1
        },
        {
            productId: 3,
            label: 'broek',
            price: 10,
            color: 'orange',
            height: 1,
            width: 1,
            col: 0,
            row: 2
        },
        {
            productId: 4,
            label: 'schel kaas',
            price: 10,
            color: 'red',
            height: 2,
            width: 2,
            col: 3,
            row: 2
        }
    ]
};

function findByProductId(collection, productId)
{
    return collection.reduce(function(accumulator, currentItem){
        if(accumulator !== null) return accumulator;
        if(currentItem.productId == productId) {  return currentItem; }
        return null;
    }, null);
}

function addProductToBill(productId) {
    var updatedBill = CashRegister.Bill;
    var billItem = findByProductId(updatedBill, productId);

    if(billItem)
    {
        billItem.amount++;
    }
    else
    {
        var product = findByProductId(CashRegister.Buttons, productId);

        billItem = {
            productId: product.productId,
            label: product.label,
            price: product.price,
            amount: 1
        };
        updatedBill.push(billItem);
    }

    CashRegister.Bill = updatedBill;
}

var CashRegisterStore = assign({}, EventEmitter.prototype, {
    getCashRegister: function() {
        return CashRegister;
    },
    emitChange: function() {
        this.emit('change');
    },
    addChangeListener: function(callback) {
        this.on('change', callback);
    },
    dispatcherIndex: CashRegisterDispatcher.register(function(payload){
        var action = payload.action;
        switch (action.name) {
            case CashRegisterConstants.PRODUCT_CLICKED:
                addProductToBill(action.productId);
                break;
        }
        CashRegisterStore.emitChange();
    })
});

module.exports = CashRegisterStore;