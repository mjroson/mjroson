import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';
import MailIcon from '@material-ui/icons/Mail';
import DeleteIcon from '@material-ui/icons/Delete';
import ReportIcon from '@material-ui/icons/Report';
import SvgIcon from '@material-ui/core/SvgIcon';
import IconButton from '@material-ui/core/IconButton'

export const socialNetworkListItems = (
  <React.Fragment>
    <ListItem button component="a" href="https://www.linkedin.com/in/matiasroson/">
      <ListItemIcon>
        <SvgIcon>
          <path d="M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z" />
        </SvgIcon>
      </ListItemIcon>
      <ListItemText primary="LinkedIn"/>
    </ListItem>
    <ListItem button component="a" href="https://github.com/mjroson">
      <ListItemIcon>
        <SvgIcon>
          <path d="M20.38,8.53C20.54,8.13 21.06,6.54 20.21,4.39C20.21,4.39 18.9,4 15.91,6C14.66,5.67 13.33,5.62 12,5.62C10.68,5.62 9.34,5.67 8.09,6C5.1,3.97 3.79,4.39 3.79,4.39C2.94,6.54 3.46,8.13 3.63,8.53C2.61,9.62 2,11 2,12.72C2,19.16 6.16,20.61 12,20.61C17.79,20.61 22,19.16 22,12.72C22,11 21.39,9.62 20.38,8.53M12,19.38C7.88,19.38 4.53,19.19 4.53,15.19C4.53,14.24 5,13.34 5.8,12.61C7.14,11.38 9.43,12.03 12,12.03C14.59,12.03 16.85,11.38 18.2,12.61C19,13.34 19.5,14.23 19.5,15.19C19.5,19.18 16.13,19.38 12,19.38M8.86,13.12C8.04,13.12 7.36,14.12 7.36,15.34C7.36,16.57 8.04,17.58 8.86,17.58C9.69,17.58 10.36,16.58 10.36,15.34C10.36,14.11 9.69,13.12 8.86,13.12M15.14,13.12C14.31,13.12 13.64,14.11 13.64,15.34C13.64,16.58 14.31,17.58 15.14,17.58C15.96,17.58 16.64,16.58 16.64,15.34C16.64,14.11 16,13.12 15.14,13.12Z" />
        </SvgIcon>
      </ListItemIcon>
      <ListItemText primary="Github"/>
    </ListItem>
    <ListItem button component="a" href="https://bitbucket.org/mjroson/">
      <ListItemIcon>
        <SvgIcon >
          <path d="M21.43,2C21.79,2.07 22.03,2.42 22,2.82L21.12,8.7L19.27,21.4C19.2,21.75 18.95,22 18.63,22H5.37C5.05,22 4.8,21.75 4.73,21.4L2.88,8.7L2,2.82C1.97,2.42 2.21,2.07 2.57,2H21.43M14.08,15.26L15.1,8.7H8.9L9.92,15.26H14.08Z" />
        </SvgIcon>
      </ListItemIcon>
      <ListItemText primary="Bitbucket"/>
    </ListItem>
    <ListItem button component="a" href="mailto:matiroson@gmail.com">
      <ListItemIcon>
        <MailIcon/>
      </ListItemIcon>
      <ListItemText primary="Email"/>
    </ListItem>
  </React.Fragment>
);
