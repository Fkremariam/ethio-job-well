import React from 'react';
import TextField from '@material-ui/core/TextField';
import {Dialog,DialogTitle,DialogContent,DialogActions} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import '../App.css';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import { withRouter} from 'react-router-dom';

function PaperComponent(props) {
  return (
    <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));
function Popup(props){
  

  const handleClose = () => {
    setOpenPopup(false);
  };
    const classes = useStyles();
    const {title,children,openPopup,setOpenPopup,history} =props;
    return(
        
        <Dialog open={openPopup}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title">
            <form className={classes.root} Validate>
            <DialogTitle>
                <div classNmae='title'>Login</div>
            </DialogTitle>
            <DialogContent>
                <div className='loginForms'>
                    <div className='userNameLogin'>
                        <label>User name</label>
                        <TextField
                            id="outlined-text-input"
                            label="Text"
                            type="text"
                            autoComplete="current-text"
                            variant="outlined"
                            style={{width:'400px'}}/>
                    </div>
                    <div className='passwordLogin'>
                      <label>Password</label>
                        <TextField
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            variant="outlined"
                            style={{marginLeft:'15px', width:'400px'}}/>
                    </div>
                </div>
            </DialogContent>
            <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary" variant="text">
            Cancel
          </Button>
          <Button onClick={(event)=>{history.push('./');handleClose()}} variant="contained" color="primary">
            Login
          </Button>
          
        </DialogActions>
        </form>
        </Dialog>
    );
}
export default withRouter(Popup);