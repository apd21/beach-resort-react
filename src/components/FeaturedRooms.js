import React from 'react';
import {RoomContext} from '../context';

class FeaturedRooms extends React.Component {
  static contextType = RoomContext
    render() {
      const value = this.context;
      return (
        <div>

        </div>
    );
  }
}

export default FeaturedRooms;
