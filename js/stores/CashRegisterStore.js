var EventEmitter = require('events').EventEmitter;
var CashRegisterDispatcher = require('../dispatcher/CashRegisterDispatcher');
var CashRegisterConstants = require('../constants/CashRegisterConstants');
var ServerActions = require('../actions/ServerActions');
var assign = require('object-assign');

var CashRegister = {
    Bill: [],
    Products: []
};

function loadProducts(cashRegister)
{
    CashRegister.Bill = cashRegister.Bill;
    CashRegister.Products = cashRegister.Products;
}

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
        var product = findByProductId(CashRegister.Products, productId);

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

function clearBill() {
    CashRegister.Bill = [];
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
            case CashRegisterConstants.CLEAR_CLICKED:
                clearBill();
                break;
            case CashRegisterConstants.PRODUCTS_LOADED:
                loadProducts(action.cashRegister);
                break;
        }
        CashRegisterStore.emitChange();
    })
});

jQuery(document).ready(function(){
    $.ajax({
        url: 'urlToAdminApp',
        success: function(cashRegister) {
            ServerActions.productsLoaded(cashRegister);
        }
    });
});

module.exports = CashRegisterStore;