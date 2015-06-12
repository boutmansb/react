var Dispatcher = require('flux').Dispatcher;
var assign = require('object-assign');

var CashRegisterDispatcher = assign(new Dispatcher(), {
    handleProductClicked: function(action){
        this.dispatch({
            source: 'USER_INPUT',
            action: action
        })
    },
    handleClearClicked: function(action){
        this.dispatch({
            source: 'USER_INPUT',
            action: action
        })
    },
    handleProductsLoaded: function(action){
        this.dispatch({
            source: 'USER_INPUT',
            action: action
        })
    }
});

module.exports = CashRegisterDispatcher;