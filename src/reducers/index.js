import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import EmpReducer from './EmpReducer';
import EmployeeReducer from './EmployeeReducer';
export default combineReducers({
    auth: AuthReducer,
    employeeForm:EmpReducer,
    employees:EmployeeReducer,
});