import React from 'react';
import {Scene,Router,Actions} from  'react-native-router-flux';
import LoginForm from './components/loginform';
import EmployeeList from './components/employeeList';
import EmployeeCreate from './components/employeeCreate';
import EmployeeEdit from './components/employeeEdit';

const RouterComponent=()=>{
    return(
        <Router>
            <Scene key='root' hideNavBar>
                <Scene key='auth'>
                <Scene key='login' component={LoginForm} title='Login/SignUp' initial/>
                </Scene>
                <Scene key='main'>
                <Scene 
                rightTitle='Add'
                onRight={()=>Actions.employeeCreate()}
                key='employeeList' component={EmployeeList} title='Employee List'
                initial
                />
                 <Scene key='employeeCreate' component={EmployeeCreate} title='Employee Add'>
                </Scene>
                <Scene key='employeeEdit' component={EmployeeEdit} title='Employee Edit'>
                </Scene>
                </Scene>
            </Scene>
        </Router>
    );
}

export default RouterComponent;