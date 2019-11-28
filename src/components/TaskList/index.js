import React , {Component} from 'react' ;
import {Box} from '@material-ui/core' ;
import { withStyles } from '@material-ui/styles' ;
import style from './style';
import Grid from '@material-ui/core/Grid';
import TaskItem from './../TaskItem';
class TaskList extends Component {
    render(){
        let {classes,listTask,status} = this.props ;
        return (
            <Grid item md={4} > 
            <Box mt={2} mb={2}>
                <div className={classes.status}>{status.lable}</div>
            </Box>

            <div className={classes.task}>
                {
                   listTask.map((task,index)=>{
                     
                       return (
                           <Box mt={2} mb={2} key={index}>
                               <TaskItem key={task.id} task={task} status={status}/>
                           </Box>
                       )
                   })
                }
            </div>
         </Grid>
        )
    }
}
export default withStyles(style)(TaskList);