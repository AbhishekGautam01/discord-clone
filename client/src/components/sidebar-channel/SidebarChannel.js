import React from 'react';
import './SidebarChannel.css';
function SidebarChannel(props) {
  return (
    <div className="sidebarChannel">
      <h4>
        <span className="sidebar__channel__hash">#</span>
        {props.channel.channelName}
      </h4>
    </div>
  );
}

export default SidebarChannel;
