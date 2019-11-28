import React , {Component} from  'react' ;
import { withStyles } from '@material-ui/styles' ;
import styles from './style.js';
import Button from '@material-ui/core/Button' ;
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';
import TaskList from './../../components/TaskList';
import { STATUS } from '../../constants/index.js';
import TaskForm from './../../components/TaskForm';
import { connect } from 'react-redux' ;
import {bindActionCreators} from 'redux';
import SearchBox from './../../components/SearchBox';
import * as TaskAction from './../../actions/tasks';
class TaskBoard extends Component {
    constructor(props){
        super(props);
        this.state={
            openform:false
        }
    }
    componentDidMount(){
        const {taskActionsCreator} = this.props ;
        const {fetchListTask} = taskActionsCreator ;
        fetchListTask();
    }
    onSearch = e =>{
        const {taskActionsCreator} = this.props ;
        const {filterTask} = taskActionsCreator ;
        filterTask(e.target.value);
    }
    render(){
        let {classes} = this.props ;
        return (
            <div className={classes.task}>
                <Button variant="contained" color="primary" className={classes.button}>  <Icon color="primary">add_circle</Icon>Thêm Công Việc</Button>
                {this.renderSearchBox()}
                {this.renderBoard()}
                {this.renderForm()}
            </div>
        )
    }
    renderBoard= ()=>{
        let html = null ;
         html=(<Grid container spacing={3}>
             {
                 STATUS.map((status,index)=>{
                     let listTask = this.props.listTask.filter(item=> item.status===status.value)
                     return (
                        <TaskList listTask={listTask} status={status} key={index}/>
                     )
                 })
             }
            </Grid>)
        return html ;
    }
    renderForm=()=>{
        let {openform} = this.state ;
        return <TaskForm open={openform}/>
    }
    renderSearchBox = ()=>{
        let xhtml = null ;
        xhtml = <SearchBox handelChange={this.onSearch}/>
        return xhtml ;
    }
    
}
const mapStateToProps = state=>{
    return {
        listTask:state.tasks.listTask
    }
}
const mapDishPatchToProps = (dispatch,props)=>{
    return {
        taskActionsCreator:bindActionCreators(TaskAction,dispatch)
    }
}

export default withStyles(styles)(connect(mapStateToProps,mapDishPatchToProps)(TaskBoard));