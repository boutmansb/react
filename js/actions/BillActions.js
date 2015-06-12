var CashRegisterConstants = require('../constants/CashRegisterConstants');
var CashRegisterDispatcher = require('../dispatcher/CashRegisterDispatcher');

var BillActions = {
    handleClearClicked: function(){
        var action = {
            name: CashRegisterConstants.CLEAR_CLICKED
        };
        CashRegisterDispatcher.handleClearClicked(action);
    }
};

module.exports = BillActions;