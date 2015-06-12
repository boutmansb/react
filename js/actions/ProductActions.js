var CashRegisterConstants = require('../constants/CashRegisterConstants');
var CashRegisterDispatcher = require('../dispatcher/CashRegisterDispatcher');

var ProductActions = {
    handleProductClicked: function(productId){
        var action = {
            name: CashRegisterConstants.PRODUCT_CLICKED,
            productId: productId
        };
        CashRegisterDispatcher.handleProductClicked(action);
    },
    handleTabClicked: function(tab){
        var action = {
            name: CashRegisterConstants.TAB_CLICKED,
            tab: tab
        };
        CashRegisterDispatcher.handleTabClicked(action);
    }
};

module.exports = ProductActions;