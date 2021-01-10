import React from 'react';
import { useDispatch } from 'react-redux';
import { setChannelInfo } from '../../features/appSlice';
import './SidebarChannel.css';
function SidebarChannel(props) {
  const dispatch = useDispatch();
  return (
    <div
      className="sidebarChannel"
      onClick={() =>
        dispatch(
          setChannelInfo({
            id: props.id,
            channelName: props.channel.channelName,
          })
        )
      }
    >
      <h4>
        <span className="sidebar__channel__hash">#</span>
        {props.channel.channelName}
      </h4>
    </div>
  );
}

export default SidebarChannel;
