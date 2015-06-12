var CashRegisterConstants = require('../constants/CashRegisterConstants');
var CashRegisterDispatcher = require('../dispatcher/CashRegisterDispatcher');

var ServerActions = {
    productsLoaded: function(cashRegister){
        var action = {
            name: CashRegisterConstants.PRODUCTS_LOADED,
            cashRegister: cashRegister
        };
        CashRegisterDispatcher.handleProductsLoaded(action);
    }
};

module.exports = ServerActions;