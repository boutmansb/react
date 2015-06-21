/*** @jsx React.DOM ***/
var React = require('react');
var Products = require('./Products');
var ProductActions = require('../actions/ProductActions');

function getUnique(array) {
    var uniques = [];
    for(var i = 0; i < array.length; i++)
    {
        if(uniques.indexOf(array[i]) > -1) {
            continue;
        }
        uniques.push(array[i]);
    }

    return uniques;
}

var Controls = React.createClass({
    handleTabClick: function(e){
        ProductActions.handleTabClicked(jQuery(e.target).data('tab') == undefined ? jQuery(e.target).closest('.tab').data('tab') : jQuery(e.target).data('tab'));
    },
    render: function() {
        var distinctTabs = this.props.buttons.map(function(button){
            return button.tab;
        });
        var tabs =  getUnique(distinctTabs).map(function(tab){
            return <div key={tab} className="button tab" data-tab={tab} onClick={this.handleTabClick}><p>{tab}</p></div>
        }, this);

        return (
            <section className="terminal">
                {tabs}
                <Products buttons={this.props.buttons} activeTab={this.props.activeTab} />
            </section>
        );
    }
});

module.exports = Controls;