import React from 'react';
import SidebarChannel from '../sidebar-channel/SidebarChannel';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import CallIcon from '@material-ui/icons/Call';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import MicIcon from '@material-ui/icons/Mic';
import HeadsetIcon from '@material-ui/icons/Headset';
import SettingsIcon from '@material-ui/icons/Settings';
import { Avatar } from '@material-ui/core';
import './Sidebar.css';
function sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h3>Discord</h3>
        <ExpandMoreIcon />
      </div>

      <div className="sidebar__channels">
        <div className="sidebar__channels__header">
          <div className="sidebar__header">
            <ExpandMoreIcon />
            <h4>Channels</h4>
          </div>
          <AddIcon className="sidebar__addChannel"></AddIcon>
        </div>
        <div className="sidebar__channels_list">
          <SidebarChannel />
          <SidebarChannel />
          <SidebarChannel />
          <SidebarChannel />
        </div>
      </div>

      <div className="sidebar__voice">
        <SignalCellularAltIcon
          className="sidebar__voiceIcon"
          fontSize="large"
        />
        <div className="sidebar__voiceInfo">
          <h3>Voice Connected</h3>
          <p>Stream</p>
        </div>

        <div className="sidebar__voiceIcons">
          <InfoOutlinedIcon />
          <CallIcon />
        </div>
      </div>
      <div className="sidebar__profile">
        <Avatar src="https://lh3.googleusercontent.com/ogw/ADGmqu-7y1REP-0nyULN-QGYawAisgwFWL09-4EHAi642A=s32-c-mo" />
        <div className="sidebar__profile__info">
          <h3>UserName</h3>
          <p>#thisIsMyId</p>
        </div>
        <div className="sidebar__profile__icons">
          <MicIcon />
          <HeadsetIcon />
          <SettingsIcon />
        </div>
      </div>
    </div>
  );
}

export default sidebar;
