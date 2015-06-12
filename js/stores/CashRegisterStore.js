var EventEmitter = require('events').EventEmitter;
var CashRegisterDispatcher = require('../dispatcher/CashRegisterDispatcher');
var CashRegisterConstants = require('../constants/CashRegisterConstants');
var ServerActions = require('../actions/ServerActions');
var ProductActions = require('../actions/ProductActions');
var assign = require('object-assign');

var CashRegister = {
    ActiveTab: '',
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

function setActiveTab(tab) {
    jQuery('.tab').removeClass('active');
    jQuery('div[data-tab="' + tab + '"]').addClass('active');
    CashRegister.ActiveTab = tab;
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
            case CashRegisterConstants.TAB_CLICKED:
                setActiveTab(action.tab);
        }
        CashRegisterStore.emitChange();
    })
});

jQuery(document).ready(function(){
    $.ajax({
        url: 'urlToAdminApp',
        success: function(cashRegister) {
            ServerActions.productsLoaded(cashRegister);
            ProductActions.handleTabClicked(cashRegister.Products[0].tab);
        },
        error: function(){
            var cashRegister = {
                ActiveTab: '',
                Bill: [],
                Products: [
                    {
                        productId: 1,
                        label: 'error ophalen producten',
                        price: 404,
                        color: 'red',
                        height: 1,
                        width: 1,
                        col: 0,
                        row: 1,
                        tab: 'default'
                    }
                ]
            };
            ServerActions.productsLoaded(cashRegister);
            ProductActions.handleTabClicked(cashRegister.Products[0].tab);
        }
    });
});

module.exports = CashRegisterStore;