import React ,{Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/styles' ;
import styles from './style.js';
class TaskForm extends Component {
    render(){
        let {open}= this.props ;
        return (
            <div>
            <Dialog open={open} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Thêm Mới Công Việc</DialogTitle>
                <DialogContent>
                <DialogContentText>
                    To subscribe to this website, please enter your email address here. We will send updates
                    occasionally.
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email Address"
                    type="email"
                    fullWidth
                />
                </DialogContent>
                <DialogActions>
                <Button  color="primary">
                    Cancel
                </Button>
                <Button  color="primary">
                    Subscribe
                </Button>
                </DialogActions>
            </Dialog>
            </div>
        )
    }
}
export default withStyles(styles)(TaskForm);
