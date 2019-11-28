import React , {Component} from 'react';
import { Card } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import EditIcon from '@material-ui/icons/Edit';
import CardContent from '@material-ui/core/CardContent';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles' ;
import style from './style';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
class TaskItem extends Component {
    render(){
        let {task,status,classes}= this.props ;
        return (
            <Card>
                <CardContent>
                    <Grid container justify='space-between'>
                        <Grid item md={8} >
                            <Typography component='h2'>{task.title}</Typography>
                        </Grid>
                        <Grid item md={4} >
                            {
                                status.lable
                            }
                        </Grid>
                    </Grid>
                    <p>{task.content}</p>
                </CardContent>
                <CardActions className={classes.cardaction}>
                    <Fab color="primary" aria-label="add" className={classes.fab} size='small'>
                        <AddIcon />
                    </Fab>
                    <Fab color="secondary" aria-label="edit" className={classes.fab} size='small'>
                        <EditIcon />
                    </Fab>
                </CardActions>
            </Card>
        )
    }
}
export default withStyles(style)(TaskItem);