'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var Api = require('../js/App.js');
var PopUpNotification = require('./mods/PopUpNotification.jsx');
var GamesLobby = require('./mods/GamesLobby.jsx');
var pubSub = require('../js/PubSub.js');

// Keeping Default Max participants on any table = 12
var gameSlots = 12;

var GameContainer = React.createClass({
  render: function() {
    return (
      <div className="GameContainer">
        <div id="popUpNotificationContainer">
          <PopUpNotification renderId={'popUpNotificationContainer'} data={this.props.data.message}></PopUpNotification>
        </div>
        <div id="gamesLobbyContainer">
          <GamesLobby renderId="gamesLobbyContainer" maximumSlot={this.props.data.maximumSlot(gameSlots)} data={this.props.data.tables}></GamesLobby>
        </div>
      </div>
    );
  }
});

var GameRenderer = function(data){
  ReactDOM.render(
    <GameContainer data={data}/>,
    document.getElementById('gamesLobby')
  );
}

pubSub.sub("renderUpdate", GameRenderer);

GameRenderer(Api);