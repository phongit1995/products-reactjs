import React,{ Component} from 'react' ;
import {withStyles} from '@material-ui/styles' ;
import styles from './style';
import {TextField} from '@material-ui/core';
class SearchBox extends Component {

    render(){
        let {classes,handelChange} = this.props ;
        return (<form className={classes.root} noValidate autoComplete="off">
        <TextField id="standard-basic" label="Tìm Kiếm" onChange={handelChange} />
      </form>)
    }
}
export default withStyles(styles)(SearchBox)