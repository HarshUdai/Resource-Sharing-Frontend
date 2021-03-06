import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import './Navbar.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root} >
      <AppBar position="static" style={{backgroundColor:'white',color:'black',boxShadow:'none'}}>
        <Toolbar>
          <Typography variant="h6" className={classes.title} >
            <span className="tag-1">Resource Sharing</span>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
// style={{backgroundColor:'#313131',color:'#ececec',boxShadow:'none'}}
// style={{backgroundColor:'#313131',color:'#ececec',boxShadow:'none'}}