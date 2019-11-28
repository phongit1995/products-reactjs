import React , {Component}from 'react';
import {ThemeProvider} from '@material-ui/core/styles' ;
import TaskBoard from './containers/TaskBoard';
import {Provider} from 'react-redux';
import configStore from './redux/configStore';
import { toast ,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()
let store = configStore();
class App extends Component {
  render(){
    return (
    <Provider store={store}>
       <ThemeProvider them= {null}>
         <ToastContainer/>
        <TaskBoard></TaskBoard>
      </ThemeProvider>
    </Provider>
     
    );
  }
}

export default App;
