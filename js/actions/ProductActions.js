var CashRegisterConstants = require('../constants/CashRegisterConstants');
var CashRegisterDispatcher = require('../dispatcher/CashRegisterDispatcher');

var ProductActions = {
    handleProductClicked: function(productId){
        var action = {
            name: CashRegisterConstants.PRODUCT_CLICKED,
            productId: productId
        };
        CashRegisterDispatcher.handleProductClicked(action);
    }
};

module.exports = ProductActions;