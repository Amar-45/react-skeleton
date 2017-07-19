var React = require('react');
var ListItem = require('./ListItem.jsx');

var ingredients = [{"id":1,"text":"test 1"},{"id":2, "text": "test 2"}, {"id":3, "text":"test 3"}];
var List = React.createClass({
  render :function(){
    var listItems = ingredients.map(function(item){
        return <ListItem key={item.id} ingredient = {item.text} />;
    });

    return (<ul>{listItems}</ul>);
  }
});

module.exports = List;
