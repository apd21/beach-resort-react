import React from 'react';

const RoomContext = React.createContext();
//<RoomContext.Provider value = {'hello'}

class RoomProvider extends React.Component {
  this.state = {};
  render() {
    return (
      <RoomContext.Provider value = 'hello'>
        {this.props.children}
      </RoomContext.Provider>

    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export {RoomProvider, RoomConsumer, RoomContext};
